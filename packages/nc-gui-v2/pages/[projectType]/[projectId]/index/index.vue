<script setup lang="ts">
import type { TabItem } from '~/composables'
import { TabType } from '~/composables'
import { TabMetaInj, useTabs, useUIPermission } from '#imports'
import MdiAirTableIcon from '~icons/mdi/table-large'
import MdiView from '~icons/mdi/eye-circle-outline'
import MdiAccountGroup from '~icons/mdi/account-group'

const { tabs, activeTabIndex, activeTab, closeTab } = useTabs()

const { isUIAllowed } = useUIPermission()

const tableCreateDialog = ref(false)
const airtableImportDialog = ref(false)
const quickImportDialog = ref(false)
const importType = ref('')
const currentMenu = ref<string[]>(['addORImport'])

provide(TabMetaInj, activeTab)

function openQuickImportDialog(type: string) {
  quickImportDialog.value = true
  importType.value = type
}

const icon = (tab: TabItem) => {
  switch (tab.type) {
    case TabType.TABLE:
      return MdiAirTableIcon
    case TabType.VIEW:
      return MdiView
    case TabType.AUTH:
      return MdiAccountGroup
  }
}

const isSideBarOpen = inject('leftSidebar', false)
const toggleSidebar = inject('toggleLeftSidebar', () => {})
</script>

<template>
  <div class="h-full w-full nc-container">
    <div class="h-full w-full flex flex-col">
      <div class="flex items-end !min-h-[50px] bg-primary/100">
        <!--        <div>
          <a-menu
            v-if="isUIAllowed('addOrImport')"
            v-model:selectedKeys="currentMenu"
            class="border-0 nc-create-import-menu"
            mode="horizontal"
          >
            <a-sub-menu key="addORImport">
              <template #title>
                <div class="text-sm flex items-center gap-2 bg-primary/10 !text-white h-[35px]">
                  <MdiPlusBoxOutline />
                  Add / Import
                  <MdiMenuDown />
                </div>
              </template>

              <a-menu-item-group v-if="isUIAllowed('addTable')">
                <a-menu-item key="add-new-table" v-t="['a:actions:create-table']" @click="tableCreateDialog = true">
                  <span class="flex items-center gap-2">
                    <MdiTable class="text-primary" />
                    &lt;!&ndash; Add new table &ndash;&gt;
                    {{ $t('tooltip.addTable') }}
                  </span>
                </a-menu-item>
              </a-menu-item-group>

              <a-menu-item-group title="QUICK IMPORT FROM">
                <a-menu-item
                  v-if="isUIAllowed('airtableImport')"
                  key="quick-import-airtable"
                  v-t="['a:actions:import-airtable']"
                  @click="airtableImportDialog = true"
                >
                  <span class="flex items-center gap-2">
                    <MdiTableLarge class="text-primary" />
                    &lt;!&ndash; TODO: i18n &ndash;&gt;
                    Airtable
                  </span>
                </a-menu-item>
                <a-menu-item
                  v-if="isUIAllowed('csvImport')"
                  key="quick-import-csv"
                  v-t="['a:actions:import-csv']"
                  @click="openQuickImportDialog('csv')"
                >
                  <span class="flex items-center gap-2">
                    <MdiFileDocumentOutline class="text-primary" />
                    &lt;!&ndash; TODO: i18n &ndash;&gt;
                    CSV file
                  </span>
                </a-menu-item>

                <a-menu-item
                  v-if="isUIAllowed('jsonImport')"
                  key="quick-import-json"
                  v-t="['a:actions:import-json']"
                  @click="openQuickImportDialog('json')"
                >
                  <span class="flex items-center gap-2">
                    <MdiCodeJson class="text-primary" />
                    &lt;!&ndash; TODO: i18n &ndash;&gt;
                    JSON file
                  </span>
                </a-menu-item>

                <a-menu-item
                  v-if="isUIAllowed('excelImport')"
                  key="quick-import-excel"
                  v-t="['a:actions:import-excel']"
                  @click="openQuickImportDialog('excel')"
                >
                  <span class="flex items-center gap-2">
                    <MdiFileExcel class="text-primary" />
                    &lt;!&ndash; TODO: i18n &ndash;&gt;
                    Microsoft Excel
                  </span>
                </a-menu-item>
              </a-menu-item-group>

              <a-menu-divider class="ma-0 mb-2" />

              <a-menu-item
                v-if="isUIAllowed('importRequest')"
                key="add-new-table"
                v-t="['e:datasource:import-request']"
                class="ma-0 mt-3"
              >
                <a href="https://github.com/nocodb/nocodb/issues/2052" target="_blank" class="prose-sm pa-0">
                  <span class="flex items-center gap-2">
                    <MdiOpenInNew class="text-primary" />
                    &lt;!&ndash; TODO: i18n &ndash;&gt;
                    Request a data source you need?
                  </span>
                </a>
              </a-menu-item>
            </a-sub-menu>
          </a-menu>
        </div> -->

        <div
          v-if="!isSideBarOpen"
          class="nc-sidebar-left-toggle-icon hover:after:bg-primary/75 group nc-sidebar-add-row py-2 px-3"
        >
          <MdiMenu
            class="cursor-pointer transform transition-transform duration-500 text-white"
            :class="{ 'rotate-180': !isOpen }"
            @click="toggleSidebar(!isSideBarOpen)"
          />
        </div>

        <a-tabs v-model:activeKey="activeTabIndex" class="nc-root-tabs" type="editable-card" @edit="closeTab(activeTabIndex)">
          <a-tab-pane v-for="(tab, i) in tabs" :key="i">
            <template #tab>
              <div class="flex align-center gap-2">
                <component :is="icon(tab)" class="text-sm"></component>
                {{ tab.title }}
              </div>
            </template>
          </a-tab-pane>
        </a-tabs>
      </div>
      <div class="w-full min-h-[300px] flex-grow">
        <NuxtPage />
      </div>
    </div>

    <DlgTableCreate v-if="tableCreateDialog" v-model="tableCreateDialog" />

    <DlgQuickImport v-if="quickImportDialog" v-model="quickImportDialog" :import-type="importType" />

    <DlgAirtableImport v-if="airtableImportDialog" v-model="airtableImportDialog" />
  </div>
</template>

<style scoped lang="scss">
.nc-container {
  height: 100vh - var(--footer-height);
  flex: 1 1 100%;
}

:deep(.nc-root-tabs) {
  & > .ant-tabs-nav {
    @apply !mb-0 before:(!border-b-0);

    .ant-tabs-extra-content {
      @apply !bg-white/0;
    }

    & > .ant-tabs-nav-wrap > .ant-tabs-nav-list {
      & > .ant-tabs-nav-add {
        @apply !hidden;
      }

      & > .ant-tabs-tab-active {
        @apply font-weight-medium;
      }

      & > .ant-tabs-tab {
        @apply border-0;
      }

      & > .ant-tabs-tab:not(.ant-tabs-tab-active) {
        //@apply bg-gray-100 text-gray-500;
        @apply bg-white/10 text-white/90;
        .ant-tabs-tab-remove {
          @apply !text-white;
        }
      }
    }
  }
}

:deep(.ant-menu-item-selected) {
  @apply text-inherit !bg-inherit;
}

:deep(.ant-menu-horizontal),
:deep(.ant-menu-item::after),
:deep(.ant-menu-submenu::after) {
  @apply !border-none;
}

:deep(.nc-create-import-menu.ant-menu) {
  @apply !bg-white/10 text-white  mr-1 mb-1 !text-xs rounded;
}
</style>
