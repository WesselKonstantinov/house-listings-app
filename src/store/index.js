import axios from "axios";
import { createStore } from "vuex";

export default createStore({
  state: {
    houseListings: [],
    isFetching: false,
  },
  mutations: {
    setHouseListings(state, { houseListings }) {
      state.houseListings = houseListings;
    },
    setIsFetching(state, bool) {
      state.isFetching = bool;
    },
  },
  actions: {
    getHouseListings({ commit }) {
      commit("setIsFetching", true);
      return axios
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
  },
  modules: {},
});
