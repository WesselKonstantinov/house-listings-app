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
});
