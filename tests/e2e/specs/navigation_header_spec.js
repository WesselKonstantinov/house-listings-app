describe("the navigation header", () => {
  before(() => {
    cy.visit("/");
  });

  it("lets the user navigate to the 'Houses' page and shows which page is active", () => {
    cy.get("nav").contains("Houses").click();
    cy.url().should("eq", "http://localhost:8080/");
    cy.get("nav")
      .contains("Houses")
      .should("have.class", "router-link-exact-active");
  });

  it("lets the user navigate to the 'About' page and shows which page is active", () => {
    cy.get("nav").contains("About").click();
    cy.url().should("eq", "http://localhost:8080/about");
    cy.get("nav")
      .contains("About")
      .should("have.class", "router-link-exact-active");
  });
});
