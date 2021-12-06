describe("The create new listing page", () => {
  beforeEach(() => {
    cy.visit("/house-listings/create");
    cy.get("#street-name").type("Softwareweg");
    cy.get("#house-number").type("45");
    cy.get("#number-addition").type("E");
    cy.get("#zip").type("1044 RD");
    cy.get("#city").type("Groningen");
    const fixtureFile = "img_placeholder_house.png";
    cy.get("#image").attachFile(fixtureFile);
    cy.get("#price").type("120000");
    cy.get("#size").type("140");
    cy.get("#has-garage").select("Yes");
    cy.get("#bedrooms").type("4");
    cy.get("#bathrooms").type("2");
    cy.get("#construction-year").type("2013");
    cy.get("#description").type(
      "At vero eos et accusamus et iusto odio dignissimos ducimus"
    );
  });

  it("displays an error message if the user has not completed all required fields or if there is a validation error", () => {
    cy.get("#street-name").clear();
    cy.get("#house-number").type("A");
    cy.get(".picture-input__clear").click();
    cy.get(".form__group:nth-of-type(1) > .form__error-message")
      .should("be.visible")
      .and("contain", "Required field missing");
    cy.get(".form__group:nth-of-type(2) > .form__error-message")
      .should("be.visible")
      .and("contain", "Value must be numeric");
    cy.get(".form__group:nth-of-type(6) > .form__error-message")
      .should("be.visible")
      .and("contain", "Required image missing");
  });

  it("redirects the user to the newly created listing detail page after submitting the form", () => {
    cy.get(".form__submit").click();
    cy.window().then((win) => {
      const {
        __store__: {
          state: { selectedHouseListingId },
        },
      } = win;
      cy.url().should("include", `/house-listings/${selectedHouseListingId}`);
      cy.url().should(
        "eq",
        `http://localhost:8080/house-listings/${selectedHouseListingId}`
      );
    });
  });
});
