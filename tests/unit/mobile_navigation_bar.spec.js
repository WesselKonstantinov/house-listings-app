import { shallowMount } from "@vue/test-utils";
import MobileNavigationBar from "@/components/MobileNavigationBar.vue";
import HomeIcon from "../../src/assets/ic_mobile_navigarion_home.png";

describe("MobileNavigationBar.vue", () => {
  const wrapper = shallowMount(MobileNavigationBar);
  it("renders a navigation section element", () => {
    const nav = wrapper.find("nav");
    expect(nav.exists()).toBeTruthy();
  });

  it("renders a link with a house icon", () => {
    const navItem = wrapper.findAll(".nav__icon").at(0);
    expect(navItem.attributes("src")).toEqual(HomeIcon);
  });
});
