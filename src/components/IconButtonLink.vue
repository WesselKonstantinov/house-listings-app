<template>
  <router-link :to="linkDestination">
    <img :src="require(`../assets/${icon}`)" :alt="iconAlt" />
  </router-link>
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
      required: true,
      type: String,
    },
  },
};
</script>
