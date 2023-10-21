import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  updateQuantity,
} from "../features/cart/incrementorSlice";

function CustomNumberInput(props) {
  const { alternateClassName } = props;
  const dispatch = useDispatch();
  const quantity = useSelector((state) => state.incrementor.value);

  const handleDecrement = () => {
    if (quantity > 0) {
      dispatch(decrement());
    }
  };

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleInputChange = (e) => {
    const newValue = parseInt(e.target.value, 10);
    if (!isNaN(newValue)) {
      dispatch(updateQuantity(newValue));
    }
  };

  return (
    <div className="h-10 w-32">
      <div
        className={`flex flex-row h-11 w-full relative bg-transparent ${alternateClassName}`}
      >
        <button
          data-action="decrement"
          className="bg-AntiFlashWhite text-black h-full w-20 cursor-pointer outline-none"
          onClick={handleDecrement}
        >
          <span className="m-auto text-2xl font-thin hover:text-Peru">−</span>
        </button>
        <input
          type="number"
          className="outline-none focus:outline-none text-center w-full bg-AntiFlashWhite font-semibold text-md hover:text-black focus:text-black md:text-base cursor-default flex items-center text-gray-700 outline-none"
          name="custom-input-number"
          value={quantity}
          onChange={handleInputChange}
        />
        <button
          data-action="increment"
          className="bg-AntiFlashWhite text-black h-full w-20 cursor-pointer"
          onClick={handleIncrement}
        >
          <span className="m-auto text-2xl font-thin hover:text-Peru">+</span>
        </button>
      </div>
    </div>
  );
}

export default CustomNumberInput;
