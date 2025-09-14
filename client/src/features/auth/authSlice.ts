import { createSlice } from "@reduxjs/toolkit";
import { loginUser, register } from "./authThunks";
import type { LoginRegisterResponse } from "../../services/types/authTypes";

interface AuthState {
  user: LoginRegisterResponse | null;
  token: string | null | undefined;
  loading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  user: null,
  token: null,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
    },
  },
  extraReducers: (builder) => {
    // 🔹 Login
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.token = action.payload.data.token;
        state.user = action.payload.data;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action.error.message || "Login failed";
      });

    // 🔹 Register
    builder
      .addCase(register.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.token = action.payload.data.token;
        state.user = action.payload.data;
      })
      .addCase(register.rejected, (state, action) => {
        state.loading = false;
        state.error =
          action.payload || action.error.message || "Register failed";
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;