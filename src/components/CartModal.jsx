import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CartItems from "./CartItems";

import { clearCart, addItem } from "../features/cart/cartSlice";

export default function CartModal({ open, onClose}) {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const cartItems = useSelector((state) => state.cart);
  const modalRef = useRef(null);

  const handleCheckout = () => {
    // Navigate to the Checkout page when the Checkout button is clicked
    navigate("/Checkout");
  };

  // Calculate the total price of items in the cart
  const totalPrice = cartItems.reduce((total, item) => {
    const itemPrice = parseFloat(item.price.replace("$", ""));
    return total + itemPrice * item.quantity;
  }, 0);

  // Add an event listener to close the modal when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open, onClose]);

  if (!open) return null;

  const handleClearCart = () => {
    dispatch(clearCart());
  };
  

  return (
    <div className="fixed inset-0 sm:inset-x-24 text-black bg-white rounded-lg mx-6 mt-20 mb-72 sm:right-0 sm:mx-20 md:mx-96 md:mb-96">
      <div className="flex justify-between px-4 p-6" ref={modalRef}>
        <div>
          <h4 className="font-bold text-lg">CART ({cartItems.length})</h4>
        </div>
        <div>
          <button onClick={handleClearCart} className="text-medium underline">
            Remove all
          </button>
        </div>
      </div>
      {cartItems.map((item, index) => (
        <CartItems
          key={index}
          item={item}
          onAddItem={(quantity) => dispatch(addItem({ ...item, quantity }))}
        />
      ))}
      <div className="flex justify-between mx-4">
        <div>
          <h4 className="text-medium">TOTAL</h4>
        </div>
        <div className="font-bold text-lg">${totalPrice.toFixed(2)}</div>
      </div>
      <div className="text-center">
        <button
          onClick={handleCheckout}
          className="bg-Peru text-white font-bold text-sm py-3 px-28 mt-6 hover-bg-VeryLightTangelo"
        >
          CHECKOUT
        </button>
      </div>
    </div>
  );
}
