import { useState, useCallback, useMemo } from "react";
import "./App.css";

import Products from "./components/Products/Products";
import Counter from "./components/Counter/Counter";
import Cart from "./components/Cart/Cart";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const increaseCartQuantity = useCallback((product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(
        (cartItem) => cartItem.id === product?.id
      );

      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  }, []);

  const decreaseCartQuantity = useCallback((product) => {
    if (product.quantity === 0) return;

    setCartItems((prevItems) => {
      const existingItem = prevItems.find(
        (cartItem) => cartItem.id === product.id
      );

      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  }, []);

  const handleAddToCart = useCallback(
    (product) => {
      increaseCartQuantity(product);
    },
    [cartItems]
  );

  const handleDeleteFromCart = useCallback(
    (item) => {
      if (item.length === 0) return;

      setCartItems((prevItems) =>
        prevItems.filter((cartItem) => cartItem.id !== item.id)
      );
    },
    [cartItems]
  );

  return (
    <div className="w-full flex flex-col gap-y-10 items-center">
      <Counter cartItems={cartItems} />
      <div className="w-full flex items-top justify-center mx-auto">
        <Products
          cartItems={cartItems}
          increaseCartQuantity={increaseCartQuantity}
          handleAddToCart={handleAddToCart}
        />
        <Cart
          cartItems={cartItems}
          increaseCartQuantity={increaseCartQuantity}
          decreaseCartQuantity={decreaseCartQuantity}
          handleDeleteFromCart={handleDeleteFromCart}
        />
      </div>
    </div>
  );
}

export default App;
