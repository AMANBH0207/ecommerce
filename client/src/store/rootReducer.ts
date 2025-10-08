// rootReducer.ts
import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import bannerReducer from "../features/banners/bannerSlice";

const rootReducer = combineReducers({
  auth: authReducer, 
  banner: bannerReducer
});

export default rootReducer;