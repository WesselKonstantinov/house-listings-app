import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import HouseListingDetail from "../views/HouseListingDetail.vue";
import NewHouseListing from "../views/NewHouseListing.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/house-listings/:id",
    name: "HouseListingDetail",
    component: HouseListingDetail,
  },
  {
    path: "/house-listings/create",
    name: "NewHouseListing",
    component: NewHouseListing,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;
