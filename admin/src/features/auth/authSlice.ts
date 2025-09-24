import { LoginRegisterResponse } from "../../services/types/authTypes";
import { createSlice } from "@reduxjs/toolkit";
import { login, register } from "./authThunks";
import { Storage } from "../../utils/localStorage";

interface AuthState {
  user: LoginRegisterResponse | null;
  token: string | null | undefined;
  loading: boolean;
  error: string | null;
}

const user = Storage.getItem<LoginRegisterResponse>("user");

const initialState: AuthState = {
  user: user,
  token: user?.token || null,
  loading: false,
  error: null,
};


const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{
        logout:(state)=>{
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
        Storage.setItem("user", action.payload.data);
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