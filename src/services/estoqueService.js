import api from "./api";

export const getEstoque = async () => {
  try {
    const response = await api.get("/estoque");
    return response.data;
  } catch (error) {
    throw error;
  }
};
