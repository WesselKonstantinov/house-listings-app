<template>
  <div class="home">
    <h1>Houses</h1>
    <div v-if="isFetching">Loading...</div>
    <div v-else>
      <house-listing-card
        v-for="houseListing in houseListings"
        :key="houseListing.id"
        :houseListing="houseListing"
      />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import HouseListingCard from "../components/HouseListingCard.vue";

export default {
  components: { HouseListingCard },
  name: "Home",
  computed: {
    ...mapState(["isFetching", "houseListings"]),
  },
};
</script>
