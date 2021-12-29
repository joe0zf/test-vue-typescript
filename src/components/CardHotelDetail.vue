<template>
  <v-card class="my-12">
    <v-row justify="center" class="py-12">
      <v-col cols="12" xs="12" md="10" lg="5" xl="5">
        <div class="text-center">
          <v-img :src="hotel.image" max-width="468" contain></v-img>
        </div>
      </v-col>
      <v-col cols="12" xs="12" md="10" lg="4" xl="4">
        <v-rating
          :value="hotel.attributes.rarity"
          color="amber"
          half-increments
          readonly
          size="30"
        ></v-rating>
        <v-card-title>{{ hotel.name }}</v-card-title>

        <v-card-text>
          <div>{{ hotel.description }}</div>
        </v-card-text>

        <v-list dense subheader>
          <v-list-item>
            <v-list-item-icon>
              <v-icon color="teal"> mdi-domain </v-icon>
            </v-list-item-icon>
            <v-list-item-title>Rooms</v-list-item-title>
            <v-list-item-title class="text-left">
              {{ hotel.attributes.rooms }}
            </v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-icon>
              <v-icon color="teal"> mdi-account-multiple-check </v-icon>
            </v-list-item-icon>
            <v-list-item-title>Staff</v-list-item-title>
            <v-list-item-title>{{ hotel.attributes.staff }}</v-list-item-title>
          </v-list-item>
        </v-list>
        <v-card-actions>
          <v-btn color="teal darken" dark outlined @click="goBack()">
            View list
          </v-btn>
        </v-card-actions>
      </v-col>
    </v-row>
  </v-card>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Hotel from "@/types/HotelType";
@Component({})
export default class CardHotelDetail extends Vue {
  get hotel(): Hotel {
    return this.$store.state.oneHotel;
  }
  goBack(): void {
    window.history.length > 1 ? this.$router.go(-1) : this.$router.push("/");
  }
}
</script>
