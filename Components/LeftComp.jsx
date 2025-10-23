import React from "react";

const LeftComp = ({ isDark }) => {
  return (
    <>
      <div className="flex flex-col gap-3">
        <div
          className={` mt-8 flex flex-col items-center text-black  w-[100px] h-[464px]  bg-white/40 outline-1 outline-white  border-1 border-white rounded-[80px]  ${
            isDark ? "bg-white/80 " : ""
          } `}
        ></div>
        <div
          className={` mt-8 flex flex-col items-center text-black  w-[100px] h-[280px] bg-white/40 outline-1 outline-white  border-1 border-white rounded-[80px]  ${
            isDark ? "bg-white/80 " : ""
          } `}
        ></div>
      </div>
    </>
  );
};

export default LeftComp;
