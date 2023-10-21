import tick from "../assets/tick.png";
import XX99MarkIIHeadphones from "../assets/XX99MarkIIHeadphones.png";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useRef } from "react";
export default function ThankYouModal({ open, onClose }) {
  const navigate = useNavigate();
  const modalRef = useRef(null);
  const handleHomeClick = () => {
    navigate("/");
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      };
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

  return (
    <div
      className={
        "fixed inset-0 mx-6 my-24 sm:mx-12 md:mx-80 sm:my-40 md:my-48 bg-white text-black rounded-lg md:flex justify-center items-center"
      }
    >
      <div className="p-8">
        <div className="bg-Peru h-14 w-14 rounded-full flex justify-center items-center">
          <div>
            <img src={tick} alt="" />
          </div>
        </div>
        <h2 className="font-bold text-2xl mt-6">
          THANK YOU FOR <br /> YOUR ORDER
        </h2>
        <p className="text-medium text-AmericanSilver mt-4">
          You will receive an email confirmation shortly.
        </p>
        <div className="bg-AntiFlashWhite rounded-lg  mt-6 flex flex-col">
          <div className="sm:flex justify-between">
            <div className="sm:w-1/2">
              <div className="flex justify-between mx-6 my-8">
                <div>
                  <img className="h-9" src={XX99MarkIIHeadphones} alt="" />
                </div>
                <div>
                  <h3 className="font-bold text-black">XX99 MK II</h3>
                  <p className="font-bold text-black">$ 2,999</p>
                </div>
                <div>
                  <p className="font-bold">X1</p>
                </div>
              </div>
              <hr className="flex-grow border-t border-white sm:mx-6 " />
              <p className="text-bold text-center my-4">and 2 other item(s)</p>
            </div>
            <div className="sm:w-1/2">
              <div className="bg-black mt-4 p-4 rounded-b-lg sm:rounded-r-lg sm:h-full sm:mt-0 sm:px-6 sm:py-12">
                <h3 className="font-medium  text-SpanishGray">GRAND TOTAL</h3>
                <p className="font-bold text-lg text-black mt-3 text-white">$ 5,446</p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <button
            onClick={handleHomeClick}
            className="bg-Peru text-white font-bold text-sm py-3 px-16 mt-6 hover:bg-VeryLightTangelo sm:px-44 sm:mt-8 md:mt-12 "
          >
            BACK TO HOME
          </button>
        </div>
      </div>
    </div>
  );
}
