import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cart/cartSlice";
import incrementorReducer from "../features/cart/incrementorSlice";
export default configureStore({
  reducer: {
    cart: cartReducer,
    incrementor: incrementorReducer,
  },
});
