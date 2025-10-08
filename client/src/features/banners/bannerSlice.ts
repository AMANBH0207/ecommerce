import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { BannersDataResponse } from '../../services/types/actionTypes';
import {
  getBanners,
} from './bannerThunks';

interface BannerState {
  banners: BannersDataResponse;
  loading: boolean;
  error: string | null;
}

const initialState: BannerState = {
  banners: {} as BannersDataResponse,
  loading: false,
  error: null,
};

const bannerSlice = createSlice({
  name: 'banner',
  initialState,
  reducers: {},
  extraReducers: (builder) => {

    // Get Banners
    builder
      .addCase(getBanners.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        getBanners.fulfilled,
        (state, action: PayloadAction<BannersDataResponse>) => {
          state.loading = false;
          state.banners = action.payload;
        },
      )
      .addCase(getBanners.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default bannerSlice.reducer;
