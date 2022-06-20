<template>
  <div style="" class="nc-text-area-container d-100">
    <div class="d-100 nc-text-area-wrapper pa-1">
      {{ column.meta }}
      <template v-if="isRichText">
        <div ref="editor" class="nc-tiny-mce-editor">
          xsdsds
        </div>
      </template>
      <textarea
        v-else
        ref="textarea"
        v-model="localState"
        class=""
        rows="6"
        v-on="parentListeners"
        @keydown.alt.enter.stop
        @keydown.shift.enter.stop
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'TextAreaCell',
  props: {
    value: String,
    column: Object
  },
  computed: {

    localState: {
      get() {
        return this.value
      },
      set(val) {
        this.$emit('input', val)
      }
    },
    isRichText() {
      return this.column.meta && this.column.meta.richText
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
  created() {
    this.localState = this.value
  },
  async mounted() {
    this.$refs.textarea && this.$refs.textarea.focus()
    if (this.isRichText) {
      await this.initTinymce()
    }
  },
  methods: {
    async initTinymce() {
      const tinymce = (await import('tinymce')).default
      const emailBodyConfig = {
        target: this.$refs.editor,
        menubar: false,
        inline: true,
        plugins: [
          'link',
          'lists',
          'powerpaste',
          'autolink',
          'tinymcespellchecker'
        ],
        toolbar: [
          'undo redo | bold italic underline | fontselect fontsizeselect',
          'forecolor backcolor | alignleft aligncenter alignright alignfull | numlist bullist outdent indent'
        ],
        valid_elements: 'p[style],strong,em,span[style],a[href],ul,ol,li',
        valid_styles: {
          '*': 'font-size,font-family,color,text-decoration,text-align'
        },
        powerpaste_word_import: 'clean',
        powerpaste_html_import: 'clean'
      }

      tinymce.init(emailBodyConfig)
    }
  }
}
</script>

<style scoped>
input, textarea {
  width: 100%;
  min-height: 60px;
  height: 100%;
  color: var(--v-textColor-base);
}

.nc-text-area-container {
  position: relative;
  overflow: visible;
  /* todo: vary based on parent height */
  height: 32px;
  /*height: calc(100% - 0px);*/

}

.nc-text-area-wrapper {
  position: absolute;
  border-radius: 4px;
  border: 2px solid var(--v-primary-base) !important;

  background-color: var(--v-backgroundColorDefault-base);
  height:fit-content;
  left:-6px;
  top:-4px;
  width: max(calc(100% + 12px), 200px);
  z-index:4;
}

.nc-tiny-mce-editor{
  min-width:250px;
  min-height:250px;
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
