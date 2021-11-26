import axios from "axios";
import router from "../router/index";
import { createStore } from "vuex";

export default createStore({
  state: {
    houseListings: [],
    searchTerm: "",
    sortOption: "price",
    selectedHouseListingId: null,
    isFetching: false,
    isConfirmDeleteModalVisible: false,
  },
  mutations: {
    setHouseListings(state, { houseListings }) {
      state.houseListings = houseListings;
    },
    setSearchTerm(state, searchTerm) {
      state.searchTerm = searchTerm;
    },
    setSortOption(state, sortOption) {
      state.sortOption = sortOption;
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
    newHouseListing(state, { houseListing }) {
      state.houseListings.unshift(houseListing);
    },
    removeHouseListing(state, id) {
      state.houseListings = state.houseListings.filter(
        (houseListing) => houseListing.id !== id
      );
    },
  },
  getters: {
    sortedHouseListings: (state) =>
      state.houseListings
        .filter(
          (houseListing) =>
            houseListing.location.street
              .toLowerCase()
              .includes(state.searchTerm.toLowerCase()) ||
            houseListing.location.city
              .toLowerCase()
              .includes(state.searchTerm.toLowerCase()) ||
            houseListing.location.zip
              .toLowerCase()
              .includes(state.searchTerm.toLowerCase()) ||
            houseListing.size === Number(state.searchTerm) ||
            houseListing.price === Number(state.searchTerm)
        )
        .sort((a, b) => a[state.sortOption] - b[state.sortOption]),
    sortedHouseListingsCount: (state, getters) =>
      getters.sortedHouseListings.length,
    selectedHouseListing: (state) =>
      state.houseListings.find(
        (houseListing) => houseListing.id === state.selectedHouseListingId
      ),
    recommendedHouseListingsByLocation: (state, getters) =>
      getters.selectedHouseListing
        ? state.houseListings
            .filter(
              (houseListing) =>
                !houseListing.madeByMe &&
                houseListing.id !== getters.selectedHouseListing.id &&
                houseListing.location.city ===
                  getters.selectedHouseListing.location.city
            )
            .slice(0, 3)
        : [],
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
    createHouseListing({ dispatch, commit }, submittedData) {
      axios
        .post(process.env.VUE_APP_API_URL, submittedData, {
          headers: {
            "X-Api-Key": process.env.VUE_APP_API_KEY,
          },
        })
        .then((response) => {
          commit("newHouseListing", { houseListing: response.data });
          commit("setSelectedHouseListing", response.data.id);
          return response.data.id;
        })
        .then((id) => {
          router.push({
            name: "HouseListingDetail",
            params: { id },
          });
          const { image } = submittedData;
          const imageFormData = new FormData();
          imageFormData.append("image", image, image.name);
          return axios.post(
            `${process.env.VUE_APP_API_URL}/${id}/upload`,
            imageFormData,
            {
              headers: {
                "X-Api-Key": process.env.VUE_APP_API_KEY,
              },
            }
          );
        })
        // Gets latest data (including a link to the image) for correct display in detail page
        .then(() => dispatch("getHouseListings"))
        .catch((error) => console.error(error));
    },
    deleteHouseListing({ commit }, houseListingId) {
      axios
        .delete(`${process.env.VUE_APP_API_URL}/${houseListingId}`, {
          headers: {
            "X-Api-Key": process.env.VUE_APP_API_KEY,
          },
        })
        .then(() => {
          commit("removeHouseListing", houseListingId);
          commit("setIsConfirmDeleteModalVisible", false);
        })
        .catch((error) => console.error(error));
    },
  },
  modules: {},
});
