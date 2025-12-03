import { createAsyncThunk } from "@reduxjs/toolkit";
import { createOrder } from "../../services/ApiService";
import type { submitOrderPayload } from "../../services/types/authTypes";
import type { submitOrderResponse } from "../../services/types/common";

export const submitCartOrder = createAsyncThunk<
  submitOrderResponse,
  submitOrderPayload,
  { rejectValue: string }
>("razorpay/submitCart", async (payload, { rejectWithValue }) => {
  try {
    const response = await createOrder(payload);
    return response;
  } catch (error: any) {
    return rejectWithValue(error.response?.data?.message || "Order Failed");
  }
});
