import React, { useState } from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";

import GlobalStyle from "./style";

import NavMenu from "./components/side-menu";
import MainContent from "./components/main-content";

import Div from "./styled/div";
import Button from "./styled/button";

const Index = () => {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

  return (
    <BrowserRouter>
      <GlobalStyle />
      <Div mainLayout isSideMenuOpen={isSideMenuOpen}>
        <NavMenu />
        <Button menuButton onClick={() => setIsSideMenuOpen(!isSideMenuOpen)}>
          {isSideMenuOpen ? "x" : `=`}
        </Button>
        <MainContent />
      </Div>
    </BrowserRouter>
  );
};

render(<Index />, document.getElementById("root"));
