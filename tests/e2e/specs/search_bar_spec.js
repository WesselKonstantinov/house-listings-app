describe("The search bar", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("enables the user to clear their search input after typing", () => {
    cy.get("input").type("Amsterdam");
    cy.get(".search-bar__clear").click();
    cy.get("input").should("have.value", "");
  });

  it("enables the user to see a result indication", () => {
    cy.get("input").type("Amsterdam");
    cy.contains("results found").should("be.visible");
    cy.contains("results found").then(($el) => {
      const resultsNumber = $el.text()[0];
      cy.get(".home-page__content > article").should(
        "have.length",
        resultsNumber
      );
    });
  });

  it("enables the user to see if their search input did not match any results", () => {
    cy.get("input").type("lll");
    cy.get(".no-results").should("be.visible");
  });
});
