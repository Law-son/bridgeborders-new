import React, { useState } from 'react';
import { IoChevronDown, IoChevronUpOutline } from "react-icons/io5";

const faqData = [
  {
    question: "How does the platform help make my application impress admissions officers?",
    answer: "Your application consists of your academics, extracurricular activities, and awards. But, the most critical aspect of making your application stand out is how you integrate these elements to portray your unique self through your essays. Our platform facilitates this by guiding you through every step of the process—from brainstorming and outlining to drafting and perfecting your essays. Our platform helps you make your essays not only showcase your experiences and personality but also resonate with admissions officers. By enhancing the way you articulate and connect all parts of your application within your essays, our platform helps you make a compelling and memorable impression, helping you stand out amongst the competitive applicant pool."
  },
  {
    question: "Can students applying to any college use your platform?",
    answer: "Our platform is made for all students, regardless of the colleges or universities they're aiming for. Whether you're interested in Ivy League institutions like Harvard University and Princeton University, or large public universities like the University of Michigan, our tools are designed to help you navigate the application process efficiently. Our comprehensive suite of AI tools is tailored to support you through various stages of your college application, from essay writing to deadline tracking, making the process manageable for everyone."
  },
  {
    question: "Can the platform help international students with applications to colleges in the United States?",
    answer: "Absolutely! Our tools are equipped to assist international students with their applications to U.S. colleges and universities."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col mt-[120px] lg:mt-[190px] pt-4 mb-16 lg:pt-10  lg:flex-row lg:space-x-10 px-8 md:px-16 lg:px-32">
      <div className="lg:w-1/2">
        <h2 className="text-[3em] font-bold">Frequently Asked</h2>
        <h2 className="text-[3em] font-bold text-primaryGreen">Questions</h2>
        <p className="mt-4 text-gray-600 font-semibold text-xl pr-16">Have any more questions? Contact our support team to get what you need.</p>
        <a href="mailto:info@bridgeborders.io" className="mt-4 block text-black font-bold text-xl underline">info@bridgeborders.io</a>
      </div>
      <div className="lg:w-1/2 mt-16 lg:mt-0">
        {faqData.map((faq, index) => (
          <div key={index} className="mb-4">
            <button
              className="w-full text-left text-lg flex justify-between items-center p-4 border border-gray-300 rounded"
              onClick={() => toggleFAQ(index)}
            >
              <span className={openIndex === index ? "text-lg font-semibold text-primaryGreen" : "text-lg font-semibold text-black"}>{faq.question}</span>
              {openIndex === index ? <IoChevronUpOutline className="text-primaryGreen" /> : <IoChevronDown />}
            </button>
            {openIndex === index && (
              <div className="mt-2 p-4 border border-gray-300 rounded bg-lightGreen">
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
