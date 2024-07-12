import React from "react";

function ResourcesBox({ onMouseEnter, onMouseLeave }) {
  return (
    <div
      className="absolute left-1/2 transform -translate-x-3/4 mt-6 w-[60em] bg-white border border-gray-400 flex z-50"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="w-1/4 bg-darkBlue text-white p-4">
        <h2 className="text-lg font-bold">Resources</h2>
        <p className="mt-2">
          These are tools designed to help you improve your college application.
        </p>
      </div>
      <div className="w-3/4 grid grid-cols-2 gap-4 p-4">
        <div>
          <h3 className="font-bold">Extracurriculars & Awards</h3>
          <p className="text-sm">
            Discover extracurriculars & awards to boost your application.
          </p>
        </div>
        <div>
          <h3 className="font-bold">Passion Projects</h3>
          <p className="text-sm">
            Generate personalized passion projects for your college app.
          </p>
        </div>
        <div>
          <h3 className="font-bold">Internships</h3>
          <p className="text-sm">
            Find high school internships at top companies and institutions.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ResourcesBox;
