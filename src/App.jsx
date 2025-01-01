import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import React from "react";
import Navbar from "./components/layout/Navbar";
import Clock from "./components/clock/Clock";
import Stopwatch from "./components/stopwatch/StopWatch";
import Timer from "./components/timer/Timer";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/clock" element={<Clock />} />
          <Route path="/stopwatch" element={<Stopwatch />} />
          <Route path="/timer" element={<Timer />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
