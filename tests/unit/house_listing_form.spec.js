import { shallowMount } from "@vue/test-utils";
import HouseListingForm from "@/components/HouseListingForm.vue";

describe("HouseListingForm.vue", () => {
  it("is empty when there is no defined house listing and has a disabled button that calls the user to post new data", () => {
    const wrapper = shallowMount(HouseListingForm);
    expect(wrapper.find("#street-name").element.value).toBeFalsy();
    expect(wrapper.find("#house-number").element.value).toBeFalsy();
    expect(wrapper.find("#number-addition").element.value).toBeFalsy();
    expect(wrapper.find("#zip").element.value).toBeFalsy();
    expect(wrapper.find("#city").element.value).toBeFalsy();
    expect(wrapper.find(".picture-input__preview").exists()).toBeFalsy();
    expect(wrapper.find("#price").element.value).toBeFalsy();
    expect(wrapper.find("#size").element.value).toBeFalsy();
    expect(wrapper.find("#has-garage").element.value).toBeFalsy();
    expect(wrapper.find("#bedrooms").element.value).toBeFalsy();
    expect(wrapper.find("#bathrooms").element.value).toBeFalsy();
    expect(wrapper.find("#construction-year").element.value).toBeFalsy();
    expect(wrapper.find("#description").element.value).toBeFalsy();
    expect(wrapper.find(".form__submit").text()).toBe("Post");
    expect(wrapper.find(".form__submit").element.disabled).toBeTruthy();
  });

  it("is populated with data when there is a defined house listing and has an active button that calls the user to save edited data", () => {
    const wrapper = shallowMount(HouseListingForm, {
      props: {
        isEditing: true,
        houseListing: {
          constructionYear: 2013,
          createdAt: "2020-05-07",
          description: "It is a very nice place.",
          hasGarage: true,
          id: 6,
          image: "https://intern-api.docker-dev.d-tt.nl/uploads/house4.jpg",
          location: {
            city: "Leiden",
            street: "Maliebaan 10A",
            zip: "1035 GH",
          },
          madeByMe: true,
          price: 120000,
          rooms: {
            bathrooms: 1,
            bedrooms: 2,
          },
          size: 100,
        },
      },
    });
    expect(wrapper.find("#street-name").element.value).toBe("Maliebaan");
    expect(wrapper.find("#house-number").element.value).toBe("10");
    expect(wrapper.find("#number-addition").element.value).toBe("A");
    expect(wrapper.find("#zip").element.value).toBe("1035 GH");
    expect(wrapper.find("#city").element.value).toBe("Leiden");
    expect(wrapper.find(".picture-input__preview").exists()).toBeTruthy();
    expect(wrapper.find(".picture-input__preview").attributes("src")).toEqual(
      "https://intern-api.docker-dev.d-tt.nl/uploads/house4.jpg"
    );
    expect(wrapper.find("#price").element.value).toBe("120000");
    expect(wrapper.find("#size").element.value).toBe("100");
    expect(wrapper.find("#has-garage").element.value).toBe("yes");
    expect(wrapper.find("#bedrooms").element.value).toBe("2");
    expect(wrapper.find("#bathrooms").element.value).toBe("1");
    expect(wrapper.find("#construction-year").element.value).toBe("2013");
    expect(wrapper.find("#description").element.value).toBe(
      "It is a very nice place."
    );
    expect(wrapper.find(".form__submit").text()).toBe("Save");
    expect(wrapper.find(".form__submit").element.disabled).toBeFalsy();
  });

  it("displays an error message if a required field is missing", async () => {
    const wrapper = shallowMount(HouseListingForm);
    await wrapper.find("#street-name").trigger("blur");
    expect(wrapper.find(".form__error-message").exists()).toBeTruthy();
    expect(wrapper.find(".form__error-message").text()).toBe(
      "Required field missing"
    );
  });

  it("displays an error message if the user fills in an incorrect value", async () => {
    const wrapper = shallowMount(HouseListingForm);
    await wrapper.find("#bedrooms").setValue("a");
    await wrapper.find("#bedrooms").trigger("blur");
    expect(wrapper.find(".form__error-message").exists()).toBeTruthy();
    expect(wrapper.find(".form__error-message").text()).toBe(
      "Value must be numeric"
    );
  });
});
