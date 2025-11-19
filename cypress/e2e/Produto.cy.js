describe('Teste da funcionalidades dos produtos', () => {

    beforeEach(() => {
        cy.login();

        cy.get("#lista-estoque").should("exist");

        cy.get("#lista-estoque")
            .find("li")
            .eq(1)
            .within(() => {
                cy.get("button[aria-label='visualizar']").click();
            });

    });

    it('deve listar os produtos com sucesso', () => {
        cy.get("#lista-produto").should("exist");
    });

    it('deve ser possível criar e depois excluir o produto criado', () => {
        cy.get("#lista-produto").should("exist");
        cy.get("#button-new-produto").click();
        cy.contains("Novo Produto").should("exist");
        cy.get("#nome-new-produto").type("Produto teste");
        cy.get("#descricao-new-produto").type("Descrição do produto teste.");
        cy.get("#preco-new-produto").clear().type(10);
        cy.get("#quantidade-new-produto").clear().type(10);
        cy.get("#button-registrar-produto").click();
        cy.contains("Produto criado com sucesso!").should("exist");

        cy.get("#lista-produto")
            .find("li")
            .last()
            .within(() => {
                cy.get("button[aria-label='excluir']").click();
            });

        cy.get("#button-confirm-delete-produto").click();

        cy.contains("Produto excluído com sucesso!").should("exist");
    });

    it('deve falhar ao criar um produto com nome inválido', () => {
        cy.get("#lista-produto").should("exist");
        cy.get("#button-new-produto").click();
        cy.contains("Novo Produto").should("exist");
        cy.get("#nome-new-produto").type(" ");
        cy.get("#descricao-new-produto").type("Descrição do produto teste.");
        cy.get("#preco-new-produto").clear().type(10);
        cy.get("#quantidade-new-produto").clear().type(10);
        cy.get("#button-registrar-produto").click();
        cy.contains("O nome do produto é obrigatório.").should("exist");
    });

    it('deve falhar ao criar um produto com descrição inválida', () => {
        cy.get("#lista-produto").should("exist");
        cy.get("#button-new-produto").click();
        cy.contains("Novo Produto").should("exist");
        cy.get("#nome-new-produto").type("Produto teste");
        cy.get("#descricao-new-produto").type(" ");
        cy.get("#preco-new-produto").clear().type(10);
        cy.get("#quantidade-new-produto").clear().type(10);
        cy.get("#button-registrar-produto").click();
        cy.contains("A descrição do produto é obrigatório.").should("exist");
    });

    it('deve falhar ao criar um produto com preço inválido', () => {
        cy.get("#lista-produto").should("exist");
        cy.get("#button-new-produto").click();
        cy.contains("Novo Produto").should("exist");
        cy.get("#nome-new-produto").type("Produto teste");
        cy.get("#descricao-new-produto").type("Descrição do produto teste.");
        cy.get("#preco-new-produto").clear().type(0);
        cy.get("#quantidade-new-produto").clear().type(10);
        cy.get("#button-registrar-produto").click();
        cy.contains("O preço do produto é obrigatório.").should("exist");
    });

    it('deve falhar ao criar um produto com quantidade inválida', () => {
        cy.get("#lista-produto").should("exist");
        cy.get("#button-new-produto").click();
        cy.contains("Novo Produto").should("exist");
        cy.get("#nome-new-produto").type("Produto teste");
        cy.get("#descricao-new-produto").type("Descrição do produto teste.");
        cy.get("#preco-new-produto").clear().type(10);
        cy.get("#quantidade-new-produto").clear().type(0);
        cy.get("#button-registrar-produto").click();
        cy.contains("A quantidade do produto é obrigatória.").should("exist");
    });

    it('deve editar um produto com sucesso', () => {
        cy.get("#lista-produto").should("exist");

        cy.get("#lista-produto")
            .find("li")
            .eq(0)
            .within(() => {
                cy.get("button[aria-label='editar']").click();
            });

        cy.contains("Atualizar Produto").should("exist");
        cy.get("#nome-editar-produto").clear().type("Produto A");
        cy.get("#descricao-editar-produto").clear().type("Descrição do produto teste.");
        cy.get("#preco-editar-produto").clear().type(10);
        cy.get("#quantidade-editar-produto").clear().type(10);
        cy.get("#button-editar-produto").click();

        cy.contains("Produto atualizado com sucesso!").should("exist");
    });

    it('deve falhar ao editar o produto com nome inválido', () => {
        cy.get("#lista-produto").should("exist");

        cy.get("#lista-produto")
            .find("li")
            .eq(0)
            .within(() => {
                cy.get("button[aria-label='editar']").click();
            });

        cy.contains("Atualizar Produto").should("exist");
        cy.get("#nome-editar-produto").clear().type(" ");
        cy.get("#descricao-editar-produto").clear().type("Descrição do produto teste.");
        cy.get("#preco-editar-produto").clear().type(10);
        cy.get("#quantidade-editar-produto").clear().type(10);
        cy.get("#button-editar-produto").click();

        cy.contains("O nome do produto é obrigatório.").should("exist");
    });

    it('deve falhar ao editar o produto com descrição inválida', () => {
        cy.get("#lista-produto").should("exist");

        cy.get("#lista-produto")
            .find("li")
            .eq(0)
            .within(() => {
                cy.get("button[aria-label='editar']").click();
            });

        cy.contains("Atualizar Produto").should("exist");
        cy.get("#nome-editar-produto").clear().type("Produto A");
        cy.get("#descricao-editar-produto").clear().type(" ");
        cy.get("#preco-editar-produto").clear().type(10);
        cy.get("#quantidade-editar-produto").clear().type(10);
        cy.get("#button-editar-produto").click();

        cy.contains("A descrição do produto é obrigatório.").should("exist");
    });

    it('deve falhar ao editar o produto com preço inválido', () => {
        cy.get("#lista-produto").should("exist");

        cy.get("#lista-produto")
            .find("li")
            .eq(0)
            .within(() => {
                cy.get("button[aria-label='editar']").click();
            });

        cy.contains("Atualizar Produto").should("exist");
        cy.get("#nome-editar-produto").clear().type("Produto A");
        cy.get("#descricao-editar-produto").clear().type("Descrição do produto teste.");
        cy.get("#preco-editar-produto").clear().type(0);
        cy.get("#quantidade-editar-produto").clear().type(10);
        cy.get("#button-editar-produto").click();

        cy.contains("O preço do produto é obrigatório.").should("exist");
    });

    it('deve falhar ao editar o produto com quantidade inválido', () => {
        cy.get("#lista-produto").should("exist");

        cy.get("#lista-produto")
            .find("li")
            .eq(0)
            .within(() => {
                cy.get("button[aria-label='editar']").click();
            });

        cy.contains("Atualizar Produto").should("exist");
        cy.get("#nome-editar-produto").clear().type("Produto A");
        cy.get("#descricao-editar-produto").clear().type("Descrição do produto teste.");
        cy.get("#preco-editar-produto").clear().type(10);
        cy.get("#quantidade-editar-produto").clear().type(0);
        cy.get("#button-editar-produto").click();

        cy.contains("A quantidade do produto é obrigatória.").should("exist");
    });

})