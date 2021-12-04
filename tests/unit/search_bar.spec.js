import { shallowMount } from "@vue/test-utils";
import SearchBar from "@/components/SearchBar.vue";
import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      searchTerm: "",
    };
  },
  mutations: {
    setSearchTerm(state, searchTerm) {
      state.searchTerm = searchTerm;
    },
  },
});

describe("SearchBar.vue", () => {
  const wrapper = shallowMount(SearchBar, {
    global: {
      plugins: [store],
    },
  });
  it("renders an input field", () => {
    const input = wrapper.find("input");
    expect(input.exists()).toBeTruthy();
  });

  it("is empty and shows no clear icon", () => {
    const input = wrapper.find("input");
    const clearIcon = wrapper.find(".search-bar__clear");
    expect(input.element.value).toBeFalsy();
    expect(clearIcon.classes("search-bar__clear--hidden")).toBe(true);
    expect(clearIcon.classes("search-bar__clear--visible")).toBe(false);
  });

  it("updates value on change", async () => {
    const input = wrapper.find("input");
    const clearIcon = wrapper.find(".search-bar__clear");
    await input.setValue("Amsterdam");
    await input.trigger("input");
    expect(input.element.value).toBe("Amsterdam");
    expect(clearIcon.classes("search-bar__clear--visible")).toBe(true);
    expect(clearIcon.classes("search-bar__clear--hidden")).toBe(false);
  });

  it("becomes empty once the clear button has been clicked", async () => {
    const input = wrapper.find("input");
    const clearIcon = wrapper.find(".search-bar__clear");
    await input.setValue("Amsterdam");
    await input.trigger("input");
    await clearIcon.trigger("click");
    expect(input.element.value).toBeFalsy();
    expect(clearIcon.classes("search-bar__clear--hidden")).toBe(true);
    expect(clearIcon.classes("search-bar__clear--visible")).toBe(false);
  });
});
