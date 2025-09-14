import { createAsyncThunk } from "@reduxjs/toolkit";
import type { ApiResponse } from "../../services/types/common";
import type {
  LoginPayload,
  LoginRegisterResponse,
  RegisterPayload,
} from "../../services/types/authTypes";
import { login, registerUser } from "../../services/ApiService";

export const loginUser = createAsyncThunk<
  ApiResponse<LoginRegisterResponse>,
  LoginPayload,
  { rejectValue: string }
>("auth/login", async (payload, { rejectWithValue }) => {
  try {
    const response = await login(payload);
    return response;
  } catch (error: any) {
    return rejectWithValue(error.response?.data?.message || "Login failed");
  }
});

export const register = createAsyncThunk<
  ApiResponse<LoginRegisterResponse>,
  RegisterPayload,
  { rejectValue: string }
>("auth/register",async(payload,{rejectWithValue})=>{
  try{
    const response = await registerUser(payload);
    return response;
  }catch(error:any){
    return rejectWithValue(error.response.data.message || "Register failed");
  }
})
