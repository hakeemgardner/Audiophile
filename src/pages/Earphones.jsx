import YX1 from "../assets/YX1WIRELESSEARPHONES.png";
import Categories from "../components/Categories";
import Missionstatement from "../components/Missionstatement";
import Productslist from "../components/Productslist";

import { useNavigate } from "react-router-dom";
export default function Earphones() {
  const navigate = useNavigate();

  const handleSeeYX1Click = () => {
    navigate("/YX1WirelessEarphonesProductDetailsPage");
  };
  return (
    <div>
      <div>
        <div className="bg-ChineseBlack">
          <h1 className="font-bold text-3xl text-white text-center pb-6">
            EARPHONES
          </h1>
        </div>
        <div className="mx-6 text-center">
          <Categories
            imgSrc={YX1}
            title="NEW PRODUCT"
            productName="YX1 WIRELESS EARPHONES"
            description="Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature."
            onClick={handleSeeYX1Click}
          />
        </div>

        <Productslist />
        <Missionstatement />
      </div>
    </div>
  );
}
