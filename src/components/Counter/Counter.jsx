import React from "react";
import cartIcon from "./../../assets/cart.svg";
import { useSelector } from "react-redux";

export default function Counter() {
  const cartItems = useSelector((state) => state.cart.cartItems);

  return (
    <div className="relative">
      <img className="w-10 cursor-pointer" src={cartIcon} alt="cart" />
      <p className="bg-[#f9f4da] text-black absolute top-[-5px] right-[-10px] w-5 flex items-center justify-center h-5 rounded font-bold">
        {cartItems.length === 0 ? "0" : cartItems.length}
      </p>
    </div>
  );
}
