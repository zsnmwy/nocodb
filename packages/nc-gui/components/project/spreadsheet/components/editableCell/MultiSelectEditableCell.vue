<template>
  <div>
    <v-select
      v-model="localState"
      :menu-props="{ bottom: true, offsetY: true }"
      :items="setValues.concat(unsetValues)"
      item-value="id"
      multiple
      chips
      flat
      dense
      solo
      hide-details
      deletable-chips
      class="text-center mt-0 "
    >
      <template #selection="data">
        <v-chip
          :key="data.item.id"
          small
          class="ma-1"
          :color="data.item.color"
          @click:close="data.parent.selectItem(data.item)"
        >
          {{ migrate(data.item.title) }}
        </v-chip>
      </template>

      <template #item="{item}">
        <v-chip small :color="item.color">
          {{ migrate(item.title) }}
        </v-chip>
      </template>
      <template #append>
        <v-icon small class="mt-1">
          mdi-menu-down
        </v-icon>
      </template>
    </v-select>
  </div>
</template>

<script>
export default {
  name: 'MultiSelectEditableCell',
  props: {
    value: String,
    column: Object
  },
  computed: {
    localState: {
      get() {
        return (this.column.dt === 'set')
          ? this.values.map(el => this.setValues.find(opt => el === this.migrate(opt.title)).id)
          : this.values
      },
      set(val) {
        if (this.column.dt === 'set' && val) {
          this.$emit('input',
            this.setValues.filter(el => val.includes(el.id)).map(el => this.migrate(el.title)).join(','))
        } else {
          this.$emit('input', val.join(',') || null)
        }
      }
    },
    unsetValues() {
      if (this.value) {
        const unsetVals = this.value.split(',').filter(el => !this.setValues.find(sv => sv.id === el))
        return unsetVals.map((el) => {
          return { id: el, title: el }
        })
      }
      return []
    },
    setValues() {
      if (this.column && this.column.colOptions?.options) {
        return this.column.colOptions.options
      }
      return []
    },
    values() {
      return this.value ? this.value.split(',') : []
    },
    parentListeners() {
      const $listeners = {}

      if (this.$listeners.blur) {
        $listeners.blur = this.$listeners.blur
      }
      if (this.$listeners.focus) {
        $listeners.focus = this.$listeners.focus
      }

      return $listeners
    }
  },
  mounted() {
    // this.$el.focus();
    // let event;
    // event = document.createEvent('MouseEvents');
    // event.initMouseEvent('mousedown', true, true, window);
    // this.$el.dispatchEvent(event);
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

<style scoped lang="scss">

::v-deep {
  .v-select {
    min-width: 150px;
    .v-select__selections {
      min-height: 38px !important;
    }
  }
  .v-input__slot{
    padding-right: 0 !important;
  }
  .v-input__icon.v-input__icon--clear {
    width: 15px !important;
    .v-icon {
      font-size: 13px !important;
    }
  }
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
