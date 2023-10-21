// reducers/cartReducer.js
import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addItem: (state, action) => {
      // Check if the item is already in the cart
      const existingItem = state.find((item) => item.id === action.payload.id);
      if (existingItem) {
        // If the item exists, update its quantity
        existingItem.quantity += action.payload.quantity;
      } else {
        // If the item doesn't exist, add it to the cart
        state.push(action.payload);
      }
    },
    removeItem: (state, action) => {
      state = state.filter((item) => item.id !== action.payload.id);
    },
    clearCart: (state) => {
      state.length = 0;
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
