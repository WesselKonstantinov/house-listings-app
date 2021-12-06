describe("The sort button toolbar", () => {
  before(() => {
    cy.visit("/");
  });

  it("indicates that listings are initially sorted by price", () => {
    cy.get(".button-group > button")
      .contains("Price")
      .should("have.class", "button--active");
  });

  it("updates the active status of a button when it is clicked", () => {
    cy.get(".button-group > button").contains("Size").click();
    cy.get(".button-group > button")
      .contains("Size")
      .should("have.class", "button--active");
  });
});
