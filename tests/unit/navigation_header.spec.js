import { shallowMount } from "@vue/test-utils";
import NavigationHeader from "@/components/NavigationHeader.vue";

describe("NavigationHeader.vue", () => {
  const wrapper = shallowMount(NavigationHeader);
  it("renders a navigation section element", () => {
    const nav = wrapper.find("nav");
    expect(nav.exists()).toBeTruthy();
  });

  it("renders a link named 'Houses' and one named 'About'", () => {
    const navItems = wrapper.findAll("router-link");
    expect(navItems[0].text()).toBe("Houses");
    expect(navItems[1].text()).toBe("About");
  });
});
