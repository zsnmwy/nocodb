<script setup lang="ts">
import { inject, ref } from '#imports'
import { RightSidebarInj } from '~/context'

/** Sidebar visible */
const sidebarOpen = inject(RightSidebarInj, ref(true))
</script>

<template>
  <a-tooltip :placement="sidebarOpen ? 'bottomRight' : 'left'">
    <template #title> Toggle sidebar </template>

    <div class="nc-sidebar-right-item hover:after:bg-primary/75 group nc-sidebar-add-row">
      <MdiChevronDoubleLeft class="cursor-pointer group-hover:(!text-white) transform transition-transform" :class="{'rotate-180':sidebarOpen}" @click="sidebarOpen = !sidebarOpen" />
    </div>
  </a-tooltip>
</template>
