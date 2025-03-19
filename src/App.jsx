import { useState, useCallback, useMemo } from "react";
import "./App.css";

import Products from "./components/Products/Products";
import Counter from "./components/Counter/Counter";
import Cart from "./components/Cart/Cart";
import { useDispatch, useSelector } from "react-redux";
import { increaseCartQuantity } from "./state/cart/cartSlice";

function App() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);

  const handleAddToCart = useCallback(
    (product) => {
      dispatch(increaseCartQuantity(product));
    },
    [cartItems]
  );

  return (
    <div className="w-full flex flex-col gap-y-10 items-center">
      <Counter cartItems={cartItems} />
      <div className="w-full flex items-top justify-center mx-auto">
        <Products handleAddToCart={handleAddToCart} />
        <Cart />
      </div>
    </div>
  );
}

export default App;
