import api from "./api";

export const registerUser = async (data) => {
  const response = await api.post("/usuario", data);
  return response.data;
};

export const getUsuario = async () => {
  const response = await api.get("/usuario");
  return response.data;
};

export const updateUsuario = async (data) => {
  const response = await api.put("/usuario", data);
  return response.data;
};