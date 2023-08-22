const BASE_URL = Cypress.env("baseUrl");

describe("should render page", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should visit signup", () => {
    cy.visit("/");
  });

  it("should render components", () => {
    cy.findByText("Signup").should("exist");
    cy.findByLabelText("First Name").should("exist");
    cy.findByLabelText("Last Name").should("exist");
    cy.get("#email").should("exist");
    cy.get('[data-cy="submit-button"]').should("exist");
  });

  it("should return error message for empty field", () => {
    cy.get('[data-cy="submit-button"]').click();
    cy.get("#firstName-helper-text").should("exist");
    cy.get("#lastName-helper-text").should("exist");
    cy.get("#email-helper-text").should("exist");
    cy.url().should("equal", `${BASE_URL}/`);
  });

  it("should return invalid email error", () => {
    cy.get("#firstName").type("Henrique");
    cy.get("#lastName").type("Galvao");
    cy.get("#email").type("email");
    cy.get('[data-cy="submit-button"]').click();
    cy.get("#email-helper-text").should("contain.text", "Invalid email");
  });

  it("should signup successfully", () => {
    /* ==== Generated with Cypress Studio ==== */
    cy.get("#firstName").type("Henrique");
    cy.get("#lastName").type("Galvao");
    cy.get("#email").type("email@email.com");
    cy.get('[data-cy="submit-button"]').click();
    cy.url().should("equal", `${BASE_URL}/success`);
    cy.url().should("include", "success");
    cy.get(".MuiTypography-root").should("contain.text", "SUCCESS");
    /* ==== End Cypress Studio ==== */
  });
});
