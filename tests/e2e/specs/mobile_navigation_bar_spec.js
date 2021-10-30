describe("the mobile navigation bar", () => {
  before(() => {
    cy.viewport(320, 480);
    cy.visit("/");
  });

  it("lets the user navigate to the 'Houses' page and shows which page is active", () => {
    cy.get(".nav__icon").first().click();
    cy.url().should("eq", "http://localhost:8080/");
    cy.get(".nav__icon")
      .first()
      .parent()
      .should("have.class", "router-link-exact-active");
  });
});
