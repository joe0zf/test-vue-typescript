<template>
  <v-card>
    <v-img :src="hotel.image" max-height="268" contain></v-img>
    <v-row justify="space-between" align="center">
      <v-col>
        <v-card-title>{{ hotel.name }}</v-card-title>
      </v-col>
      <v-col>
        <v-rating
          :value="hotel.attributes.rarity"
          color="amber"
          half-increments
          readonly
          size="20"
        ></v-rating>
      </v-col>
    </v-row>
    <v-card-text>
      <div>{{ hotel.description }}</div>
    </v-card-text>
    <v-card-text>
      <v-row>
        <v-col>
          <v-list dense subheader>
            <v-subheader>Attributes</v-subheader>
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
              <v-list-item-title>{{
                hotel.attributes.staff
              }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-col>
      </v-row>
    </v-card-text>
    <v-card-actions>
      <v-btn color="teal darken" text @click="goDetail(hotel.id)">
        View more
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Hotel from "@/types/HotelType";
@Component({})
export default class CardHotel extends Vue {
  @Prop() hotel!: Hotel;

  goDetail(id: number): void {
    this.$router.push(`/hotel-detail/${id}`);
  }
}
</script>
