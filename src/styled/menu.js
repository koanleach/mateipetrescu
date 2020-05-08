import React from "react";
import { NavLink } from "react-router-dom";

import Nav from "./nav";
import Button from "./button";

export default () => (
  <Nav>
    <NavLink to="/" activeStyle={{ border: "#000" }}>
      <Button nav>Home</Button>
    </NavLink>
    <NavLink to="/about" activeStyle={{ backgroundColor: "green" }}>
      <Button nav>About</Button>
    </NavLink>
    <NavLink to="/gallery" activeStyle={{ borderBottom: "solid 3px #fff" }}>
      <Button nav>Gallery</Button>
    </NavLink>
    <NavLink to="/shop" activeStyle={{ borderBottom: "solid 3px #fff" }}>
      <Button nav>Shop</Button>
    </NavLink>
    <NavLink to="/contact" activeStyle={{ borderBottom: "solid 3px #fff" }}>
      <Button nav>Contact</Button>
    </NavLink>
  </Nav>
);
