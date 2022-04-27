<template>
  <div>
    <v-menu bottom offset-y>
      <template #activator="{on}">
        <div v-ripple class="pointer nc-hover pa-2 body-1 text-capitalize font-weight-medium d-flex" v-on="on">
          <!--          <v-icon>
            mdi-database-outline
          </v-icon>-->
          <div class="text-truncate ">
            {{ projectName }}
          </div>
          <v-icon small>
            mdi-chevron-down
          </v-icon>
        </div>
      </template>

      <v-list dense class="nc-user-menu">
        <template>
          <v-list-item
            v-t="['c:navbar:user:email']"
            v-ge="['Settings', '']"
            dense
            to="/user/settings"
          >
            <v-list-item-title>
              <v-icon small>
                mdi-at
              </v-icon>&nbsp;
              <span class="font-weight-bold caption">{{
                userEmail
              }}</span>
            </v-list-item-title>
          </v-list-item>

          <v-divider />

          <!-- Copy Auth Token -->
          <!-- "Auth token copied to clipboard" -->
          <v-list-item
            v-if="isDashboard"
            v-t="['a:navbar:user:copy-auth-token']"
            v-clipboard="$store.state.users.token"
            dense
            @click.stop="
              $toast.success($t('msg.toast.authToken')).goAway(3000)
            "
          >
            <v-list-item-title>
              <v-icon key="terminal-dash" small>
                mdi-content-copy
              </v-icon>&nbsp;
              <span class="font-weight-regular caption">{{
                $t("activity.account.authToken")
              }}</span>
            </v-list-item-title>
          </v-list-item>
          <v-list-item
            v-if="isDashboard"
            v-t="['a:navbar:user:swagger']"
            dense
            @click.stop="
              openUrl(swaggerLink)
            "
          >
            <v-list-item-title>
              <v-icon key="terminal-dash" small>
                mdi-code-json
              </v-icon>&nbsp;
              <span class="font-weight-regular caption">
                {{ "Swagger API Doc" }}</span>
            </v-list-item-title>
          </v-list-item>
          <!--                <v-list-item
          v-t="['a:navbar:user:redoc']"
          dense
          @click.stop="
            openUrl(redocLink)
          "
        >
          <v-list-item-title>
            <v-icon key="terminal-dash" small>
              mdi-code-json
            </v-icon>&nbsp;
            <span class="font-weight-regular caption">
              {{ "Redoc API Doc" }}</span>
          </v-list-item-title>
        </v-list-item>-->
          <v-divider />
          <v-list-item
            v-if="isDashboard"
            v-t="['c:navbar:user:copy-proj-info']"
            v-ge="['Sign Out', '']"
            dense
            @click="copyProjectInfo"
          >
            <v-list-item-title>
              <v-icon small>
                mdi-content-copy
              </v-icon>&nbsp;
              <span class="font-weight-regular caption">{{
                $t("activity.account.projInfo")
              }}</span>
            </v-list-item-title>
          </v-list-item>
          <v-divider v-if="isDashboard" />
          <v-list-item
            v-if="isDashboard"
            v-t="['c:navbar:user:themes']"
            dense
            @click.stop="settingsTabAdd"
          >
            <v-list-item-title>
              <v-icon key="terminal-dash" small>
                mdi-palette
              </v-icon>&nbsp;
              <span class="font-weight-regular caption">{{
                $t("activity.account.themes")
              }}</span>
            </v-list-item-title>
          </v-list-item>

          <v-divider v-if="isDashboard" />

          <v-list-item
            v-t="['a:navbar:user:sign-out']"
            v-ge="['Sign Out', '']"
            dense
            @click="MtdSignOut"
          >
            <v-list-item-title>
              <v-icon small>
                mdi-logout
              </v-icon>&nbsp;
              <span class="font-weight-regular caption">{{
                $t("general.signOut")
              }}</span>
            </v-list-item-title>
          </v-list-item>
        </template>
      </v-list>
    </v-menu>
  </div>
</template>

<script>

export default {
  name: 'ProjectMenu'
}
</script>

<style scoped>
</style>
