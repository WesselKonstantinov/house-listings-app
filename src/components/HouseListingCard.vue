<template>
  <article class="card">
    <img :src="houseListing.image" alt="House listing" class="card__image" />
    <div class="card__info">
      <h3 class="card__address">{{ houseListing.location.street }}</h3>
      <p class="card__price">{{ formattedPrice }}</p>
      <p class="card__location">{{ zipCodeAndCity }}</p>
      <div class="card__icons-container">
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
      this.setSelectedHouseListing(this.houseListing.id);
    },
  },
};
</script>

<style>
.card {
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 1px 1px 5px #c3c3c3;
  display: flex;
  font-size: 12px;
  padding: 10px;
  margin-bottom: 20px;
  cursor: pointer;
}

.card__info > * {
  margin: 0;
}

.card__address {
  margin-top: 5px;
}

.card__address,
.card__price,
.card__location {
  padding-bottom: 3px;
}

.card__icon {
  width: 12px;
  height: 12px;
  align-self: center;
}

.card__icon-set {
  margin-right: 10px;
  display: inline-flex;
}

.card__icons-container {
  padding-top: 10px;
  display: flex;
}

.card__image {
  display: block;
  width: 100%;
  height: 100px;
  max-width: 100px;
  border-radius: 10px;
}

.card__info {
  margin-left: 15px;
}

.card__location {
  color: #c3c3c3;
}

.card__price {
  color: #4a4b4c;
}

.card__unit {
  margin-left: 5px;
}

.card__actions {
  margin-left: auto;
  position: relative;
  top: 6px;
}

.card__actions-icon {
  margin-right: 5px;
  width: 12px;
  height: 12px;
}

@media screen and (min-width: 768px) {
  .card__actions-icon {
    margin-right: 15px;
    width: 16px;
    height: 16px;
  }
}
</style>
