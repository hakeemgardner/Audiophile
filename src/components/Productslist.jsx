import { motion } from "framer-motion";
import headphoneimg from "../assets/headphoneimage.png";
import speakerimg from "../assets/speakerimage.png";
import earphoneimg from "../assets/earphoneimage.png";
import arrow from "../assets/arrow.png";
import { useNavigate } from "react-router-dom";

export default function Productslist() {
  const navigate = useNavigate();
  const handleSeeHeadPhonesClick = () => {
    navigate("/Headphones");
  };
  const handleSeeEarPhonesClick = () => {
    navigate("/Earphones");
  };
  const handleSeeSpeakersClick = () => {
    navigate("/Speakers");
  };
  return (
    <div className="text-black mt-24 mx-6 text-center sm:flex sm:justify-between lg:mx-36">
      <motion.div
        className="bg-AntiFlashWhite mt-8 rounded-lg text-center sm:px-8"
        initial={{ scale: 0 }}
        animate={{ rotate: 360, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
      >
        <img className="mx-auto h-28" src={headphoneimg} alt="" />
        <h3 className="font-bold mt-8 text-base">HEADPHONES</h3>
        <button
          onClick={handleSeeHeadPhonesClick}
          className="font-bold text-sm my-4"
        >
          SHOP <img className="inline-block ml-2" src={arrow} alt="" />{" "}
        </button>
      </motion.div>
      <motion.div
        className="bg-AntiFlashWhite mt-8 rounded-lg text-center sm:px-8"
        initial={{ scale: 0 }}
        animate={{ rotate: 360, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
      >
        <img className="mx-auto h-28" src={speakerimg} alt="" />
        <h3 className="font-bold text-base mt-8">SPEAKERS</h3>
        <button
          onClick={handleSeeSpeakersClick}
          className="font-bold text-sm my-4"
        >
          SHOP <img className="inline-block ml-2" src={arrow} alt="" />
        </button>
      </motion.div>
      <motion.div
        className="bg-AntiFlashWhite mt-8 rounded-lg text-center sm:px-8"
        initial={{ scale: 0 }}
        animate={{ rotate: 360, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
      >
        <img className="mx-auto h-28" src={earphoneimg} alt="" />
        <h3 className="font-bold text-base mt-8">EARPHONES</h3>
        <button
          onClick={handleSeeEarPhonesClick}
          className="font-bold text-sm my-4"
        >
          SHOP <img className="inline-block ml-2" src={arrow} alt="" />
        </button>
      </motion.div>
    </div>
  );
}
