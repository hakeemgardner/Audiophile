import ProductOverview from "../components/ProductOverview";
import XX99MarkIIHeadphones from "../assets/XX99MarkIIHeadphones.png";
import XX59headphones from "../assets/XX59headphones.png";
import XX99MarkIHeadphones from "../assets/XX99MarkIHeadphones.png";
import ZX9SPEAKER from "../assets/ZX9SPEAKER.png";
import ZX7SPEAKER from "../assets/ZX7SPEAKER.png";
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

export default function ZX7SPEAKERProductDetailsPage() {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };
  const inBoxContents = [
    {
      imgSrc: twox,
      content: "Speaker Unit",
    },
    {
      imgSrc: twox,
      content: "Speaker Cloth Panel",
    },
    {
      imgSrc: onex,
      content: "User Manual",
    },
    {
      imgSrc: onex,
      content: "3.5mm 10m Audio Cable",
    },
    {
      imgSrc: onex,
      content: "7.5m Optical Cable",
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
          imgSrc={ZX7SPEAKER}
          productName="ZX7
SPEAKER"
          description="Stream high quality sound wirelessly with minimal to no loss. The ZX7 speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use."
          price="$ 3,500"
        />
        <div className="md:flex">
          <div className="md:w-3/5">
            <h2 className="font-bold text-2xl mt-12 sm:text-3xl">FEATURES</h2>
            <ProductFeatures
              firstP="Reap the advantages of a flat diaphragm tweeter cone. This provides a fast response rate and excellent high frequencies that lower tiered bookshelf speakers cannot provide. The woofers are made from aluminum that produces a unique and clear sound. XLR inputs allow you to connect to a mixer for more advanced usage. 
"
              secondP="The ZX7 speaker is the perfect blend of stylish design and high performance. It houses an encased MDF wooden enclosure which minimises acoustic resonance. Dual connectivity allows pairing through bluetooth or traditional optical and RCA input. Switch input sources and control volume at your finger tips with the included wireless remote. This versatile speaker is equipped to deliver an authentic listening experience."
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
