import React from "react";
import { NavLink } from "react-router-dom";

import logo from "../assets/logo.svg";

import Nav from "../styled/nav";
import Anchor from "../styled/anchor";
import Image from "../styled/image";
import Header from "../styled/header";

const activeStyle = { backgroundColor: "black", color: "white" };

export default () => (
  <aside>
    <Header>
      <Image src={logo} logo/>
    </Header>
    <Nav>
      <NavLink to="/" exact activeStyle={activeStyle}>
        <Anchor nav>Home</Anchor>
      </NavLink>
      <NavLink to="/about" activeStyle={activeStyle}>
        <Anchor nav>About</Anchor>
      </NavLink>
      <NavLink to="/gallery" activeStyle={activeStyle}>
        <Anchor nav>Gallery</Anchor>
      </NavLink>
      <NavLink to="/shop" activeStyle={activeStyle}>
        <Anchor nav>Shop</Anchor>
      </NavLink>
      <NavLink to="/contact" activeStyle={activeStyle}>
        <Anchor nav>Contact</Anchor>
      </NavLink>
    </Nav>
  </aside>
);
