import React, { useState, useEffect } from "react";
import BtnDisplay from "../layout/BtnDisplay";
import "./styles.css";

function CountdownTimer() {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [remainingTime, setRemainingTime] = useState(0); // in seconds
  const [isRunning, setIsRunning] = useState(false);
  const [status, setStatus] = useState(0); // 0: idle, 1: running, 2: paused

  let timerInterval = null;

  const updateClock = () => {
    setRemainingTime((prevTime) => {
      if (prevTime <= 0) {
        clearInterval(timerInterval);
        setIsRunning(false);
        setStatus(0);
        return 0;
      }
      return prevTime - 1;
    });
  };

  useEffect(() => {
    if (isRunning) {
      timerInterval = setInterval(updateClock, 1000);
    }
    return () => clearInterval(timerInterval); // Clean up interval on unmount or state change
  }, [isRunning]);

  // Calculate hours, minutes, seconds from remaining time
  useEffect(() => {
    const h = Math.floor(remainingTime / 3600);
    const m = Math.floor((remainingTime % 3600) / 60);
    const s = remainingTime % 60;

    setHours(h);
    setMinutes(m);
    setSeconds(s);
  }, [remainingTime]);

  const start = () => {
    setRemainingTime(hours * 3600 + minutes * 60 + seconds);
    setIsRunning(true);
    setStatus(1); // Running
  };

  const stop = () => {
    setIsRunning(false);
    clearInterval(timerInterval);
    setStatus(2); // Paused
  };

  const resume = () => {
    setIsRunning(true);
    setStatus(1); // Running
  };

  const reset = () => {
    setRemainingTime(0);
    setHours(0);
    setMinutes(0);
    setSeconds(0);
    setIsRunning(false);
    clearInterval(timerInterval);
    setStatus(0); // Idle
  };

  return (
    <div className="main-section">
      <div className="clock-holder">
        <h2 className="section-title">Countdown Timer</h2>
        <div className="wrap">
          <div className="widget">
            <div className="timer">
              <div className="timerBox">
                <input
                  type="number"
                  value={hours.toString().padStart(2, "0")}
                  onChange={(e) =>
                    setHours(Math.max(0, parseInt(e.target.value) || 0))
                  }
                  min="0"
                  placeholder="HH"
                  disabled={isRunning}
                  id="hours"
                  className="time-input-field"
                />
                <input
                  type="number"
                  value={minutes.toString().padStart(2, "0")}
                  onChange={(e) => setMinutes(Math.max(0, e.target.value))}
                  min="0"
                  placeholder="Minutes"
                  disabled={isRunning}
                  id="minutes"
                  className="time-input-field"
                />
                <input
                  type="number"
                  value={seconds.toString().padStart(2, "0")}
                  onChange={(e) => setSeconds(Math.max(0, e.target.value))}
                  min="0"
                  placeholder="Seconds"
                  disabled={isRunning}
                  id="seconds"
                  className="time-input-field"
                />
              </div>
              <div className="timerControls">
                <BtnDisplay
                  status={status}
                  start={start}
                  stop={stop}
                  resume={resume}
                  reset={reset}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CountdownTimer;
