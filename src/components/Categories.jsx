import React from "react";
import Button from "./Button";
import { motion } from "framer-motion";
export default function Categories(props) {
  const imageVariants = {
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
  const firstTextVariants = {
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
  const {
    imgSrc,
    title,
    productName,
    description,
    topDivClassName,
    secondDivClassName,
    onClick,
  } = props;

  return (
    <div className={`text-center md:text-start lg:mx-6 ${topDivClassName}`}>
      <div
        className={`md:flex md:justify-between md:mx-24 ${secondDivClassName}`}
      >
        <div className="bg-AntiFlashWhite mt-16 rounded-lg py-12 px-4 md:py-20 md:px-24">
          <motion.img
            initial="offscreen"
            variants={imageVariants}
            whileInView="onscreen"
            viewport={{ once: true }}
            className="mx-auto h-72 md:h-full"
            src={imgSrc}
            alt=""
          />
        </div>
        <div className="md:m-20 ">
          <motion.h3
            initial={{ scale: 0 }}
            animate={{ rotate: 360, scale: 1 }}
            transition={{
              type: "Tween",
              stiffness: 260,
              damping: 20,
            }}
            className="text-Peru tracking-thewidest mt-8 md:ml-4"
          >
            {title}
          </motion.h3>
          <motion.h2
            initial={{ scale: 0 }}
            animate={{ rotate: 360, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 25,
            }}
            className="font-bold text-3xl mt-8 md:ml-4"
          >
            {productName}
          </motion.h2>
          <motion.p
            initial={{ scale: 0 }}
            animate={{ rotate: 360, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 30,
            }}
            className="text-medium text-base  mt-8 md:ml-4"
          >
            {description}
          </motion.p>
          <Button
            alternateClassName="mt-8 lg:ml-4 hover:bg-VeryLightTangelo"
            text="SEE PRODUCT"
            onClick={onClick}
          />
        </div>
      </div>
    </div>
  );
}
