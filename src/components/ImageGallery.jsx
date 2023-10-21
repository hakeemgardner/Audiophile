import React from "react";
import { motion } from "framer-motion";
export default function ImageGallery(props) {
  const imageVariants = {
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
  const { images } = props;

  return (
    <motion.div
      initial="offscreen"
      variants={imageVariants}
      whileInView="onscreen"
      viewport={{ once: true }}
      className="mt-12"
    >
      {images.map((image, index) => (
        <img
          key={index}
          className="rounded-lg grayscale mt-6"
          src={image.src}
          alt={image.alt}
        />
      ))}
    </motion.div>
  );
}
