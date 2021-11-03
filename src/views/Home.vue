<template>
  <div class="home-page">
    <h1 class="home-page__mobile-header">Houses</h1>
    <p v-if="isFetching">Loading...</p>
    <article v-else class="home-page__content">
      <header class="home-page__content-header">
        <h2>Houses</h2>
      </header>
      <house-listing-card
        v-for="houseListing in houseListings"
        :key="houseListing.id"
        :houseListing="houseListing"
      />
    </article>
  </div>
</template>

<style>
.home-page__mobile-header {
  text-align: center;
  font-size: 18px;
  margin: 30px;
}

.home-page__content-header {
  display: none;
}

@media screen and (min-width: 768px) {
  .home-page {
    margin-top: 50px;
  }

  .home-page__mobile-header {
    display: none;
  }

  .home-page__content-header {
    display: block;
  }

  .home-page__content-header h2 {
    font-size: 22px;
  }
}
</style>

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
