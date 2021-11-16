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
        <sort-button-toolbar
          :sort-option="sortOption"
          @change-sort-option="onChangeSortOption"
        />
      </div>
      <h3 v-if="searchTerm && sortedHouseListingsCount !== 0">
        {{ sortedHouseListingsCount }} results found
      </h3>
      <no-results-found
        v-else-if="searchTerm && sortedHouseListingsCount === 0"
      />
      <house-listing-card
        v-for="houseListing in sortedHouseListings"
        :key="houseListing.id"
        :house-listing="houseListing"
        @click="onChangeHouseListingDetailRoute(houseListing)"
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

  .home-page .card {
    padding: 15px;
    font-size: 16px;
  }

  .home-page .card__icon {
    width: 16px;
    height: 16px;
  }

  .home-page .card__icon-set {
    margin-right: 15px;
  }

  .home-page .card__image {
    height: 140px;
    max-width: 140px;
  }

  .home-page .card__address,
  .home-page .card__price,
  .home-page .card__location {
    padding-bottom: 13px;
  }

  .home-page .card__icons-container {
    padding-top: 0;
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
      sortOption: "price",
    };
  },
  computed: {
    ...mapState(["isFetching", "houseListings"]),
    sortedHouseListings() {
      return this.houseListings
        .filter(
          (houseListing) =>
            houseListing.location.street
              .toLowerCase()
              .includes(this.searchTerm.toLowerCase()) ||
            houseListing.location.city
              .toLowerCase()
              .includes(this.searchTerm.toLowerCase())
        )
        .sort((a, b) => a[this.sortOption] - b[this.sortOption]);
    },
    sortedHouseListingsCount() {
      return this.sortedHouseListings.length;
    },
  },
  methods: {
    onChangeSortOption(newSortOption) {
      this.sortOption = newSortOption;
    },
    onChangeHouseListingDetailRoute(houseListing) {
      this.$router.push({
        name: "HouseListingDetail",
        params: { id: houseListing.id },
      });
    },
  },
};
</script>
