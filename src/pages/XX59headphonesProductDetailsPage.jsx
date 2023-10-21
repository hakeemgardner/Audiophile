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

export default function XX59headphonesProductDetailsPage() {
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
          imgSrc={XX59headphones}
          productName="XX59 Headphones"
          description="Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move."
          price="$ 899"
        />
        <div className="md:flex">
          <div className="md:w-3/5">
            <h2 className="font-bold text-2xl mt-12 sm:text-3xl">FEATURES</h2>
            <ProductFeatures
              firstP="These headphones have been created from durable, high-quality materials tough enough to take anywhere. Its compact folding design fuses comfort and minimalist style making it perfect for travel. Flawless transmission is assured by the latest wireless technology engineered for audio synchronization with videos."
              secondP="More than a simple pair of headphones, this headset features a pair of built-in microphones for clear, hands-free calling when paired with a compatible smartphone. Controlling music and calls is also intuitive thanks to easy-access touch buttons on the earcups. Regardless of how you use the  XX59 headphones, you can do so all day thanks to an impressive 30-hour battery life that can be rapidly recharged via USB-C."
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
