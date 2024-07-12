import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import SideMenu from "./SideMenu";
import logo from "../../assets/logo/logo.jpeg";
import LoginButton from "./LoginButton";
import SignUpButton from "./SignUpButton";
import ResourcesBox from "./ResourcesBox";
import FeatureBox from "./FeatureBox";
import { GoChevronDown } from "react-icons/go";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="relative flex items-center justify-between bg-white border-b border-gray-300 p-4 px-8 md:px-16 lg:px-32">
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="h-20" />
      </div>
      <div className="hidden lg:flex space-x-8 justify-center items-center">
        <a href="#pricing" className="font-semibold text-black hover:text-gray-700">
          Pricing
        </a>
        <div className="relative group">
          <a href="#" className="font-semibold flex items-center text-black hover:text-gray-700">
            Features <GoChevronDown className="ml-1 mt-1" />
          </a>
          <div className="absolute top-full left-0 w-full bg-white shadow-lg hidden group-hover:block">
            <FeatureBox />
          </div>
        </div>
        <div className="relative group">
          <a href="#" className="font-semibold flex items-center text-black hover:text-gray-700">
            Resources <GoChevronDown className="ml-1 mt-1" />
          </a>
          <div className="absolute top-full left-0 w-full bg-white shadow-lg hidden group-hover:block">
            <ResourcesBox />
          </div>
        </div>
        <LoginButton />
        <SignUpButton />
      </div>
      <div className="lg:hidden">
        <button onClick={toggleMenu}>
          <GiHamburgerMenu className="text-3xl text-primaryGreen" />
        </button>
      </div>
      <SideMenu isOpen={isOpen} onClose={closeMenu} />
    </nav>
  );
}

export default Nav;
