<template>
  <div v-if="selectedHouseListing" class="house-listing-page">
    <icon-button-link
      icon="ic_back_white.png"
      icon-alt="Back Icon"
      link-destination="/"
      class="action-icon-back"
    />
    <div v-if="selectedHouseListing.madeByMe" class="action-icons-container">
      <icon-button-link
        icon="ic_edit_white.png"
        icon-alt="Edit icon"
        link-destination="/"
      />
      <icon-button-link
        icon="ic_delete_white.png"
        icon-alt="Delete icon"
        class="action-icon-delete"
        @click="showConfirmDeleteModal"
      />
    </div>
    <go-back-label
      text="Back to overview"
      icon="ic_back_grey.png"
      icon-alt="Back icon"
      link-destination="/"
    />
    <div class="house-listing-page__content">
      <div class="house-listing-page__main">
        <img
          :src="selectedHouseListing.image"
          alt="House listing"
          class="house-listing-page__image"
        />
        <article class="house-listing-details">
          <div class="house-listing-details__wrapper">
            <div class="house-listing-details__street-and-actions">
              <h2 class="house-listing-details__street">
                {{ selectedHouseListing.location.street }}
              </h2>
              <div
                v-if="selectedHouseListing.madeByMe"
                class="house-listing-details__actions"
              >
                <icon-button-link
                  icon="ic_edit.png"
                  icon-alt="Edit icon"
                  :link-destination="{
                    name: 'EditHouseListing',
                    params: { id: selectedHouseListing.id },
                  }"
                />
                <icon-button-link
                  icon="ic_delete.png"
                  icon-alt="Delete icon"
                  class="action-icon-delete"
                  @click="showConfirmDeleteModal"
                />
              </div>
            </div>
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
        <confirm-delete v-show="isConfirmDeleteModalVisible" />
      </div>
      <recommended-house-listings-section />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapState } from "vuex";
import IconButtonLink from "../components/IconButtonLink.vue";
import GoBackLabel from "../components/GoBackLabel.vue";
import RecommendedHouseListingsSection from "../components/RecommendedHouseListingsSection.vue";
import ConfirmDelete from "../components/ConfirmDelete.vue";

export default {
  components: {
    IconButtonLink,
    GoBackLabel,
    RecommendedHouseListingsSection,
    ConfirmDelete,
  },
  name: "HouseListingDetail",
  computed: {
    ...mapState(["isConfirmDeleteModalVisible"]),
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
    ...mapMutations([
      "setSelectedHouseListing",
      "setIsConfirmDeleteModalVisible",
    ]),
    showConfirmDeleteModal() {
      this.setIsConfirmDeleteModalVisible(true);
    },
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

<style>
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

/* Keeps the icons correctly aligned within the main container on mobile */
.action-icon-back,
.action-icons-container {
  position: absolute;
  top: 30px;
}

.action-icon-back {
  left: 5%;
}

.action-icons-container {
  right: 5%;
}

.action-icon-delete {
  margin-left: 20px;
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

.house-listing-details__street {
  font-size: 18px;
  margin: 0;
  color: #000000;
}

.house-listing-details__actions {
  display: none;
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

  .action-icon-back,
  .action-icons-container {
    display: none;
  }

  .house-listing-details__actions {
    display: initial;
  }

  .house-listing-details__street-and-actions {
    display: flex;
    justify-content: space-between;
  }

  .house-listing-details__actions {
    align-self: center;
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
