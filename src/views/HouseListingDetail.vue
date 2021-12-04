<template>
  <div v-if="selectedHouseListing" class="house-listing">
    <!-- Icons to be displayed on mobile -->
    <icon-button-link
      icon="ic_back_white.png"
      icon-alt="Back Icon"
      class="action-icon action-icon--back"
      link-destination="/"
    />
    <div v-if="selectedHouseListing.madeByMe" class="action-icons-container">
      <icon-button-link
        icon="ic_edit_white.png"
        icon-alt="Edit icon"
        icon-class="action-icon--small"
        :link-destination="{
          name: 'EditHouseListing',
          params: { id: selectedHouseListing.id },
        }"
      />
      <icon-button-link
        icon="ic_delete_white.png"
        icon-alt="Delete icon"
        class="action-icon--delete"
        @click="showConfirmDeleteModal"
      />
    </div>
    <!-- Back label to be displayed on desktop -->
    <go-back-label
      text="Back to overview"
      icon="ic_back_grey.png"
      icon-alt="Back icon"
      link-destination="/"
    />
    <div class="house-listing__content">
      <div class="house-listing__main">
        <img
          :src="selectedHouseListing.image"
          alt="House listing"
          class="house-listing__image"
        />
        <article class="house-listing__details">
          <div class="house-listing__inner">
            <div class="house-listing__address-and-actions">
              <h1 class="house-listing__address">
                {{ selectedHouseListing.location.street }}
              </h1>
              <div
                v-if="selectedHouseListing.madeByMe"
                class="house-listing__actions"
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
                  class="action-icon--delete"
                  @click="showConfirmDeleteModal"
                />
              </div>
            </div>
            <div class="house-listing__icon-set">
              <img
                src="../assets/ic_location.png"
                alt="Location icon"
                class="house-listing__icon"
              />
              <span class="house-listing__unit">{{ zipCodeAndCity }}</span>
            </div>
            <div class="house-listing__icons-container">
              <div class="house-listing__icon-set">
                <img
                  src="../assets/ic_price.png"
                  alt="Price icon"
                  class="house-listing__icon"
                />
                <span class="house-listing__unit">{{ formattedPrice }}</span>
              </div>
              <div class="house-listing__icon-set">
                <img
                  src="../assets/ic_size.png"
                  alt="Size icon"
                  class="house-listing__icon"
                />
                <span class="house-listing__unit"
                  >{{ selectedHouseListing.size }} m2
                </span>
              </div>
              <div class="house-listing__icon-set">
                <img
                  src="../assets/ic_construction_date.png"
                  alt="Construction date icon"
                  class="house-listing__icon"
                />
                <span class="house-listing__unit"
                  >Built in {{ selectedHouseListing.constructionYear }}
                </span>
              </div>
            </div>
            <div class="house-listing__icons-container">
              <div class="house-listing__icon-set">
                <img
                  src="../assets/ic_bed.png"
                  alt="Bed icon"
                  class="house-listing__icon"
                />
                <span class="house-listing__unit">{{
                  selectedHouseListing.rooms.bedrooms
                }}</span>
              </div>
              <div class="house-listing__icon-set">
                <img
                  src="../assets/ic_bath.png"
                  alt="Bath icon"
                  class="house-listing__icon"
                />
                <span class="house-listing__unit">{{
                  selectedHouseListing.rooms.bathrooms
                }}</span>
              </div>
              <div class="house-listing__icon-set">
                <img
                  src="../assets/ic_garage.png"
                  alt="Garage icon"
                  class="house-listing__icon"
                />
                <span class="house-listing__unit">{{ isGaragePresent }}</span>
              </div>
            </div>
            <p class="house-listing__description">
              {{ selectedHouseListing.description }}
            </p>
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
};
</script>

<style>
/* || Page layout */
.house-listing {
  /* Give page full width on mobile despite being inside a centered container */
  left: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  max-width: 100vw;
  position: relative;
  right: 50%;
  width: 100vw;
}

/* || Icon layout for mobile */
.action-icon,
.action-icons-container {
  position: absolute; /* Keep the icons correctly aligned within the main container on mobile */
  top: 31.5px;
}

.action-icon--small {
  width: 16px;
  height: 16px;
}

.action-icon--medium {
  width: 18px;
  height: 18px;
}

.action-icon--back {
  left: 5%;
}

.action-icons-container {
  right: 5%;
}

.action-icon--delete {
  margin-left: 20px;
}

/* || House listing image and information */
.house-listing__image {
  width: 100%;
}

.house-listing__details {
  background-color: var(--secondary-background-color);
  border-radius: 15px 15px 0 0;
  position: relative;
  top: -20px;
}

.house-listing__inner {
  width: 90%;
  margin: 0 auto;
  padding: 20px 0;
}

.house-listing__inner > * {
  margin-bottom: 10px;
}

.house-listing__address {
  font-size: 1.5rem;
  margin: 0;
}

.house-listing__actions {
  display: none; /* Hide buttons on mobile, since icons are used instead */
}

.house-listing__icons-container {
  display: flex;
}

.house-listing__icon-set {
  display: inline-flex;
  font-weight: 600;
}

.house-listing__icons-container > .house-listing__icon-set {
  margin-right: 20px;
}

.house-listing__icon {
  width: 12px;
  height: 12px;
  align-self: center;
}

.house-listing__unit {
  margin-left: 6px;
}

/* || Media queries */
@media screen and (min-width: 768px) {
  .house-listing {
    /* Resize page to centered container width */
    position: static;
    width: initial;
    max-width: initial;
    margin: 50px auto;
  }

  .house-listing__details {
    position: static;
    border-radius: 0;
    margin-top: -5px;
  }

  .house-listing__address {
    font-size: 2.666666rem;
  }

  .house-listing__description {
    line-height: 1.8;
  }

  .house-listing__icon-set {
    font-size: 1.33333rem;
  }

  .house-listing__icon {
    width: 16px;
    height: 16px;
  }

  .action-icon,
  .action-icons-container {
    display: none;
  }

  .house-listing__actions {
    display: initial;
  }

  .house-listing__address-and-actions {
    display: flex;
    justify-content: space-between;
  }

  .house-listing__actions {
    align-self: center;
  }
}

@media screen and (min-width: 1200px) {
  .house-listing__content {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 70px;
  }
}
</style>
