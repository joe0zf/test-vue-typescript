<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="10">
        <v-card>
          <card-hotel-detail v-if="$store.state.isLoaded" />
          <v-skeleton-loader
            v-else
            type="card-avatar, article, actions"
          ></v-skeleton-loader>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import CardHotelDetail from "@/components/CardHotelDetail.vue";
@Component({
  components: {
    CardHotelDetail,
  },
})
export default class Home extends Vue {
  getDataOneHotel(): void {
    this.$store.dispatch("getOneHotel", this.$route.params.id);
  }
  mounted(): void {
    this.getDataOneHotel();
  }
}
</script>
