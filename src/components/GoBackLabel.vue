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

<style>
/* || Back link */
.back-link {
  display: none; /* Hide component for mobile */
}

/* || Media queries */
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
    color: var(--primary-text-color);
    font-weight: 600;
    font-size: 1.33333rem;
    margin: 0 10px;
  }
}
</style>
