import { shallowMount } from "@vue/test-utils";
import ConfirmDelete from "@/components/ConfirmDelete.vue";

describe("ConfirmDelete.vue", () => {
  const wrapper = shallowMount(ConfirmDelete);

  it("has two buttons that respectively allow the user to delete a listing or to go back", () => {
    const buttons = wrapper.findAll("button");
    expect(buttons[0].text()).toBe("Yes, delete");
    expect(buttons[1].text()).toBe("Go back");
  });
});
