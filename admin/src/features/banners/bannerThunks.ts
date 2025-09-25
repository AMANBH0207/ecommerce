import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  AddBanner as addBannerAPI,
  getBanner as getBannersAPI,
  deleteBanner as deleteBannerAPI,
  updateBanner as updateBannerAPI,
  toggleBannerStatus as toggleStatusAPI,
} from '../../services/ApiService';
import {
  uploadBannerPayload,
  BannersDataResponse,
} from '../../services/types/actionTypes';

// Add banner thunk
export const addBanner = createAsyncThunk(
  'banner/addBanner',
  async (payload: uploadBannerPayload, { rejectWithValue }) => {
    try {
      const response = await addBannerAPI(payload);
      return response.data; // UploadBannerResponse
    } catch (error: any) {
      return rejectWithValue(error.response?.data || error.message);
    }
  },
);

export const getBanners = createAsyncThunk<BannersDataResponse[], void>(
  'banner/getBanners',
  async (_, { rejectWithValue }) => {
    try {
      const response = await getBannersAPI(); // returns Apiresponse<BannersDataResponse>
      return response.data; // <-- this is already uploadBannerResponse[]
    } catch (error: any) {
      return rejectWithValue(error.response?.data || error.message);
    }
  },
);

// Delete banner
export const deleteBanner = createAsyncThunk(
  'banner/deleteBanner',
  async (id: string, { rejectWithValue }) => {
    try {
      await deleteBannerAPI(id);
      return id; // return id to remove from state
    } catch (error: any) {
      return rejectWithValue(error.response?.data || error.message);
    }
  },
);

// Update banner
export const updateBanner = createAsyncThunk(
  'banner/updateBanner',
  async ({ id, payload }: { id: string; payload: uploadBannerPayload }, { rejectWithValue }) => {
    try {
      const response = await updateBannerAPI(id, payload);
      return response.data; // return updated banner object
    } catch (error: any) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// Toggle banner status
export const toggleStatus = createAsyncThunk<
  BannersDataResponse, // type of single banner
  string,
  { rejectValue: string }
>('banner/toggleStatus', async (id: string, { rejectWithValue }) => {
  try {
    const response = await toggleStatusAPI(id);
    if (!response?.data) {
      return rejectWithValue('No banner returned from API');
    }
    return response.data; // <-- just .data
  } catch (error: any) {
    return rejectWithValue(error.response?.data || error.message);
  }
});
