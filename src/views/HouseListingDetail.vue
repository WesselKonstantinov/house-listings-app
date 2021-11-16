<template>
  <div v-if="selectedHouseListing" class="house-listing-page">
    <router-link class="house-listing-page__back-icon" to="/">
      <img src="../assets/ic_back_white.png" alt="Back icon" />
    </router-link>
    <div class="back-link">
      <router-link to="/">
        <img
          src="../assets/ic_back_grey.png"
          alt="Back icon"
          class="back-link__icon"
        />
      </router-link>
      <h2 class="back-link__label">Back to overview</h2>
    </div>
    <div class="house-listing-page__content">
      <div class="house-listing-page__main">
        <img
          :src="selectedHouseListing.image"
          alt="House listing"
          class="house-listing-page__image"
        />
        <article class="house-listing-details">
          <div class="house-listing-details__wrapper">
            <h2>{{ selectedHouseListing.location.street }}</h2>
            <div class="house-listing-details__icon-set">
              <img
                src="../assets/ic_location.png"
                alt="Location icon"
                class="house-listing-details__icon"
              />
              <span class="house-listing-details__unit">{{
                zipCodeAndCity
              }}</span>
            </div>
            <div class="house-listing-details__icons-container">
              <div class="house-listing-details__icon-set">
                <img
                  src="../assets/ic_price.png"
                  alt="Price icon"
                  class="house-listing-details__icon"
                />
                <span class="house-listing-details__unit">{{
                  formattedPrice
                }}</span>
              </div>
              <div class="house-listing-details__icon-set">
                <img
                  src="../assets/ic_size.png"
                  alt="Size icon"
                  class="house-listing-details__icon"
                />
                <span class="house-listing-details__unit"
                  >{{ selectedHouseListing.size }} m2
                </span>
              </div>
              <div class="house-listing-details__icon-set">
                <img
                  src="../assets/ic_construction_date.png"
                  alt="Construction date icon"
                  class="house-listing-details__icon"
                />
                <span class="house-listing-details__unit"
                  >Built in {{ selectedHouseListing.constructionYear }}
                </span>
              </div>
            </div>
            <div class="house-listing-details__icons-container">
              <div class="house-listing-details__icon-set">
                <img
                  src="../assets/ic_bed.png"
                  alt="Bed icon"
                  class="house-listing-details__icon"
                />
                <span class="house-listing-details__unit">{{
                  selectedHouseListing.rooms.bedrooms
                }}</span>
              </div>
              <div class="house-listing-details__icon-set">
                <img
                  src="../assets/ic_bath.png"
                  alt="Bath icon"
                  class="house-listing-details__icon"
                />
                <span class="house-listing-details__unit">{{
                  selectedHouseListing.rooms.bathrooms
                }}</span>
              </div>
              <div class="house-listing-details__icon-set">
                <img
                  src="../assets/ic_garage.png"
                  alt="Garage icon"
                  class="house-listing-details__icon"
                />
                <span class="house-listing-details__unit">{{
                  isGaragePresent
                }}</span>
              </div>
            </div>
            <p>{{ selectedHouseListing.description }}</p>
          </div>
        </article>
      </div>
      <recommended-house-listings-section />
    </div>
  </div>
</template>

<style>
.back-link {
  display: none;
}

.house-listing-page {
  /* Give page full width on mobile despite being inside a centered container */
  left: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  max-width: 100vw;
  position: relative;
  right: 50%;
  width: 100vw;
}

.house-listing-page__back-icon {
  position: absolute;
  top: 30px;
  left: 5%; /* Keeps the icon correctly aligned with the rest of the content */
}

.house-listing-page__image {
  width: 100%;
}

.house-listing-details {
  background-color: #ffffff;
  border-radius: 15px 15px 0 0;
  position: relative;
  top: -20px;
}

.house-listing-details__wrapper {
  width: 90%;
  margin: 0 auto;
  padding: 20px 0;
}

.house-listing-details__wrapper > * {
  margin-bottom: 10px;
}

.house-listing-details {
  font-size: 12px;
  color: #4a4b4c;
}

.house-listing-details h2 {
  font-size: 18px;
  margin-top: 0;
}

.house-listing-details__icons-container {
  display: flex;
}

.house-listing-details__icon-set {
  display: inline-flex;
  font-weight: 600;
}

.house-listing-details__icons-container > .house-listing-details__icon-set {
  margin-right: 20px;
}

.house-listing-details__icon {
  width: 12px;
  height: 12px;
  align-self: center;
}

.house-listing-details__unit {
  margin-left: 6px;
}

@media screen and (min-width: 768px) {
  .back-link {
    display: flex;
    margin-bottom: 30px;
  }

  .back-link__icon {
    position: relative;
    bottom: 1px;
  }

  .back-link__label {
    font-size: 16px;
    margin: 0 10px;
  }

  .house-listing-page {
    position: static;
    width: initial;
    max-width: initial;
    margin: 50px auto;
  }

  .house-listing-details {
    position: static;
    border-radius: 0;
    margin-top: -5px;
  }

  .house-listing-details h2 {
    font-size: 32px;
  }

  .house-listing-details p {
    font-size: 18px;
    line-height: 1.8;
  }

  .house-listing-details__icon-set {
    font-size: 16px;
  }

  .house-listing-details__icon {
    width: 16px;
    height: 16px;
  }

  .house-listing-page__back-icon {
    display: none;
  }
}

@media screen and (min-width: 1200px) {
  .house-listing-page__content {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 70px;
  }
}
</style>

<script>
import { mapGetters, mapMutations } from "vuex";
import RecommendedHouseListingsSection from "../components/RecommendedHouseListingsSection.vue";

export default {
  components: { RecommendedHouseListingsSection },
  name: "HouseListingDetail",
  computed: {
    ...mapGetters(["selectedHouseListing"]),
    formattedPrice() {
      return new Intl.NumberFormat().format(this.selectedHouseListing.price);
    },
    zipCodeAndCity() {
      return `${this.selectedHouseListing.location.zip} ${this.selectedHouseListing.location.city}`;
    },
    isGaragePresent() {
      return this.selectedHouseListing.hasGarage ? "Yes" : "No";
    },
  },
  methods: {
    ...mapMutations(["setSelectedHouseListing"]),
  },
  created() {
    /* Route params id needs to be a number instead of a string
    for correct matching with the id of a single house listing object. */
    const houseListingId = Number(this.$route.params.id);
    this.setSelectedHouseListing(houseListingId);
  },
  updated() {
    const houseListingId = Number(this.$route.params.id);
    this.setSelectedHouseListing(houseListingId);
  },
};
</script>
