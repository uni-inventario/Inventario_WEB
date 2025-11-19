import api from "./api";

export const getEstoque = async () => {
  try {
    const response = await api.get("/estoque");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getEstoqueById = async (id) => {
  try {
    const response = await api.get(`/estoque/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createEstoque = async (estoque) => {
  try {
    const response = await api.post("/estoque", estoque)
    return response.data
  } catch (error) {
    throw error
  }
}

export const updateEstoque = async (estoque) => {
  try {
    const response = await api.put("/estoque", estoque)
    return response.data
  } catch (error) {
    throw error
  }
}

export const deleteEstoque = async (estoqueId) => {
  try {
    const response = await api.delete(`/estoque/${estoqueId}`)
    return response.data
  } catch (error) {
    throw error
  }
}