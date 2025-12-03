import { createSlice } from "@reduxjs/toolkit";

interface cartSlice {
  items: any[];
  Quantity: number;
  totalAmount: number;
  deliveryCharge: number;
  discountedAmount: number;
}

const initialState: cartSlice = {
  items: [],
  Quantity: 0,
  totalAmount: 0,
  deliveryCharge: 0,
  discountedAmount: 0,
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const product = action.payload;
      if (!product) return;
      const existingItem = state.items.find((item) => item._id === product._id);
      if (existingItem) {
        existingItem.quantity++;
        state.totalAmount += product.price;
        state.discountedAmount += product.discountedPrice;
        if (product.discountedPrice < 500) {
          state.deliveryCharge += 80;
          state.discountedAmount += 80;
        }
        return;
      }
      state.items.push({ ...product, quantity: 1 });
      state.Quantity++;
      state.totalAmount += product.price;
      if (product.discountedPrice < 500) {
        state.deliveryCharge += 80;
        state.discountedAmount += product.discountedPrice + 80;
      } else {
        state.deliveryCharge = 0;
        state.discountedAmount += product.discountedPrice;
      }
    },

    increaseQuantity(state, action) {
      const existingItem = state.items.find(
        (item) => item._id === action.payload._id
      );
      if (existingItem) {
        existingItem.quantity++;
        state.totalAmount += action.payload.price;
        state.discountedAmount += action.payload.discountedPrice;
        if (action.payload.discountedPrice < 500) {
          state.deliveryCharge += 80;
          state.discountedAmount += 80;
        }
        return;
      }
    },

    decreaseQunatity(state, action) {
      const existingItem = state.items.find(
        (item) => item._id === action.payload._id
      );
      if (existingItem) {
        existingItem.quantity--;
        state.totalAmount -= action.payload.price;
        state.discountedAmount -= action.payload.discountedPrice;
        if (action.payload.discountedPrice < 500) {
          state.deliveryCharge += 80;
          state.discountedAmount += 80;
        }
        return;
      }
    },
    removeItem(state, action) {
      state.items = state.items.filter(
        (item) => item._id !== action.payload._id
      );
      state.Quantity--;
      state.totalAmount -= action.payload.price * action.payload.quantity;
      state.discountedAmount -=
        action.payload.discountedPrice * action.payload.quantity;
      if (action.payload.discountedPrice < 500) {
        state.deliveryCharge -= 80;
        state.discountedAmount -= 80;
      }
      return;
    },
    removeAll(state) {
      state.items = [];
      state.Quantity = 0;
      state.totalAmount = 0;
      state.deliveryCharge = 0;
      state.discountedAmount = 0;
    },
  },
});

export const { addToCart, increaseQuantity, decreaseQunatity, removeItem, removeAll } =
  cartSlice.actions;
export default cartSlice.reducer;
