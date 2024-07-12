import React from "react";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { IoArrowForward } from "react-icons/io5";
import stud1 from "../../assets/students/stud1.jpg";
import stud2 from "../../assets/students/stud2.jpg";
import stud3 from "../../assets/students/stud3.jpg";
import btmLeft from "../../assets/videoImages/btmLeft.svg";
import topRight from "../../assets/videoImages/topRight.svg";
import VideoEmbed from "../navBar/VideoEmbed";



function HeroSection() {
  return (
    <div className="relative flex flex-col pt-10 px-8 lg:pt-16 md:px-16 lg:px-32 lg:flex-row">
      <div className="text-left w-full lg:w-1/2 lg:pr-4">
        <h1
          className="text-black font-bold text-3xl lg:text-5xl lg:font-semibold"
          style={{ lineHeight: "1.3" }}
        >
          Supercharge your college applications.
        </h1>
        <p className="font-semibold text-xl my-4 pr-4 tracking-wider lg:my-3 lg:pr-16">
          Give yourself the competitive edge you need to get into your
          dream school.
        </p>
        <div className="py-3 hidden lg:flex">
          <div className="flex justify-center items-center">
            <IoIosCheckmarkCircle className="text-primaryGreen text-xl" />
            <p className="ml-1 font-semibold">AI-based guidance</p>
          </div>
          <div className="flex justify-center items-center ml-3">
            <IoIosCheckmarkCircle className="text-primaryGreen text-xl" />
            <p className="ml-1 font-semibold">Always available, 24/7</p>
          </div>
        </div>
        <div className="flex flex-col-reverse lg:flex-col">
        <button className="flex font-bold text-xl w-full my-4 text-white bg-primaryGreen px-8 py-3 justify-center items-center rounded-md lg:w-1/2 ">
          Get Started Now <IoArrowForward className="ml-1 font-bold" />
        </button>
        <div className="flex flex-row-reverse justify-center py-4 lg:py-4 lg:flex-col">
          <p className="text-md lg:text-lg w-2/3 lg:w-full">
            Join over <span className="font-bold">62,893</span> students who
            use our platform
          </p>
          <div class="relative flex space-x-2 mt-2 md:-mt-1 lg:mb-0 lg:mt-3 w-1/3 lg:w-full">
            <div class="w-10 h-10 rounded-full border-2 border-black overflow-hidden absolute left-0 lg:w-12 lg:h-12">
              <img
                src={stud1}
                alt="Profile 1"
                class="w-full h-full object-cover"
              />
            </div>
            <div class="w-10 h-10 rounded-full border-2 border-black overflow-hidden absolute left-4 lg:left-7 lg:w-12 lg:h-12">
              <img
                src={stud2}
                alt="Profile 2"
                class="w-full h-full object-cover"
              />
            </div>
            <div class="w-10 h-10 rounded-full border-2 border-black overflow-hidden absolute left-12 lg:left-16 lg:w-12 lg:h-12">
              <img
                src={stud3}
                alt="Profile 3"
                class="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        </div>
      </div>
      <div className="w-full lg:w-1/2">
      <img
        src={topRight}
        alt="Top Right Decoration"
        className="absolute top-6 right-[0em] w-[18em] h-[5em] m-2 hidden lg:block"
      />
      <img
        src={btmLeft}
        alt="Bottom Left Decoration"
        className="absolute bottom-[-2em] left-[23em] w-[40em] h-[6em] m-2 hidden lg:block"
      />
        <VideoEmbed />
      </div>
    </div>
  );
}

export default HeroSection;
