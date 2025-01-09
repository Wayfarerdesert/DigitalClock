import React, { useState } from "react";
import Display from "./Display";
import BtnDisplay from "../layout/BtnDisplay";
import "./styles.css";

function Stopwatch() {
  const [time, setTime] = useState({ ms: 0, s: 0, m: 0, h: 0 });
  const [interv, setInterv] = useState();
  const [status, setStatus] = useState(0);

  const start = () => {
    timeRun();
    setStatus(1);
    setInterv(setInterval(timeRun, 10));
  };

  var updateMs = time.ms,
    updateS = time.s,
    updateM = time.m,
    updateH = time.h;

  const timeRun = () => {
    if (updateM === 60) {
      updateH++;
      updateM = 0;
    }
    if (updateS === 60) {
      updateM++;
      updateS = 0;
    }
    if (updateMs === 100) {
      updateS++;
      updateMs = 0;
    }
    updateMs++;
    return setTime({ ms: updateMs, s: updateS, m: updateM, h: updateH });
  };

  const stop = () => {
    clearInterval(interv);
    setStatus(2);
  };

  const reset = () => {
    clearInterval(interv);
    setStatus(0);
    setTime({ ms: 0, s: 0, m: 0, h: 0 });
  };

  const resume = () => start();

  return (
    <>
      <div className="main-section">
        <div className="clock-holder">
          <h2 className="section-title">Stopwatch</h2>
          <div className="stopwatch">
            <Display time={time} />
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
    </>
  );
}

export default Stopwatch;
