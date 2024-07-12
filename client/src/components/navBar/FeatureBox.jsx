import React from "react";
import { IoArrowForward } from "react-icons/io5";

function FeatureBox({ onMouseEnter, onMouseLeave }) {
  return (
    <div
      className="absolute left-1/2 transform -translate-x-3/4 mt-6 w-[60em] bg-white border border-gray-400 flex z-50"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="w-1/4 bg-darkBlue text-white p-4">
        <h2 className="text-lg font-bold">Features</h2>
        <p className="mt-2">Supercharge your college applications & get into your dream school.</p>
        <button className="mt-4 px-4 py-2 flex justify-center items-center bg-primaryGreen text-white rounded hover:shadow-lg">
          Pricing 
          <IoArrowForward className="ml-1" />
        </button>
      </div>
      <div className="w-3/4 grid grid-cols-2 gap-4 p-4">
        <div>
          <h3 className="font-bold">College Tracker</h3>
          <p className="text-sm">Efficiently organize and track your college applications.</p>
        </div>
        <div>
          <h3 className="font-bold">Chat with Lumi</h3>
          <p className="text-sm">Talk to your personal AI college assistant, Lumi.</p>
        </div>
        <div>
          <h3 className="font-bold">Common App Essay</h3>
          <p className="text-sm">Brainstorm, outline, and write a stellar Common App Essay.</p>
        </div>
        <div>
          <h3 className="font-bold">Essay Review</h3>
          <p className="text-sm">Perfect your college essays with detailed feedback & editing.</p>
        </div>
        <div>
          <h3 className="font-bold">Application Evaluation</h3>
          <p className="text-sm">In-depth analysis of your application's competitiveness.</p>
        </div>
        <div>
          <h3 className="font-bold">Roadmap</h3>
          <p className="text-sm">Your guide through every step of the college application process.</p>
        </div>
        <div>
          <h3 className="font-bold">College List Builder</h3>
          <p className="text-sm">Build a college list based on your preferences.</p>
        </div>
        <div>
          <h3 className="font-bold">Supplemental Essays</h3>
          <p className="text-sm">Brainstorm, outline, and write your Supplemental College Essays.</p>
        </div>
        <div>
          <h3 className="font-bold">Applications Calendar</h3>
          <p className="text-sm">Manage and keep track of all your college deadlines.</p>
        </div>
        <div>
          <h3 className="font-bold">College Insights</h3>
          <p className="text-sm">Find key admissions information from top colleges.</p>
        </div>
      </div>
    </div>
  );
}

export default FeatureBox;
