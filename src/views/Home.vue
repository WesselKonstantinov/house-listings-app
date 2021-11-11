<template>
  <div class="home-page">
    <h1 class="home-page__mobile-header">Houses</h1>
    <p v-if="isFetching">Loading...</p>
    <article v-else class="home-page__content">
      <header class="home-page__content-header">
        <h2>Houses</h2>
      </header>
      <div class="home-page__content-tools">
        <search-bar v-model="searchTerm" />
        <sort-button-toolbar />
      </div>
      <h3 v-if="searchTerm && houseListingsByLocationCount !== 0">
        {{ houseListingsByLocationCount }} results found
      </h3>
      <no-results-found
        v-else-if="searchTerm && houseListingsByLocationCount === 0"
      />
      <house-listing-card
        v-for="houseListing in houseListingsByLocation"
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

  .home-page__content-tools {
    display: flex;
    justify-content: space-between;
  }
}
</style>

<script>
import { mapState } from "vuex";
import SortButtonToolbar from "../components/SortButtonToolbar.vue";
import HouseListingCard from "../components/HouseListingCard.vue";
import NoResultsFound from "../components/NoResultsFound.vue";
import SearchBar from "../components/SearchBar.vue";

export default {
  components: {
    HouseListingCard,
    SearchBar,
    NoResultsFound,
    SortButtonToolbar,
  },
  name: "Home",
  data() {
    return {
      searchTerm: "",
    };
  },
  computed: {
    ...mapState(["isFetching", "houseListings"]),
    houseListingsByLocation() {
      return this.houseListings.filter(
        (houseListing) =>
          houseListing.location.street
            .toLowerCase()
            .includes(this.searchTerm.toLowerCase()) ||
          houseListing.location.city
            .toLowerCase()
            .includes(this.searchTerm.toLowerCase())
      );
    },
    houseListingsByLocationCount() {
      return this.houseListingsByLocation.length;
    },
  },
};
</script>
