describe("The house listing detail page", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("does not show a section with recommendations if they are absent", () => {
    cy.get(".home-page__content > article").first().click();
    cy.get(".recommendations").should("not.exist");
  });

  it("shows a section with recommendations if they are present", () => {
    cy.get(".home-page__content > article:nth-of-type(2)").click();
    cy.get(".recommendations").should("exist");
  });
});
