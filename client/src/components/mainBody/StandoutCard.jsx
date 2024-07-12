import React, { useState } from "react";
import craft1 from "../../assets/cardImages/craft1.png";
import craft2 from "../../assets/cardImages/craft2.png";
import craft3 from "../../assets/cardImages/craft3.png";
import { IoArrowForward } from "react-icons/io5";

function CollegeList() {
  const [selectedTab, setSelectedTab] = useState("brainstorm");

  return (
    <div className="flex flex-col bg-lightPink rounded-2xl pt-[5rem] mb-4 mt-10 w-full px-4 lg:px-8">
      <h1 className="text-black font-bold text-center pb-10 text-[1.5em] lg:text-[1.8em]">
      Craft Standout Application Essays
      </h1>
      <div className="flex justify-center">
        <div className="flex bg-white mb-8 border border-gray-400 rounded-sm w-[25rem]">
          <button
            className={`flex-1 py-[6.5px] cursor-pointer border-r border-gray-400 text-center font-semibold ${
              selectedTab === "brainstorm"
                ? "bg-primaryGreen text-white"
                : "bg-white text-black"
            }`}
            onClick={() => setSelectedTab("brainstorm")}
          >
            Brainstorm
          </button>
          <button
            className={`flex-1 py-[6.5px] cursor-pointer text-center border-r border-gray-400 font-semibold ${
              selectedTab === "outline"
                ? "bg-primaryGreen text-white"
                : "bg-white text-black"
            }`}
            onClick={() => setSelectedTab("outline")}
          >
            Outline
          </button>
          <button
            className={`flex-1 py-[6.5px] cursor-pointer border-r border-gray-400 text-center font-semibold ${
              selectedTab === "draft"
                ? "bg-primaryGreen text-white"
                : "bg-white text-black"
            }`}
            onClick={() => setSelectedTab("draft")}
          >
            Draft
          </button>
        </div>
      </div>
      {selectedTab === "brainstorm" && (
        <div className="flex flex-col px-2 lg:px-20">
          <p className="font-semibold text-center text-md mb-6 lg:text-lg ">
          Brainstorm, outline, and draft your Personal Essay & Supplemental College Essays. Use these tools to supercharge and fuel your creative writing process.
          </p>
          <img src={craft1} alt="comp1" className="rounded-lg mb-10" />
        </div>
      )}
      {selectedTab === "outline" && (
        <div className="flex flex-col px-2 lg:px-20">
          <p className="font-semibold text-center text-md mb-6 lg:text-lg ">
          Brainstorm, outline, and draft your Personal Essay & Supplemental College Essays. Use these tools to supercharge and fuel your creative writing process.
          </p>
          <img src={craft2} alt="comp1" className="rounded-lg mb-10" />
        </div>
      )}
      {selectedTab === "draft" && (
        <div className="flex flex-col px-2 lg:px-20">
          <p className="font-semibold text-center text-md mb-6 lg:text-lg ">
          Brainstorm, outline, and draft your Personal Essay & Supplemental College Essays. Use these tools to supercharge and fuel your creative writing process.
          </p>
          <img src={craft3} alt="comp1" className="rounded-lg mb-10" />
        </div>
      )}
      <div className="flex justify-center">
        <button className="flex font-semibold text-[1em] my-2 mb-10 text-white bg-primaryGreen px-6 py-2 justify-center items-center rounded-[5px] lg:w-[20rem] mx-auto">
          Craft Your Essays Now <IoArrowForward className="ml-1 font-bold" />
        </button>
      </div>
    </div>
  );
}

export default CollegeList;
