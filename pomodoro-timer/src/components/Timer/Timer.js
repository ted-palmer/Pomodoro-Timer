import React, { useState, useEffect } from "react";
import Tasks from "../Tasks/Tasks";

import styled from "styled-components";

const TimerText = styled.div`
  text-align: center;
  font-size: 72px;
`;

const TimerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Timer = () => {
  const [time, setTime] = useState(1500);
  const timer = new Date(time * 1000).toISOString().substr(14, 5);
  const [isActive, setIsActive] = useState(false);

  const startTimer = () => {
    setIsActive(true);
  };

  const pauseTimer = () => {
    setIsActive(false);
  };

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

  return (
    <TimerContainer>
      <TimerText>{timer}</TimerText>
      <button onClick={() => startTimer()} disabled={isActive}>
        Start
      </button>
      <button onClick={() => pauseTimer()} disabled={!isActive}>
        Pause
      </button>
      <Tasks/>
    </TimerContainer>
  );
};

export default Timer;
