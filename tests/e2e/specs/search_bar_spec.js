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
    cy.window().then((win) => {
      const {
        __store__: {
          getters: { sortedHouseListingsCount },
        },
      } = win;
      cy.get("h2.section__results").should("be.visible");
      cy.get("h2.section__results").should(
        "contain",
        `${sortedHouseListingsCount}`
      );
    });
  });

  it("enables the user to see if their search input did not match any results", () => {
    cy.get("input").type("lll");
    cy.get(".no-results").should("be.visible");
  });
});
