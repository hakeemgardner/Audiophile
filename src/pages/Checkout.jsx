import CustomRadioButtons from "../components/CustomRadioButton";
import ItemSummary from "../components/ItemSummary";
import { useNavigate } from "react-router-dom";

export default function Checkout() {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };
  return (
    <div className="bg-AntiFlashWhite">
      <div>
        <button
          onClick={handleGoBack}
          className=" bg-AntiFlashWhite text-gray-600 font-bold text-sm py-3 px-6 mt-4 md:ml-32"
        >
          Go Back
        </button>
      </div>

      <div className="md:flex justify-between md:mx-32">
        <div>
          <div className="bg-white m-6 px-4 py-8 rounded-lg  ">
            <h1 className="font-bold text-3xl">CHECKOUT</h1>
            <form action="">
              <div className="mt-8">
                <h2 className="font-bold text-Peru mb-4">BILLING DETAILS</h2>
                <div className="sm:flex">
                  <div className="">
                    <label className="font-bold text-xs" htmlFor="fname">
                      Name
                    </label>
                    <input
                      className="invalid:border-PersianRed focus:border-Peru focus:ring-Peru hover:border-Peru block rounded-lg border border-AmericanSilver my-2 px-16 py-4 font-sans text-sm font-normal text-AmericanSilver sm:px-12 "
                      type="text"
                      placeholder="Alexei Ward"
                    />
                    <label className="font-bold text-xs" htmlFor="fname">
                      Phone Number
                    </label>
                    <input
                      className="invalid:border-PersianRed hover:border-Peru block rounded-lg border border-AmericanSilver my-2 px-16 py-4 font-sans text-sm font-normal text-AmericanSilver sm:px-12 "
                      type="tel"
                      placeholder="+1 202-555-0136"
                    />
                  </div>
                  <div className="">
                    <label
                      className="font-bold text-xs sm:ml-6"
                      htmlFor="fname"
                    >
                      Email Address
                    </label>
                    <input
                      className="invalid:border-PersianRed hover:border-Peru block rounded-lg border border-AmericanSilver my-2 px-16 py-4 font-sans text-sm font-normal text-AmericanSilver sm:px-12 sm:ml-6 "
                      type="email"
                      placeholder="alexei@mail.com"
                    />
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <h2 className="font-bold text-Peru mb-4">SHIPPING INFO</h2>
                <label className="font-bold text-xs" htmlFor="fname">
                  Your Address
                </label>
                <input
                  className="invalid:border-PersianRed hover:border-Peru block rounded-lg border border-AmericanSilver my-2  px-16 py-4 font-sans text-sm font-normal text-AmericanSilver sm:px-48"
                  type="text"
                  placeholder="1137 Williams Avenue"
                />
                <div className="sm:flex">
                  <div>
                    <label className="font-bold text-xs" htmlFor="fname">
                      ZIP Code
                    </label>
                    <input
                      className="invalid:border-PersianRed hover:border-Peru block rounded-lg border border-AmericanSilver my-2 px-16 py-4 font-sans text-sm font-normal text-AmericanSilver sm:px-12 "
                      type="number"
                      placeholder="10001"
                    />
                    <label className="font-bold text-xs" htmlFor="fname">
                      Country
                    </label>
                    <input
                      className="invalid:border-PersianRed hover:border-Peru block rounded-lg border border-AmericanSilver my-2 px-16 py-4 font-sans text-sm font-normal text-AmericanSilver sm:px-12"
                      type="text"
                      placeholder="United States"
                    />
                  </div>
                  <div>
                    {" "}
                    <label
                      className="font-bold text-xs sm:ml-6"
                      htmlFor="fname"
                    >
                      City
                    </label>
                    <input
                      className="invalid:border-PersianRed hover:border-Peru block rounded-lg border border-AmericanSilver my-2 px-16 py-4 font-sans text-sm font-normal text-AmericanSilver sm:ml-6 sm:px-12 "
                      type="text"
                      placeholder="New York"
                    />
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <h2 className="font-bold text-Peru mb-4">PAYMENT DETAILS</h2>
                <div className="sm:flex justify-between">
                  <div>
                    <label className="font-bold text-xs" htmlFor="fname">
                      Payment Method
                    </label>
                  </div>
                  <div>
                    <CustomRadioButtons />
                  </div>
                </div>
                <div className="sm:flex">
                  <div>
                    <label className="font-bold text-xs" htmlFor="fname">
                      e-Money Number
                    </label>
                    <input
                      className="invalid:border-PersianRed hover:border-Peru block rounded-lg border border-AmericanSilver  my-2 px-16 py-4 font-sans text-sm font-normal text-AmericanSilver sm:px-12  "
                      type="number"
                      placeholder="238521993"
                    />
                  </div>
                  <div>
                    <label
                      className="font-bold text-xs sm:ml-6"
                      htmlFor="fname"
                    >
                      e-Money PIN
                    </label>
                    <input
                      className="invalid:border-PersianRed hover:border-Peru block rounded-lg border border-AmericanSilver  my-2 px-16 py-4 font-sans text-sm font-normal text-AmericanSilver sm:px-12 sm:ml-6 "
                      type="number"
                      placeholder="6891"
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="mt-6">
          <ItemSummary />
        </div>
      </div>
    </div>
  );
}
