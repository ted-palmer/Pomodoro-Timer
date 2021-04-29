import React, { useState, useEffect } from "react";

const Timer = () => {
  const [time, setTime] = useState(1500);
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    let intervalId;
    if (isActive) {
      if (time > 0) {
        intervalId = setInterval(() => {
          setTime(time - 1);
        }, 1000);
      }
    }
    return () => clearInterval(intervalId);
  }, [time, isActive]);

  return <div>{time}</div>;
};

export default Timer;
