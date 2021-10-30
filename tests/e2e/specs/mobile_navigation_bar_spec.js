describe("the mobile navigation bar", () => {
  before(() => {
    cy.viewport(320, 480);
    cy.visit("/");
  });

  it("lets the user navigate to the 'Houses' page and shows which page is active", () => {
    cy.get("img[src*='house']").click();
    cy.url().should("eq", "http://localhost:8080/");
    cy.get("img[src*='house']")
      .should("have.class", "router-link-exact-active")
      .and("have.src", "src/assets/ic_mobile_navigarion_home_active.png");
  });
});
