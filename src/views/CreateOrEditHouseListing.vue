<template>
  <!-- Page heading and back icon to be displayed on mobile -->
  <h1 class="mobile-header">{{ headingText }}</h1>
  <icon-button-link
    icon="ic_back_grey.png"
    icon-alt="Back Icon"
    icon-class="action-icon--small"
    :link-destination="previousRoute"
    class="action-icon action-icon--back"
  />
  <!-- Back label and page heading to be displayed on desktop -->
  <go-back-label
    :text="backLabelText"
    icon="ic_back_grey.png"
    icon-alt="Back icon"
    :linkDestination="previousRoute"
  />
  <h1 class="form-heading">{{ headingText }}</h1>
  <house-listing-form
    :house-listing="selectedHouseListing"
    :is-editing="isEditing"
  />
</template>

<script>
import { mapMutations, mapGetters } from "vuex";
import HouseListingForm from "../components/HouseListingForm.vue";
import IconButtonLink from "../components/IconButtonLink.vue";
import GoBackLabel from "../components/GoBackLabel.vue";

export default {
  name: "CreateOrEditHouseListing",
  components: {
    HouseListingForm,
    IconButtonLink,
    GoBackLabel,
  },
  computed: {
    ...mapGetters(["selectedHouseListing"]),
    isEditing() {
      return "id" in this.$route.params;
    },
    backLabelText() {
      return this.isEditing ? "Back to detail page" : "Back to overview";
    },
    headingText() {
      return this.isEditing ? "Edit listing" : "Create new listing";
    },
    previousRoute() {
      return this.isEditing ? `/house-listings/${this.$route.params.id}` : "/";
    },
  },
  methods: {
    ...mapMutations(["setSelectedHouseListing"]),
  },
  created() {
    if ("id" in this.$route.params) {
      const houseListingId = Number(this.$route.params.id);
      this.setSelectedHouseListing(houseListingId);
    } else {
      this.setSelectedHouseListing(null);
    }
  },
  mounted() {
    document.body.classList.add("has-bg-image");
  },
  unmounted() {
    document.body.classList.remove("has-bg-image");
  },
};
</script>

<style>
/* || Heading and background */
.form-heading {
  display: none;
}

.has-bg-image {
  background-image: url("../assets/img_background.png");
  background-position: center bottom;
  background-repeat: no-repeat;
  background-size: contain;
}

/* || Media queries */
@media screen and (min-width: 768px) {
  .form-heading {
    display: block;
    font-size: 2.666666rem;
    margin: 30px 0;
  }

  .has-bg-image {
    background-image: url("../assets/img_background@3x.png");
    background-size: cover;
  }
}
</style>
