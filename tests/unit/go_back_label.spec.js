import { shallowMount } from "@vue/test-utils";
import GoBackLabel from "@/components/GoBackLabel.vue";

describe("GoBackLabel.vue", () => {
  const wrapper = shallowMount(GoBackLabel, {
    props: {
      text: "Back to overview",
      icon: "ic_back_grey.png",
      iconAlt: "Back icon",
      linkDestination: "/",
    },
  });
  it("renders an icon link", () => {
    const iconLink = wrapper.findComponent({ name: "IconButtonLink" });
    expect(iconLink.props("icon")).toEqual("ic_back_grey.png");
    expect(iconLink.props("iconAlt")).toEqual("Back icon");
    expect(iconLink.props("linkDestination")).toEqual("/");
  });

  it("renders a label with the correct text", () => {
    const label = wrapper.find("h2");
    expect(label.text()).toBe("Back to overview");
  });
});
