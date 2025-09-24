import { createAsyncThunk } from "@reduxjs/toolkit";
import { AddBanner as addBannerAPI } from "../../services/ApiService";
import { uploadBannerPayload, uploadBannerResponse } from "../../services/types/actionTypes";

// Add banner thunk
export const addBanner = createAsyncThunk(
  "banner/addBanner",
  async (payload: uploadBannerPayload, { rejectWithValue }) => {
    try {
      const response = await addBannerAPI(payload);
      return response.data; // UploadBannerResponse
    } catch (error: any) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// Get banners thunk
// export const getBanners = createAsyncThunk(
//   "banner/getBanners",
//   async (_, { rejectWithValue }) => {
//     try {
//       const response = await getBannersAPI();
//       return response.data; // UploadBannerResponse[]
//     } catch (error: any) {
//       return rejectWithValue(error.response?.data || error.message);
//     }
//   }
// );