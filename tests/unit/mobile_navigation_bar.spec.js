import { shallowMount } from "@vue/test-utils";
import MobileNavigationBar from "@/components/MobileNavigationBar.vue";

describe("MobileNavigationBar.vue", () => {
  const wrapper = shallowMount(MobileNavigationBar);
  it("renders a navigation section element", () => {
    const nav = wrapper.find("nav");
    expect(nav.exists()).toBeTruthy();
  });

  it("renders a link with a house icon", () => {
    const navItem = wrapper.find("img[src*='house']");
    expect(navItem.exists()).toBeTruthy();
  });
});
