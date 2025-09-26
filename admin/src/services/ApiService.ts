import axios from 'axios';
import {
  LoginPayload,
  LoginRegisterResponse,
  RegisterPayload,
} from './types/authTypes';
import { Apiresponse } from './types/common';
import {
  BannersDataResponse,
  CategoriesResponse,
  uploadBannerPayload,
  uploadBannerResponse,
} from './types/actionTypes';
import { Storage } from '../utils/localStorage';

const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use(
  (config) => {
    const skipUrl = ['register-admin', 'login-admin'];
    const user = Storage.getItem('user');
    const token = user?.token || '';
    if (!skipUrl.some((url) => config?.url?.includes(url))) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error),
);

export const registerAdmin = async (payload: RegisterPayload) => {
  const response = await api.post<Apiresponse<LoginRegisterResponse>>(
    '/register-admin',
    payload,
  );
  return response.data;
};

export const loginAdmin = async (payload: LoginPayload) => {
  const response = await api.post<Apiresponse<LoginRegisterResponse>>(
    '/login-admin',
    payload,
  );
  return response.data;
};

// Add Banner
export const AddBanner = async (payload: uploadBannerPayload) => {
  const formData = new FormData();
  formData.append('title', payload.title);
  formData.append('image', payload.image);
  formData.append('link', payload.link);
  formData.append('status', payload.status.toString());
  formData.append('startDate', payload.startDate);
  formData.append('endDate', payload.endDate);

  const response = await api.post<Apiresponse<uploadBannerResponse>>(
    '/banner/add',
    formData,
    { headers: { 'Content-Type': 'multipart/form-data' } },
  );

  return response.data;
};

// Get all banners
export const getBanner = async () => {
  const response = await api.get<Apiresponse<BannersDataResponse[]>>('/banner');
  return response.data;
};
// Delete banner
export const deleteBanner = async (id: string) => {
  const response = await api.delete<Apiresponse<null>>('/banner/' + id);
  return response.data;
};

// Update banner
export const updateBanner = async (
  id: string,
  payload: uploadBannerPayload,
) => {
  const formData = new FormData();
  formData.append('title', payload.title);
  formData.append('image', payload.image);
  formData.append('link', payload.link);
  formData.append('status', payload.status.toString());
  formData.append('startDate', payload.startDate);
  formData.append('endDate', payload.endDate);
  const response = await api.put<Apiresponse<uploadBannerResponse>>(
    '/banner/' + id,
    formData,
    { headers: { 'Content-Type': 'multipart/form-data' } },
  );

  return response.data;
};

// Toggle status (active/inactive)
export const toggleBannerStatus = async (id: string) => {
  const response = await api.patch<Apiresponse<null>>(
    '/banner/toggle-status/' + id,
  );
  return response.data;
};

export const getCategories = async () => {
  const response = await api.get<Apiresponse<CategoriesResponse[]>>(
    '/products/categories',
  );
  return response.data;
};

export const addProduct = async (payload: any) => {
  const formData = new FormData();
  formData.append('name', payload.name);
  formData.append('description', payload.description);
  formData.append('price', payload.price);
  formData.append('stock', payload.stock);
  formData.append('category', payload.category);
  if (payload.images) {
    Array.from(payload.images).forEach((file: File) => {
      formData.append('images', file);
    });
  }
  const response = await api.post<Apiresponse<null>>('/products/add', formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
  return response.data;
}

