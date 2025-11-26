import axios, { type AxiosRequestHeaders } from "axios";
import type { LoginPayload, LoginRegisterResponse, RegisterPayload} from "./types/authTypes";
import type { ApiResponse } from "./types/common";
import type { BannersDataResponse, singleProductPayload, singleProductResponse, topCategoriesResponse } from "./types/actionTypes";

const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  (config) => {
    const skipurl = ["register","login"];
    const token = "1234";

    // Only add token if URL not in skip list
    if (config.url && !skipurl.some(url => config.url?.includes(url))) {
      if (config.headers) {
        // Axios v1+ headers can be AxiosHeaders instance
        // Use set() if exists, otherwise assign Authorization
        if ("set" in config.headers) {
          config.headers.set("Authorization", `Bearer ${token}`);
        } else {
          (config.headers as AxiosRequestHeaders)["Authorization"] = `Bearer ${token}`;
        }
      }
    }

    return config;
  },
  (error) => Promise.reject(error)
);

export const registerUser = async (body: RegisterPayload) => {
  const response = await api.post<ApiResponse<LoginRegisterResponse>>("/register", body);
  return response.data;
};

export const login = async (body: LoginPayload) => {
  const response = await api.post<ApiResponse<LoginRegisterResponse>>("/login", body);
  return response.data;
};

// Get all banners
export const getBanner = async () => {
  const response = await api.get<ApiResponse<BannersDataResponse>>('/banner/homepage');
  return response.data;
};

// Get top products
export const getTopProducts = async () => {
  const response = await api.get<ApiResponse<topCategoriesResponse>>('/products/gettopproducts');
  return response.data;
};


// Get top products

export const getSingleProduct = async (body:string|undefined) => {
  const response = await api.get<ApiResponse<singleProductResponse>>(`/products/getsingleproduct/${body}`);
  return response.data;
};
