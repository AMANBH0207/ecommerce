import { createSlice } from "@reduxjs/toolkit";
import { uploadBannerResponse } from "../../services/types/actionTypes";
import { addBanner } from "./bannerThunks";

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
  name: "banner",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Add Banner
      .addCase(addBanner.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addBanner.fulfilled, (state, action) => {
        state.loading = false;
        state.banners.push(action.payload);
      })
      .addCase(addBanner.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      // Get Banners
    //   .addCase(getBanners.pending, (state) => {
    //     state.loading = true;
    //     state.error = null;
    //   })
    //   .addCase(getBanners.fulfilled, (state, action) => {
    //     state.loading = false;
    //     state.banners = action.payload;
    //   })
    //   .addCase(getBanners.rejected, (state, action) => {
    //     state.loading = false;
    //     state.error = action.payload as string;
    //   });
  },
});

export default bannerSlice.reducer;