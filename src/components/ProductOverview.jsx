import Button from "../components/Button";
import Input from "../components/CustomNumberInput";
import { useDispatch } from "react-redux";
import { addItem } from "../features/cart/cartSlice";
import { motion } from "framer-motion";
export default function ProductOverview(props) {
  const cardVariants = {
    offscreen: {
      x: 600,
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
  const { imgSrc, title, productName, description, price } = props;
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    // Dispatch the addItem action with the product details
    dispatch(addItem({ imgSrc, title, productName, description, price }));
  };
  return (
    <div className="sm:flex justify-between">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ rotate: 360, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
        className="sm:w-2/5 md:w/12 bg-AntiFlashWhite rounded-lg flex justify-center items-center"
      >
        <img className="h-64 py-12 md:h-96" src={imgSrc} alt="" />
      </motion.div>
      <motion.div
        initial="offscreen"
        variants={cardVariants}
        animate="onscreen"
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
        className="mt-6 sm:w-3/5 sm:ml-8 md:w/12 "
      >
        <div className="mb-4">
          <h2 className="text-Peru tracking-thewidest sm:text-xs">{title}</h2>
          <h2 className="font-bold text-3xl mt-8">{productName}</h2>
          <p className="text-medium text-base mt-8">{description}</p>
        </div>
        <p className="font-bold text-lg">{price}</p>
        <div className="flex items-center mt-4">
          <div className="ml-1">
            <Input type="number" value="1" />
          </div>
          <div className="ml-3">
            <Button
              onClick={handleAddToCart}
              alternateClassName=""
              text="ADD TO CART"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
