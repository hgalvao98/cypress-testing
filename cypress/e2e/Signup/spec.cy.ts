const BASE_URL = "http://localhost:5174";

describe("signup", () => {
  it("should return error message", () => {
    cy.visit(BASE_URL);

    cy.get('[data-cy="submit-button"]').click();
    cy.get("#firstName-helper-text").should("exist");
    cy.get("#lastName-helper-text").should("exist");
    cy.get("#email-helper-text").should("exist");
  });

  it("should complete input fields and go to succes page", () => {
    cy.visit(BASE_URL);

    cy.get("#firstName").type("Name");
    cy.get("#lastName").type("Last");
    cy.get("#email").type("email@email.com");

    cy.get('[data-cy="submit-button"]').click();

    cy.url().should("include", "success");
  });
});
