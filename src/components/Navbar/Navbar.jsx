import React from "react";
import css from "./Navbar.css";

export const Navbar = () => {
  var value = { textDecoration: "none" };
  return (
    <div>
      <div className="main">
        <div id="logo">LOGOBAKERY</div>

        <ul>
          <a href="" style={value}>
            <li>Service</li>
          </a>
          <a href="" style={value}>
            <li>projects</li>
          </a>
          <a href="" style={value}>
            <li>About</li>
          </a>
        </ul>
        <div>
          <button id="but">contact</button>
        </div>
      </div>
    </div>
  );
};
