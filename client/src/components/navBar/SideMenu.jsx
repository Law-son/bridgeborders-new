import React, { useState } from "react";
import { GoChevronDown } from "react-icons/go";
import { AiOutlineClose } from "react-icons/ai";
import LoginButton from "./LoginButton";
import SignUpButton from "./SignUpButton";
import { RiCircleLine } from "react-icons/ri";

const SideMenu = ({ isOpen, onClose }) => {
  const [showFeatures, setShowFeatures] = useState(false);
  const [showResources, setShowResources] = useState(false);

  const featureItems = [
    "Roadmap",
    "College Tracker",
    "College List Builder",
    "Common App Essay",
    "Supplemental Essays",
    "Essay Review",
    "Application Calendar",
    "Application Evaluation",
    "College Insights",
    "Chat"
  ];

  const resourceItems = [
    "Extracurriculars & Awards",
    "Passion Projects",
    "Internships"
  ];

  return (
    <div
      className={`fixed top-0 right-0 h-full bg-white shadow-2xl transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } w-3/4 md:w-1/2 lg:w-1/3`}
    >
      <div className="flex p-4 justify-end">
        <button onClick={onClose} className="border border-black p-3 mr-12 mt-4 rounded-full">
          <AiOutlineClose className="text-md font-bold" />
        </button>
      </div>
      <div className="p-4 space-y-3 overflow-auto h-full">
        <a href="#pricing" className="block font-bold py-2 px-4 hover:bg-gray-200" onClick={onClose}>
          Pricing
        </a>
        <div className="py-2">
          <div
            className="flex justify-between font-bold items-center py-2 px-4 hover:bg-gray-200 cursor-pointer"
            onClick={() => setShowFeatures(!showFeatures)}
          >
            Features <GoChevronDown className={`ml-2 ${showFeatures ? "transform rotate-180" : ""}`} />
          </div>
          {showFeatures && (
            <div className="ml-4">
              {featureItems.map((item, index) => (
                <a
                  key={index}
                  href="#"
                  className="flex py-2 px-4 hover:bg-gray-200"
                >
                  <RiCircleLine className="mt-[7.5px] text-[0.6em] font-bold mr-1" /> {item}
                </a>
              ))}
            </div>
          )}
        </div>
        <div className="py-2">
          <div
            className="flex justify-between font-bold items-center py-2 px-4 hover:bg-gray-200 cursor-pointer"
            onClick={() => setShowResources(!showResources)}
          >
            Resources <GoChevronDown className={`ml-2 ${showResources ? "transform rotate-180" : ""}`} />
          </div>
          {showResources && (
            <div className="ml-4">
              {resourceItems.map((item, index) => (
                <a
                  key={index}
                  href="#"
                  className="flex py-2 px-4 hover:bg-gray-200"
                >
                <RiCircleLine className="mt-[7.5px] text-[0.6em] font-bold mr-1" /> {item}
                </a>
              ))}
            </div>
          )}
        </div>
        <div className="flex">
          <div className="py-2 px-4">
            <LoginButton />
          </div>
          <div className="py-2 px-4">
            <SignUpButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
