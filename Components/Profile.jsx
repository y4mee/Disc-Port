import React from "react";
import Socials from "./Socials";

const Profile = ({isDark}) => {
  return (
    <>
    <div className="relative">
      <div className={`flex flex-col items-center gap-8 w-[500px] h-[800px] bg-white/40 outline-1 outline-white  border-1 border-white rounded-[80px] ${isDark ? "bg-white/80" : ""} `}>
        <div className="w-[223px] h-[223px] bg-black rounded-full mt-13 overflow-hidden ">
          <img className=" object-contain  " src="./mainpfp.png" alt="Profile" />
        </div>
        <h1 className="text-black font-semibold text-[35px]"> Hi, I'm Jatin! </h1>
        <div className="flex items-center justify-center w-[260px] h-[40px] bg-white/50 outline-1 outline-white  border-1 border-white rounded-[80px]">

            <h2 className="text-black font-semibold "> Connections </h2>
        </div>
            <Socials />

        
      </div>
      
    </div>
    </>
  );
};

export default Profile;
