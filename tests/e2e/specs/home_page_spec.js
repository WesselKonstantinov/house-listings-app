describe("The home page", () => {
  before(() => {
    cy.visit("/");
  });

  it("shows a list of all available houses", () => {
    cy.get(".home-page__content > article").should("be.visible");
  });
});
