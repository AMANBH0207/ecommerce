import { createAsyncThunk } from '@reduxjs/toolkit';
import { getCategories as getCategoriesAPI } from '../../services/ApiService';
import {
  addProduct as addProductAPI,
  getProducts as getProductsAPI,
  updateStock as updateStockAPI,
  deleteProduct as deleteProductAPI,
} from '../../services/ApiService';
import { ProductFormValues } from '../../types/banner';

export const addProduct = createAsyncThunk(
  'product/addProduct',
  async (payload: ProductFormValues, { rejectWithValue }) => {
    try {
      const response = await addProductAPI(payload);
      if (response.success) {
        return response.data;
      } else {
        return rejectWithValue(response.message);
      }
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  },
);

export const getProducts = createAsyncThunk(
  'product/getProducts',
  async (_, { rejectWithValue }) => {
    try {
      const response = await getProductsAPI();
      if (response.success) {
        return response.data;
      } else {
        return rejectWithValue(response.message);
      }
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  },
);

export const updateStock = createAsyncThunk(
  'product/updateStock',
  async ({ id, stock }: { id: string; stock: number }, { rejectWithValue }) => {
    try {
      const response = await updateStockAPI(id, stock);
      if (response.success) {
        return response.data;
      } else {
        return rejectWithValue(response.message);
      }
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  },
);

export const deleteProduct = createAsyncThunk(
  'product/deleteProduct',
  async (id: string, { rejectWithValue }) => {
    try {
      const response = await deleteProductAPI(id);
      if (response.success) {
        return { id }; // 👈 return the id for reducer
      } else {
        return rejectWithValue(response.message);
      }
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  },
);

export const getCategories = createAsyncThunk(
  'product/getCategories',
  async (_, { rejectWithValue }) => {
    try {
      const response = await getCategoriesAPI();
      if (response.success) {
        return response.data;
      } else {
        return rejectWithValue(response.message);
      }
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  },
);
