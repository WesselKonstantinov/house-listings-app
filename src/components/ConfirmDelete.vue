<template>
  <div class="modal">
    <div class="modal__backdrop"></div>
    <div class="modal__body">
      <h2 class="modal__heading">Delete listing</h2>
      <p class="modal__message">
        Are you sure you want to delete this listing?<br />This action cannot be
        undone.
      </p>
      <button
        class="modal__button modal__button--primary"
        @click="deleteAndRedirect"
      >
        Yes, delete
      </button>
      <button class="modal__button" @click="closeConfirmDeleteModal">
        Go back
      </button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapMutations } from "vuex";

export default {
  name: "ConfirmDelete",
  methods: {
    ...mapActions(["deleteHouseListing"]),
    ...mapMutations(["setIsConfirmDeleteModalVisible"]),
    closeConfirmDeleteModal() {
      this.setIsConfirmDeleteModalVisible(false);
    },
    deleteAndRedirect() {
      this.deleteHouseListing().then(() => this.$router.push({ name: "Home" }));
    },
  },
};
</script>

<style>
/* || Modal elements */
.modal__backdrop {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
}

.modal__body {
  background-color: var(--secondary-background-color);
  border-radius: 15px;
  position: fixed;
  padding: 2em 0;
  left: 5%;
  right: 5%;
  top: 35%;
  text-align: center;
}

.modal__heading {
  margin: 0;
  font-size: 1.5rem;
}

.modal__message {
  margin-bottom: 30px;
  font-size: 1rem;
}

.modal__button {
  display: block;
  width: 50%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 10px;
  padding: 1em 0;
  border: none;
  border-radius: 5px;
  color: var(--button-text-color);
  font-size: 1rem;
  text-transform: uppercase;
  background-color: var(--secondary-element-color);
  cursor: pointer;
}

.modal__button--primary {
  background-color: var(--primary-element-color);
}

/* || Media queries */
@media screen and (min-width: 768px) {
  .modal__body {
    left: 20%;
    right: 20%;
  }
}

@media screen and (min-width: 1200px) {
  .modal__body {
    left: 30%;
    right: 30%;
  }
}
</style>
