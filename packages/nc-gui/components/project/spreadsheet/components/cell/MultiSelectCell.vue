<template>
  <div>
    <span
      v-for="op in selected"
      :key="op.id"
      :style="{
        background: op ? op.color || '#ccc' : '#ccc'
      }"
      class="set-item ma-1 py-1 px-3"
    >{{ op ? migrate(op.title) || op : '' }}</span>
  </div>
</template>

<script>
export default {
  name: 'MultiSelectCell',
  props: ['value', 'column'],
  computed: {
    selected() {
      if (this.column && this.value) {
        return this.values.map(el => this.column.colOptions?.options.find(opt => el === opt.id ||
        el === this.migrate(opt.title)) || el)
      }
      return []
    },
    values() {
      return this.value ? this.value.split(',') : []
    }
  },
  methods: {
    migrate(val) {
      if (this.column.dt === 'set') {
        if ((typeof val === 'string' || val instanceof String)) {
          return val.replace(/'/g, '')
        }
      }
      return val
    }
  }
}
</script>

<style scoped>

.set-item {
  display: inline-block;
  border-radius: 25px;
  white-space: nowrap;
}
</style>
<!--
/**
 * @copyright Copyright (c) 2021, Xgene Cloud Ltd
 *
 * @author Naveen MR <oof1lab@gmail.com>
 * @author Pranav C Balan <pranavxc@gmail.com>
 *
 * @license GNU AGPL version 3 or any later version
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */
-->
