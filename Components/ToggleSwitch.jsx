import React, { useState } from 'react';
import { Moon, Sun } from 'lucide-react';

const ToggleSwitch = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const handleToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      {/* Toggle Switch Container */}
      <div 
        onClick={handleToggle}
        className={`
          relative w-16 h-32  rounded-full cursor-pointer transition-all duration-300 ease-in-out
          ${isDarkMode ? 'bg-gray-700/80' : 'bg-gray-300/80'}
          backdrop-blur-sm border border-gray-600/30
          hover:scale-105 active:scale-95
          shadow-lg hover:shadow-xl
        `}
      >
        {/* Toggle Button */}
        <div 
          className={`
            absolute w-12 h-12 bg-white rounded-full shadow-lg
            flex items-center justify-center 
            transition-all duration-300 ease-in-out
            left-2 top-2
            ${isDarkMode ? 'translate-y-0' : 'translate-y-16'}
          `}
        >
          {/* Icon */}
          <div className="transition-all duration-300 ease-in-out">
            {isDarkMode ? (
              <Moon 
                size={20} 
                className="text-gray-700 fill-gray-700" 
              />
            ) : (
              <Sun 
                size={20} 
                className="text-yellow-500 fill-yellow-500" 
              />
            )}
          </div>
        </div>

        {/* Background Icons */}
        <div className="absolute inset-0 flex flex-col items-center justify-between  py-4">
          <div className={`transition-opacity duration-300 ${!isDarkMode ? 'opacity-30' : 'opacity-0'}`}>
            <Sun size={16} className="text-gray-400" />
          </div>
          <div className={`transition-opacity duration-300 ${isDarkMode ? 'opacity-30' : 'opacity-0'}`}>
            <Moon size={16} className="text-gray-400" />
          </div>
        </div>
      </div>

      {/* Status Text */}
      <div className="ml-6 text-white">
        <p className="text-lg font-medium">
          {isDarkMode ? 'Dark Mode' : 'Light Mode'}
        </p>
        <p className="text-sm text-gray-400">
          {isDarkMode ? 'Click to switch to light' : 'Click to switch to dark'}
        </p>
      </div>
    </div>
  );
};

export default ToggleSwitch;