Cypress.Commands.add("login", () => {
  return cy.session(
    "usuario-logado",
    () => {
      cy.fixture("usuario").then((user) => {
        cy.visit("/login");
        cy.get("#email").type(user.email);
        cy.get("#password").type(user.senha);
        cy.get("#button-login").click();

        cy.url().should("not.include", "/login");
        cy.get("#titulo-estoque", { timeout: 10000 }).should("be.visible");
      });
    }
  ).then(() => {
    cy.visit("/estoques");
    cy.get("#titulo-estoque", { timeout: 10000 }).should("be.visible");
  });
});
