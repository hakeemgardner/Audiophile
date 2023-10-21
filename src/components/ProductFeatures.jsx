import { motion } from "framer-motion";
export default function ProductFeatures(props) {
  const paraVariants = {
    offscreen: {
      scale: 0,
    },
    onscreen: {
      scale: 1,

      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };
  const { firstP, secondP } = props;
  return (
    <motion.div
      initial="offscreen"
      variants={paraVariants}
      whileInView="onscreen"
      viewport={{ once: true }}
      className="mt-8"
    >
      <p>{firstP}</p>
      <p className="mt-4">{secondP}</p>
    </motion.div>
  );
}
