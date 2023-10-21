import backgroundearphone from "../assets/backgroundearphone.png";
import { useNavigate } from "react-router-dom";

export default function Banner() {
  const navigate = useNavigate();

  const handleSeeProductClick = () => {
    navigate("/XX99MarkIIHeadphonesProductDetailsPage");
  };

  return (
    <div
      className=""
      style={{
        backgroundImage: `url(${backgroundearphone})`,
        backgroundSize: "100% auto",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <hr />
      <div className="text-white text-center">
        <h2 className="tracking-thewidest mt-24 text-sm font-normal mix-blend-screen">
          NEW PRODUCT
        </h2>
        <h1 className="text-4xl font-bold mt-6">XX99 Mark II HEADPHONES</h1>
        <p className="font-medium text-base mt-6">
          Experience natural, lifelike audio and <br /> exceptional build
          quality made for the <br /> passionate music enthusiast.
        </p>

        <button
          onClick={handleSeeProductClick}
          className="bg-Peru px-8 py-4 mt-6 mb-8 font-bold text-xs hover:bg-VeryLightTangelo"
        >
          SEE PRODUCT
        </button>
      </div>
    </div>
  );
}
