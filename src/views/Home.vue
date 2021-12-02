<template>
  <!-- Page heading and upload icon to be displayed on mobile -->
  <h1 class="mobile-header">Houses</h1>
  <icon-button-link
    icon="ic_upload.png"
    icon-alt="Upload Icon"
    icon-class="action-icon--medium"
    link-destination="/house-listings/create"
    class="action-icon action-icon--new"
  />
  <p v-if="isFetching">Loading...</p>
  <section v-else class="section">
    <!-- Page heading and upload button to be displayed on desktop -->
    <header class="section__header">
      <h1>Houses</h1>
      <button
        class="upload-button"
        @click="$router.push('/house-listings/create')"
      >
        Create new
      </button>
    </header>
    <div class="section__tools">
      <search-bar />
      <sort-button-toolbar />
    </div>
    <h2 class="section__results" v-if="resultsFound">
      {{ sortedHouseListingsCount }} results found
    </h2>
    <no-results-found v-else-if="noResultsFound" />
    <house-listing-card
      v-for="houseListing in sortedHouseListings"
      :key="houseListing.id"
      :house-listing="houseListing"
      @click="onChangeHouseListingDetailRoute(houseListing)"
    />
  </section>
  <confirm-delete v-show="isConfirmDeleteModalVisible" />
</template>

<script>
import { mapState, mapGetters } from "vuex";
import SortButtonToolbar from "../components/SortButtonToolbar.vue";
import HouseListingCard from "../components/HouseListingCard.vue";
import NoResultsFound from "../components/NoResultsFound.vue";
import SearchBar from "../components/SearchBar.vue";
import ConfirmDelete from "../components/ConfirmDelete.vue";
import IconButtonLink from "../components/IconButtonLink.vue";

export default {
  components: {
    HouseListingCard,
    SearchBar,
    NoResultsFound,
    SortButtonToolbar,
    ConfirmDelete,
    IconButtonLink,
  },
  name: "Home",
  computed: {
    ...mapState(["isFetching", "searchTerm", "isConfirmDeleteModalVisible"]),
    ...mapGetters(["sortedHouseListings", "sortedHouseListingsCount"]),
    resultsFound() {
      return this.searchTerm && this.sortedHouseListingsCount;
    },
    noResultsFound() {
      return this.searchTerm && !this.sortedHouseListingsCount;
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
/* || Home page headers and icons */
.mobile-header {
  text-align: center;
  font-size: 1.5rem;
  margin: 30px;
}

.action-icon--new {
  right: 5%;
}

.section__header {
  display: none;
}

/* || Upload button and search results */
.upload-button {
  border: none;
  border-radius: 5px;
  color: var(--button-text-color);
  background: var(--primary-element-color) url("../assets/ic_plus_white.png") 9%
    center no-repeat;
  cursor: pointer;
  text-transform: uppercase;
  width: 200px;
  padding-left: 30px;
}

.section__results {
  font-size: 1.166666rem;
}

/* || Media queries */
@media screen and (min-width: 768px) {
  .mobile-header {
    display: none;
  }

  .section__header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 40px;
  }

  .section__header h1 {
    font-size: 2.666666rem;
    margin: 2px 0; /* Help control the size of the upload button */
  }

  .section__results {
    font-size: 1.83333rem;
  }

  .section__tools {
    display: flex;
    justify-content: space-between;
  }

  /* Apply styles to card components that differ from the ones used in the recommendations section */
  .section .card {
    padding: 15px;
    font-size: 1.33333rem;
  }

  .section .card__address {
    font-size: 1.83333rem;
  }

  .section .card__icon {
    width: 16px;
    height: 16px;
  }

  .section .card__icon-set {
    margin-right: 15px;
  }

  .section .card__image {
    height: 140px;
    max-width: 140px;
  }

  .section .card__icon-container {
    padding: 0;
  }

  .section .card__details {
    margin-left: 20px;
  }

  .section .card__details > * {
    margin-top: 10px;
  }

  .section .card__actions {
    top: 10px;
  }
}
</style>
