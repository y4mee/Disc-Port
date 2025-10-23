import React, { useState, useEffect } from "react";
import Profile from "./Profile";
import Aboutme from "./Aboutme";
import LeftComp from "./LeftComp";

const MainFrame = ({ isDark }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <>
      <style>{`
        @keyframes scaleIn {
          from { transform: scale(0.95); }
          to { transform: scale(1); }
        }

        @keyframes slideInFromLeft {
          from { transform: translateX(-30px); }
          to { transform: translateX(0); }
        }

        @keyframes slideInFromRight {
          from { transform: translateX(30px); }
          to { transform: translateX(0); }
        }

        @keyframes slideInFromTop {
          from { transform: translateY(-30px); }
          to { transform: translateY(0); }
        }

        .frame-enter {
          animation: scaleIn 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }

        .profile-enter {
          animation: slideInFromRight 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
          animation-delay: 0.2s;
        }

        .about-enter {
          animation: slideInFromTop 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
          animation-delay: 0.4s;
        }

        .left-enter {
          animation: slideInFromLeft 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
          animation-delay: 0.3s;
        }

        /* Responsive positioning */
        @media (max-width: 1600px) {
          .main-container { transform: scale(0.9); }
        }

        @media (max-width: 1400px) {
          .main-container { transform: scale(0.8); }
        }

        @media (max-width: 1200px) {
          .main-container { transform: scale(0.7); }
        }

        @media (max-width: 1024px) {
          .main-container { transform: scale(0.6); }
        }

        @media (max-width: 768px) {
          .main-container { transform: scale(0.5); }
        }

        @media (max-width: 640px) {
          .main-container { transform: scale(0.4); }
        }
      `}</style>

      <div className={`main-container flex items-center justify-end relative ${isDark ? '' : 'overflow-hidden'}`}>
        <div
          className={`${isLoaded ? 'frame-enter' : ''} ${
            !isDark ? "" : "opacity-0"
          } flex items-center w-[1500px] h-[880px] max-h-screen rounded-[80px] bg-[#f0f0f0]/50 outline-1 outline-white backdrop-blur-[40px] overflow-hidden`}
        ></div>
        <div className={`flex items-center justify-center right-17 absolute ${isLoaded ? 'profile-enter' : ''}`}>
          <Profile isDark={isDark} />
        </div>
        <div className={`flex items-center justify-center left-63 top-11 absolute ${isLoaded ? 'about-enter' : ''}`}>
          <Aboutme isDark={isDark} />
        </div>
        <div className={`left-17 top-5 absolute ${isLoaded ? 'left-enter' : ''}`}>
          <LeftComp isDark={isDark} />
        </div>
      </div>
    </>
  );
};

export default MainFrame;