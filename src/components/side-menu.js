import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import logo from "../assets/logo.svg";

import Nav from "../styled/nav";
import Link from "../styled/a";
import Image from "../styled/image";
import Header from "../styled/header";
import Footer from "../styled/footer";

import Button from "../styled/button";
import SideMenu from "../styled/aside";

export default () => {
  const activeStyle = { backgroundColor: "black", color: "white" };
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(true);

  return (
    <div>
      <Button menuButton onClick={() => setIsSideMenuOpen(!isSideMenuOpen)}>
        {isSideMenuOpen ? "x" : `=`}
      </Button>
      {isSideMenuOpen && (
        <SideMenu>
          <Header>
            <Image src={logo} logoImage />
          </Header>
          <Nav>
            <NavLink to="/" exact activeStyle={activeStyle}>
              <Link navLink>Home</Link>
            </NavLink>
            <NavLink to="/about" activeStyle={activeStyle}>
              <Link navLink>About</Link>
            </NavLink>
            <NavLink to="/gallery" activeStyle={activeStyle}>
              <Link navLink>Gallery</Link>
            </NavLink>
            <NavLink to="/shop" activeStyle={activeStyle}>
              <Link navLink>Shop</Link>
            </NavLink>
            <NavLink to="/contact" activeStyle={activeStyle}>
              <Link navLink>Contact</Link>
            </NavLink>
          </Nav>
          <Footer>
            <Image src={logo} logoImage />
          </Footer>
        </SideMenu>
      )}
    </div>
  );
};
