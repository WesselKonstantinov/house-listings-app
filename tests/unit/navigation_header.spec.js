import { shallowMount } from "@vue/test-utils";
import NavigationHeader from "@/components/NavigationHeader.vue";

describe("NavigationHeader.vue", () => {
  const wrapper = shallowMount(NavigationHeader);
  it("renders a navigation section element", () => {
    const nav = wrapper.find("nav");
    expect(nav.exists()).toBeTruthy;
  });

  it("renders a link named 'Houses'", () => {
    const navItem = wrapper.find("router-link");
    expect(navItem.text()).toBe("Houses");
  });
});
