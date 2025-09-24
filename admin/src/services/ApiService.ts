import axios from 'axios';
import {
  LoginPayload,
  LoginRegisterResponse,
  RegisterPayload,
} from './types/authTypes';
import { Apiresponse } from './types/common';
import { uploadBannerPayload, uploadBannerResponse } from './types/actionTypes';

const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use(
  (config) => {
    const skipUrl = ['register-admin', 'login-admin'];
    const token = '1234';
    if (!skipUrl.some((url) => config?.url?.includes(url))) {
      config.headers.Authorization = `bearer ${token}`;
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

export const AddBanner = async (payload: uploadBannerPayload) => {
  const formData = new FormData();
  formData.append('title', payload.title);
  formData.append('image', payload.image); // File
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
