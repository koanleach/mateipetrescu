import React from "react";
import { NavLink } from "react-router-dom";

import logo from "../assets/logo.svg";
import instagramIcon from "../assets/instagram.svg";
import facebookIcon from "../assets/facebook.svg";

import Nav from "../styled/nav";
import Image from "../styled/image";
import Header from "../styled/header";
import Footer from "../styled/footer";
import Aside from "../styled/aside";
import URL from "../styled/a";
import P from "../styled/p";
import H1 from "../styled/h1";

import Link from "./nav-link";

export default () => {
  const selected = { "border-radius": "3px", "box-shadow": "0 0 0 3px" };

  return (
    <Aside>
      <Header>
        <Image src={logo} logoImage />
        <H1 subTitle>Get Crafty! </H1>
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
          <URL href="https://www.facebook.com/matei.petrescu.1" target="_blank">
            <Image
              src={instagramIcon}
              socialIcon
              alt="Matei Petrescu on Instagram"
            />
          </URL>
          <URL href="https://www.facebook.com/matei.petrescu.1" target="_blank">
            <Image
              src={facebookIcon}
              socialIcon
              alt="Matei Petrescu on Facebook"
            />
          </URL>
        </Nav>
        <P smallText>Made with ❤️ in Copenhagen</P>
      </Footer>
    </Aside>
  );
};
