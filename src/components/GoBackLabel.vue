<template>
  <div class="back-link">
    <icon-button-link
      class="back-link__link"
      :icon="icon"
      :icon-alt="iconAlt"
      :link-destination="linkDestination"
    />
    <h2 class="back-link__text">{{ text }}</h2>
  </div>
</template>

<style>
.back-link {
  display: none;
}

@media screen and (min-width: 768px) {
  .back-link {
    display: flex;
    margin-bottom: 30px;
  }

  .back-link__link {
    position: relative;
    bottom: 1px;
  }

  .back-link__text {
    font-size: 16px;
    margin: 0 10px;
  }
}
</style>

<script>
import IconButtonLink from "./IconButtonLink.vue";

export default {
  name: "GoBackLabel",
  components: { IconButtonLink },
  props: {
    text: {
      required: true,
      type: String,
    },
    icon: {
      required: true,
      type: String,
    },
    iconAlt: {
      required: true,
      type: String,
    },
    linkDestination: {
      required: true,
      type: String,
    },
  },
};
</script>
