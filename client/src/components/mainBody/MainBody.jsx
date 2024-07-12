import React from "react";
import SchoolImages from "./SchoolImages";
import CompetitiveCard from "./CompetitiveCard";
import CollegeList from "./CollegeList";
import StandoutCard from "./StandoutCard";
import ReviseCard from "./ReviseCard";
import GuidanceCard from "./GuidanceCard";

function MainBody() {
  return (
    <div className="flex flex-col bg-lightGrey pt-10 pb-16 mt-2 lg:mt-16 lg:pt-16">
      <SchoolImages />
      <section className="px-8 md:px-16 lg:px-32">
        <h1 className="text-black font-bold mt-3 text-center text-[2.1em] lg:text-[2.6em]">
          Guidance at <span className="text-primaryGreen">each stage</span> of
          the process.
        </h1>
        <p className="text-center mt-2 font-semibold text-gray-500 mb-10 lg:mb-12 lg:px-32">
          From the end of junior year to your acceptance letter, our platform
          will guide you & help you showcase your application in a way that will
          impress admissions officers.
        </p>
        <CompetitiveCard />
        <CollegeList />
        <StandoutCard />
        <ReviseCard />
        <GuidanceCard />
      </section>
    </div>
  );
}

export default MainBody;
