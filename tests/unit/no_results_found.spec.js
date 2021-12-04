import { shallowMount } from "@vue/test-utils";
import NoResultsFound from "@/components/NoResultsFound.vue";

describe("NoResultsFound.vue", () => {
  const wrapper = shallowMount(NoResultsFound);
  it("renders an image", () => {
    const image = wrapper.find("img");
    expect(image.exists()).toBeTruthy();
  });

  it("displays a text that says no results were found", () => {
    const message = wrapper.find("p");
    expect(message.html()).toBe(
      '<p class="no-results__message"> No results found.<br>Please try another keyword. </p>'
    );
  });
});
