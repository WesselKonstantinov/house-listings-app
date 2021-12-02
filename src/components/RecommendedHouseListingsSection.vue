<template>
  <aside class="recommendations" v-if="areRecommendedHouseListingsPresent">
    <h2 class="recommendations__heading">Recommended for you</h2>
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
/* || Recommendations section */
.recommendations {
  width: 90%;
  margin: 0 auto;
}

.recommendations__heading {
  font-size: 1.166666rem;
  margin-top: 0;
}

/* || Media queries */
@media screen and (min-width: 768px) {
  .recommendations {
    width: 100%;
  }

  .recommendations__heading {
    font-size: 1.83333rem;
    margin-top: 20px;
  }

  .recommendations .card__price,
  .recommendations .card__location,
  .recommendations .card__unit {
    font-size: 1rem; /* Prevent font size from being set to a larger size  */
  }
}

@media screen and (min-width: 1200px) {
  .recommendations__heading {
    margin-top: 0;
  }
}
</style>
