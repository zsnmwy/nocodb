<template>
  <div v-ripple class="nc-brand pointer d-flex align-center">
    <v-btn
      v-t="['c:navbar:home']"
      to="/projects"
      icon
      class="pa-0 brand-icon nc-noco-brand-icon"
    >
      <v-img :src="logo" max-height="32px" max-width="32px" />
    </v-btn>

    <!--    <span class="title">
      {{ brandName }}</span>-->
    <project-menu style="min-width: 0" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ProjectMenu from '~/components/leftNavdrawer/projectMenu'

export default {
  name: 'HomeIcon',
  components: { ProjectMenu },
  computed: {
    ...mapGetters({
      logo: 'plugins/brandLogo',
      brandName: 'plugins/brandName'
    })
  }
}
</script>

<style scoped>

/deep/ .brand-icon .v-image__image{
  background-color: var(--v-primary-base);
  border-radius: 4px;
}
</style>
