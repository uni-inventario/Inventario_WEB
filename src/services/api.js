import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  responseType: "json",
  withCredentials: false,
});

api.interceptors.request.use(
  (config) => {
    const token = JSON.parse(localStorage.getItem("access_token"));

    if (token?.token) {
      config.headers.Authorization = `Bearer ${token?.token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => {
    if (response?.data && response.data.success === false) {
      return Promise.reject({
        isHandledSuccessFalse: true,
        response: response,
      });
    }

    return response;
  },
  async (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem("access_token");
      window.location.href = "/login";
    }

    return Promise.reject(error);
  }
);

export default api;
