import { shallowMount } from "@vue/test-utils";
import MobileNavigationBar from "@/components/MobileNavigationBar.vue";
import HomeIconActive from "../../src/assets/ic_mobile_navigarion_home_active.png";
import InfoIcon from "../../src/assets/ic_mobile_navigarion_info.png";

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

  it("renders a link with an active house icon and one with an inactive info icon", () => {
    const navItems = wrapper.findAll(".nav__icon");
    expect(navItems[0].attributes("src")).toEqual(HomeIconActive);
    expect(navItems[1].attributes("src")).toEqual(InfoIcon);
  });
});
