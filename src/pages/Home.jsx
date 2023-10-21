import Banner from "../components/Banner";
import Productslist from "../components/Productslist";
import Productimages from "../components/Productimages";
import Missionstatement from "../components/Missionstatement";
export default function Home() {
  return (
    <div>
      <div>
        <Banner />
      </div>
      <div className="bg-white">
        <Productslist />
      </div>
      <div>
        <Productimages />
      </div>
      <div>
        <Missionstatement />
      </div>
    </div>
  );
}
