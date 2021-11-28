<template>
  <h2>House listing form</h2>
  <form class="form" enctype="multipart/form-data">
    <div class="form__group">
      <label for="street-name" class="form__label form__label--required"
        >Street name</label
      >
      <input
        type="text"
        name="street-name"
        id="street-name"
        placeholder="Enter the street name"
        class="form__input form__input--full"
        :class="{
          'form__input--error': v$.form.streetName.$error,
        }"
        v-model="form.streetName"
      />
      <div
        v-for="error of v$.form.streetName.$errors"
        :key="error.$uid"
        class="form__error-message"
      >
        {{ error.$message }}
      </div>
    </div>
    <div class="form__group">
      <label for="house-number" class="form__label form__label--required"
        >House number</label
      >
      <input
        type="text"
        name="house-number"
        id="house-number"
        placeholder="Enter house number"
        class="form__input"
        :class="{
          'form__input--error': v$.form.houseNumber.$error,
        }"
        v-model="form.houseNumber"
      />
      <div
        v-for="error of v$.form.houseNumber.$errors"
        :key="error.$uid"
        class="form__error-message"
      >
        {{ error.$message }}
      </div>
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
        :class="{
          'form__input--error': v$.form.numberAddition.$error,
        }"
        v-model="form.numberAddition"
      />
      <div
        v-for="error of v$.form.numberAddition.$errors"
        :key="error.$uid"
        class="form__error-message"
      >
        {{ error.$message }}
      </div>
    </div>
    <div class="form__group">
      <label for="zip" class="form__label form__label--required"
        >Postal code</label
      >
      <input
        type="text"
        name="zip"
        id="zip"
        :placeholder="v$.form.zip.$error ? 'Enter postal code' : 'e.g. 1000AA'"
        class="form__input"
        :class="{
          'form__input--error': v$.form.zip.$error,
        }"
        v-model="form.zip"
      />
      <div
        v-for="error of v$.form.zip.$errors"
        :key="error.$uid"
        class="form__error-message"
      >
        {{ error.$message }}
      </div>
    </div>
    <div class="form__group">
      <label for="city" class="form__label form__label--required">City</label>
      <input
        type="text"
        name="city"
        id="city"
        :placeholder="v$.form.city.$error ? 'Enter city' : 'e.g. Utrecht'"
        class="form__input"
        :class="{
          'form__input--error': v$.form.city.$error,
        }"
        v-model="form.city"
      />
      <div
        v-for="error of v$.form.city.$errors"
        :key="error.$uid"
        class="form__error-message"
      >
        {{ error.$message }}
      </div>
    </div>
    <div class="form__group">
      <label for="image" class="form__label form__label--required"
        >Upload picture (PNG or JPG)</label
      >
      <div class="picture-input" @click="selectImage">
        <div
          class="picture-input__preview-container"
          :class="{
            'picture-input__preview-container--standard': !form.image,
            'picture-input__preview-container--error':
              v$.form.image.$error &&
              v$.form.image.$errors[0].$validator === 'required',
          }"
        >
          <img
            v-if="imagePreviewUrl"
            :src="imagePreviewUrl"
            class="picture-input__preview"
          />
          <icon-button-link
            v-if="!form.image"
            icon="ic_upload.png"
            icon-alt="Upload icon"
          />
          <icon-button-link
            v-if="form.image"
            icon="ic_clear_white.png"
            icon-alt="Clear icon"
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
      <div
        v-for="error of v$.form.image.$errors"
        :key="error.$uid"
        class="form__error-message"
      >
        {{ error.$message }}
      </div>
    </div>
    <div class="form__group">
      <label for="price" class="form__label form__label--required">Price</label>
      <input
        type="text"
        name="price"
        id="price"
        :placeholder="v$.form.price.$error ? 'Enter price' : 'e.g. €150.000'"
        class="form__input"
        :class="{
          'form__input--error': v$.form.price.$error,
        }"
        v-model="form.price"
      />
      <div
        v-for="error of v$.form.price.$errors"
        :key="error.$uid"
        class="form__error-message"
      >
        {{ error.$message }}
      </div>
    </div>
    <div class="form__group">
      <label for="size" class="form__label form__label--required">Size</label>
      <input
        type="text"
        name="size"
        id="size"
        :placeholder="v$.form.size.$error ? 'Enter size' : 'e.g. 60m2'"
        class="form__input"
        :class="{
          'form__input--error': v$.form.size.$error,
        }"
        v-model="form.size"
      />
      <div
        v-for="error of v$.form.size.$errors"
        :key="error.$uid"
        class="form__error-message"
      >
        {{ error.$message }}
      </div>
    </div>
    <div class="form__group">
      <label for="has-garage" class="form__label form__label--required"
        >Garage</label
      >
      <div class="form__select-wrapper">
        <select
          name="has-garage"
          id="has-garage"
          class="form__select"
          :class="{
            'form__select--selected': form.hasGarage,
            'form__select--error': v$.form.hasGarage.$error,
          }"
          v-model="form.hasGarage"
        >
          <option value="">Select</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </div>
      <div
        v-for="error of v$.form.hasGarage.$errors"
        :key="error.$uid"
        class="form__error-message"
      >
        {{ error.$message }}
      </div>
    </div>
    <div class="form__group">
      <label for="bedrooms" class="form__label form__label--required"
        >Bedrooms</label
      >
      <input
        type="text"
        name="bedrooms"
        id="bedrooms"
        placeholder="Enter amount"
        class="form__input"
        :class="{
          'form__input--error': v$.form.bedrooms.$error,
        }"
        v-model="form.bedrooms"
      />
      <div
        v-for="error of v$.form.bedrooms.$errors"
        :key="error.$uid"
        class="form__error-message"
      >
        {{ error.$message }}
      </div>
    </div>
    <div class="form__group">
      <label for="bathrooms" class="form__label form__label--required"
        >Bathrooms</label
      >
      <input
        type="text"
        name="bathrooms"
        id="bathrooms"
        placeholder="Enter amount"
        class="form__input"
        :class="{
          'form__input--error': v$.form.bathrooms.$error,
        }"
        v-model="form.bathrooms"
      />
      <div
        v-for="error of v$.form.bathrooms.$errors"
        :key="error.$uid"
        class="form__error-message"
      >
        {{ error.$message }}
      </div>
    </div>
    <div class="form__group">
      <label for="construction-year" class="form__label form__label--required"
        >Construction date</label
      >
      <input
        type="text"
        name="construction-year"
        id="construction-year"
        :placeholder="
          v$.form.constructionYear.$error
            ? 'Enter construction date'
            : 'e.g. 1990'
        "
        class="form__input"
        :class="{
          'form__input--error': v$.form.constructionYear.$error,
        }"
        v-model="form.constructionYear"
      />
      <div
        v-for="error of v$.form.constructionYear.$errors"
        :key="error.$uid"
        class="form__error-message"
      >
        {{ error.$message }}
      </div>
    </div>
    <div class="form__group">
      <label for="description" class="form__label form__label--required"
        >Description</label
      >
      <textarea
        placeholder="Enter description"
        name="description"
        id="description"
        class="form__textarea"
        :class="{
          'form__textarea--error': v$.form.description.$error,
        }"
        v-model="form.description"
      ></textarea>
      <div
        v-for="error of v$.form.description.$errors"
        :key="error.$uid"
        class="form__error-message"
      >
        {{ error.$message }}
      </div>
    </div>
    <div class="form__group">
      <button type="submit" class="form__submit" @click.prevent="submitForm">
        {{ buttonText }}
      </button>
    </div>
  </form>
</template>

<script>
import {
  required,
  requiredIf,
  helpers,
  alpha,
  alphaNum,
  numeric,
} from "@vuelidate/validators";
import useVuelidate from "@vuelidate/core";
import { mapActions } from "vuex";
import IconButtonLink from "./IconButtonLink.vue";

const mustHaveCorrectType = (image) =>
  !helpers.req(image) ||
  image.type === "image/png" ||
  image.type === "image/jpeg" ||
  image.endsWith(".png") ||
  image.endsWith(".jpg") ||
  image.endsWith(".jpeg");

export default {
  name: "HouseListingForm",
  components: { IconButtonLink },
  props: {
    houseListing: {
      type: Object,
    },
  },
  computed: {
    isEditing() {
      return "id" in this.$route.params;
    },
    buttonText() {
      return this.isEditing ? "Save" : "Post";
    },
  },
  setup() {
    return { v$: useVuelidate() };
  },
  data() {
    return {
      form: {
        streetName: this.getStreetName(this.houseListing?.location) || "",
        houseNumber: this.getHouseNumber(this.houseListing?.location) || "",
        numberAddition:
          this.getNumberAddition(this.houseListing?.location) || "",
        zip: this.houseListing?.location.zip || "",
        city: this.houseListing?.location.city || "",
        price: this.houseListing?.price || "",
        size: this.houseListing?.size || "",
        hasGarage: this.houseListing?.hasGarage
          ? "yes"
          : /* Strictly check if this.houseListing?.hasGarage is false instead of falsy (i.e. !this.houseListing?.hasGarage),
          otherwise the select field can never default to the blank option when the form should be empty */
          this.houseListing?.hasGarage === false
          ? "no"
          : "",
        bedrooms: this.houseListing?.rooms.bedrooms || "",
        bathrooms: this.houseListing?.rooms.bathrooms || "",
        constructionYear: this.houseListing?.constructionYear || "",
        description: this.houseListing?.description || "",
        image: this.houseListing?.image || null,
      },
      imagePreviewUrl: this.houseListing?.image || null,
    };
  },
  validations() {
    return {
      form: {
        streetName: {
          required: helpers.withMessage("Required field missing", required),
          alphaNum,
        },
        houseNumber: {
          required: helpers.withMessage("Required field missing", required),
          numeric,
        },
        numberAddition: { alphaNum },
        zip: {
          required: helpers.withMessage("Required field missing", required),
          alphaNum,
        },
        city: {
          required: helpers.withMessage("Required field missing", required),
          alpha,
        },
        price: {
          required: helpers.withMessage("Required field missing", required),
          numeric,
        },
        size: {
          required: helpers.withMessage("Required field missing", required),
          numeric,
        },
        hasGarage: {
          required: helpers.withMessage("Required field missing", required),
        },
        bedrooms: {
          required: helpers.withMessage("Required field missing", required),
          numeric,
        },
        bathrooms: {
          required: helpers.withMessage("Required field missing", required),
          numeric,
        },
        constructionYear: {
          required: helpers.withMessage("Required field missing", required),
          numeric,
        },
        description: {
          required: helpers.withMessage("Required field missing", required),
        },
        image: {
          required: helpers.withMessage(
            "Required image missing",
            requiredIf(!this.form.image)
          ),
          mustHaveCorrectType: helpers.withMessage(
            "Image must be either PNG or JPG",
            mustHaveCorrectType
          ),
        },
      },
    };
  },
  methods: {
    ...mapActions(["createHouseListing", "updateHouseListing"]),
    async submitForm() {
      const isFormCorrect = await this.v$.$validate();
      if (!isFormCorrect) return;
      this.isEditing
        ? this.updateHouseListing(this.form)
        : this.createHouseListing(this.form);
    },
    selectImage() {
      this.$refs.fileInput.click();
    },
    handleImage(e) {
      const files = e.target.files;
      if (files.length === 0) {
        return;
      }
      this.imagePreviewUrl = URL.createObjectURL(files[0]);
      this.form.image = files[0];
    },
    clearImage() {
      this.imagePreviewUrl = null;
      this.form.image = null;
    },
    getStreetName(location) {
      const regex =
        /^(\d*[\p{L}\d '/\\\-.]+)[,\s]+(\d+)\s*([\p{L} \d\-/'"()]*)$/iu;
      return location !== undefined ? location?.street.match(regex)[1] : false;
    },
    getHouseNumber(location) {
      const regex =
        /^(\d*[\p{L}\d '/\\\-.]+)[,\s]+(\d+)\s*([\p{L} \d\-/'"()]*)$/iu;
      return location !== undefined ? location?.street.match(regex)[2] : false;
    },
    getNumberAddition(location) {
      const regex =
        /^(\d*[\p{L}\d '/\\\-.]+)[,\s]+(\d+)\s*([\p{L} \d\-/'"()]*)$/iu;
      return location !== undefined ? location?.street.match(regex)[3] : false;
    },
  },
};
</script>

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

.form__label--required::after {
  content: "*";
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
  color: #000;
}

.form__select {
  appearance: none;
  color: #c3c3c3;
}

.form__select--selected {
  color: #000;
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

.form__error-message {
  font-family: "Montserrat", sans-serif;
  font-style: italic;
  color: red;
  margin-top: 10px;
}

.form__input--error,
.form__select--error,
.form__textarea--error {
  border: 1px solid red;
}

.form__input::placeholder,
.form__textarea::placeholder {
  color: #c3c3c3;
}

.form__input--error::placeholder,
.form__textarea--error::placeholder,
.form__select--error {
  color: red;
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

.picture-input__preview-container--standard {
  border: 3px dashed #c3c3c3;
}

.picture-input__preview-container--error {
  border: 3px dashed red;
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
