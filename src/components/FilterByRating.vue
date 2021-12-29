<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h3>Filter By Rarity:</h3>
      </v-col>
      <v-col cols="12">
        <v-select
          dense
          :items="items"
          label="rating"
          v-model="rating"
          @change="filter()"
          solo
        ></v-select>
      </v-col>
    </v-row>
  </v-container>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({})
export default class FilterByRating extends Vue {
  rating? = this.$store.state.query;
  items? = ["All", 1, 2, 3, 4, 5];
  filter(): void {
    //this.$store.dispatch("getFilteredByRarity", this.rating);
    //this.$emit("getDataHotels", this.rating);
    this.$store.commit("setQuery", this.rating);
  }
}
</script>
