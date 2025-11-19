describe("Teste da funcionalidades do estoque", () => {
  beforeEach(() => {
    cy.login();
  });

  it("deve listar os estoques com sucesso", () => {
    cy.get("#lista-estoque").should("exist");
  });

  it("deve ser possível criar e depois excluir o estoque criado", () => {
    cy.get("#lista-estoque").should("exist");
    cy.get("#button-new-estoque").click();
    cy.contains("Novo Estoque").should("exist");
    cy.get("#nome-estoque").type("Estoque teste");
    cy.get("#button-registrar-estoque").click();
    cy.contains("Estoque criado com sucesso").should("exist");

    cy.get("#lista-estoque")
      .find("li")
      .last()
      .within(() => {
        cy.get("button[aria-label='excluir']").click();
      });

    cy.get("#button-confirm-delete-estoque").click();

    cy.contains("Teste de falha").should("exist");
  });

  it("deve falhar ao criar um estoque com informação inválida", () => {
    cy.get("#lista-estoque").should("exist");
    cy.get("#button-new-estoque").click();
    cy.contains("Novo Estoque").should("exist");
    cy.get("#nome-estoque").type("     ");
    cy.get("#button-registrar-estoque").click();
    cy.contains("O nome do estorque é obrigatório.").should("exist");
  });

  it("deve editar o estoque com sucesso", () => {
    cy.get("#lista-estoque").should("exist");

    cy.get("#lista-estoque")
      .find("li")
      .eq(1)
      .within(() => {
        cy.get("button[aria-label='editar']").click();
      });

    cy.contains("Atualizar Estoque").should("exist");
    cy.get("#nome-editar-estoque").clear().type("Estoque Cypress");
    cy.get("#button-editar-estoque").click();
    cy.contains("Estoque atualizado com sucesso!").should("exist");
  });

  it("deve falhar ao editar um estoque com informação inválida", () => {
    cy.get("#lista-estoque").should("exist");

    cy.get("#lista-estoque")
      .find("li")
      .eq(1)
      .within(() => {
        cy.get("button[aria-label='editar']").click();
      });

    cy.contains("Atualizar Estoque").should("exist");
    cy.get("#nome-editar-estoque").clear().type("      ");
    cy.get("#button-editar-estoque").click();
    cy.contains("O nome do estorque é obrigatório.").should("exist");
  });
});
