import { createAsyncThunk } from "@reduxjs/toolkit";
import type { singleProductResponse, topCategoriesResponse } from "../../services/types/actionTypes";
import { getTopProducts as getTopProductsAPI, getSingleProduct as getSingleProductAPI } from "../../services/ApiService";

export const getTopProducts = createAsyncThunk<topCategoriesResponse, void>(
  "products/gettopproducts",
  async (_, { rejectWithValue }) => {
    try {
      const response = await getTopProductsAPI();
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const getSingleProduct = createAsyncThunk<singleProductResponse, string|undefined>(
  "products/singleProduct",
  async (id, { rejectWithValue }) => {
    try {
      const response = await getSingleProductAPI(id);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);
