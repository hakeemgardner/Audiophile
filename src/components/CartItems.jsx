import Input from "..//components/CustomNumberInput";
import React, { useState } from "react";
export default function CartItems({ item, onAddItem }) {
  const { imgSrc, title, price, quantity } = item;
  const handleQuantityChange = (event) => {
    const newQuantity = parseInt(event.target.value, 10);
    if (!isNaN(newQuantity) && newQuantity >= 0) {
      onAddItem(newQuantity);
    }
  };

  return (
    <div className="flex justify-between my-4 mx-4">
      <div className="bg-AntiFlashWhite rounded-lg p-2">
        <img className="h-10" src={imgSrc} alt="" />
      </div>
      <div className="mt-2">
        <div>
          <h4 className="font-bold">{title}</h4>
        </div>
        <div>
          <p className="font-bold text-sm">{price}</p>
        </div>
      </div>
      <div>
        <Input
          className="h-8 mt-4 w-28"
          type="number"
          value={quantity}
          onChange={handleQuantityChange}
        />
      </div>
    </div>
  );
}
