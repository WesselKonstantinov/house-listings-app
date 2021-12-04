import { shallowMount } from "@vue/test-utils";
import SortButtonToolbar from "@/components/SortButtonToolbar.vue";
import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      sortOption: "price",
    };
  },
  mutations: {
    setSortOption(state, sortOption) {
      state.sortOption = sortOption;
    },
  },
});

describe("SortButtonToolbar.vue", () => {
  const wrapper = shallowMount(SortButtonToolbar, {
    global: {
      plugins: [store],
    },
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

  it("changes the active status of a button when it is clicked", async () => {
    const sortButtons = wrapper.findAll(".button-group > button");
    await sortButtons[1].trigger("click");
    expect(sortButtons[1].classes()).toContain("button--active");
    expect(sortButtons[0].classes()).not.toContain("button--active");
    expect(sortButtons[2].classes()).not.toContain("button--active");
  });
});
