import React from "react";
import { FaRedditAlien, FaTwitch, FaSpotify } from "react-icons/fa";
import { IoIosArrowRoundUp,  } from "react-icons/io";
import { FaDiscord } from "react-icons/fa";

const Socials = () => {
  return (
    <>
      <div className="container p-5  text-black w-full flex flex-col  gap-5 items-start justify-start ">
        <div className="iconsContainer flex w-full gap-3 items-center pl-10 ">
          <div className=" flex items-center justify-center gap-3 w-8 h-8 bg-white rounded-md text-md">
            <FaRedditAlien />
          </div>
          <div>
            <a href="https://www.reddit.com/user/y4meteeee/">@y4meteeee</a>
          </div>
          <IoIosArrowRoundUp className="text-2xl rotate-45 "/>
        </div>
        <div className="iconsContainer flex w-full gap-3 items-center pl-10 ">
          <div className=" flex items-center justify-center  w-8 h-8 bg-white rounded-md text-md">
            <FaTwitch />
          </div>
          <div>
            <a href="https://www.twitch.tv/y4meteeee">@y4meteeee</a>
          </div>
          <IoIosArrowRoundUp className="text-2xl rotate-45 "/>
        </div>
        <div className="iconsContainer flex w-full gap-3 items-center pl-10 ">
          <div className=" flex items-center justify-center gap-3 w-8 h-8 bg-white rounded-md text-md">
            <FaSpotify  />
          </div>
          <div>
            <a href="https://open.spotify.com/user/3156l7625uwqlk3h3nv4d7ugtcf4">@y4meteeee</a>
          </div>
          <IoIosArrowRoundUp className="text-2xl rotate-45 "/>
        </div>
        <div className="iconsContainer flex w-full gap-3 items-center pl-10 ">
          <div className=" flex items-center justify-center gap-3 w-8 h-8 bg-white rounded-md text-md">
            <FaDiscord />
          </div>
          <div>
            <a href="https://discord.com/users/1102123627438153738">@y4meteeee</a>
          </div>
          <IoIosArrowRoundUp className="text-2xl rotate-45 "/>
        </div>
      </div>
    </>
  );
};

export default Socials;
