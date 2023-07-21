const BASE_URL = "http://localhost:5174";

describe("visit home", () => {
  it("should visit default vite home page and check for component", () => {
    cy.visit(BASE_URL);

    cy.get(".read-the-docs").should("exist");
    cy.get(".read-the-docs").should(
      "have.text",
      "Click on the Vite and React logos to learn more"
    );
  });

  it("should click on the increment button and add one", () => {
    cy.visit(BASE_URL);

    cy.get('[data-cy="increment-button"]').click();

    cy.get('[data-cy="count"]').should("exist");
    cy.contains('[data-cy="count"]', 1);
  });
});
