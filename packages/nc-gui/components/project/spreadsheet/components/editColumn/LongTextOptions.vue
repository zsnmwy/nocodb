<template>
  <div>
    <div class="nc-long-text-wrapper ui-type">
      <v-checkbox v-model="colMeta.richText" label="Rich Text" />
    </div>
  </div>
</template>

<script>

export default {
  name: 'LongTextOptions',
  props: ['column', 'meta', 'value'],
  data: () => ({
    colMeta: {
      richText: false
    }
  }),
  watch: {
    value() {
      this.colMeta = this.value || {}
    },
    colMeta(v) {
      this.$emit('input', v)
    }
  },
  created() {
    this.colMeta = this.value ? { ...this.value } : { ...this.colMeta }
  }
}
</script>

<style scoped lang="scss">
</style>
