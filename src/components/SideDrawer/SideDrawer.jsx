import React from "react";

import "./SideDrawer.scss";
const sideDrawer = (props) => (
  <nav className="side-drawer">
    <ul>
      <li>
        <a href="/">Project</a>
      </li>
      <li>
        <a href="/">Portfolio</a>
      </li>
      <li>
        <a href="/">Contact</a>
      </li>
    </ul>
  </nav>
);

export default sideDrawer;
