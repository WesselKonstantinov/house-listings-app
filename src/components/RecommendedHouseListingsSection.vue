<template>
  <aside class="recommendations" v-if="areRecommendedHouseListingsPresent">
    <h3>Recommended for you</h3>
    <house-listing-card
      v-for="houseListing in recommendedHouseListingsByLocation"
      :key="houseListing.id"
      :house-listing="houseListing"
      @click="onChangeHouseListingDetailRoute(houseListing)"
    />
  </aside>
</template>

<script>
import { mapGetters } from "vuex";
import HouseListingCard from "./HouseListingCard.vue";

export default {
  components: { HouseListingCard },
  name: "RecommendedHouseListingsSection",
  computed: {
    ...mapGetters(["recommendedHouseListingsByLocation"]),
    areRecommendedHouseListingsPresent() {
      return this.recommendedHouseListingsByLocation.length !== 0;
    },
  },
  methods: {
    onChangeHouseListingDetailRoute(houseListing) {
      this.$router.push({
        name: "HouseListingDetail",
        params: { id: houseListing.id },
      });
    },
  },
};
</script>

<style>
.recommendations {
  width: 90%;
  margin: 0 auto;
}

.recommendations > h3 {
  font-size: 14px;
  margin-top: 0;
}

@media screen and (min-width: 768px) {
  .recommendations {
    width: 100%;
  }

  .recommendations > h3 {
    font-size: 18px;
    margin-top: 20px;
  }
}

@media screen and (min-width: 1200px) {
  .recommendations > h3 {
    margin-top: 0;
  }
}
</style>
