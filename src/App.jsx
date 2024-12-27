import "./App.css";
import React from "react";
import Stopwatch from "./components/layout/StopWatch";

function App() {
  return (
    <>
      <div className="main-section">
        <h1>Digital Clock</h1>
        <div>
          <div>
            <Stopwatch />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
