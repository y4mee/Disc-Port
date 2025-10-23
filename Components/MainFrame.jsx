import React from "react";
import Profile from "./Profile";
import Aboutme from "./Aboutme";
import LeftComp from "./LeftComp";

const MainFrame = ({ isDark }) => {

  


  return (
    <>
      <div className={` flex items-center justify-end relative  ${isDark ? '': 'overflow-hidden'} `}>
        <div
          className={` ${
            !isDark ? "" : "opacity-0"
          }  flex items-center  w-[1500px] h-[880px] max-h-screen rounded-[80px] bg-[#f0f0f0]/50  outline-1 outline-white backdrop-blur-[40px] overflow-hidden`}
        ></div>
        <div className=" flex items-center justify-center right-17 absolute ">
          <Profile isDark={isDark} />
        </div>
        <div className=" flex items-center justify-center left-63 top-11 absolute ">
          <Aboutme isDark={isDark} />
        </div>
        <div className=" left-17 top-5 absolute ">
          <LeftComp isDark={isDark} />
        </div>
      </div>
    </>
  );
};

export default MainFrame;
