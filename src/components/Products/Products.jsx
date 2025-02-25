import React from "react";

export default function Products({ handleAddToCart }) {
  const products = [
    { id: 1, name: "Wireless Headphones", price: 99.99, quantity: 1 },
    { id: 2, name: "Smartphone Stand", price: 19.99, quantity: 1 },
    { id: 3, name: "Bluetooth Speaker", price: 49.99, quantity: 1 },
    { id: 4, name: "Portable Charger", price: 29.99, quantity: 1 },
    { id: 5, name: "Laptop Stand", price: 39.99, quantity: 1 },
  ];

  return (
    <div className="pr-24 w-full max-w-xl">
      {products?.map((item) => (
        <div
          key={item.id}
          className="flex gap-x-5 justify-between mb-10 items-center"
        >
          <div className="flex gap-3">
            <p className="text-left">{item.name}</p>
            <p>(${item.price})</p>
          </div>

          <button onClick={() => handleAddToCart(item)}>
            <p className="text-sm w-full">Add to Cart</p>
          </button>
        </div>
      ))}
    </div>
  );
}
