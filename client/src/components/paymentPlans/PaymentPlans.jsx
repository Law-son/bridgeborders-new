import React from "react";
import { IoMdInformationCircle } from "react-icons/io";
import { FcCheckmark } from "react-icons/fc";
import { Tooltip } from "react-tooltip";
import 'react-tooltip/dist/react-tooltip.css';
import './tooltip.css'; // Import your custom CSS

function PaymentPlans() {
  return (
    <section id="pricing" className="relative pt-16 px-8 pb-16 bg-darkBlue md:px-16 lg:px-32">
      <h1 className="mt-10 text-white text-center font-bold text-2xl lg:text-4xl">
        Gain expert guidance at a fraction of the cost.
      </h1>
      <p className="mt-8 text-white text-center lg:px-48">
        Choose the perfect package to elevate your profile and navigate the
        college applications process with confidence & ease.
      </p>
      <div className="flex flex-col mt-10 gap-5 lg:gap-5 lg:flex-row">
        {/* free */}
        <div className="flex-1 px-4 py-4 bg-white rounded-xl">
          <h1 className="text-black font-semibold mb-4 text-[1.3em] lg:text-[1.3em]">
            Free
          </h1>
          <p>Best for just trying things out</p>
          <p className="font-bold text-4xl lg:text-5xl mt-6">$0</p>
          <div className="flex space-x-2 items-center">
            <p className="text-white mt-4">
              Price increasing to $119 next month
            </p>
            <IoMdInformationCircle
              className="text-white"
            />
          </div>
          <div className="border border-gray-200 my-4"></div>
          <p className="py-2 font-semibold">Features:</p>
          <div className="flex space-x-2">
            <FcCheckmark className="mt-1 font-bold" />
            <p className="font-medium">
              <span className="font-bold">1</span> Essay
            </p>
            <IoMdInformationCircle
              className="text-gray-400 mt-1"
              data-tooltip-id="tooltip1"
              data-tooltip-content="Get 1 free credit to generate either Common App or supplemental college essays."
              data-tooltip-place="top"
            />
            <Tooltip id="tooltip1" className="custom-tooltip" />
          </div>
          <div className="flex space-x-2 mt-2">
            <FcCheckmark className="mt-1 font-bold" />
            <p className="font-medium">
              <span className="font-bold">1</span> Essay Revisions
            </p>
            <IoMdInformationCircle
              className="text-gray-400 mt-1"
              data-tooltip-id="my-tooltip2"
              data-tooltip-content="Get 1 Essay Revision Credit."
              data-tooltip-place="top"
            />
            <Tooltip id="my-tooltip2" className="custom-tooltip" />
          </div>
          <div className="flex space-x-2 mt-2">
            <FcCheckmark className="mt-1 font-bold" />
            <p className="font-medium">
              <span className="font-bold">1</span> Application Evaluation
            </p>
            <IoMdInformationCircle
              className="text-gray-400 mt-1"
              data-tooltip-id="my-tooltip3"
              data-tooltip-content="Get 1 Application Evaluation Credit."
              data-tooltip-place="top"
            />
            <Tooltip id="my-tooltip3" className="custom-tooltip" />
          </div>
          <div className="flex space-x-2 mt-2">
            <FcCheckmark className="mt-1 font-bold" />
            <p className="font-medium">Roadmap (Limited)</p>
            <IoMdInformationCircle
              className="text-gray-400 mt-1"
              data-tooltip-id="my-tooltip4"
              data-tooltip-content="Get access to some of the tasks & guidance in the roadmap"
              data-tooltip-place="top"
            />
            <Tooltip id="my-tooltip4" className="custom-tooltip" />
          </div>
          <div className="flex space-x-2 mt-2">
            <FcCheckmark className="mt-1 font-bold" />
            <p className="font-medium">College Tracker (Limited)</p>
            <IoMdInformationCircle
              className="text-gray-400 mt-1"
              data-tooltip-id="my-tooltip5"
              data-tooltip-content="Get access to some of the features in the college tracker."
              data-tooltip-place="top"
            />
            <Tooltip id="my-tooltip5" className="custom-tooltip" />
          </div>
          <div className="flex space-x-2 mt-2">
            <FcCheckmark className="mt-1 font-bold" />
            <p className="font-medium">College Insights</p>
            <IoMdInformationCircle
              className="text-gray-400 mt-1"
              data-tooltip-id="my-tooltip6"
              data-tooltip-content="Get access to the college insights tool."
              data-tooltip-place="top"
            />
            <Tooltip id="my-tooltip6" className="custom-tooltip" />
          </div>
          <div className="flex space-x-2 text-white mt-2">
            <p className="font-medium">Chat with Lumi</p>
            <IoMdInformationCircle className="mt-[5.5px] text-white" />
          </div>
          <div className="flex space-x-2 text-white mt-2">
            <p className="font-medium">Chat with Lumi</p>
            <IoMdInformationCircle className="mt-[5.5px] text-white" />
          </div>
          <div className="flex space-x-2 text-white mt-2">
            <p className="font-medium">Chat with Lumi</p>
            <IoMdInformationCircle className="mt-[5.5px] text-white" />
          </div>
          <div className="flex space-x-2 text-white mt-2">
            <p className="font-medium">Chat with Lumi</p>
            <IoMdInformationCircle className="mt-[5.5px] text-white" />
          </div>
          <div className="flex space-x-2 text-white mt-2">
            <p className="font-medium">Chat with Lumi</p>
            <IoMdInformationCircle className="mt-[5.5px] text-white" />
          </div>
          <button className="mt-7 px-5 py-3 bg-primaryGreen text-white font-semibold w-full">
            Get Started
          </button>
          <p className="font-semibold mt-1 text-[0.9em] mb-6 text-white">
            *More credits available for purchase
          </p>
        </div>
        {/* End of free */}

        {/* basic package */}
        <div className="flex-1 px-4 py-4 bg-white rounded-xl">
          <h1 className="text-black font-semibold mb-4 text-[1.3em] lg:text-[1.3em]">
            Basic Package
          </h1>
          <p>Best for 5-8 colleges</p>
          <p className="font-bold text-4xl lg:text-5xl mt-6">
            $109{" "}
            <span className="text-gray-400 font-semibold text-sm lg:text-lg">
              / One-Time
            </span>
          </p>
          <div className="flex space-x-2 items-center">
            <p className="text-red-600 mt-4">
              Price increasing to $119 next month
            </p>
            <IoMdInformationCircle
              className="text-gray-400 mt-4"
              data-tooltip-id="my-tooltip7"
              data-tooltip-content="Price increases by $10 each month as application season approaches. Started at $99."
              data-tooltip-place="bottom"
            />
            <Tooltip id="my-tooltip7" className="custom-tooltip" />
          </div>
          <div className="border border-gray-200 my-4"></div>
          <p className="py-2 font-semibold">Features:</p>
          <div className="flex space-x-2">
            <FcCheckmark className="mt-1 font-bold" />
            <p className="font-medium">
              <span className="font-bold">35</span> Essays
            </p>
            <IoMdInformationCircle
              className="text-gray-400 mt-1"
              data-tooltip-id="my-tooltip8"
              data-tooltip-content="Get 35 credits to generate either Common App or supplemental college essays. More credits available for purchase."
              data-tooltip-place="top"
            />
            <Tooltip id="my-tooltip8" className="custom-tooltip" />
          </div>
          <div className="flex space-x-2 mt-2">
            <FcCheckmark className="mt-1 font-bold" />
            <p className="font-medium">
              <span className="font-bold">15</span> Essay Revisions
            </p>
            <IoMdInformationCircle
              className="text-gray-400 mt-1"
              data-tooltip-id="my-tooltip9"
              data-tooltip-content="Get 15 Essay Revision Credits. More credits available for purchase."
              data-tooltip-place="top"
            />
            <Tooltip id="my-tooltip9" className="custom-tooltip" />
          </div>
          <div className="flex space-x-2 mt-2">
            <FcCheckmark className="mt-1 font-bold" />
            <p className="font-medium">
              <span className="font-bold">5</span> Application Evaluations
            </p>
            <IoMdInformationCircle
              className="text-gray-400 mt-1"
              data-tooltip-id="my-tooltip10"
              data-tooltip-content="Get 5 Application Evaluation Credits. More credits available for purchase."
              data-tooltip-place="top"
            />
            <Tooltip id="my-tooltip10" className="custom-tooltip" />
          </div>
          <div className="flex space-x-2 mt-2">
            <FcCheckmark className="mt-1 font-bold" />
            <p className="font-medium">Roadmap</p>
            <IoMdInformationCircle
              className="text-gray-400 mt-1"
              data-tooltip-id="my-tooltip11"
              data-tooltip-content="Get full access to all tasks and guidance in the roadmap. Always stay one step ahead in the college admissions process!"
              data-tooltip-place="top"
            />
            <Tooltip id="my-tooltip11" className="custom-tooltip" />
          </div>
          <div className="flex space-x-2 mt-2">
            <FcCheckmark className="mt-1 font-bold" />
            <p className="font-medium">College Tracker</p>
            <IoMdInformationCircle
              className="text-gray-400 mt-1"
              data-tooltip-id="my-tooltip12"
              data-tooltip-content="Get access to all the features in the college tracker."
              data-tooltip-place="top"
            />
            <Tooltip id="my-tooltip12" className="custom-tooltip" />
          </div>
          <div className="flex space-x-2 mt-2">
            <FcCheckmark className="mt-1 font-bold" />
            <p className="font-medium">College List Builder</p>
            <IoMdInformationCircle
              className="text-gray-400 mt-1"
              data-tooltip-id="my-tooltip13"
              data-tooltip-content="Get full access to the college list builder."
              data-tooltip-place="top"
            />
            <Tooltip id="my-tooltip13" className="custom-tooltip" />
          </div>
          <div className="flex space-x-2 mt-2">
            <FcCheckmark className="mt-1 font-bold" />
            <p className="font-medium">Chat with Lumi</p>
            <IoMdInformationCircle
              className="text-gray-400 mt-1"
              data-tooltip-id="my-tooltip14"
              data-tooltip-content="Get full access to ask your personal AI assistant, Lumi, as many questions as you want."
              data-tooltip-place="top"
            />
            <Tooltip id="my-tooltip14" className="custom-tooltip" />
          </div>
          <div className="flex space-x-2 mt-2">
            <FcCheckmark className="mt-1 font-bold" />
            <p className="font-medium">Craft Essay Ideas</p>
            <IoMdInformationCircle
              className="text-gray-400 mt-1"
              data-tooltip-id="my-tooltip15"
              data-tooltip-content="Get full access to 'Craft Idea' tools for both the Common App and supplemental essays."
              data-tooltip-place="top"
            />
            <Tooltip id="my-tooltip15" className="custom-tooltip" />
          </div>
          <div className="flex space-x-2 mt-2">
            <FcCheckmark className="mt-1 font-bold" />
            <p className="font-medium">Generate Essay Outlines</p>
            <IoMdInformationCircle
              className="text-gray-400 mt-1"
              data-tooltip-id="my-tooltip16"
              data-tooltip-content="Get full access to the 'Generate Outline' tools for both the Common App and supplemental essays."
              data-tooltip-place="top"
            />
            <Tooltip id="my-tooltip16" className="custom-tooltip" />
          </div>
          <div className="flex space-x-2 mt-2">
            <FcCheckmark className="mt-1 font-bold" />
            <p className="font-medium">Applications Calendar</p>
            <IoMdInformationCircle
              className="text-gray-400 mt-1"
              data-tooltip-id="my-tooltip17"
              data-tooltip-content="Get full access to the applications calendar."
              data-tooltip-place="top"
            />
            <Tooltip id="my-tooltip17" className="custom-tooltip" />
          </div>
          <div className="flex space-x-2 mt-2">
            <FcCheckmark className="mt-1 font-bold" />
            <p className="font-medium">College Insights</p>
            <IoMdInformationCircle
              className="text-gray-400 mt-1"
              data-tooltip-id="my-tooltip18"
              data-tooltip-content="Get full access to the college insights tool."
              data-tooltip-place="top"
            />
            <Tooltip id="my-tooltip18" className="custom-tooltip" />
          </div>
          <button className="mt-6 px-5 py-3 bg-primaryGreen text-white font-semibold w-full">
            Get Started
          </button>
          <p className="font-semibold mt-1 text-[0.9em] mb-6 text-gray-500">
            *More credits available for purchase
          </p>
        </div>
        {/* End of basic package */}

        {/* plus package */}
        <div className="flex-1 px-4 py-4 bg-white rounded-xl">
          <h1 className="text-black font-semibold mb-4 text-[1.3em] lg:text-[1.3em]">
            Plus Package
          </h1>
          <p>Best for 10-15+ colleges</p>
          <p className="font-bold text-4xl lg:text-5xl mt-6">
            $169{" "}
            <span className="text-gray-400 font-semibold text-sm lg:text-lg">
              / One-Time
            </span>
          </p>
          <div className="flex space-x-2 items-center">
            <p className="text-red-600 mt-4">
              Price increasing to $189 next month
            </p>
            <IoMdInformationCircle
              className="text-gray-400 mt-4"
              data-tooltip-id="tip1"
              data-tooltip-content="Price increases by $20 each month as application season approaches. Started at $149."
              data-tooltip-place="bottom"
            />
            <Tooltip id="tip1" className="custom-tooltip" />
          </div>
          <div className="border border-gray-200 my-4"></div>
          <p className="py-2 font-semibold">Features:</p>
          <div className="flex space-x-2">
            <FcCheckmark className="mt-1 font-bold" />
            <p className="font-medium">
              <span className="font-bold">70</span> Essays
            </p>
            <IoMdInformationCircle
              className="text-gray-400 mt-1"
              data-tooltip-id="tip2"
              data-tooltip-content="Get 70 credits to generate either Common App or supplemental college essays. More credits available for purchase."
              data-tooltip-place="top"
            />
            <Tooltip id="tip2" className="custom-tooltip" />
          </div>
          <div className="flex space-x-2 mt-2">
            <FcCheckmark className="mt-1 font-bold" />
            <p className="font-medium">
              <span className="font-bold">30</span> Essay Revisions
            </p>
            <IoMdInformationCircle
              className="text-gray-400 mt-1"
              data-tooltip-id="tip3"
              data-tooltip-content="Get 30 Essay Revision Credits. More credits available for purchase."
              data-tooltip-place="top"
            />
            <Tooltip id="tip3" className="custom-tooltip" />
          </div>
          <div className="flex space-x-2 mt-2">
            <FcCheckmark className="mt-1 font-bold" />
            <p className="font-medium">
              <span className="font-bold">10</span> Application Evaluations
            </p>
            <IoMdInformationCircle
              className="text-gray-400 mt-1"
              data-tooltip-id="tip4"
              data-tooltip-content="Get 10 Application Evaluation Credits. More credits available for purchase."
              data-tooltip-place="top"
            />
            <Tooltip id="tip4" className="custom-tooltip" />
          </div>
          <div className="flex space-x-2 mt-2">
            <FcCheckmark className="mt-1 font-bold" />
            <p className="font-medium">Roadmap</p>
            <IoMdInformationCircle
              className="text-gray-400 mt-1"
              data-tooltip-id="tip5"
              data-tooltip-content="Get full access to all tasks and guidance in the roadmap. Always stay one step ahead in the college admissions process!"
              data-tooltip-place="top"
            />
            <Tooltip id="tip5" className="custom-tooltip" />
          </div>
          <div className="flex space-x-2 mt-2">
            <FcCheckmark className="mt-1 font-bold" />
            <p className="font-medium">College Tracker</p>
            <IoMdInformationCircle
              className="text-gray-400 mt-1"
              data-tooltip-id="tip6"
              data-tooltip-content="Get access to all the features in the college tracker."
              data-tooltip-place="top"
            />
            <Tooltip id="tip6" className="custom-tooltip" />
          </div>
          <div className="flex space-x-2 mt-2">
            <FcCheckmark className="mt-1 font-bold" />
            <p className="font-medium">College List Builder</p>
            <IoMdInformationCircle
              className="text-gray-400 mt-1"
              data-tooltip-id="tip7"
              data-tooltip-content="Get full access to the college list builder."
              data-tooltip-place="top"
            />
            <Tooltip id="tip7" className="custom-tooltip" />
          </div>
          <div className="flex space-x-2 mt-2">
            <FcCheckmark className="mt-1 font-bold" />
            <p className="font-medium">Chat with Lumi</p>
            <IoMdInformationCircle
              className="text-gray-400 mt-1"
              data-tooltip-id="tip8"
              data-tooltip-content="Get full access to ask your personal AI assistant, Lumi, as many questions as you want."
              data-tooltip-place="top"
            />
            <Tooltip id="tip8" className="custom-tooltip" />
          </div>
          <div className="flex space-x-2 mt-2">
            <FcCheckmark className="mt-1 font-bold" />
            <p className="font-medium">Craft Essay Ideas</p>
            <IoMdInformationCircle
              className="text-gray-400 mt-1"
              data-tooltip-id="tip9"
              data-tooltip-content="Get full access to 'Craft Idea' tools for both the Common App and supplemental essays."
              data-tooltip-place="top"
            />
            <Tooltip id="tip9" className="custom-tooltip" />
          </div>
          <div className="flex space-x-2 mt-2">
            <FcCheckmark className="mt-1 font-bold" />
            <p className="font-medium">Generate Essay Outlines</p>
            <IoMdInformationCircle
              className="text-gray-400 mt-1"
              data-tooltip-id="tip10"
              data-tooltip-content="Get full access to the 'Generate Outline' tools for both the Common App and supplemental essays."
              data-tooltip-place="top"
            />
            <Tooltip id="tip10" className="custom-tooltip" />
          </div>
          <div className="flex space-x-2 mt-2">
            <FcCheckmark className="mt-1 font-bold" />
            <p className="font-medium">Applications Calendar</p>
            <IoMdInformationCircle
              className="text-gray-400 mt-1"
              data-tooltip-id="tip11"
              data-tooltip-content="Get full access to the applications calendar."
              data-tooltip-place="top"
            />
            <Tooltip id="tip11" className="custom-tooltip" />
          </div>
          <div className="flex space-x-2 mt-2">
            <FcCheckmark className="mt-1 font-bold" />
            <p className="font-medium">College Insights</p>
            <IoMdInformationCircle
              className="text-gray-400 mt-1"
              data-tooltip-id="tip12"
              data-tooltip-content="Get full access to the college insights tool."
              data-tooltip-place="top"
            />
            <Tooltip id="tip12" className="custom-tooltip" />
          </div>
          <button className="mt-6 px-5 py-3 bg-primaryGreen text-white font-semibold w-full">
            Get Started
          </button>
          <p className="font-semibold mt-1 text-[0.9em] mb-6 text-gray-500">
            *More credits available for purchase
          </p>
        </div>
        {/* End of plus package */}
      </div>
      <div className="absolute sm:bottom-[-100px] md:bottom-[-120px] left-0 w-full -z-10">
        <svg viewBox="0 0 1440 320">
          <path
            fill="#111827"
            fillOpacity="1"
            d="M0,320L60,304C120,288,240,256,360,240C480,224,600,224,720,250.7C840,277,960,331,1080,341.3C1200,352,1320,320,1380,304L1440,288L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
          ></path>
        </svg>
      </div>
    </section>
  );
}

export default PaymentPlans;
