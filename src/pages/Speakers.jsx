import ZX9SPEAKER from "../assets/ZX9SPEAKER.png";
import ZX7SPEAKER from "../assets/ZX7SPEAKER.png";
import Categories from "../components/Categories";
import Productslist from "../components/Productslist";
import Missionstatement from "../components/Missionstatement";
import { useNavigate } from "react-router-dom";
export default function Speakers() {
  const navigate = useNavigate();

  const handleSeeZX9Click = () => {
    navigate("/ZX9SPEAKERProductDetailsPage");
  };

  const handleSeeZX7Click = () => {
    navigate("/ZX7SPEAKERProductDetailsPage");
  };

  return (
    <div>
      <div>
        <div className="bg-ChineseBlack">
          <h1 className="font-bold text-3xl text-white text-center pb-6">
            SPEAKERS
          </h1>
        </div>
        <div className="mx-6 text-center">
          <Categories
            imgSrc={ZX9SPEAKER}
            title="NEW PRODUCT"
            productName="ZX9 SPEAKER"
            description="Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups."
            onClick={handleSeeZX9Click}
          />

          <Categories
            imgSrc={ZX7SPEAKER}
            productName="ZX7 SPEAKER"
            description="Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use."
            onClick={handleSeeZX7Click}
          />
        </div>

        <Productslist />
        <Missionstatement />
      </div>
    </div>
  );
}
