import React from "react";
import { NavLink } from "react-router-dom";

import logo from "../assets/logo.png";

import Nav from "../styled/nav";
import Image from "../styled/image";
import Header from "../styled/header";
import Footer from "../styled/footer";

import Aside from "../styled/aside";
import URL from "../styled/a";

import Link from "./nav-link";

export default () => {
  const selected = { "border-radius": "3px", "box-shadow": "0 0 0 3px" };

  return (
    <Aside>
      <Header>
        <Image src={logo} logoImage />
      </Header>

      <Nav mainNav>
        <Link activeStyle={selected} children="Home" to="/" exact />
        <Link activeStyle={selected} children="About" to="/about" />
        <Link activeStyle={selected} children="Gallery" to="/gallery" />
        <Link activeStyle={selected} children="Shop" to="/shop" />
        <Link activeStyle={selected} children="Contact" to="/contact" />
      </Nav>

      <Footer>
        <Nav socialNav>
          <URL href="https://www.facebook.com/matei.petrescu.1">In</URL>
          <URL href="https://www.facebook.com/matei.petrescu.1">Li</URL>
          <URL href="https://www.facebook.com/matei.petrescu.1">Fb</URL>
          <URL href="https://www.facebook.com/matei.petrescu.1">Tw</URL>
        </Nav>
      </Footer>
    </Aside>
  );
};
