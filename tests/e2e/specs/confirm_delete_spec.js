describe("The confirm delete modal", () => {
  before(() => {
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
    cy.get(".form__submit").click();
  });

  it("becomes visible if the user clicks on the delete icon, displays a warning and deletes the listing in question", () => {
    cy.get(".house-listing__actions .action-icon--delete").click();
    cy.get(".modal__body").should("be.visible");
    cy.get(".modal__message")
      .should("contain", "Are you sure you want to delete this listing?")
      .and("contain", "This action cannot be undone.");
    cy.get("button").contains("Yes, delete").click();
    cy.window().then((win) => {
      const {
        __store__: {
          getters: { selectedHouseListing },
        },
      } = win;
      expect(selectedHouseListing).to.not.exist;
    });
  });
});
