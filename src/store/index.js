import axios from "axios";
import { createStore } from "vuex";

export default createStore({
  state: {
    houseListings: [],
    selectedHouseListingId: null,
    isFetching: false,
    isConfirmDeleteModalVisible: false,
  },
  mutations: {
    setHouseListings(state, { houseListings }) {
      state.houseListings = houseListings;
    },
    setSelectedHouseListing(state, id) {
      state.selectedHouseListingId = id;
    },
    setIsFetching(state, bool) {
      state.isFetching = bool;
    },
    setIsConfirmDeleteModalVisible(state, bool) {
      state.isConfirmDeleteModalVisible = bool;
    },
    setUpdatedHouseListings(state, id) {
      state.houseListings = state.houseListings.filter(
        (houseListing) => houseListing.id !== id
      );
    },
  },
  getters: {
    selectedHouseListing: (state) =>
      state.houseListings.find(
        (houseListing) => houseListing.id === state.selectedHouseListingId
      ),
    recommendedHouseListingsByLocation: (state, getters) =>
      state.houseListings
        .filter(
          (houseListing) =>
            houseListing.location.city ===
              getters.selectedHouseListing.location.city &&
            houseListing.id !== getters.selectedHouseListing.id
        )
        .slice(0, 3),
  },
  actions: {
    getHouseListings({ commit }) {
      commit("setIsFetching", true);
      axios
        .get(process.env.VUE_APP_API_URL, {
          headers: {
            "X-Api-Key": process.env.VUE_APP_API_KEY,
          },
        })
        .then((response) => {
          commit("setIsFetching", false);
          commit("setHouseListings", { houseListings: response.data });
        })
        .catch((error) => {
          commit("setIsFetching", false);
          console.error(error);
        });
    },
    deleteHouseListing({ commit }, houseListingId) {
      axios
        .delete(`${process.env.VUE_APP_API_URL}/${houseListingId}`, {
          headers: {
            "X-Api-Key": process.env.VUE_APP_API_KEY,
          },
        })
        .then(() => {
          commit("setUpdatedHouseListings", houseListingId);
          commit("setIsConfirmDeleteModalVisible");
        })
        .catch((error) => console.error(error));
    },
  },
  modules: {},
});
