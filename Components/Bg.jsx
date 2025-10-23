"use client";

import React, { useState } from "react";
import { Moon, Sun } from 'lucide-react';
import MainFrame from "./MainFrame";
import Profile from "./Profile";

const Bg = () => {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <>
      {/* BACKGROUND LAYER */}
      <div className="fixed inset-0 z-0 ">
        {isDark ? (
          <div className="w-full h-full bg-black relative">
            <img
              className="w-full h-full object-cover absolute opacity-60"
              src="./image 2.png"
              alt="dark background"
            />
          </div>
        ) : (
          <div className="w-full h-full relative">
            <img
              className="w-full h-full object-cover absolute"
              // src="./Background.png"
              src="./bg3.jpg"
              alt="light background"
            />
          </div>
        )}
      </div>

      {/* FOREGROUND CONTENT (z-10) */}
      <div className="relative z-10">
        {/* Toggle Button */}
        <div className="fixed top-6 right-6 z-20">
          <div 
            onClick={toggleTheme}
            className={`
              relative w-16 h-32 rounded-full cursor-pointer transition-all duration-300 ease-in-out
              bg-white/70 border border-white
              hover:scale-105 active:scale-95
              shadow-lg hover:shadow-xl
            `}
          >
            {/* Toggle Button Circle */}
            <div 
              className={`
                absolute w-12 h-12 ${isDark ? 'bg-black' : 'bg-white'} rounded-full shadow-lg
                flex items-center justify-center
                transition-all duration-300 ease-in-out
                left-2
                ${isDark ? 'top-16' : 'top-2'}
              `}
            >
              {isDark ? (
                <Moon size={20} className="text-white fill-white" />
              ) : (
                <Sun size={20} className="text-black fill-black" />
              )}
            </div>

            {/* Icons in Background Track */}
            <div className="absolute inset-0 flex flex-col items-center justify-between py-4">
              <div className={`transition-opacity duration-300 ${isDark ? 'opacity-30' : 'opacity-0'}`}>
                <Sun size={16} className="text-gray-400" />
              </div>
              <div className={`transition-opacity duration-300 ${!isDark ? 'opacity-30' : 'opacity-0'}`}>
                <Moon size={16} className="text-gray-400" />
              </div>
            </div>
          </div>
        </div>

        
        <div className={`min-h-screen flex items-center justify-center `}>
          <MainFrame isDark={isDark}/>
          
        </div>
      </div>
    </>
  );
};

export default Bg;
