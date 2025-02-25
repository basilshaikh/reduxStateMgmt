import React from "react";

export default function Cart({
  cartItems,
  increaseCartQuantity,
  decreaseCartQuantity,
  handleDeleteFromCart,
}) {
  return (
    cartItems.length > 0 && (
      <div className="w-full sticky top-5 border-l border-l-amber-300 h-full px-24 max-h-[500px] overflow-y-auto">
        <div className="flex flex-col gap-y-5 p-3">
          <p className="font-bold">Cart Items:</p>
          {cartItems.map((item) => (
            <div key={item.id} className="flex gap-3 justify-between">
              <div>
                <p>{item.name}</p>
                <p>(${item.price})</p>
              </div>
              <div className="flex gap-x-5 items-center">
                <div className="border border-amber-300 rounded-sm flex justify-between items-center ">
                  <div
                    onClick={() => decreaseCartQuantity(item)}
                    className="w-full flex items-center justify-center border-r px-1 border-amber-300 cursor-pointer"
                  >
                    -
                  </div>
                  <div className="px-3">
                    <span className="font-bold">{item.quantity}</span>
                  </div>
                  <div
                    onClick={() => increaseCartQuantity(item)}
                    className="w-full flex items-center justify-center border-l px-1 border-amber-300 cursor-pointer"
                  >
                    <span>+</span>
                  </div>
                </div>
                <button onClick={() => handleDeleteFromCart(item)}>
                  <p className="text-sm w-full">Delete</p>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  );
}
