'use client'

import React from 'react'
import Image from 'next/image';
import { CiSearch } from "react-icons/ci";
import ShopDropdown from './HeaderMain'


const HeaderTop = () => {
  const handleClick = () => {
    console.log("Button clicked!");
  };

  return (
    <div className="header-top">
      <div className="">

      

        <div className="flex justify-center items-center ">
          <div className="flex justify-center items-center w-full h-[38px] bg-black text-white  relative">
            <h4 className="flex items-center text-xs sm:text-sm justify-center  gap-[10px] font-Satoshi font-[500] text-[14px] leading-[18.9px] whitespace-nowrap">
              Sign up and get 20% off your first order.{' '}
              <span className="font-Satoshi  font-[500] underline leading-[18.9px] text-[14px] decoration-solid">
                <a href="#" className="signUp text-xs sm:text-sm ">
                  Sign Up Now
                </a>
              </span>
            </h4>
            <button className="absoluteb text-xs sm:text-sm top-[9px] right-[20px]  p-[3.43px] opacity-100" onClick={handleClick}>
              <span className="text-white absolute right-[50px] hidden sm:block">✖</span>
            </button>
          </div>
        </div>

       </div>
    </div>

        
       
  
    


  




  );
};


export default HeaderTop
