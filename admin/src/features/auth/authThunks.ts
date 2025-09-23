import { createAsyncThunk } from '@reduxjs/toolkit';
import { Apiresponse } from '../../services/types/common';
import {
  LoginPayload,
  LoginRegisterResponse,
  RegisterPayload,
} from '../../services/types/authTypes';
import { loginAdmin, registerAdmin } from '../../services/ApiService';


export const login = createAsyncThunk<
  Apiresponse<LoginRegisterResponse>,
  LoginPayload,
  { rejectValue: string }
>("auth/loginAdmin", async (payload, { rejectWithValue }) => {
  try {
    const response = await loginAdmin(payload);
    return response;
  } catch (error: any) {
    return rejectWithValue(error.response?.data?.message || "Login failed");
  }
});



export const register = createAsyncThunk<
  Apiresponse<LoginRegisterResponse>,
  RegisterPayload,
  { rejectValue: string }
>('auth/registerAdmin', async(payload, { rejectWithValue }) => {
  try {
    const response = await registerAdmin(payload);
    return response;
  } catch (error: any) {
    return rejectWithValue(error?.response?.data || 'Error Occured');
  }
});


