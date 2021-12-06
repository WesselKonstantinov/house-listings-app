describe("The house listing card", () => {
  before(() => {
    cy.visit("/");
  });

  it("displays the address, postal code and city of a listing", () => {
    cy.get(".section > article .card__address").should("be.visible");
    cy.get(".section > article .card__location").should("be.visible");
  });

  it("displays the image, size, the number of bedrooms and bathrooms of a listing", () => {
    cy.get(".section > article .card__image").should("be.visible");
    cy.get(".section > article .card__icon-container").should("be.visible");
  });
});
