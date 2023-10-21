import XX99MKII from "../assets/XX99MarkIIHeadphones.png";
import React, { useState } from "react";
import ThankYouModal from "../components/ThankYouModal";
export default function ItemSummary() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  return (
    <div className="bg-white rounded-lg mx-6 p-6 md:mx-0">
       
      <h2 className="font-bold text-lg ">SUMMARY</h2>
      <div className="flex justify-between mt-6">
        <div>
          <div className="bg-AntiFlashWhite p-2 rounded-lg">
            <img className="h-12" src={XX99MKII} alt="" />
          </div>
        </div>
        <div>
          <h2 className="font-bold">XX99 MK II</h2>
          <p className="font-bold text-sm">$ 2,999</p>
        </div>
        <div>
          <p className="font-bold">X1</p>
        </div>
      </div>

      <div className="flex justify-between mt-6">
        <div>
          <h3 className="font-medium">TOTAL</h3>
        </div>
        <div>
          <div>
            <p className="font-bold text-lg">$ 5,396</p>
          </div>
        </div>
      </div>
      <div className="flex justify-between">
        <div>
          <h3 className="font-medium mt-3">SHIPPING</h3>
        </div>
        <div>
          <p className="font-bold text-lg mt-3">$ 50</p>
        </div>
      </div>
      <div className="flex justify-between">
        <div>
          <h3 className="font-medium mt-3">VAT (INCLUDED)</h3>
        </div>
        <div>
          <p className="font-bold text-lg mt-3">$ 1,079</p>
        </div>
      </div>
      <div className="flex justify-between">
        <div>
          <h3 className="font-medium mt-3">GRAND TOTAL</h3>
        </div>
        <div>
          <p className="font-bold text-lg text-Peru mt-3">$ 5,446</p>
        </div>
      </div>
      <div className="text-center mt-4">
        <button  onClick={toggleModal} className="bg-Peru text-white font-bold text-sm py-3 px-20 hover:bg-VeryLightTangelo sm:px-52 md:px-20">
          CONTINUE & PAY
        </button>
      </div>
      {isModalOpen && (
        <>
          {/* Dark overlay */}
          <div
            className="fixed inset-0 bg-black bg-opacity-40"
            onClick={toggleModal} // Close the modal when clicking the overlay
          />

          <ThankYouModal open={isModalOpen} onClose={toggleModal} />
        </>
      )}
    </div>
  );
}
