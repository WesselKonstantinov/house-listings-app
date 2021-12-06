describe("The edit listing page", () => {
  before(() => {
    cy.visit("/house-listings/create");
    cy.get("#street-name").type("Maliebaan");
    cy.get("#house-number").type("60");
    cy.get("#zip").type("3544 TG");
    cy.get("#city").type("Utrecht");
    const fixtureFile = "img_placeholder_house.png";
    cy.get("#image").attachFile(fixtureFile);
    cy.get("#price").type("150000");
    cy.get("#size").type("100");
    cy.get("#has-garage").select("No");
    cy.get("#bedrooms").type("1");
    cy.get("#bathrooms").type("1");
    cy.get("#construction-year").type("2010");
    cy.get("#description").type(
      "At vero eos et accusamus et iusto odio dignissimos ducimus"
    );
    cy.get(".form__submit").click();
  });

  it("enables the user to edit all fields and redirects the user to the updated detail page", () => {
    cy.get(".house-listing__actions > :first-child").click();
    cy.get("#street-name").clear().type("Ceintuurbaan");
    cy.get("#house-number").clear().type("40");
    cy.get("#zip").clear().type("1080 DS");
    cy.get("#city").clear().type("Leiden");
    const fixtureFile = "sample-listing.jpg";
    cy.get("#image").attachFile(fixtureFile);
    cy.get("#price").clear().type("120000");
    cy.get("#size").clear().type("50");
    cy.get("#has-garage").select("Yes");
    cy.get("#bedrooms").clear().type("2");
    cy.get("#bathrooms").clear().type("2");
    cy.get("#construction-year").clear().type("2015");
    cy.get("#description")
      .clear()
      .type("Sed ut perspiciatis, unde omnis iste natus error sit voluptatem");
    cy.get(".form__submit").click();
    cy.window().then((win) => {
      const {
        __store__: {
          state: { selectedHouseListingId },
        },
      } = win;
      cy.url().should("include", `/house-listings/${selectedHouseListingId}`);
      cy.url().should(
        "eq",
        `http://localhost:8080/house-listings/${selectedHouseListingId}`
      );
    });
  });
});
