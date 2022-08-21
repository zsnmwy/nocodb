<script lang="ts" setup>

import VueWriter from "vue-writer";

definePageMeta({
  requiresAuth: false
})

</script>

<template>
  <div class="welcome-page nc-welcome-page" style="min-height: 100vh">


    <div>
      <h1 class="text-center mt-8 mb-4 mt-1 mb-0  font-black text-6xl leading-20">
        <span class="text-primary" >NocoDB</span> <br />The Open Source<br />
            NoCode Database
      </h1>
      <template v-if="!loading">
        <p class="grey--text text--darken-1 title normal" v-html="message" />
      </template>

      <a-button
        type="primary"
        class="mt-7 px-10 py-8 font-black title let-us-begin"
        :loading="loading"
      >
        <img src="~/assets/img/icons/512x512-trans.png" width="30" class="mr-4" />
        {{ loading ? 'Loading' : "Let's Begin" }}
      </a-button>
    </div>
    <div>
      <p class="xc--text text--lighten-3 mt-15 mb-3 text-center">Supported Databases</p>
      <div class="d-flex logos justify-center">
        <img src="db/mysql.png.jpg" />
        <img src="db/mssql.png.jpg" />
        <img src="db/postgre.png.jpg" />
        <img src="db/maria.png.jpg" />
        <img src="db/aurora.png" />
        <img src="db/sqlite.svg" />
      </div>
    </div>



    <VueWriter :array="['test','text']" />

  </div>
</template>
