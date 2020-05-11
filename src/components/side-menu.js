import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import logo from "../assets/logo.svg";

import Nav from "../styled/nav";
import Image from "../styled/image";
import Header from "../styled/header";
import Footer from "../styled/footer";

import Button from "../styled/button";
import Aside from "../styled/aside";

export default () => {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(true);
  const selected = { "border-radius": "3px", "box-shadow": "0 0 0 3px" };

  return (
    <>
      {isSideMenuOpen && (
        <Aside>
          <Header>
            <Image src={logo} logoImage />
          </Header>
          <Nav mainNav>
            <NavLink activeStyle={selected} children="Home" to="/" exact />
            <NavLink activeStyle={selected} children="About" to="/about" />
            <NavLink activeStyle={selected} children="Gallery" to="/gallery" />
            <NavLink activeStyle={selected} children="Shop" to="/shop" />
            <NavLink activeStyle={selected} children="Contact" to="/contact" />
          </Nav>
          <Footer>
            <Image src={logo} logoImage />
          </Footer>
        </Aside>
      )}
      <Button menuButton onClick={() => setIsSideMenuOpen(!isSideMenuOpen)}>
        {isSideMenuOpen ? "x" : `=`}
      </Button>
    </>
  );
};
