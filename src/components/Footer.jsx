import audiophile from "../assets/audiophile.png";
import groupicons from "../assets/Group30.svg";
import rectangle from "../assets/Rectangle.png";
import { useNavigate } from "react-router-dom";
export default function Footer() {
  const navigate = useNavigate();
  return (
    <div className="mt-20 bg-ChineseBlack text-white text-center">
      <img className="mx-auto sm:ml-6" src={rectangle} alt="" />
      <div className="lg:flex lg:justify-between">
        <div>
          <img className="mx-auto pt-12 sm:ml-6" src={audiophile} alt="" />
        </div>
        <div>
          <ul className="mt-6 font-bold text-sm list-none p-0 sm:flex sm:px-6 lg:mt-12">
            <li className="mb-6 sm:mr-8 hover:text-Peru ">
              <button
                onClick={() => {
                  navigate("/");
                }}
              >
                HOME
              </button>
            </li>
            <li className="mb-6 sm:mr-8 hover:text-Peru ">
              <button
                onClick={() => {
                  navigate("/headphones");
                }}
              >
                HEADPHONES
              </button>
            </li>
            <li className="mb-6 sm:mr-8 hover:text-Peru ">
              <button
                onClick={() => {
                  navigate("/speakers");
                }}
              >
                SPEAKERS
              </button>
            </li>
            <li className="mb-6 sm:mr-8 hover:text-Peru cursor-pointer">
              <button
                onClick={() => {
                  navigate("/earphones");
                }}
              >
                EARPHONES
              </button>
            </li>
          </ul>
        </div>
      </div>
      <p className="mt-12 mx-6">
        Audiophile is an all-in-one stop to fulfill your audio needs. We're a
        small team of music lovers and sound specialists who are devoted to
        helping you get the most out of personal audio. Come and visit our demo
        facility - we’re open 7 days a week.
      </p>
      <div className="sm:flex sm:justify-between sm:mx-6">
        <div>
          <p className="mt-8">Copyright 2023. All Rights Reserved</p>
        </div>
        <div>
          <img className="mx-auto mt-8 hover:bg-Peru" src={groupicons} alt="" />
        </div>
      </div>
    </div>
  );
}
