import React, { useState } from "react";
import perf1 from "../../assets/cardImages/perf1.png";
import perf2 from "../../assets/cardImages/perf2.png";
import perf3 from "../../assets/cardImages/perf3.png";
import { IoArrowForward } from "react-icons/io5";

function ReviseCard() {
  const [selectedTab, setSelectedTab] = useState("editing");

  return (
    <div className="flex flex-col bg-pink rounded-2xl pt-[5rem] mb-4 mt-10 w-full px-4 lg:px-8">
      <h1 className="text-black font-bold text-center pb-10 text-[1.5em] lg:text-[1.8em]">
      Revise & Perfect Your Essays
      </h1>
      <div className="flex justify-center">
        <div className="flex bg-white mb-8 border border-gray-400 rounded-sm w-[25rem]">
          <button
            className={`flex-1 py-[6.5px] cursor-pointer border-r border-gray-400 text-center font-semibold ${
              selectedTab === "editing"
                ? "bg-primaryGreen text-white"
                : "bg-white text-black"
            }`}
            onClick={() => setSelectedTab("editing")}
          >
            Editing
          </button>
          <button
            className={`flex-1 py-[6.5px] cursor-pointer text-center border-r border-gray-400 font-semibold ${
              selectedTab === "grading"
                ? "bg-primaryGreen text-white"
                : "bg-white text-black"
            }`}
            onClick={() => setSelectedTab("grading")}
          >
            Grading
          </button>
          <button
            className={`flex-1 py-[6.5px] cursor-pointer border-r border-gray-400 text-center font-semibold ${
              selectedTab === "feedback"
                ? "bg-primaryGreen text-white"
                : "bg-white text-black"
            }`}
            onClick={() => setSelectedTab("feedback")}
          >
            Feedback
          </button>
        </div>
      </div>
      {selectedTab === "editing" && (
        <div className="flex flex-col px-2 lg:px-20">
          <p className="font-semibold text-center text-md mb-6 lg:text-lg ">
          Transform every line of your essay with meticulous, line-by-line editing
          </p>
          <img src={perf1} alt="comp1" className="rounded-lg mb-10" />
        </div>
      )}
      {selectedTab === "grading" && (
        <div className="flex flex-col px-2 lg:px-20">
          <p className="font-semibold text-center text-md mb-6 lg:text-lg ">
          Receive a evaluation based on admissions rubrics used by top universities.
          </p>
          <img src={perf2} alt="comp1" className="rounded-lg mb-10" />
        </div>
      )}
      {selectedTab === "feedback" && (
        <div className="flex flex-col px-2 lg:px-20">
          <p className="font-semibold text-center text-md mb-6 lg:text-lg ">
          Get insights on structure, coherence, and content as a whole, helping you craft an essay that stands out.
          </p>
          <img src={perf3} alt="comp1" className="rounded-lg mb-10" />
        </div>
      )}
      <div className="flex justify-center">
        <button className="flex font-semibold text-[1em] my-2 mb-10 text-white bg-primaryGreen px-6 py-2 justify-center items-center rounded-[5px] lg:w-[20rem] mx-auto">
          Perfect Your Essays Now <IoArrowForward className="ml-1 font-bold" />
        </button>
      </div>
    </div>
  );
}

export default ReviseCard;
