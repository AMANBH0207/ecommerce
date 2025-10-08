import { createAsyncThunk } from "@reduxjs/toolkit";
import type { BannersDataResponse } from "../../services/types/actionTypes";
import { getBanner as getBannersAPI } from "../../services/ApiService";

export const getBanners = createAsyncThunk<BannersDataResponse, void>(
  "banner/getBanners",
  async (_, { rejectWithValue }) => {
    try {
      const response = await getBannersAPI(); 
      return response.data; 
    } catch (error: any) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);
