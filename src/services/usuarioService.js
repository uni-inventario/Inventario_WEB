import api from "./api";

export const registerUser = async (data) => {
  const response = await api.post("/usuario", data);
  return response.data;
};
