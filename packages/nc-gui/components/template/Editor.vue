<script setup lang="ts">
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import type { ColumnType, OracleUi, TableType } from 'nocodb-sdk'
import {
  SqlUiFactory,
  UITypes,
  getDateFormat,
  getDateTimeFormat,
  isSystemColumn,
  isVirtualCol,
  parseStringDate,
} from 'nocodb-sdk'
import type { CheckboxChangeEvent } from 'ant-design-vue/es/checkbox/interface'
import { srcDestMappingColumns, tableColumns } from './utils'

interface Props {
  quickImportType: 'csv' | 'excel' | 'json'
  baseTemplate: Record<string, any>
  importData: Record<string, any>
  importColumns: any[]
  importDataOnly: boolean
  maxRowsToParse: number
  baseId: string
  sourceId: string
  importWorker: Worker
}

interface Option {
  label: string
  value: string
}

const {
  quickImportType,
  baseTemplate,
  importData,
  importColumns,
  importDataOnly,
  maxRowsToParse,
  baseId,
  sourceId,
  importWorker,
} = defineProps<Props>()

const emit = defineEmits(['import', 'error', 'change'])

dayjs.extend(utc)

const { t } = useI18n()

const meta = inject(MetaInj, ref())

const columns = computed(() => meta.value?.columns || [])

const reloadHook = inject(ReloadViewDataHookInj, createEventHook())

const useForm = Form.useForm

const { $api } = useNuxtApp()

const { addTab } = useTabs()

const basesStore = useBases()
const { bases } = storeToRefs(basesStore)

const { base: activeBase } = storeToRefs(useBase())

const base = computed(() => bases.value.get(baseId) || activeBase.value)

const tablesStore = useTablesStore()
const { openTable, loadProjectTables } = tablesStore
const { baseTables } = storeToRefs(tablesStore)

const sqlUis = computed(() => {
  const temp: Record<string, any> = {}

  for (const source of base.value.sources ?? []) {
    if (source.id) {
      temp[source.id] = SqlUiFactory.create({ client: source.type }) as Exclude<
        ReturnType<(typeof SqlUiFactory)['create']>,
        typeof OracleUi
      >
    }
  }

  return temp
})

const sqlUi = computed(() => sqlUis.value[sourceId] || Object.values(sqlUis.value)[0])

const hasSelectColumn = ref<boolean[]>([])

const expansionPanel = ref<number[]>([])

const editableTn = ref<boolean[]>([])

const inputRefs = ref<HTMLInputElement[]>([])

const isImporting = ref(false)

const importingTips = ref<Record<string, string>>({})

const checkAllRecord = ref<Record<string, boolean>>({})

const formError = ref()

const uiTypeOptions = ref<Option[]>(
  (Object.keys(UITypes) as (keyof typeof UITypes)[])
    .filter(
      (uiType) =>
        !isVirtualCol(UITypes[uiType]) &&
        ![
          UITypes.ForeignKey,
          UITypes.ID,
          UITypes.CreatedTime,
          UITypes.LastModifiedTime,
          UITypes.CreatedBy,
          UITypes.LastModifiedBy,
          UITypes.Barcode,
          UITypes.Button,
        ].includes(UITypes[uiType]),
    )
    .map<Option>((uiType) => ({
      value: uiType,
      label: uiType,
    })),
)

const srcDestMapping = ref<Record<string, Record<string, any>[]>>({})

const data = reactive<{
  title: string | null
  name: string
  tables: (TableType & { ref_table_name: string; columns: (ColumnType & { key: number; _disableSelect?: boolean })[] })[]
}>({
  title: null,
  name: 'Base Name',
  tables: [],
})

const validators = computed(() =>
  data.tables.reduce<Record<string, [ReturnType<typeof fieldRequiredValidator>]>>((acc: Record<string, any>, table, tableIdx) => {
    acc[`tables.${tableIdx}.table_name`] = [validateTableName]
    hasSelectColumn.value[tableIdx] = false

    table.columns?.forEach((column, columnIdx) => {
      acc[`tables.${tableIdx}.columns.${columnIdx}.title`] = [
        fieldRequiredValidator(),
        fieldLengthValidator(),
        reservedFieldNameValidator(),
      ]
      acc[`tables.${tableIdx}.columns.${columnIdx}.uidt`] = [fieldRequiredValidator()]
      if (isSelect(column)) {
        hasSelectColumn.value[tableIdx] = true
      }
    })

    return acc
  }, {}),
)

const { validate, validateInfos, modelRef } = useForm(data, validators)

const isValid = ref(!importDataOnly)

const formRef = ref()

watch(
  () => srcDestMapping.value,
  () => {
    let res = true
    if (importDataOnly) {
      for (const tn of Object.keys(srcDestMapping.value)) {
        let flag = false
        if (!atLeastOneEnabledValidation(tn)) {
          res = false
        }
        for (const record of srcDestMapping.value[tn]) {
          if (!fieldsValidation(record, tn)) {
            res = false
            flag = true
            break
          }
        }
        if (flag) {
          break
        }
      }
    } else {
      for (const [_, o] of Object.entries(validateInfos)) {
        if (o?.validateStatus) {
          if (o.validateStatus === 'error') {
            res = false
          }
        }
      }
    }
    isValid.value = res
  },
  { deep: true },
)

const prevEditableTn = ref<string[]>([])

onMounted(() => {
  parseAndLoadTemplate()

  // used to record the previous EditableTn values
  // for checking the table duplication in current import
  // and updating the key in importData
  prevEditableTn.value = data.tables.map((t) => t.table_name)

  if (importDataOnly) {
    mapDefaultColumns()
  }

  nextTick(() => {
    inputRefs.value[0]?.focus()
  })
})

function filterOption(input: string, option: Option) {
  return option.value.toUpperCase().includes(input.toUpperCase())
}

function parseAndLoadTemplate() {
  if (baseTemplate) {
    parseTemplate(baseTemplate)

    expansionPanel.value = Array.from({ length: data.tables.length || 0 }, (_, i) => i)

    hasSelectColumn.value = Array.from({ length: data.tables.length || 0 }, () => false)
  }
}

function parseTemplate({ tables = [], ...rest }: Props['baseTemplate']) {
  const parsedTemplate = {
    ...rest,
    tables: tables.map(({ v = [], columns = [], ...rest }) => ({
      ...rest,
      columns: [
        ...columns.map((c: any, idx: number) => {
          if (!importDataOnly && c.column_name?.toLowerCase() === 'id') {
            const cn = populateUniqueColumnName('id', [], columns)
            c.column_name = cn
          }
          c.key = idx
          return c
        }),
        ...v.map((v: any) => ({
          column_name: v.title,
          table_name: {
            ...v,
          },
        })),
      ],
    })),
  }

  Object.assign(data, parsedTemplate)
}

function isSelect(col: ColumnType) {
  return col.uidt === 'MultiSelect' || col.uidt === 'SingleSelect'
}

function deleteTable(tableIdx: number) {
  data.tables.splice(tableIdx, 1)
}

function deleteTableColumn(tableIdx: number, columnKey: number) {
  const columnIdx = data.tables[tableIdx].columns.findIndex((c: ColumnType & { key: number }) => c.key === columnKey)
  data.tables[tableIdx].columns.splice(columnIdx, 1)
  let key = 0

  data.tables[tableIdx].columns.forEach((_c: ColumnType & { key: number }, i: number) => {
    if (data.tables[tableIdx].columns[i].key !== undefined) {
      data.tables[tableIdx].columns[i].key = key
      key++
    }
  })
}

function setEditableTn(tableIdx: number, val: boolean) {
  editableTn.value[tableIdx] = val
}

function remapColNames(batchData: any[], columns: ColumnType[]) {
  const dateFormatMap: Record<number, string> = {}
  return batchData.map((data) =>
    (columns || []).reduce((aggObj, col: Record<string, any>) => {
      // we renaming existing id column and using our own auto increment id
      if (col.uidt === UITypes.ID) return aggObj

      // for excel & json, if the column name is changed in TemplateEditor,
      // then only col.column_name exists in data, else col.ref_column_name
      // for csv, col.column_name always exists in data
      // since it streams the data in getData() with the updated col.column_name
      const key = col.title in data ? col.title : col.ref_column_name
      let d = data[key]
      if (col.uidt === UITypes.Date && d) {
        let dateFormat
        if (col?.meta?.date_format) {
          dateFormat = col.meta.date_format
          dateFormatMap[col.key] = dateFormat
        } else if (col.key in dateFormatMap) {
          dateFormat = dateFormatMap[col.key]
        } else {
          dateFormat = getDateFormat(d)
          dateFormatMap[col.key] = dateFormat
        }
        d = parseStringDate(d, dateFormat)
      } else if (col.uidt === UITypes.DateTime && d) {
        const dateTimeFormat = getDateTimeFormat(data[key])
        d = dayjs(data[key], dateTimeFormat).format('YYYY-MM-DD HH:mm')
      }
      return {
        ...aggObj,
        [col.title]: d,
      }
    }, {}),
  )
}

function missingRequiredColumnsValidation(tn: string) {
  const missingRequiredColumns = columns.value.filter(
    (c: Record<string, any>) =>
      (c.pk ? !c.ai && !c.cdf && !c.meta?.ag : !c.cdf && c.rqd) &&
      !srcDestMapping.value[tn].some((r: Record<string, any>) => r.destCn === c.title),
  )

  if (missingRequiredColumns.length) {
    message.error(`${t('msg.error.columnsRequired')} : ${missingRequiredColumns.map((c) => c.title).join(', ')}`)
    return false
  }

  return true
}

function atLeastOneEnabledValidation(tn: string) {
  if (srcDestMapping.value[tn].filter((v: Record<string, any>) => v.enabled === true).length === 0) {
    message.error(t('msg.error.selectAtleastOneColumn'))
    return false
  }
  return true
}

function fieldsValidation(record: Record<string, any>, tn: string) {
  // if it is not selected, then pass validation
  if (!record.enabled) {
    return true
  }

  if (!record.destCn) {
    message.error(`${t('msg.error.columnDescriptionNotFound')} ${record.srcCn}`)
    return false
  }

  if (srcDestMapping.value[tn].filter((v: Record<string, any>) => v.destCn === record.destCn).length > 1) {
    message.error(t('msg.error.duplicateMappingFound'))
    return false
  }

  const v = columns.value.find((c) => c.title === record.destCn) as Record<string, any>

  for (const tableName of Object.keys(importData)) {
    // check if the input contains null value for a required column
    if (v.pk ? !v.ai && !v.cdf : !v.cdf && v.rqd) {
      if (
        importData[tableName]
          .slice(0, maxRowsToParse)
          .some((r: Record<string, any>) => r[record.srcCn] === null || r[record.srcCn] === undefined || r[record.srcCn] === '')
      ) {
        message.error(t('msg.error.nullValueViolatesNotNull'))
      }
    }

    switch (v.uidt) {
      case UITypes.Number:
        if (
          importData[tableName]
            .slice(0, maxRowsToParse)
            .some(
              (r: Record<string, any>) => r[record.sourceCn] !== null && r[record.srcCn] !== undefined && isNaN(+r[record.srcCn]),
            )
        ) {
          message.error(t('msg.error.sourceHasInvalidNumbers'))
          return false
        }

        break
      case UITypes.Checkbox:
        if (
          importData[tableName].slice(0, maxRowsToParse).some((r: Record<string, any>) => {
            if (r[record.srcCn] !== null && r[record.srcCn] !== undefined) {
              let input = r[record.srcCn]
              if (typeof input === 'string') {
                input = input.replace(/["']/g, '').toLowerCase().trim()
                return !(
                  input === 'false' ||
                  input === 'no' ||
                  input === 'n' ||
                  input === '0' ||
                  input === 'true' ||
                  input === 'yes' ||
                  input === 'y' ||
                  input === '1'
                )
              }

              return input !== 1 && input !== 0 && input !== true && input !== false
            }
            return false
          })
        ) {
          message.error(t('msg.error.sourceHasInvalidBoolean'))
          return false
        }
        break
    }
  }
  return true
}

function updateImportTips(baseName: string, tableName: string, progress: number, total: number) {
  importingTips.value[`${baseName}-${tableName}`] = `Importing data to ${baseName} - ${tableName}: ${progress}/${total} records`
}

async function importTemplate() {
  if (importDataOnly) {
    for (const table of data.tables) {
      // validate required columns
      if (!missingRequiredColumnsValidation(table.table_name)) return

      // validate at least one column needs to be selected
      if (!atLeastOneEnabledValidation(table.table_name)) return
    }

    try {
      isImporting.value = true

      const tableId = meta.value?.id
      const baseId = base.value.id!
      const table_names = data.tables.map((t: Record<string, any>) => t.table_name)

      await Promise.all(
        Object.keys(importData).map((key: string) =>
          (async (k) => {
            if (!table_names.includes(k)) {
              return
            }
            const data = importData[k]
            const total = data.length

            for (let i = 0, progress = 0; i < total; i += maxRowsToParse) {
              const batchData = data.slice(i, i + maxRowsToParse).map((row: Record<string, any>) =>
                srcDestMapping.value[k].reduce((res: Record<string, any>, col: Record<string, any>) => {
                  if (col.enabled && col.destCn) {
                    const v = columns.value.find((c: Record<string, any>) => c.title === col.destCn) as Record<string, any>
                    let input = row[col.srcCn]
                    // parse potential boolean values
                    if (v.uidt === UITypes.Checkbox) {
                      input = input ? input.replace(/["']/g, '').toLowerCase().trim() : 'false'
                      if (input === 'false' || input === 'no' || input === 'n') {
                        input = '0'
                      } else if (input === 'true' || input === 'yes' || input === 'y') {
                        input = '1'
                      }
                    } else if (v.uidt === UITypes.Number) {
                      if (input === '') {
                        input = null
                      }
                    } else if (v.uidt === UITypes.SingleSelect || v.uidt === UITypes.MultiSelect) {
                      if (input === '') {
                        input = null
                      }
                    } else if (v.uidt === UITypes.Date) {
                      if (input) {
                        input = parseStringDate(input, v.meta.date_format)
                      }
                    }
                    res[col.destCn] = input
                  }
                  return res
                }, {}),
              )
              await $api.dbTableRow.bulkCreate('noco', baseId, tableId!, batchData)
              updateImportTips(baseId, tableId!, progress, total)
              progress += batchData.length
            }
          })(key),
        ),
      )

      // reload table
      reloadHook.trigger()

      // Successfully imported table data
      message.success(t('msg.success.tableDataImported'))
    } catch (e: any) {
      message.error(await extractSdkResponseErrorMsg(e))
    } finally {
      isImporting.value = false
    }
  } else {
    // check if form is valid
    try {
      await validate()
    } catch (errorInfo) {
      isImporting.value = false
      throw new Error('Please fill all the required values')
    }

    try {
      isImporting.value = true
      // tab info to be used to show the tab after successful import
      const tab = {
        id: '',
        title: '',
        baseId: '',
      }

      // create tables
      for (const table of data.tables) {
        // enrich system fields if not provided
        // e.g. id, created_at, updated_at
        const systemColumns = sqlUi?.value.getNewTableColumns().filter((c: ColumnType) => c.column_name !== 'title')
        for (const systemColumn of systemColumns) {
          if (!table.columns?.some((c) => c.column_name?.toLowerCase() === systemColumn.column_name.toLowerCase())) {
            table.columns?.push(systemColumn)
          }
        }

        if (table.columns) {
          for (const column of table.columns) {
            // set pk & rqd if ID is provided
            if (column.column_name?.toLowerCase() === 'id' && !('pk' in column)) {
              column.pk = true
              column.rqd = true
            }
            if (
              (!isSystemColumn(column) || ['created_at', 'updated_at'].includes(column.column_name!)) &&
              column.uidt !== UITypes.SingleSelect &&
              column.uidt !== UITypes.MultiSelect
            ) {
              // delete dtxp if the final data type is not single & multi select
              // e.g. import -> detect as single / multi select -> switch to SingleLineText
              // the correct dtxp will be generated during column creation
              delete column.dtxp
            }
          }
        }
        const createdTable = await $api.source.tableCreate(base.value?.id as string, (sourceId || base.value?.sources?.[0].id)!, {
          table_name: table.table_name,
          // leave title empty to get a generated one based on table_name
          title: '',
          columns: table.columns || [],
        })

        if (process.env.NC_SANITIZE_COLUMN_NAME !== 'false') {
          // column_name could have been updated in tableCreate
          // e.g. sanitize column name to something like field_1, field_2, and etc
          createdTable.columns.forEach((column, i) => {
            table.columns[i].column_name = column.column_name
          })
        }

        table.id = createdTable.id
        table.title = createdTable.title

        // open the first table after import
        if (tab.id === '' && tab.title === '' && tab.baseId === '') {
          tab.id = createdTable.id as string
          tab.title = createdTable.title as string
          tab.baseId = base.value.id as string
        }

        // set display value
        if (createdTable?.columns?.[0]?.id) {
          await $api.dbTableColumn.primaryColumnSet(createdTable.columns[0].id as string)
        }
      }

      // bulk insert data
      if (importData) {
        const offset = maxRowsToParse
        const baseName = base.value.title as string
        await Promise.all(
          data.tables.map((table: Record<string, any>) =>
            (async (tableMeta) => {
              let progress = 0
              let total = 0
              // use ref_table_name here instead of table_name
              // since importData[talbeMeta.table_name] would be empty after renaming
              const data = importData[tableMeta.ref_table_name]
              if (data) {
                total += data.length
                for (let i = 0; i < data.length; i += offset) {
                  updateImportTips(baseName, tableMeta.title, progress, total)
                  const batchData = remapColNames(data.slice(i, i + offset), tableMeta.columns)
                  await $api.dbTableRow.bulkCreate('noco', base.value.id, tableMeta.id, batchData)
                  progress += batchData.length
                }
                updateImportTips(baseName, tableMeta.title, total, total)
              }
            })(table),
          ),
        )
      }
      // reload table list
      await loadProjectTables(base.value.id, true)

      addTab({
        ...tab,
        type: TabType.TABLE,
      })
    } catch (e: any) {
      message.error(await extractSdkResponseErrorMsg(e))
    } finally {
      isImporting.value = false
    }
  }

  if (!data.tables?.length) return

  const tables = baseTables.value.get(base.value!.id!)
  const toBeNavigatedTable = tables?.find((t) => t.id === data.tables[0].id)
  if (!toBeNavigatedTable) return

  openTable(toBeNavigatedTable)
}

function mapDefaultColumns() {
  srcDestMapping.value = {}
  for (let i = 0; i < data.tables.length; i++) {
    for (const col of importColumns[i]) {
      const o = { srcCn: col.column_name, srcTitle: col.title, destCn: '', enabled: true }
      if (columns.value) {
        const tableColumn = columns.value.find((c) => c.column_name === col.column_name)
        if (tableColumn) {
          o.destCn = tableColumn.title as string
        } else {
          o.enabled = false
        }
      }
      if (!(data.tables[i].table_name in srcDestMapping.value)) {
        srcDestMapping.value[data.tables[i].table_name] = []
      }
      srcDestMapping.value[data.tables[i].table_name].push(o)
    }
  }
}

defineExpose({
  importTemplate,
  isValid,
})

function handleEditableTnChange(idx: number) {
  const oldValue = prevEditableTn.value[idx]
  const newValue = data.tables[idx].table_name
  if (data.tables.filter((t) => t.table_name === newValue).length > 1) {
    message.warn('Duplicate Table Name')
    data.tables[idx].table_name = oldValue
  } else {
    prevEditableTn.value[idx] = newValue
  }
  setEditableTn(idx, false)
}

function isSelectDisabled(uidt: string, disableSelect = false) {
  return (uidt === UITypes.SingleSelect || uidt === UITypes.MultiSelect) && disableSelect
}

function handleCheckAllRecord(event: CheckboxChangeEvent, tableName: string) {
  const isChecked = event.target.checked
  for (const record of srcDestMapping.value[tableName]) {
    record.enabled = isChecked
  }
}

function handleUIDTChange(column, table) {
  if (!importWorker) return

  const handler = (e) => {
    const [type, payload] = e.data
    switch (type) {
      case ImportWorkerResponse.SINGLE_SELECT_OPTIONS:
      case ImportWorkerResponse.MULTI_SELECT_OPTIONS:
        importWorker.removeEventListener('message', handler, false)
        column.dtxp = payload
        break
    }
  }

  if (column.uidt === UITypes.SingleSelect) {
    importWorker.addEventListener('message', handler, false)
    importWorker.postMessage([
      ImportWorkerOperations.GET_SINGLE_SELECT_OPTIONS,
      {
        tableName: table.ref_table_name,
        columnName: column.ref_column_name,
      },
    ])
  } else if (column.uidt === UITypes.MultiSelect) {
    importWorker.addEventListener('message', handler, false)
    importWorker.postMessage([
      ImportWorkerOperations.GET_MULTI_SELECT_OPTIONS,
      {
        tableName: table.ref_table_name,
        columnName: column.ref_column_name,
      },
    ])
  }
}

const setErrorState = (errorsFields: any[]) => {
  const errorMap: any = {}
  for (const error of errorsFields) {
    errorMap[error.name] = error.errors
  }

  formError.value = errorMap
}

function populateUniqueColumnName(cn: string, draftCn: string[] = [], columns: ColumnType[]) {
  let c = 2
  let columnName = `${cn}${1}`
  while (
    draftCn.includes(columnName) ||
    columns?.some((c) => {
      return c.column_name === columnName || c.title === columnName
    })
  ) {
    columnName = `${cn}${c++}`
  }
  return columnName
}

watch(formRef, () => {
  setTimeout(async () => {
    try {
      await validate()
      emit('change')
      formError.value = null
    } catch (e: any) {
      emit('error', e)
      setErrorState(e.errorFields)
    }
  }, 500)
})

watch(modelRef, async () => {
  try {
    await validate()
    emit('change')
    formError.value = null
  } catch (e: any) {
    emit('error', e)
    setErrorState(e.errorFields)
  }
})
</script>

<template>
  <a-spin :spinning="isImporting" size="large">
    <template #tip>
      <p v-for="(importingTip, idx) of importingTips" :key="idx" class="mt-[10px]">
        {{ importingTip }}
      </p>
    </template>
    <a-card v-if="importDataOnly">
      <a-form :model="data" name="import-only">
        <p v-if="data.tables && quickImportType === 'excel'" class="text-center">
          {{ data.tables.length }} sheet{{ data.tables.length > 1 ? 's' : '' }}
          available for import
        </p>
      </a-form>

      <a-collapse v-if="data.tables && data.tables.length" v-model:activeKey="expansionPanel" class="template-collapse" accordion>
        <a-collapse-panel v-for="(table, tableIdx) of data.tables" :key="tableIdx">
          <template #header>
            <span class="font-weight-bold text-lg flex items-center gap-2 truncate">
              <component :is="iconMap.table" class="text-primary" />
              {{ table.table_name }}
            </span>
          </template>

          <template #extra>
            <NcTooltip bottom class="inline-block">
              <template #title>
                <span>{{ $t('activity.deleteTable') }}</span>
              </template>
              <component
                :is="iconMap.delete"
                v-if="data.tables.length > 1"
                class="text-lg mr-8"
                @click.stop="deleteTable(tableIdx)"
              />
            </NcTooltip>
          </template>

          <a-table
            v-if="srcDestMapping"
            class="template-form"
            row-class-name="template-form-row"
            :data-source="srcDestMapping[table.table_name]"
            :columns="srcDestMappingColumns"
            :pagination="false"
          >
            <template #emptyText>
              <a-empty :image="Empty.PRESENTED_IMAGE_SIMPLE" :description="$t('labels.noData')" />
            </template>
            <template #headerCell="{ column }">
              <span v-if="column.key === 'source_column' || column.key === 'destination_column'">
                {{ column.name }}
              </span>
              <span v-if="column.key === 'action'">
                <a-checkbox
                  v-model:checked="checkAllRecord[table.table_name]"
                  @change="handleCheckAllRecord($event, table.table_name)"
                />
              </span>
            </template>

            <template #bodyCell="{ column, record }">
              <template v-if="column.key === 'source_column'">
                <NcTooltip class="truncate inline-block">
                  <template #title>{{ record.srcTitle }}</template>
                  {{ record.srcTitle }}
                </NcTooltip>
              </template>

              <template v-else-if="column.key === 'destination_column'">
                <a-select
                  v-model:value="record.destCn"
                  class="w-52"
                  show-search
                  :filter-option="filterOption"
                  dropdown-class-name="nc-dropdown-filter-field"
                >
                  <template #suffixIcon>
                    <GeneralIcon icon="arrowDown" class="text-current" />
                  </template>
                  <a-select-option v-for="(col, i) of columns" :key="i" :value="col.title">
                    <div class="flex items-center gap-2">
                      <component :is="getUIDTIcon(col.uidt)" class="w-3.5 h-3.5" />
                      <span>{{ col.title }}</span>
                    </div>
                  </a-select-option>
                </a-select>
              </template>

              <template v-if="column.key === 'action'">
                <a-checkbox v-model:checked="record.enabled" />
              </template>
            </template>
          </a-table>
        </a-collapse-panel>
      </a-collapse>
    </a-card>

    <a-card v-else>
      <a-form ref="formRef" :model="data" name="template-editor-form" @keydown.enter="emit('import')">
        <p v-if="data.tables && quickImportType === 'excel'" class="text-center">
          {{ data.tables.length }} sheet{{ data.tables.length > 1 ? 's' : '' }}
          available for import
        </p>

        <a-collapse
          v-if="data.tables && data.tables.length"
          v-model:activeKey="expansionPanel"
          class="template-collapse"
          accordion
        >
          <a-collapse-panel v-for="(table, tableIdx) of data.tables" :key="tableIdx">
            <template #header>
              <a-form-item v-bind="validateInfos[`tables.${tableIdx}.table_name`]" no-style>
                <div class="flex flex-col w-full mr-2">
                  <a-input
                    v-model:value="table.table_name"
                    class="font-weight-bold text-lg !rounded-md"
                    size="large"
                    hide-details
                    :bordered="true"
                    @click.stop
                    @blur="handleEditableTnChange(tableIdx)"
                    @keydown.enter="handleEditableTnChange(tableIdx)"
                    @dblclick="setEditableTn(tableIdx, true)"
                  />
                  <div v-if="formError?.[`tables.${tableIdx}.table_name`]" class="text-red-500 ml-3">
                    {{ formError?.[`tables.${tableIdx}.table_name`].join('\n') }}
                  </div>
                </div>
              </a-form-item>
            </template>

            <template #extra>
              <NcTooltip bottom class="inline-block mr-8">
                <template #title>
                  <span>{{ $t('activity.deleteTable') }}</span>
                </template>
                <component
                  :is="iconMap.deleteListItem"
                  v-if="data.tables.length > 1"
                  class="text-lg"
                  @click.stop="deleteTable(tableIdx)"
                />
              </NcTooltip>
            </template>
            <a-table
              v-if="table.columns && table.columns.length"
              class="template-form"
              row-class-name="template-form-row"
              :data-source="table.columns"
              :columns="tableColumns"
              :pagination="table.columns.length > 50 ? { defaultPageSize: 50, position: ['bottomCenter'] } : false"
            >
              <template #emptyText>
                <a-empty :image="Empty.PRESENTED_IMAGE_SIMPLE" :description="$t('labels.noData')" />
              </template>

              <template #headerCell="{ column }">
                <template v-if="column.key === 'column_name'">
                  <span>
                    {{ $t('labels.columnName') }}
                  </span>
                </template>

                <template v-else-if="column.key === 'uidt'">
                  <span>
                    {{ $t('labels.columnType') }}
                  </span>
                </template>

                <template v-else-if="column.key === 'dtxp' && hasSelectColumn[tableIdx]">
                  <span>
                    {{ $t('general.options') }}
                  </span>
                </template>
              </template>

              <template #bodyCell="{ column, record }">
                <template v-if="column.key === 'column_name'">
                  <a-form-item
                    v-bind="validateInfos[`tables.${tableIdx}.columns.${record.key}.title`]"
                    class="nc-table-field-name"
                  >
                    <a-input
                      :ref="(el: HTMLInputElement) => (inputRefs[record.key] = el)"
                      v-model:value="record.title"
                      class="!rounded-md"
                    >
                      <template #suffix>
                        <NcTooltip v-if="formError?.[`tables.${tableIdx}.columns.${record.key}.title`]" class="flex">
                          <template #title
                            >{{ formError?.[`tables.${tableIdx}.columns.${record.key}.title`].join('\n') }}
                          </template>
                          <GeneralIcon icon="info" class="h-4 w-4 text-red-500 flex-none" />
                        </NcTooltip>
                      </template>
                    </a-input>
                  </a-form-item>
                </template>

                <template v-else-if="column.key === 'uidt'">
                  <a-form-item v-bind="validateInfos[`tables.${tableIdx}.columns.${record.key}.uidt`]">
                    <NcTooltip :disabled="importDataOnly">
                      <template #title>
                        {{ $t('tooltip.useFieldEditMenuToConfigFieldType') }}
                      </template>
                      <a-select
                        v-model:value="record.uidt"
                        class="w-52"
                        show-search
                        :filter-option="filterOption"
                        dropdown-class-name="nc-dropdown-template-uidt"
                        :disabled="!importDataOnly"
                        @change="handleUIDTChange(record, table)"
                      >
                        <template #suffixIcon>
                          <GeneralIcon icon="arrowDown" class="text-current" />
                        </template>

                        <a-select-option v-for="(option, i) of uiTypeOptions" :key="i" :value="option.value">
                          <div class="flex items-center gap-2">
                            <component :is="getUIDTIcon(UITypes[option.value])" class="h-3.5 w-3.5" />
                            <NcTooltip placement="right" :disabled="!importDataOnly" show-on-truncate-only>
                              <template v-if="isSelectDisabled(option.label, table.columns[record.key]?._disableSelect)" #title>
                                {{
                                  $t('msg.tooLargeFieldEntity', {
                                    entity: option.label,
                                  })
                                }}
                              </template>
                              {{ option.label }}
                            </NcTooltip>
                          </div>
                        </a-select-option>
                      </a-select>
                    </NcTooltip>
                  </a-form-item>
                </template>

                <template v-if="column.key === 'action'">
                  <NcTooltip class="inline-block">
                    <template #title>
                      <span>{{ $t('activity.column.delete') }}</span>
                    </template>

                    <NcButton
                      type="text"
                      size="small"
                      :disabled="table.columns.length === 1"
                      @click="deleteTableColumn(tableIdx, record.key)"
                    >
                      <component :is="iconMap.deleteListItem" />
                    </NcButton>
                  </NcTooltip>
                </template>
              </template>
            </a-table>
          </a-collapse-panel>
        </a-collapse>
      </a-form>
    </a-card>
  </a-spin>
</template>

<style scoped lang="scss">
.template-collapse {
  @apply bg-white;
}

.template-form {
  :deep(.ant-table-thead) > tr > th {
    @apply bg-white;
  }

  :deep(.template-form-row) > td {
    @apply p-1 mb-0 truncate max-w-50;
    .ant-form-item {
      @apply mb-0;
    }
  }
}

:deep(.ant-collapse-header) {
  @apply !items-center;
  & > div {
    @apply flex;
  }
}
.nc-table-field-name {
  :deep(.ant-form-item-explain) {
    @apply hidden;
  }
}
</style>
