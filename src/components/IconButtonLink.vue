<template>
  <!-- Renders an icon as either a link or a button depending on its functionality -->
  <router-link v-if="linkDestination" :to="linkDestination">
    <img
      :src="require(`../assets/${icon}`)"
      :alt="iconAlt"
      :class="iconClass"
    />
  </router-link>
  <span v-else :style="{ cursor: 'pointer' }">
    <img
      :src="require(`../assets/${icon}`)"
      :alt="iconAlt"
      :class="iconClass"
    />
  </span>
</template>

<script>
export default {
  name: "IconButtonLink",
  props: {
    icon: {
      required: true,
      type: String,
    },
    iconAlt: {
      required: true,
      type: String,
    },
    linkDestination: {
      type: [String, Object],
    },
    iconClass: {
      type: String,
    },
  },
};
</script>
