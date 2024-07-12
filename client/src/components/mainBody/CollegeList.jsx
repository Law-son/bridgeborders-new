import React, { useState } from "react";
import build1 from "../../assets/cardImages/build1.png";
import build2 from "../../assets/cardImages/build2.png";
import build3 from "../../assets/cardImages/build3.png";
import { IoArrowForward } from "react-icons/io5";

function CollegeList() {
  const [selectedTab, setSelectedTab] = useState("build");

  return (
    <div className="flex flex-col bg-lightGreen rounded-2xl pt-[5rem] mb-4 mt-10 w-full px-4 lg:px-8">
      <h1 className="text-black font-bold text-center pb-10 text-[1.5em] lg:text-[1.8em]">
      Build Your College List
      </h1>
      <div className="flex justify-center">
        <div className="flex bg-white mb-8 border border-gray-400 rounded-sm w-[25rem]">
          <button
            className={`flex-1 py-[6.5px] cursor-pointer border-r border-gray-400 text-center font-semibold ${
              selectedTab === "build"
                ? "bg-primaryGreen text-white"
                : "bg-white text-black"
            }`}
            onClick={() => setSelectedTab("build")}
          >
            Build
          </button>
          <button
            className={`flex-1 py-[6.5px] cursor-pointer text-center border-r border-gray-400 font-semibold ${
              selectedTab === "track"
                ? "bg-primaryGreen text-white"
                : "bg-white text-black"
            }`}
            onClick={() => setSelectedTab("track")}
          >
            Track
          </button>
          <button
            className={`flex-1 py-[6.5px] cursor-pointer border-r border-gray-400 text-center font-semibold ${
              selectedTab === "match"
                ? "bg-primaryGreen text-white"
                : "bg-white text-black"
            }`}
            onClick={() => setSelectedTab("match")}
          >
            Match
          </button>
        </div>
      </div>
      {selectedTab === "build" && (
        <div className="flex flex-col px-2 lg:px-20">
          <p className="font-semibold text-center text-md mb-6 lg:text-lg ">
          Create a college list based on your chosen preferences & strategy.
          </p>
          <img src={build1} alt="comp1" className="rounded-lg mb-10" />
        </div>
      )}
      {selectedTab === "track" && (
        <div className="flex flex-col px-2 lg:px-20">
          <p className="font-semibold text-center text-md mb-6 lg:text-lg ">
          Say goodbye to your college spreadsheet and use the College Tracker to efficiently organize and track your applications.
          </p>
          <img src={build2} alt="comp1" className="rounded-lg mb-10" />
        </div>
      )}
      {selectedTab === "match" && (
        <div className="flex flex-col px-2 lg:px-20">
          <p className="font-semibold text-center text-md mb-6 lg:text-lg ">
          Analyze your profile & categorize your colleges from safety to reach.
          </p>
          <img src={build3} alt="comp1" className="rounded-lg mb-10" />
        </div>
      )}
      <div className="flex justify-center">
        <button className="flex font-semibold text-[1em] my-2 mb-10 text-white bg-primaryGreen px-6 py-2 justify-center items-center rounded-[5px] lg:w-[20rem] mx-auto">
          Build Your List Now <IoArrowForward className="ml-1 font-bold" />
        </button>
      </div>
    </div>
  );
}

export default CollegeList;
