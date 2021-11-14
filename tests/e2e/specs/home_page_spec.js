describe("The home page", () => {
  before(() => {
    cy.visit("/");
  });

  it("shows a list of all available houses", () => {
    cy.get(".home-page__content > article").should("be.visible");
  });

  it("lets the user access the details of a house by clicking on a listing", () => {
    cy.get(".home-page__content > article").first().click();
    cy.url().should("include", "/house-listings/2");
    cy.url().should("eq", "http://localhost:8080/house-listings/2");
  });
});
