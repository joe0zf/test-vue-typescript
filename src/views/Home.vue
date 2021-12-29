<template>
  <div>
    <v-container v-if="$store.state.isLoaded" class="py-12">
      <v-row justify="center">
        <v-col cols="12" md="4">
          <filter-by-rating />
        </v-col>
      </v-row>
      <v-row>
        <v-col
          cols="12"
          xs="12"
          md="6"
          lg="4"
          xl="3"
          v-for="item in hotels"
          :key="item.id"
        >
          <card-hotel :hotel="item" />
        </v-col>
        <v-col v-if="hotels.length == 0">
          <data-empty />
        </v-col>
      </v-row>
    </v-container>
    <v-sheet v-else color="lighten-4" class="pa-3">
      <v-row>
        <v-col
          cols="12"
          xs="12"
          md="6"
          lg="4"
          xl="3"
          v-for="(item, index) in [1, 2, 3, 4]"
          :key="index"
        >
          <v-skeleton-loader class="mx-auto" type="card"></v-skeleton-loader>
        </v-col>
      </v-row>
    </v-sheet>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import CardHotel from "@/components/CardHotel.vue";
import FilterByRating from "@/components/FilterByRating.vue";
import DataEmpty from "@/components/shared-components/DataEmpty.vue";
import Hotel from "@/types/HotelType";
@Component({
  components: {
    CardHotel,
    FilterByRating,
    DataEmpty,
  },
})
export default class Home extends Vue {
  get hotels(): Hotel[] {
    return this.$store.getters.getFilteredHotels;
  }
  getDataHotels(): void {
    this.$store.dispatch("getHotels");
  }
  mounted(): void {
    this.getDataHotels();
  }
}
</script>
