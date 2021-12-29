import Vue from "vue";
import Vuex from "vuex";
import HotelDataService from "@/services/HotelDataService";
import Hotel from "@/types/HotelType";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLoaded: false,
    hotels: [],
    oneHotel: {},
    query: "All",
    error: {},
  },
  mutations: {
    setHotels(state, value) {
      state.hotels = value;
    },
    setOneHotel(state, value) {
      state.oneHotel = value;
    },
    setQuery(state, value) {
      state.query = value;
    },
    setError(state, value) {
      state.error = value;
    },
    setIsLoaded(state, value) {
      state.isLoaded = value;
    },
  },
  actions: {
    async getHotels({ commit }) {
      commit("setIsLoaded", false);
      try {
        const result = await HotelDataService.getAll();
        commit("setHotels", result.data);
        commit("setIsLoaded", true);
      } catch (err) {
        commit("setError", err);
      }
    },
    async getOneHotel({ commit }, id) {
      commit("setIsLoaded", false);
      try {
        const result = await HotelDataService.getOne(id);
        commit("setOneHotel", result.data);
        commit("setIsLoaded", true);
      } catch (err) {
        commit("setError", err);
      }
    },
  },
  getters: {
    getFilteredHotels(state): Hotel[] {
      const hotels: Hotel[] = state.hotels.filter(
        (e: Hotel): boolean => e.attributes.rarity == Number(state.query)
      );
      if (state.query != "All") return hotels;
      return state.hotels;
    },
  },
  modules: {},
});
