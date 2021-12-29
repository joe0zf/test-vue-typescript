<template>
  <v-app>
    <v-app-bar app color="teal darken-4" dark>
      <v-icon large color="white"> mdi-domain </v-icon>
      <v-toolbar-title class="mx-5">Hotels</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon @click="changeTheme()">
        <v-icon v-if="themeState"> mdi-moon-waning-crescent </v-icon>
        <v-icon v-else> mdi-white-balance-sunny </v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
    <v-footer dark padless>
      <v-card class="flex" flat tile>
        <v-card-text class="py-2 white--text text-center">
          Jhoel — <strong>Vue Test</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "App",

  data: () => ({
    themeState: false,
  }),
  methods: {
    changeTheme() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
      this.themeState = !this.$vuetify.theme.dark;
    },
  },
});
</script>
