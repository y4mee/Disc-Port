// DateNow.jsx
import React, { useEffect, useState } from "react";

const DateComp = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000); // update every second in case date changes at midnight

    return () => clearInterval(interval); // clean up
  }, []);

  const formattedDate = currentDate.toLocaleDateString("en-US", {
    weekday: "short",
    
    month: "long",
    day: "numeric",
  });

  return (
    <div className=" text-lg font-semibold text-black">
      {formattedDate}
    </div>
  );
};

export default DateComp;
