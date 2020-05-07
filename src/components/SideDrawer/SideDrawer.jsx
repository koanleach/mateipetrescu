import React from "react";

import "./SideDrawer.scss";

const sideDrawer = (props) => {
  let drawerClasses = "side-drawer";
  if (props.show) {
    drawerClasses = "side-drawer open";
  }

  return (
    <nav className={drawerClasses}>
      <ul>
        <li>
          <a href="/">PROJECT</a>
        </li>
        <li>
          <a href="/">LISTINGS</a>
        </li>
        <li>
          <a href="/">CONTACT</a>
        </li>
      </ul>
    </nav>
  );
};

export default sideDrawer;
