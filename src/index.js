import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { render } from "react-dom";


import GlobalStyles from "./style";

import NavMenu from "./components/side-menu";
import MainContent from "./components/main-content";

import Div from "./styled/div";
import Button from "./styled/button";

const Index = () => {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(true);

  return (
    <BrowserRouter>
      <GlobalStyles />
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

render(<Index />, document.querySelector("base"));
