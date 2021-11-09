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
  </article>
</template>

<style scoped>
.card {
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 1px 1px 5px #c3c3c3;
  display: flex;
  font-size: 12px;
  padding: 10px;
  margin-bottom: 20px;
}

.card__address {
  margin: 0;
}

.card__icon {
  width: 12px;
  height: 12px;
}

.card__icon-set {
  margin-right: 10px;
}

.card__icons-container {
  margin-top: 20px;
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
  margin-left: 20px;
}

.card__location {
  margin: 0;
  color: #c3c3c3;
}

.card__price {
  margin: 0;
  color: #4a4b4c;
}

.card__unit {
  margin-left: 5px;
}

@media screen and (min-width: 768px) {
  .card {
    padding: 15px;
    font-size: 16px;
  }

  .card__icon {
    width: 16px;
    height: 16px;
  }

  .card__icon-set {
    margin-right: 15px;
  }

  .card__image {
    height: 150px;
    max-width: 150px;
  }

  .card__address,
  .card__price {
    margin-bottom: 16px;
  }
}
</style>

<script>
export default {
  name: "HouseListingCard",
  props: {
    houseListing: { required: true, type: Object },
  },
  computed: {
    formattedPrice() {
      return new Intl.NumberFormat("nl-NL", {
        style: "currency",
        currency: "EUR",
      }).format(this.houseListing.price);
    },
    zipCodeAndCity() {
      return `${this.houseListing.location.zip} ${this.houseListing.location.city}`;
    },
  },
};
</script>
