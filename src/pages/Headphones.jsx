import XX99MarkIIHeadphones from "../assets/XX99MarkIIHeadphones.png";
import XX99MarkIHeadphones from "../assets/XX99MarkIHeadphones.png";
import XX59headphones from "../assets/XX59headphones.png";
import Categories from "../components/Categories";
import Productslist from "../components/Productslist";
import Missionstatement from "../components/Missionstatement";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
export default function Headphones() {
  const categoryVariant = {
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
  const navigate = useNavigate();

  const handleSeeXX99MarkIIClick = () => {
    navigate("/XX99MarkIIHeadphonesProductDetailsPage");
  };

  const handleSeeXX99MarkIClick = () => {
    navigate("/XX99MarkIHeadphonesProductDetailsPage");
  };

  const handleSeeXX59Click = () => {
    navigate("/XX59HeadphonesProductDetailsPage");
  };

  return (
    <div>
      <div className="bg-ChineseBlack">
        <h1 className="font-bold text-3xl text-white text-center py-8 lg:py-12">
          HEADPHONES
        </h1>
      </div>
      <div className="mx-6 text-center">
        <Categories
          imgSrc={XX99MarkIIHeadphones}
          title="NEW PRODUCT"
          productName="XX99 Mark II HEADPHONES"
          description="The new XX99 Mark II headphones are the pinnacle of pristine audio. They redefine your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound."
          onClick={handleSeeXX99MarkIIClick}
        />

        <Categories
          imgSrc={XX99MarkIHeadphones}
          productName="XX99 Mark I HEADPHONES"
          description="As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go."
          secondDivClassName="flex-row-reverse"
          onClick={handleSeeXX99MarkIClick}
        />

        <Categories
          imgSrc={XX59headphones}
          productName="XX59 HEADPHONES"
          description="Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move."
          onClick={handleSeeXX59Click}
        />
      </div>

      <Productslist />
      <Missionstatement />
    </div>
  );
}
