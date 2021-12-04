import { shallowMount } from "@vue/test-utils";
import IconButtonLink from "@/components/IconButtonLink.vue";

describe("IconButtonLink.vue", () => {
  it("renders as an icon link when a link destination prop is provided", () => {
    const wrapper = shallowMount(IconButtonLink, {
      props: {
        icon: "ic_back_grey.png",
        iconAlt: "Back icon",
        linkDestination: "/",
      },
    });
    expect(wrapper.props("linkDestination")).toEqual("/");
    expect(wrapper.props("icon")).toEqual("ic_back_grey.png");
    expect(wrapper.props("iconAlt")).toEqual("Back icon");
    expect(wrapper.html()).toContain("router-link");
  });

  it("renders as a plain icon button when no link destination prop is provided", () => {
    const wrapper = shallowMount(IconButtonLink, {
      props: {
        icon: "ic_delete.png",
        iconAlt: "Delete icon",
      },
    });
    expect(wrapper.props("linkDestination")).toEqual(undefined);
    expect(wrapper.props("icon")).toEqual("ic_delete.png");
    expect(wrapper.props("iconAlt")).toEqual("Delete icon");
    expect(wrapper.html()).not.toContain("router-link");
  });
});
