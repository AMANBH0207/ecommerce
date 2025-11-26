import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { singleProductResponse, topCategoriesResponse } from "../../services/types/actionTypes";
import { getSingleProduct, getTopProducts } from "./productThunks";

interface TopCategoriesResponse {
  topProduct: topCategoriesResponse;
  singleProduct:singleProductResponse
  loading: boolean;
  error: string | null;
}

const initialState: TopCategoriesResponse = {
  topProduct: {} as topCategoriesResponse,
  singleProduct:{} as singleProductResponse,
  loading: false,
  error: null,
};


const productSlice = createSlice({
    name:"product",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        // Get Banners
    builder
      .addCase(getTopProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        getTopProducts.fulfilled,
        (state, action: PayloadAction<topCategoriesResponse>) => {
          state.loading = false;
          state.topProduct = action.payload;
        },
      )
      .addCase(getTopProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });





       builder
      .addCase(getSingleProduct.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        getSingleProduct.fulfilled,
        (state, action: PayloadAction<singleProductResponse>) => {
          state.loading = false;
          state.singleProduct = action.payload;
        },
      )
      .addCase(getSingleProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
    }
})

export default productSlice.reducer;