import React, { useEffect } from "react";

import "./styles.css";

function Clock() {
  var updateClock = function () {
    var now = new Date(),
      hours = now.getHours(),
      amPm = hours >= 12 ? "PM" : "AM",
      minutes = now.getMinutes(),
      seconds = now.getSeconds(),
      day = now.getDay(),
      date = now.getDate(),
      month = now.getMonth(),
      year = now.getFullYear();

    var pHours = document.getElementById("hours"),
      pMinutes = document.getElementById("minute"),
      pSeconds = document.getElementById("seconds"),
      pAmPm = document.getElementById("amPm"),
      pDay = document.getElementById("day"),
      pDate = document.getElementById("dayNum"),
      pMonth = document.getElementById("month"),
      pYear = document.getElementById("year");

    var weekDays = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    // Update the DOM elements
    if (pDay) pDay.innerHTML = weekDays[day];
    if (pDate) pDate.innerHTML = date;

    var months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    if (pMonth) pMonth.innerHTML = months[month];
    if (pYear) pYear.innerHTML = year;

    if (pHours) {
      let displayHours;

      if (hours === 0) {
        displayHours = "00"; // Midnight
      } else if (hours === 12) {
        displayHours = "12"; // Noon
      } else {
        displayHours = (hours % 12).toString().padStart(2, "0");
      }

      pHours.innerHTML = displayHours;
    }

    if (pMinutes) pMinutes.innerHTML = minutes.toString().padStart(2, "0");
    if (pSeconds) pSeconds.innerHTML = seconds.toString().padStart(2, "0");
    if (pAmPm) pAmPm.innerHTML = amPm;
  };

  updateClock();
  var interval = setInterval(updateClock, 1000);
  interval;

  return (
    <>
      <div className="main-section">
        <div className="clock-holder">
          <h2 className="section-title">Clock</h2>
          <div className="wrap">
            <div className="widget">
              <div className="date">
                <div id="day" className="day">
                  Monday
                </div>
                <div id="dayNum" className="dayNum">
                  24
                </div>
                <span className="separator">,</span>
                <div id="month" className="month">
                  May
                </div>
                <div id="year" className="year">
                  2024
                </div>
              </div>

              <div className="clock">
                <div id="hours" className="hours">
                  12
                </div>
                <div className="dots">:</div>
                <div id="minute" className="minute">
                  30
                </div>
                <div className="dots">:</div>
                <div id="secondBox" className="secondBox">
                  <div id="amPm" className="amPm">
                    AM
                  </div>
                  <div id="seconds" className="seconds">
                    15
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="clock"></div>
        </div>
      </div>
    </>
  );
}

export default Clock;
