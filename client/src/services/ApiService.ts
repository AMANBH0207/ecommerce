import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  (config) => {
    console.log("Request URL:", config?.baseURL??0, "+" ,config?.url??0);
    return config;
  },
  (error) => Promise.reject(error)
);

export const registerUser = async (body: any) => {
  const response = await api.post("users/register", body);
  return response;
};
