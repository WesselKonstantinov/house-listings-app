describe("the mobile navigation bar", () => {
  beforeEach(() => {
    cy.viewport(320, 480);
    cy.visit("/");
  });

  it("lets the user navigate to the 'Houses' page and shows which page is active", () => {
    cy.get(".nav__list img").first().click();
    cy.url().should("eq", "http://localhost:8080/");
    cy.get(".nav__list a")
      .first()
      .should("have.class", "router-link-exact-active");
  });

  it("lets the user navigate to the 'About' page and shows which page is active", () => {
    cy.get(".nav__list img").eq(1).click();
    cy.url().should("eq", "http://localhost:8080/about");
    cy.get(".nav__list a")
      .eq(1)
      .should("have.class", "router-link-exact-active");
  });
});
