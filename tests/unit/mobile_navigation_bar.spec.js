import { shallowMount } from "@vue/test-utils";
import MobileNavigationBar from "@/components/MobileNavigationBar.vue";
import HomeIconActive from "../../src/assets/ic_mobile_navigarion_home_active.png";

describe("MobileNavigationBar.vue", () => {
  const wrapper = shallowMount(MobileNavigationBar, {
    global: {
      mocks: {
        $route: {
          path: "/",
          name: "Home",
        },
      },
    },
  });
  it("renders a navigation section element", () => {
    const nav = wrapper.find("nav");
    expect(nav.exists()).toBeTruthy();
  });

  it("renders a link with an active house icon", () => {
    const navItem = wrapper.findAll(".nav__icon").at(0);
    expect(navItem.attributes("src")).toEqual(HomeIconActive);
  });
});
