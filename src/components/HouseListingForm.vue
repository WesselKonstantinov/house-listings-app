<template>
  <h2>House listing form</h2>
  <form class="form" enctype="multipart/form-data">
    <div class="form__group">
      <label for="street-name" class="form__label">Street name</label>
      <input
        type="text"
        name="street-name"
        id="street-name"
        placeholder="Enter the street name"
        class="form__input form__input--full"
        v-model="form.streetName"
      />
    </div>
    <div class="form__group">
      <label for="house-number" class="form__label">House number</label>
      <input
        type="text"
        name="house-number"
        id="house-number"
        placeholder="Enter house number"
        class="form__input"
        v-model="form.houseNumber"
      />
    </div>
    <div class="form__group">
      <label for="number-addition" class="form__label"
        >Addition (optional)</label
      >
      <input
        type="text"
        name="number-addition"
        id="number-addition"
        placeholder="e.g. A"
        class="form__input"
        v-model="form.numberAddition"
      />
    </div>
    <div class="form__group">
      <label for="zip" class="form__label">Postal code</label>
      <input
        type="text"
        name="zip"
        id="zip"
        placeholder="e.g. 1000AA"
        class="form__input"
        v-model="form.zip"
      />
    </div>
    <div class="form__group">
      <label for="city" class="form__label">City</label>
      <input
        type="text"
        name="city"
        id="city"
        placeholder="e.g. Utrecht"
        class="form__input"
        v-model="form.city"
      />
    </div>
    <div class="form__group">
      <label for="image" class="form__label">Upload picture (PNG or JPG)</label>
      <div class="picture-input" @click="selectImage">
        <div
          class="picture-input__preview-container"
          :class="{
            'picture-input__preview-container--bordered': !isImageSelected,
          }"
        >
          <img v-if="imageUrl" :src="imageUrl" class="picture-input__preview" />
          <icon-button-link
            v-if="!isImageSelected"
            icon="ic_upload.png"
            icon-alt="Upload icon"
            link-destination=""
          />
          <icon-button-link
            v-if="isImageSelected"
            icon="ic_clear_white.png"
            icon-alt="Clear icon"
            link-destination=""
            class="picture-input__clear"
            @click.stop="clearImage"
          />
        </div>
        <input
          type="file"
          name="image"
          id="image"
          accept="image/jpeg,image/png"
          class="picture-input__input"
          ref="fileInput"
          @change="handleImage"
        />
      </div>
    </div>
    <div class="form__group">
      <label for="price" class="form__label">Price</label>
      <input
        type="text"
        name="price"
        id="price"
        placeholder="e.g. €150.000"
        class="form__input"
        v-model="form.price"
      />
    </div>
    <div class="form__group">
      <label for="size" class="form__label">Size</label>
      <input
        type="text"
        name="size"
        id="size"
        placeholder="e.g. 60m2"
        class="form__input"
        v-model="form.size"
      />
    </div>
    <div class="form__group">
      <label for="has-garage" class="form__label">Garage</label>
      <div class="form__select-wrapper">
        <select
          class="form__select"
          name="has-garage"
          id="has-garage"
          v-model="form.hasGarage"
        >
          <option value="">Select</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </div>
    </div>
    <div class="form__group">
      <label for="bedrooms" class="form__label">Bedrooms</label>
      <input
        type="text"
        name="bedrooms"
        id="bedrooms"
        placeholder="Enter amount"
        class="form__input"
        v-model="form.bedrooms"
      />
    </div>
    <div class="form__group">
      <label for="bathrooms" class="form__label">Bathrooms</label>
      <input
        type="text"
        name="bathrooms"
        id="bathrooms"
        placeholder="Enter amount"
        class="form__input"
        v-model="form.bathrooms"
      />
    </div>
    <div class="form__group">
      <label for="construction-year" class="form__label"
        >Construction date</label
      >
      <input
        type="text"
        name="construction-year"
        id="construction-year"
        placeholder="e.g. 1990"
        class="form__input"
        v-model="form.constructionYear"
      />
    </div>
    <div class="form__group">
      <label for="description" class="form__label">Description</label>
      <textarea
        placeholder="Enter description"
        name="description"
        id="description"
        class="form__textarea"
        v-model="form.description"
      ></textarea>
    </div>
    <div class="form__group">
      <button type="submit" class="form__submit" @click.prevent="onSubmit">
        Post
      </button>
    </div>
  </form>
</template>

<style>
.form {
  font-size: 12px;
  display: grid;
  grid-auto-columns: minmax(0, 1fr);
  grid-auto-flow: column;
  gap: 10px;
  grid-template-areas:
    "street-name street-name"
    "house-number addition"
    "postal-code postal-code"
    "city city"
    "picture-upload picture-upload"
    "price price"
    "size garage"
    "bedrooms bathrooms"
    "construction-date construction-date"
    "description description"
    "submit submit";
}

.form__label {
  color: #4a4b4c;
  display: block;
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  margin-bottom: 8px;
}

.form__group:nth-of-type(1) {
  grid-area: street-name;
}

.form__group:nth-of-type(2) {
  grid-area: house-number;
}

.form__group:nth-of-type(3) {
  grid-area: addition;
}

.form__group:nth-of-type(4) {
  grid-area: postal-code;
}

.form__group:nth-of-type(5) {
  grid-area: city;
}

.form__group:nth-of-type(6) {
  grid-area: picture-upload;
}

.form__group:nth-of-type(7) {
  grid-area: price;
}

.form__group:nth-of-type(8) {
  grid-area: size;
}

.form__group:nth-of-type(9) {
  grid-area: garage;
}

.form__group:nth-of-type(10) {
  grid-area: bedrooms;
}

.form__group:nth-of-type(11) {
  grid-area: bathrooms;
}

.form__group:nth-of-type(12) {
  grid-area: construction-date;
}

.form__group:nth-of-type(13) {
  grid-area: description;
}

.form__group:nth-of-type(14) {
  grid-area: submit;
}

.form__input,
.form__select,
.form__textarea,
.form__submit {
  font-family: inherit;
  font-size: 100%;
  padding: 1em;
  border-radius: 5px;
  border: 1px solid transparent;
  outline: none;
  width: 100%;
}

.form__select {
  appearance: none;
}

.form__select-wrapper {
  position: relative;
}

.form__select-wrapper::before,
.form__select-wrapper::after {
  content: "";
  border: solid #c3c3c3;
  border-width: 0 2px 2px 0;
  padding: 3px;
  position: absolute;
  top: 50%;
  right: 10px;
}

.form__select-wrapper::before {
  transform: rotate(-135deg);
  margin-top: -7px;
}

.form__select-wrapper::after {
  transform: rotate(45deg);
}

.form__textarea {
  resize: none;
}

.form__submit {
  background-color: #eb5440;
  color: #fff;
  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer;
}

.picture-input {
  width: 150px;
}

.picture-input__preview-container {
  border-radius: 10px;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.picture-input__preview-container--bordered {
  border: 3px dashed #c3c3c3;
}

.picture-input__preview {
  width: 100%;
  height: 100%;
  border-radius: 10px;
}

.picture-input__clear {
  z-index: 10;
  position: absolute;
  top: -10px;
  right: -15px;
}

.picture-input__input {
  display: none;
}

@media screen and (min-width: 768px) {
  .form {
    font-size: 14px;
  }
}
</style>

<script>
import { mapActions, mapGetters } from "vuex";
import IconButtonLink from "./IconButtonLink.vue";

export default {
  name: "HouseListingForm",
  components: { IconButtonLink },
  data() {
    return {
      form: {
        streetName: "",
        houseNumber: "",
        numberAddition: "",
        zip: "",
        city: "",
        price: "",
        size: "",
        hasGarage: "",
        bedrooms: "",
        bathrooms: "",
        constructionYear: "",
        description: "",
        image: null,
      },
      isImageSelected: false,
      imageUrl: null,
    };
  },
  computed: {
    ...mapGetters(["selectedHouseListing"]),
  },
  methods: {
    ...mapActions(["createHouseListing"]),
    onSubmit() {
      this.createHouseListing(this.form);
    },
    selectImage() {
      this.$refs.fileInput.click();
    },
    handleImage(e) {
      const files = e.target.files;
      if (files.length === 0) {
        return;
      }
      this.isImageSelected = true;
      this.imageUrl = URL.createObjectURL(files[0]);
      this.form.image = files[0];
    },
    clearImage() {
      this.isImageSelected = false;
      this.imageUrl = null;
      this.form.image = null;
    },
  },
};
</script>
