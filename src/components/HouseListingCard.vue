<template>
  <article class="card">
    <img :src="houseListing.image" alt="House listing" class="card__image" />
    <div class="card__details">
      <h2 class="card__address">{{ houseListing.location.street }}</h2>
      <p class="card__price">{{ formattedPrice }}</p>
      <p class="card__location">{{ zipCodeAndCity }}</p>
      <div class="card__icon-container">
        <div class="card__icon-set">
          <img src="../assets/ic_bed.png" alt="Bed icon" class="card__icon" />
          <span class="card__unit">{{ houseListing.rooms.bedrooms }}</span>
        </div>
        <div class="card__icon-set">
          <img src="../assets/ic_bath.png" alt="Bath icon" class="card__icon" />
          <span class="card__unit">{{ houseListing.rooms.bathrooms }}</span>
        </div>
        <div class="card__icon-set">
          <img src="../assets/ic_size.png" alt="Size icon" class="card__icon" />
          <span class="card__unit">{{ houseListing.size }} m2</span>
        </div>
      </div>
    </div>
    <div v-if="houseListing.madeByMe" class="card__actions" @click.stop>
      <icon-button-link
        class="card__actions-link"
        icon="ic_edit.png"
        icon-alt="Edit icon"
        :link-destination="{
          name: 'EditHouseListing',
          params: { id: houseListing.id },
        }"
        icon-class="card__actions-icon"
      />
      <icon-button-link
        class="card__actions-link"
        icon="ic_delete.png"
        icon-alt="Delete icon"
        icon-class="card__actions-icon"
        @click="showConfirmDeleteModal"
      />
    </div>
  </article>
</template>

<script>
import { mapMutations } from "vuex";
import IconButtonLink from "./IconButtonLink.vue";

export default {
  name: "HouseListingCard",
  components: { IconButtonLink },
  props: {
    houseListing: { required: true, type: Object },
  },
  computed: {
    formattedPrice() {
      const formattedPrice = new Intl.NumberFormat().format(
        this.houseListing.price
      );
      return `€ ${formattedPrice}`;
    },
    zipCodeAndCity() {
      return `${this.houseListing.location.zip} ${this.houseListing.location.city}`;
    },
  },
  methods: {
    ...mapMutations([
      "setIsConfirmDeleteModalVisible",
      "setSelectedHouseListing",
    ]),
    showConfirmDeleteModal() {
      this.setIsConfirmDeleteModalVisible(true);
      this.setSelectedHouseListing(this.houseListing.id); // Select the correct listing if the user proceeds to delete it
    },
  },
};
</script>

<style>
/* || Card layout */
.card {
  background-color: var(--secondary-background-color);
  border-radius: 5px;
  box-shadow: 1px 1px 5px var(--tertiary-element-color-dark);
  display: flex;
  padding: 10px;
  margin-bottom: 20px;
  cursor: pointer;
}

/* || Card image, information and icons */
.card__image {
  border-radius: 5px;
  height: 80px;
  max-width: 80px; /* Keep image width consistent with height */
}

.card__details {
  margin-left: 10px;
}

.card__details > * {
  margin: 0;
  margin-top: 3px;
}

.card__address {
  margin-top: 5px;
  font-size: 1rem;
}

.card__location {
  color: var(--tertiary-element-color-dark);
}

.card__unit {
  margin-left: 5px;
}

.card__icon-container {
  display: flex;
}

.card__icon-set {
  margin-right: 10px;
  display: flex;
}

.card__icon {
  width: 12px;
  height: 12px;
  align-self: center;
}

.card__actions {
  margin-left: auto;
  position: relative;
  top: 5px;
}

.card__actions-icon {
  margin-right: 5px;
  width: 12px;
  height: 12px;
}

/* || Media queries */
@media screen and (min-width: 360px) {
  .card__image {
    height: 100px;
    max-width: 100px;
  }

  .card__address {
    font-size: 1.166666rem;
  }

  .card__icon-container {
    padding-top: 10px;
  }

  .card__details {
    margin-left: 15px;
  }
}

@media screen and (min-width: 768px) {
  .card__actions-icon {
    margin-right: 15px;
    width: 16px;
    height: 16px;
  }
}
</style>
