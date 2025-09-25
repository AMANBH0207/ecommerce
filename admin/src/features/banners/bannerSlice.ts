import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { uploadBannerResponse } from '../../services/types/actionTypes';
import {
  addBanner,
  getBanners,
  deleteBanner,
  updateBanner,
  toggleStatus,
} from './bannerThunks';

interface BannerState {
  banners: uploadBannerResponse[];
  loading: boolean;
  error: string | null;
}

const initialState: BannerState = {
  banners: [],
  loading: false,
  error: null,
};

const bannerSlice = createSlice({
  name: 'banner',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Add Banner
    builder
      .addCase(addBanner.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        addBanner.fulfilled,
        (state, action: PayloadAction<uploadBannerResponse>) => {
          state.loading = false;
          state.banners.push(action.payload);
        },
      )
      .addCase(addBanner.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });

    // Get Banners
    builder
      .addCase(getBanners.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        getBanners.fulfilled,
        (state, action: PayloadAction<uploadBannerResponse[]>) => {
          state.loading = false;
          state.banners = action.payload;
        },
      )
      .addCase(getBanners.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });

    // Delete Banner
    builder
      .addCase(deleteBanner.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        deleteBanner.fulfilled,
        (state, action: PayloadAction<string>) => {
          state.loading = false;
          state.banners = state.banners.filter((b) => b._id !== action.payload);
        },
      )
      .addCase(deleteBanner.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });

    // Update Banner
    builder
      .addCase(updateBanner.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        updateBanner.fulfilled,
        (state, action: PayloadAction<uploadBannerResponse>) => {
          state.loading = false;
          const index = state.banners.findIndex(
            (b) => b._id === action.payload._id,
          );
          if (index !== -1) state.banners[index] = action.payload;
        },
      )
      .addCase(updateBanner.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });

    // Toggle Status
    builder
      .addCase(toggleStatus.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(toggleStatus.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.banners.findIndex(
          (b) => b._id === action.payload._id,
        );
        // console.log("action.payload",action.payload)
        if (index !== -1) state.banners[index] = action.payload;
      })
      .addCase(toggleStatus.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default bannerSlice.reducer;
