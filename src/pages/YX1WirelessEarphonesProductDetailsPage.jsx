import ProductOverview from "../components/ProductOverview";
import XX99MarkIIHeadphones from "../assets/XX99MarkIIHeadphones.png";
import XX59headphones from "../assets/XX59headphones.png";
import XX99MarkIHeadphones from "../assets/XX99MarkIHeadphones.png";
import ZX9SPEAKER from "../assets/ZX9SPEAKER.png";
import ZX7SPEAKER from "../assets/ZX7SPEAKER.png";
import YX1 from "../assets/YX1WIRELESSEARPHONES.png";
import Missionstatement from "../components/Missionstatement";
import Productlist from "../components/Productslist";
import model from "../assets/model.png";
import deskheadphones from "../assets/deskheadphones.png";
import backgroundearphone from "../assets/backgroundearphone.png";
import Recommendedproducts from "../components/Recommendedproducts";
import ProductFeatures from "../components/ProductFeatures";
import InBoxContent from "../components/InBoxContent";
import onex from "../assets/1x.png";
import twox from "../assets/2x.png";
import sixX from "../assets/6x.png";
import ImageGallery from "../components/ImageGallery";
import CartModal from "../components/CartModal";
import { useNavigate } from "react-router-dom";
export default function YX1WirelessEarphonesProductDetailsPage() {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };
  const inBoxContents = [
    {
      imgSrc: twox,
      content: "Earphone Unit",
    },
    {
      imgSrc: sixX,
      content: "Multi-size Earplugs",
    },
    {
      imgSrc: onex,
      content: "User Manual",
    },
    {
      imgSrc: onex,
      content: "USB-C Charging Cable",
    },
    {
      imgSrc: onex,
      content: "Travel Pouch",
    },
  ];
  const images = [
    { src: model, alt: "Model Image" },
    { src: deskheadphones, alt: "Desk Headphones Image" },
    { src: backgroundearphone, alt: "Backgroundearphone" },
  ];

  return (
    <>
      <div className="md:mx-32 md:my-12">
        <button
          onClick={handleGoBack}
          className="bg-white text-AmericanSilver font-bold text-sm py-3 px-6 hover:bg-VeryLightTangelo"
        >
          Go Back
        </button>
      </div>

      <div className="mx-6 md:mx-36">
        <CartModal />
        <ProductOverview
          imgSrc={YX1}
          title="NEW PRODUCT"
          productName="YX1 WIRELESS
EARPHONES"
          description="Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature."
          price="$ 599"
        />
        <div className="md:flex">
          <div className="md:w-3/5">
            <h2 className="font-bold text-2xl mt-12 sm:text-3xl">FEATURES</h2>
            <ProductFeatures
              firstP="Experience unrivalled stereo sound thanks to innovative acoustic technology. With improved ergonomics designed for full day wearing, these revolutionary earphones have been finely crafted to provide you with the perfect fit, delivering complete comfort all day long while enjoying exceptional noise isolation and truly immersive sound. 
"
              secondP="The YX1 Wireless Earphones features customizable controls for volume, music, calls, and voice assistants built into both earbuds. The new 7-hour battery life can be extended up to 28 hours with the charging case, giving you uninterrupted play time. Exquisite craftsmanship with a splash resistant design now available in an all new white and grey color scheme as well as the popular classic black."
            />
          </div>
          <div className="md:w-2/5">
            <div className="sm:flex justify-between md:block">
              <div>
                <h2 className="font-bold text-2xl mt-12 sm:text-3xl md:ml-20">
                  IN THE BOX
                </h2>
              </div>
              <div className="sm:mt-8 sm:ml-32 md:ml-20">
                <InBoxContent contents={inBoxContents} />
              </div>
            </div>
          </div>
        </div>

        <ImageGallery images={images} />
        <h2 className="font-bold text-2xl text-center mt-16">
          YOU MAY ALSO LIKE
        </h2>
        <div className="mt-6 sm:flex sm:justify-between">
          <div>
            <Recommendedproducts
              imgSrc={XX99MarkIHeadphones}
              title="XX99 Mark I"
            />
          </div>
          <div>
            <Recommendedproducts imgSrc={XX59headphones} title="XX99 Mark II" />
          </div>
          <div>
            <Recommendedproducts imgSrc={ZX9SPEAKER} title="ZX9 SPEAKER" />
          </div>
        </div>
        <Productlist />
        <Missionstatement />
      </div>
    </>
  );
}
