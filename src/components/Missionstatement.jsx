import modelimg from "../assets/model.png";
import { motion } from "framer-motion";
export default function Missionstatement() {
  const imageVariants = {
    offscreen: {
      opacity: 0,
    },
    onscreen: {
      opacity: 1,
      transition: {
        delay: 0.5,
      },
    },
  };
  const letterVariants = {
    offscreen: {
      opacity: 0,
      y: 100,
    },
    onscreen: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100 },
    },
  };
  return (
    <div className="mt-20 mx-6 lg:flex lg:mx-36 lg:flex-row-reverse">
      <motion.div
        initial="offscreen"
        variants={imageVariants}
        whileInView="onscreen"
        viewport={{ once: true }}
      >
        <img
          className=" rounded-lg grayscale origin-center"
          src={modelimg}
          alt=""
        />
      </motion.div>
      <div className="lg:mr-12">
        <h2 className="text-center font-bold text-3xl mt-8 lg:text-4xl">
          BRINGING YOU THE <br />{" "}
          <motion.div
            className="text-Peru inline-block"
            initial="offscreen"
            variants={imageVariants}
            whileInView="onscreen"
            viewport={{ once: true }}
          >
            BEST
          </motion.div>{" "}
          AUDIO GEAR
        </h2>

        <motion.div
          initial="offscreen"
          variants={letterVariants}
          whileInView="onscreen"
          viewport={{ once: true }}
        >
          <p className="text-center font-medium text-base mt-8">
            Located at the heart of New York City, Audiophile is the premier
            store for high end headphones, earphones, speakers, and audio
            accessories. We have a large showroom and luxury demonstration rooms
            available for you to browse and experience a wide range of our
            products. Stop by our store to meet some of the fantastic people who
            make Audiophile the best place to buy your portable audio equipment.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
