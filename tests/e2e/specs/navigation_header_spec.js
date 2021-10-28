describe("the navigation header", () => {
  before(() => {
    cy.visit("/");
  });

  it("lets the user navigate to the 'Houses' page and shows which page is active", () => {
    cy.get(".nav").contains("Houses").click();
    cy.url().should("eq", "/");
    cy.get(".nav")
      .contains("Houses")
      .should("have.class", "router-link-exact-active");
  });
});
