import React, { useState } from "react";
import comp1 from "../../assets/cardImages/comp1.png";
import comp2 from "../../assets/cardImages/comp2.png";
import { IoArrowForward } from "react-icons/io5";

function GuidanceCard() {
  const [selectedTab, setSelectedTab] = useState("guidance");

  return (
    <div className="flex flex-col bg-lightOrange rounded-2xl mt-10 pt-[5rem] mb-4 w-full px-4 lg:px-8">
      <h1 className="text-black font-bold text-center pb-10 text-[1.5em] lg:text-[1.8em]">
      Application Guidance & Support
      </h1>
      <div className="flex justify-center">
        <div className="flex bg-white mb-8 border border-gray-400 rounded-sm w-[25rem]">
          <button
            className={`flex-1 py-[6.5px] cursor-pointer border-r border-gray-400 text-center font-semibold ${
              selectedTab === "guidance"
                ? "bg-primaryGreen text-white"
                : "bg-white text-black"
            }`}
            onClick={() => setSelectedTab("guidance")}
          >
            Guidance
          </button>
          <button
            className={`flex-1 py-[6.5px] cursor-pointer text-center font-semibold ${
              selectedTab === "support"
                ? "bg-primaryGreen text-white"
                : "bg-white text-black"
            }`}
            onClick={() => setSelectedTab("support")}
          >
            Support
          </button>
        </div>
      </div>
      {selectedTab === "guidance" && (
        <div className="flex flex-col px-2 lg:px-20">
          <p className="font-semibold text-center text-md mb-6 lg:text-lg ">
          Personalized guide through every step of the college application process with tips and strategies to boost your applicaton.
          </p>
          <img src={comp1} alt="comp1" className="rounded-lg mb-10" />
        </div>
      )}
      {selectedTab === "support" && (
        <div className="flex flex-col px-2 lg:px-20">
          <p className="font-semibold text-center text-md mb-6 lg:text-lg ">
          Talk to your personal AI college assistant, Lumi, with all your college applications-related questions, available 24/7.
          </p>
          <img src={comp2} alt="comp1" className="rounded-lg mb-10" />
        </div>
      )}
      <div className="flex justify-center">
        <button className="flex font-semibold text-[1em] my-2 mb-10 text-white bg-primaryGreen px-6 py-2 justify-center items-center rounded-[5px] lg:w-[20rem] mx-auto">
          Get Started Now <IoArrowForward className="ml-1 font-bold" />
        </button>
      </div>
    </div>
  );
}

export default GuidanceCard;
