import api from "./api";

export const login = async (email, senha) => {
  try {
    const response = await api.post("auth/login", { email, senha });
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const logout = async () => {
  try {
    const response = await api.post("auth/logout");
    return response.data;
  } catch (error) {
    throw error;
  }
};
