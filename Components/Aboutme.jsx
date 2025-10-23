"use client";
import Date from "@/utils/DateComp";
import Time from "@/utils/TimeComp";
import React, { useState } from "react";
import { useRef, useEffect } from "react";
import { MdDateRange } from "react-icons/md";
import { FaRegClock } from "react-icons/fa";

const Aboutme = ({ isDark }) => {
  const scrollerdiv = () => {
    const scrollRef = useRef(null);
  };

  useEffect(() => {
    const handlescroll = (e) => {
      console.log("Scrolled inside div!", e.target.scrollTop);
    };

    const div = scrollerdiv.current;
  }, [""]);

  return (
    <>
      <div className="h-screen overflow-hidden">
        <div className="DatenTime flex gap-10  mb-8 ">
          <div
            className={`flex  items-center justify-start px-5 gap-6 w-[270px] h-[80px]\ bg-white/40 outline-1 outline-white  border-1 border-white rounded-[80px] ${
              isDark ? "bg-white/80" : ""
            } `}
          >
            <span className="text-black text-[45px] ">
              <FaRegClock />
            </span>
            <Time />
          </div>
          <div
            className={`flex  items-center justify-start px-5 gap-6 w-[270px] h-[80px] bg-white/40 outline-1 outline-white  border-1 border-white rounded-[80px] ${
              isDark ? "bg-white/80" : ""
            } `}
          >
            <span className="text-black text-[45px]">
              <MdDateRange />
            </span>
            <Date />
          </div>
        </div>

        <div
          className={`flex flex-col items-center gap-8 w-[600px] h-[380px] bg-white/40 outline-1 outline-white  border-1 border-white rounded-[80px] ${
            isDark ? "bg-white/80" : ""
          } `}
        >
          <div className="flex items-center justify-start px-8 mt-10 w-[470px] h-[80px] bg-white/50 outline-1 outline-white  border-1 border-white rounded-[80px]">
            
            <h2 className="text-black font-semibold text-3xl"> About me </h2>
            </div>
            <p className="px-15 text-black ">
              I'm a 21-year-old junior full-stack developer and CS student.
              Starting as a self-taught developer and have been coding since
              2021, my expertise focuses mainly on web & app development. <br />

              I love
              roguelike games and music likeCubibibibismand enjoy playing
              rougelite and hack-n-slash games and listening to whatever doesn't
              make my ears bleed. You can see the songs I'm listening to or the
              games I'm playing on the top of the page.
            </p>
          
        </div>
        <div
          //   ref={scrollRef}
          className={` mt-8 flex flex-col items-center  gap-8 w-[600px] h-[420px] bg-white/40 outline-1 outline-white  border-1 border-white rounded-[80px] ${
            isDark ? "bg-white/80 " : ""
          } `}
        ></div>
      </div>
    </>
  );
};

export default Aboutme;
