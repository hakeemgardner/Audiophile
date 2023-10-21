import ProductOverview from "../components/ProductOverview";
import XX99MarkIIHeadphones from "../assets/XX99MarkIIHeadphones.png";
import XX59headphones from "../assets/XX59headphones.png";
import XX99MarkIHeadphones from "../assets/XX99MarkIHeadphones.png";
import ZX9SPEAKER from "../assets/ZX9SPEAKER.png";
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
import ImageGallery from "../components/ImageGallery";
import { useNavigate } from "react-router-dom";
export default function XX99MarkIHeadphonesProductDetailsPage() {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };
  const inBoxContents = [
    {
      imgSrc: onex,
      content: "Headphone Unit",
    },
    {
      imgSrc: twox,
      content: "Replacement Earcups",
    },
    {
      imgSrc: onex,
      content: "User Manual",
    },
    {
      imgSrc: onex,
      content: "3.5mm 5m Audio Cable",
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
        <ProductOverview
          imgSrc={XX99MarkIHeadphones}
          productName="XX99 Mark I Headphones"
          description="As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go."
          price="$ 1,750"
        />
        <div className="md:flex">
          <div className="md:w-3/5">
            <h2 className="font-bold text-2xl mt-12 sm:text-3xl">FEATURES</h2>
            <ProductFeatures
              firstP="As the headphones all others are measured against, the XX99 Mark I demonstrates over five decades of audio expertise, redefining the critical listening experience. This pair of closed-back headphones are made of industrial, aerospace-grade materials to emphasize durability at a relatively light weight of 11 oz. "
              secondP="From the handcrafted microfiber ear cushions to the robust metal headband with inner damping element, the components work together to deliver comfort and uncompromising sound. Its closed-back design delivers up to 27 dB of passive noise cancellation, reducing resonance by reflecting sound to a dedicated absorber. For connectivity, a specially tuned cable is included with a balanced gold connector."
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
