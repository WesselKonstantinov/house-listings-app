<template>
  <div>
    <house-listing-form :house-listing="selectedHouseListing" />
  </div>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";
import HouseListingForm from "../components/HouseListingForm.vue";

export default {
  name: "CreateOrEditHouseListing",
  components: { HouseListingForm },
  computed: {
    ...mapGetters(["selectedHouseListing"]),
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
};
</script>
