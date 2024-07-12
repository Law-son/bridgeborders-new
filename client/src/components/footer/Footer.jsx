import React from 'react';
import logo from "../../assets/logo/logo.jpeg";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 px-4 md:px-8 lg:px-16">
      <div className='flex flex-col justify-between items-center py-10 border-b mb-20 border-gray-500 lg:flex-row'>
        <div className='flex flex-col self-start lg:self-center'>
          <h1 className='text-4xl font-bold mb-4'>Igniting Passions, Building Futures</h1>
          <p>Through expert strategies and AI guidance, we are your key to getting into your dream school.</p>
        </div>
        <button className='bg-white text-darkBlue h-[45px] font-semibold px-6 rounded-md self-start lg:self-center mt-6 lg:mt-0'>
          Contact Us
        </button>
      </div>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <img src={logo} alt="BridgeBorders Logo" className="h-24 mb-2" />
            <p className="max-w-xs text-left md:text-left">
              By combining expert strategies and AI guidance, we are your key to getting into your dream school.
            </p>
            <div className="flex justify-start md:justify-start mt-4">
              <a href="#" className="text-white mx-2"><i className="fab fa-instagram"></i></a>
              <a href="#" className="text-white mx-2"><i className="fab fa-linkedin"></i></a>
              <a href="#" className="text-white mx-2"><i className="fab fa-tiktok"></i></a>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-left md:text-left">
            <div>
              <h4 className="font-bold mb-2">Resources</h4>
              <ul>
                <li><a href="#" className="hover:underline">Passion Projects</a></li>
                <li><a href="#" className="hover:underline">Extracurriculars & Awards</a></li>
                <li><a href="#" className="hover:underline">Internships</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-2">Features</h4>
              <ul>
                <li><a href="#" className="hover:underline">College Tracker</a></li>
                <li><a href="#" className="hover:underline">Roadmap</a></li>
                <li><a href="#" className="hover:underline">Chat With Lumi</a></li>
                <li><a href="#" className="hover:underline">Common App Essay</a></li>
                <li><a href="#" className="hover:underline">Supplemental Essays</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-2">Features</h4>
              <ul>
                <li><a href="#" className="hover:underline">College List Builder</a></li>
                <li><a href="#" className="hover:underline">Essay Review</a></li>
                <li><a href="#" className="hover:underline">Application Calendar</a></li>
                <li><a href="#" className="hover:underline">Application Evaluation</a></li>
                <li><a href="#" className="hover:underline">Colleges Insights</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-2">General</h4>
              <ul>
                <li><a href="#" className="hover:underline">Home</a></li>
                <li><a href="#pricing" className="hover:underline">Pricing</a></li>
                <li><a href="#" className="hover:underline">Contact Us</a></li>
                <li><a href="#" className="hover:underline">Request a Refund</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col border-t pt-10 items-center justify-between border-gray-500 mt-16 text-left text-gray-500 lg:flex-row">
          <p className='font-bold text-white'>&copy; 2024 BridgeBorders. All rights reserved.</p>
          <div className="flex justify-center text-white font-bold space-x-4 mt-2">
            <a href="#" >Terms</a>
            <a href="#" >Privacy</a>
            <a href="#" className="border-b border-white">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
