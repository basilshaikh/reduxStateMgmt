import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    increaseCartQuantity: (state, action) => {
      const product = action.payload;
      const existingItem = state.cartItems.find(
        (cartItem) => cartItem.id === product?.id
      );

      if (existingItem) {
        state.cartItems = state.cartItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        state.cartItems = [...state.cartItems, { ...product, quantity: 1 }];
      }
    },

    decreaseCartQuantity: (state, action) => {
      const product = action.payload;

      if (product.quantity === 0) return;

      const existingItem = state.cartItems.find(
        (cartItem) => cartItem.id === product?.id
      );

      if (existingItem) {
        state.cartItems = state.cartItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
      } else {
        state.cartItems = [...state.cartItems, { ...product, quantity: 1 }];
      }
    },

    deleteFromCart: (state, action) => {
      const product = action.payload;
      if (product.length === 0) return;

      state.cartItems = state.cartItems.filter(
        (cartItem) => cartItem.id !== product.id
      );
    },
  },
});

export const { increaseCartQuantity, decreaseCartQuantity, deleteFromCart } =
  cartSlice.actions;

export default cartSlice.reducer;
