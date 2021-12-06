import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// Get store reference during E2E tests
if (window.Cypress) {
  window.__store__ = store;
}

createApp(App).use(store).use(router).mount("#app");
