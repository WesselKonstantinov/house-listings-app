describe("The house listing detail page", () => {
  before(() => {
    cy.visit("/");
  });

  it("displays the address, postal code and city of a listing", () => {
    cy.get(".section > article").first().click();
    cy.get(".house-listing__address").should("be.visible");
    cy.get(".house-listing__unit").first().should("be.visible");
  });

  it("displays the description, image, number of bedrooms and bathrooms, size, construction and if the listing has a garage or not", () => {
    cy.get(".house-listing__description").should("be.visible");
    cy.get(".house-listing__image").should("be.visible");
    cy.get(".house-listing__unit").eq(1).should("be.visible");
    cy.get(".house-listing__unit").eq(2).should("be.visible");
    cy.get(".house-listing__unit").eq(3).should("be.visible");
    cy.get(".house-listing__unit").eq(4).should("be.visible");
    cy.get(".house-listing__unit").eq(5).should("be.visible");
    cy.get(".house-listing__unit").eq(6).should("be.visible");
  });

  it("displays an edit and delete button if the user owns the listing", () => {
    cy.visit("/house-listings/create");
    cy.get("#street-name").type("Alkmaarstraat");
    cy.get("#house-number").type("15");
    cy.get("#number-addition").type("E");
    cy.get("#zip").type("1024 FX");
    cy.get("#city").type("Amsterdam");
    const fixtureFile = "img_placeholder_house.png";
    cy.get("#image").attachFile(fixtureFile);
    cy.get("#price").type("1200");
    cy.get("#size").type("100");
    cy.get("#has-garage").select("No");
    cy.get("#bedrooms").type("3");
    cy.get("#bathrooms").type("1");
    cy.get("#construction-year").type("2010");
    cy.get("#description").type(
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
    );
    cy.get(".form__submit").click();
    cy.get(".house-listing__actions").should("be.visible");
  });
});
