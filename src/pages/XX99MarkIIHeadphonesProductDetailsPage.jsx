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
import { motion } from "framer-motion";
export default function XX99MarkIIHeadphonesProductDetailsPage() {
  const headerVariants = {
    offscreen: {
      x: 300,
      rotate: 0,
    },
    onscreen: {
      x: 0,
      rotate: 360,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };
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
    {
      imgSrc: onex,
      content: "Travel Bag",
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
          className="bg-white text-AmericanSilver font-bold text-sm py-3 px-6 "
        >
          Go Back
        </button>
      </div>

      <div className="mx-6 md:mx-36">
        <ProductOverview
          imgSrc={XX99MarkIIHeadphones}
          title="NEW PRODUCT"
          productName="XX99 Mark II Headphones"
          description="The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound."
          price="$ 2,999"
        />
        <div className="md:flex">
          <div className="md:w-3/5">
            <motion.h2
              initial="offscreen"
              variants={headerVariants}
              whileInView="onscreen"
              viewport={{ once: true }}
              className="font-bold text-2xl mt-12 sm:text-3xl"
            >
              FEATURES
            </motion.h2>
            <ProductFeatures
              firstP="Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort for those who like to enjoy endless listening. It includes intuitive controls designed for any situation. Whether you’re taking a business call or just in your own personal space, the auto on/off and pause features ensure that you’ll never miss a beat."
              secondP="The advanced Active Noise Cancellation with built-in equalizer allow you to experience your audio world on your terms. It lets you enjoy your audio in peace, but quickly interact with your surroundings when you need to. Combined with Bluetooth 5. 0 compliant connectivity and 17 hour battery life, the XX99 Mark II headphones gives you superior sound, cutting-edge technology, and a modern design aesthetic."
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
