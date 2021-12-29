<template>
  <v-card>
    <div class="text-center">
      <v-row>
        <v-col>
          <v-icon size="150"> mdi-package-variant </v-icon>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <div>No Data</div>
        </v-col>
      </v-row>
    </div>
  </v-card>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({})
export default class DataEmpty extends Vue {}
</script>
