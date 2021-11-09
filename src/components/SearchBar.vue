<template>
  <input
    placeholder="Search for a house"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>

<style>
input {
  background-color: #e8e8e8;
  background-image: url("../assets/ic_search.png");
  background-position: 15px 8px;
  background-repeat: no-repeat;
  border: none;
  border-radius: 5px;
  font-family: inherit;
  font-size: 12px;
  padding: 10px;
  padding-left: 50px;
  width: 100%;
}

@media screen and (min-width: 768px) {
  input {
    background-position: 15px 15px;
    font-size: 16px;
    padding: 15px;
    padding-left: 50px;
  }
}
</style>

<script>
export default {
  name: "SearchBar",
  props: ["modelValue"],
  emits: ["update:modelValue"],
};
</script>
