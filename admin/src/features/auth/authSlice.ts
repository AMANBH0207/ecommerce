import { LoginRegisterResponse } from "../../services/types/authTypes";
import { createSlice } from "@reduxjs/toolkit";
import { login, register } from "./authThunks";

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
    name:"auth",
    initialState,
    reducers:{
        logout:(state,action)=>{
            state.token=null;
            state.user=null;
        },
        clearError: (state) => {
      state.error = null;
    },
    },
    extraReducers:(builder)=>{
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



          // 🔹 Login
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.token = action.payload.data.token;
        state.user = action.payload.data;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error =
          action.payload || action.error.message || "Login failed";
      });
    }
})


export const {logout, clearError} = authSlice.actions;
export default authSlice.reducer;