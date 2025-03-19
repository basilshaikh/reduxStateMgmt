import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cart/cartSlice";

export const store = configureStore({
  reducer: {
    cart: cartSlice,
  },
});

export const RootState = store.getState();
export const AppDispatch = store.dispatch;
