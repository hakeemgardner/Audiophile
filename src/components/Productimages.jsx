import { useNavigate } from "react-router-dom";
import speakerimg from "../assets/speakerimage.png";
import backgroundimg from "../assets/chairspeaker1.png";
import earphones from "../assets/earphones.png";
import { motion } from "framer-motion";

export default function Productimages() {
  const firstCardVariants = {
    offscreen: {
      y: 300,
    },
    onscreen: {
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };
  const secondCardVariants = {
    offscreen: {
      x: 300,
    },
    onscreen: {
      x: 0,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };
  const thirdCardVariants = {
    offscreen: {
      x: -300,
    },
    onscreen: {
      x: 0,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };
  const navigate = useNavigate();

  const handleSeeZX9Speaker = () => {
    navigate("/ZX9SPEAKERProductDetailsPage");
  };
  const handleSeeZX7Speaker = () => {
    navigate("/ZX7SPEAKERProductDetailsPage");
  };
  const handleSeeYX1Earphone = () => {
    navigate("/YX1WirelessEarphonesProductDetailsPage");
  };
  const backgroundStyles = {
    backgroundImage: `url(${backgroundimg})`,
    backgroundSize: "cover", // Adjust this based on your preference
    backgroundRepeat: "no-repeat",
    backgroundPosition: "left center", // Center the background image
  };

  return (
    <div className="bg-white mx-6 mt-16 lg:mx-36">
      <motion.div
        className="bg-Peru  rounded-lg text-center lg:flex lg:justify-between lg:px-12 lg:pt-12"
        initial="offscreen"
        variants={firstCardVariants}
        whileInView="onscreen"
        viewport={{ once: true }}
      >
        <div className="pt-9">
          <img
            className="h-36 mx-auto sm:h-56 lg:h-96"
            src={speakerimg}
            alt=""
          />
        </div>
        <div className="mt-12">
          <h2 className="font-bold text-4xl text-white mt-4 lg:text-6xl">
            ZX9 <br /> SPEAKER
          </h2>
          <p className="text-base font-medium text-white mt-8">
            Upgrade to premium speakers that are phenomenally built to deliver
            truly <br />
            remarkable sound.
          </p>
          <button
            onClick={handleSeeZX9Speaker}
            className="bg-black p-8 py-4 mt-6 mb-8 text-white font-bold text-sm hover:bg-Darkgray "
          >
            SEE PRODUCT
          </button>
        </div>
      </motion.div>
      <motion.div
        className="mt-6  py-28 rounded-lg bg-no-repeat"
        style={backgroundStyles}
        initial="offscreen"
        variants={firstCardVariants}
        whileInView="onscreen"
        viewport={{ once: true }}
      >
        <h2 className="text-black font-bold text-3xl ">ZX7 SPEAKER</h2>
        <button
          onClick={handleSeeZX7Speaker}
          className=" border-2 border-black font-bold text-sm p-6 py-2 mt-6 text-black hover:text-white hover:bg-ChineseBlack"
        >
          SEE PRODUCT
        </button>
      </motion.div>
      <div className="mt-6  sm:flex sm:justify-between">
        <motion.div
          initial="offscreen"
          variants={thirdCardVariants}
          whileInView="onscreen"
          viewport={{ once: true }}
        >
          <img
            className="rounded-lg h-48 w-full sm:h-56 sm:w-72 lg:h-80 lg:w-[29rem]"
            src={earphones}
            alt=""
          />
        </motion.div>
        <motion.div
          className="rounded-lg mt-6 bg-AntiFlashWhite text sm:mt-0 sm:px-4 lg:px-28 lg:m"
          initial="offscreen"
          variants={secondCardVariants}
          whileInView="onscreen"
          viewport={{ once: true }}
        >
          <h2 className="text-black font-bold text-3xl pt-8 mt-6 ml-6">
            YX1 EARPHONES
          </h2>
          <button
            onClick={handleSeeYX1Earphone}
            className="bg-AntiFlashWhite p-6 py-2 mt-6 ml-6 mb-8 text-black border-2 border-black font-bold text-sm hover:text-white hover:bg-ChineseBlack"
          >
            SEE PRODUCT
          </button>
        </motion.div>
      </div>
    </div>
  );
}
