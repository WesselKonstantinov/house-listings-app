import { shallowMount } from "@vue/test-utils";
import MobileNavigationBar from "@/components/MobileNavigationBar.vue";

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
    const navItems = wrapper.findAllComponents({ name: "IconButtonLink" });
    expect(navItems.at(0).props("icon")).toEqual(
      "ic_mobile_navigarion_home_active.png"
    );
    expect(navItems.at(1).props("icon")).toEqual(
      "ic_mobile_navigarion_info.png"
    );
  });
});
