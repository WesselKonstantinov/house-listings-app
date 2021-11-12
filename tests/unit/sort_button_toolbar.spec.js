import { shallowMount } from "@vue/test-utils";
import SortButtonToolbar from "@/components/SortButtonToolbar.vue";

describe("SortButtonToolbar.vue", () => {
  const wrapper = shallowMount(SortButtonToolbar, {
    props: { sortOption: "price" },
  });

  it("renders three buttons named 'Price', 'Size' and 'Year' in a group", () => {
    const sortButtons = wrapper.findAll(".button-group > button");
    expect(sortButtons.length).toBe(3);
    expect(sortButtons[0].text()).toBe("Price");
    expect(sortButtons[1].text()).toBe("Size");
    expect(sortButtons[2].text()).toBe("Year");
  });

  it("shows that the 'Price' button is active", () => {
    const sortButtons = wrapper.findAll(".button-group > button");
    expect(sortButtons[0].classes()).toContain("button--active");
    expect(sortButtons[1].classes()).not.toContain("button--active");
    expect(sortButtons[2].classes()).not.toContain("button--active");
  });

  it("emits an event when a button is clicked", () => {
    const sortButtons = wrapper.findAll(".button-group > button");
    sortButtons[1].trigger("click");
    expect(wrapper.emitted()).toHaveProperty("changeSortOption");
  });
});
