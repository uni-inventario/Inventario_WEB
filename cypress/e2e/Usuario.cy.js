describe('Teste da funcionalidades do usuário', () => {

    beforeEach(() => {
        cy.login();
    });

    it('deve carregar a página com sucesso', () => {
        cy.get("#lista-estoque").should("exist");
        cy.get("#button-perfil").should("exist");
    });

    it('deve ver o perfil com sucesso', () => {
        cy.get("#button-perfil").click();
        cy.get("#button-perfil-function").click();
        cy.get("#titulo-perfil").should("be.visible");
    });

    it('deve editar o perfil com sucesso', () => {
        cy.get("#button-perfil").click();
        cy.get("#button-perfil-function").click();
        cy.get("#titulo-perfil").should("be.visible");
        cy.get("#button-editar").click();
        cy.contains("Usuário atualizado com sucesso!").should("be.visible")
    });

    it('deve falhar ao editar o perfil', () => {
        cy.get("#button-perfil").click();
        cy.get("#button-perfil-function").click();
        cy.get("#titulo-perfil", {timeout: 5000}).should("be.visible");
        cy.get("#nome-perfil").clear().type(" ")
        cy.get("#button-editar").click();
        cy.contains("O nome do Usuario é obrigatório.").should("be.visible")
    });

})