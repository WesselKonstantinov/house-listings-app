import { shallowMount } from "@vue/test-utils";
import SearchBar from "@/components/SearchBar.vue";

describe("SearchBar.vue", () => {
  const wrapper = shallowMount(SearchBar, { props: { modelValue: "" } });
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
    await input.trigger("keyup");
    expect(input.element.value).toBe("Amsterdam");
    expect(clearIcon.classes("search-bar__clear--visible")).toBe(true);
    expect(clearIcon.classes("search-bar__clear--hidden")).toBe(false);
  });
});
