describe("The sort button toolbar", () => {
  before(() => {
    cy.visit("/");
  });

  it("updates the active status of a button when it is clicked", () => {
    cy.get(".button-group > button").contains("Size").click();
    cy.get(".button-group > button")
      .contains("Size")
      .should("have.class", "button--active");
  });
});
