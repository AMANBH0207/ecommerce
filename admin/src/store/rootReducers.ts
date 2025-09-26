// rootReducer.ts
import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import bannerReducer from "../features/banners/bannerSlice";
import productReducer from "../features/products/productSlice";

const rootReducer = combineReducers({
  auth: authReducer, 
  banner: bannerReducer,
  product: productReducer
});

export default rootReducer;