import React from "react";

import DrawerToggleButton from "../SideDrawer/DrawerToggleButton";
import "./Toolbar.scss";

const toolbar = (props) => (
  <header className="toolbar">
    <nav className="toolbar__navigation">
      <div className="toolbar__toggle-button">
        <DrawerToggleButton click={props.drawerClickHandler} />
      </div>
      <div className="toolbar__logo">
        <a href="/">MP</a>
      </div>
      <div className="spacer" />
      <div className="toolbar_navigation-items">
        {/* <ul>
          <li>
            <a href="/">Project</a>
          </li>
          <li>
            <a href="/">Portfolio</a>
          </li>
          <li>
            <a href="/">Contact</a>
          </li>
        </ul> */}
      </div>
    </nav>
  </header>
);

export default toolbar;
