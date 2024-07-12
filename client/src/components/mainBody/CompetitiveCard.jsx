import React, { useState } from "react";
import comp1 from "../../assets/cardImages/comp1.png";
import comp2 from "../../assets/cardImages/comp2.png";
import { IoArrowForward } from "react-icons/io5";

function CompetitiveCard() {
  const [selectedTab, setSelectedTab] = useState("assessment");

  return (
    <div className="flex flex-col bg-lightBlue rounded-2xl pt-[5rem] mb-4 w-full px-4 lg:px-8">
      <h1 className="text-black font-bold text-center pb-10 text-[1.5em] lg:text-[1.8em]">
        Find Out How Competitive You Are
      </h1>
      <div className="flex justify-center">
        <div className="flex bg-white mb-8 border border-gray-400 rounded-sm w-[25rem]">
          <button
            className={`flex-1 py-[6.5px] cursor-pointer border-r border-gray-400 text-center font-semibold ${
              selectedTab === "assessment"
                ? "bg-primaryGreen text-white"
                : "bg-white text-black"
            }`}
            onClick={() => setSelectedTab("assessment")}
          >
            Assessment
          </button>
          <button
            className={`flex-1 py-[6.5px] cursor-pointer text-center font-semibold ${
              selectedTab === "analysis"
                ? "bg-primaryGreen text-white"
                : "bg-white text-black"
            }`}
            onClick={() => setSelectedTab("analysis")}
          >
            Analysis
          </button>
        </div>
      </div>
      {selectedTab === "assessment" && (
        <div className="flex flex-col px-2 lg:px-20">
          <p className="font-semibold text-center text-md mb-6 lg:text-lg ">
            Get an in-depth assessment of your application through the lens of
            an admissions officer.
          </p>
          <img src={comp1} alt="comp1" className="rounded-lg mb-10" />
        </div>
      )}
      {selectedTab === "analysis" && (
        <div className="flex flex-col px-2 lg:px-20">
          <p className="font-semibold text-center text-md mb-6 lg:text-lg ">
            Understand where you stand with an analysis of your academics,
            extracurriculars & awards with insights on why and how to improve.
          </p>
          <img src={comp2} alt="comp1" className="rounded-lg mb-10" />
        </div>
      )}
      <div className="flex justify-center">
        <button className="flex font-semibold text-[1em] my-2 mb-10 text-white bg-primaryGreen px-6 py-2 justify-center items-center rounded-[5px] lg:w-[20rem] mx-auto">
          Analyze My Application Now <IoArrowForward className="ml-1 font-bold" />
        </button>
      </div>
    </div>
  );
}

export default CompetitiveCard;
