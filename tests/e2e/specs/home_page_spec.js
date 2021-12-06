describe("The home page", () => {
  before(() => {
    cy.visit("/");
  });

  it("shows a list of all available houses", () => {
    cy.get(".section > article").should("be.visible");
  });

  it("lets the user access the details of a house by clicking on a listing", () => {
    cy.get(".section > article").first().click();

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
