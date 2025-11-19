import api from "./api"

export const createProduto = async (produto) => {
    try {
        const body = [
            {
                nome: produto?.nome || "",
                descricao: produto?.descricao || "",
                preco: Number(produto?.preco) || 0,
                quantidade: Number(produto?.quantidade) || 0,
                estoqueId: produto?.estoqueId
            }
        ]

        const response = await api.post("/produto", body)
        return response.data
    } catch (error) {
        throw error
    }
}

export const deleteProduto = async (produtoId) => {
    const response = await api.delete(`/produto/${produtoId}`)
    return response.data
}

export const getProdutoById = async (produtoId) => {
    const response = await api.get(`/produto/${produtoId}`);
    return response.data
}

export const updateProduto = async (produto) => {
    try {
        const body = {
            id: produto?.id || 0,
            nome: produto?.nome || "",
            descricao: produto?.descricao || "",
            preco: Number(produto?.preco) || 0,
            quantidade: Number(produto?.quantidade) || 0,
            estoqueId: produto?.estoqueId
        }

        const response = await api.put("/produto", body)
        return response.data
    } catch (error) {
        throw error
    }
}