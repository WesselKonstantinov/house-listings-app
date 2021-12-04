import { shallowMount } from "@vue/test-utils";
import HouseListingCard from "@/components/HouseListingCard.vue";

describe("HouseListingCard.vue", () => {
  const wrapper = shallowMount(HouseListingCard, {
    props: {
      houseListing: {
        constructionYear: 2018,
        createdAt: "2020-05-07",
        description: "It is a very nice place.",
        hasGarage: true,
        id: 6,
        image: "https://intern-api.docker-dev.d-tt.nl/uploads/house4.jpg",
        location: {
          city: "Amsterdam",
          street: "Oud Heinstraat 23",
          zip: "1025 BM",
        },
        madeByMe: true,
        price: 150000,
        rooms: {
          bathrooms: 2,
          bedrooms: 5,
        },
        size: 180,
      },
    },
  });

  it("renders a card component", () => {
    const card = wrapper.find("article");
    expect(card.exists()).toBeTruthy();
  });

  it("displays the address, postal code, city, price, image, number of bedrooms, number of bathrooms and size", () => {
    expect(wrapper.find(".card__address").text()).toBe("Oud Heinstraat 23");
    expect(wrapper.find(".card__location").text()).toBe("1025 BM Amsterdam");
    expect(wrapper.find(".card__price").text()).toBe("€ 150.000");
    expect(wrapper.find(".card__image").attributes("src")).toEqual(
      "https://intern-api.docker-dev.d-tt.nl/uploads/house4.jpg"
    );
    expect(wrapper.findAll(".card__unit").at(0).text()).toBe("5");
    expect(wrapper.findAll(".card__unit").at(1).text()).toBe("2");
    expect(wrapper.findAll(".card__unit").at(2).text()).toBe("180 m2");
  });

  it("contains an edit and delete icon if the listing has been created by the user", () => {
    const actionIcons = wrapper.findAllComponents({ name: "IconButtonLink" });
    expect(actionIcons.at(0).props("icon")).toEqual("ic_edit.png");
    expect(actionIcons.at(1).props("icon")).toEqual("ic_delete.png");
  });
});
