import React from 'react';
import chicago from "../../assets/schools/chicago.png";
import columbia from "../../assets/schools/columbia.png";
import harvarduni from "../../assets/schools/harvarduni.png";
import michigan from "../../assets/schools/michigan.png";
import princetonloog from "../../assets/schools/princetonloog.png";
import upennlogo from "../../assets/schools/upennlogo.png";
import './mainBody.css';

function SchoolImages() {
  return (
    <div className='scroll-container flex px-0 justify-center py-8 border-b border-t border-gray-400 mb-20 lg:border-t-0 lg:px-32'>
      <div className='scroll-content space-x-12 lg:space-x-20'>
        <img src={chicago} alt="chicago" className='w-24 h-8' />
        <img src={columbia} alt="columbia" className='w-24 h-8' />
        <img src={harvarduni} alt="harvarduni" className='w-24 h-8' />
        <img src={michigan} alt="michigan" className='w-24 h-8' />
        <img src={princetonloog} alt="princetonloog" className='w-24 h-8' />
        <img src={upennlogo} alt="upennlogo" className='w-24 h-8' />
        <img src={chicago} alt="chicago" className='w-24 h-8 lg:hidden' />
        <img src={columbia} alt="columbia" className='w-24 h-8 lg:hidden' />
        <img src={harvarduni} alt="harvarduni" className='w-24 h-8 lg:hidden' />
        <img src={michigan} alt="michigan" className='w-24 h-8 lg:hidden' />
        <img src={princetonloog} alt="princetonloog" className='w-24 h-8 lg:hidden' />
        <img src={upennlogo} alt="upennlogo" className='w-24 h-8 lg:hidden' />
      </div>
    </div>
  );
}

export default SchoolImages;
