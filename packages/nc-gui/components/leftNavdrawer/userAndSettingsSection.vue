<template>
  <div class="d-flex ml-4 mr-2 my-4 align-center py-2">
    <v-menu top offset-y>
      <template #activator="{on}">
        <div v-ripple class="mr-2 rounded-pill px-3 mx-n3 d-flex align-center py-1" v-on="on">
          <v-badge color="green" dot offset-y="9" offset-x="9">
            <div class="nc-settings-icon-wrapper">
              <v-icon size="30" class="nc-settings-icon">
                mdi-account
              </v-icon>
            </div>
          </v-badge>
          <v-icon small v-on="on">
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
    <v-spacer />

    <template v-if="_isUIAllowed('settings')">
      <settings-modal>
        <template #default="{ click }">
          <v-icon
            v-t="['c:navdraw:project-settings']"
            class="mr-5 nc-team-settings"
            size="30"
            @click="click"
          >
            mdi-cog-outline
          </v-icon>
        </template>
      </settings-modal>
    </template>

    <div class="nc-thee-switch-wrapper">
      <v-switch
        v-model="darkTheme"
        hide-details
        class="mt-0 pt-0"
        inset
        dense
        color="textColor"
      />
      <v-icon v-if="darkTheme" x-small class="moon-icon icon">
        mdi-moon-waxing-crescent
      </v-icon>
      <v-icon v-else x-small class="sun-icon icon">
        mdi-weather-sunny
      </v-icon>
    </div>
  </div>
</template>

<script>
import SettingsModal from '~/components/settings/settingsModal'

export default {
  name: 'UserAndSettingsSection',
  components: { SettingsModal },
  computed: {
    darkTheme: {
      get() {
        return this.$store.state.windows.darkTheme
      },
      set(dark) {
        this.$store.dispatch(
          'windows/ActToggleDarkMode',
          dark
        )
      }
    }
  }
}
</script>

<style scoped lang="scss">
.nc-thee-switch-wrapper {
  position: relative;

  .icon {
    position: absolute;
    pointer-events: none
  }

  .moon-icon {
    left: 1px;
    top: 0;
    bottom: 2px;
    transform: rotate(30deg);
  }

  .sun-icon {
    right: 20px;
    top: 0;
    bottom: 2px;
  }
}

.nc-settings-icon-wrapper {

  border-radius: 50%;
  overflow: hidden;

  .nc-settings-icon {
    transform: scale(1.2) translateY(3px);
  }
}

::v-deep {
  .theme--light {
    .nc-settings-icon-wrapper {
      border: 1px solid #8884;
    }
  }

  .theme--dark {
    .nc-settings-icon-wrapper {
      border: 1px solid #fff3;
    }
  }
}

</style>
