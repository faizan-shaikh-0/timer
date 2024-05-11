import { useState, useEffect } from "react";
import "../index.css";
function Screen() {
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  // Function to start or stop the Timer
  const startEventHandler = () => {
    setIsRunning(true);
  };
  const pauseEventHandler = () => {
    setIsRunning(false);
  };

  // Function to reset the Timer
  const reset = () => {
    setTimeElapsed(0);
    setIsRunning(false);
  };

  // Function to update the time elapsed
  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setTimeElapsed((prevTime) => prevTime + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  // Function to format time in HH:MM:SS
  const formatTime = (time) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;
    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  };

  return (
    <div className="screen-container">
      <h1>Timer</h1>
      <p>{formatTime(timeElapsed)}</p>
      <div className="screen">
        <button onClick={startEventHandler}>Start</button>
        <button onClick={pauseEventHandler}>Pause</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}

export default Screen;
