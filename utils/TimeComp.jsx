// TimeNow.jsx
import React, { useEffect, useState } from "react";

const TimeNow = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000); // update every second

    return () => clearInterval(interval); // cleanup
  }, []);

  const formattedTime = currentTime.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true, // change to false if you want 24-hour format
  });

  return (
    <div className="text-black text-lg font-mono font-semibold">
      {formattedTime}
    </div>
  );
};

export default TimeNow;
