<script lang="ts" setup>
import { RightSidebarInj } from '~/context'
import AddRow from './AddRow.vue'
import LockMenu from './LockMenu.vue'
import Reload from './Reload.vue'
import ExportCache from './ExportCache.vue'
import DeleteCache from './DeleteCache.vue'
import DebugMeta from './DebugMeta.vue'
import ToggleDrawer from './ToggleDrawer.vue'

const { isUIAllowed } = useUIPermission()

const debug = $ref(false)

const clickCount = $ref(0)


const sidebarOpen = inject(RightSidebarInj, ref(true))
</script>

<template>
  <div
    class="flex gap-2"
    @click="
      () => {
        clickCount = clickCount + 1
        debug = clickCount >= 4
      }
    "
  >


    <slot name="start" />

    <template v-if="debug">
      <ExportCache />

      <div class="dot" />

      <DeleteCache />

      <div class="dot" />

      <DebugMeta />

      <div class="dot" />
    </template>

    <LockMenu v-if="isUIAllowed('view-type')" @click.stop />

    <div v-if="isUIAllowed('view-type')" class="dot" />

    <Reload @click.stop />

    <div class="dot" />

    <AddRow v-if="isUIAllowed('xcDatatableEditable')" @click.stop />


    <div :class="{'w-[calc(100%_+_32px)] h-[1px] bg-gray-200 mt-1 -ml-4':!sidebarOpen,'dot':sidebarOpen }" />

    <ToggleDrawer />

    <slot name="end" />
  </div>
</template>

<style scoped>
:deep(.nc-toolbar-btn) {
  @apply border-0 !text-xs font-semibold px-2;
}

.dot {
  @apply w-[3px] h-[3px] bg-gray-300 rounded-full;
}
</style>
