import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faHourglass,
} from "@fortawesome/free-regular-svg-icons";
import { faStopwatch } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  const navItems = [
    { name: "Clock", path: "/clock", icon: faClock },
    { name: "Stopwatch", path: "/stopwatch", icon: faStopwatch },
    { name: "Timer", path: "/timer", icon: faHourglass },
  ];

  return (
    <nav>
      <div className="nav-wrapper">
        <h1 className="mainTitle">Digital Clock</h1>
        <div className="nav-links">
          {navItems.map((item) => (
            <Link key={item.path} to={item.path} className="nav-link">
              <FontAwesomeIcon icon={item.icon} size="2x" />
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
