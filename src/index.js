import React from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";

import NavMenu from "./components/side-menu";
import MainContent from "./components/main-content";

import Div from "./styled/div";

render(
  <BrowserRouter>
    <Div mainLayout>
      <NavMenu />
      <MainContent />
    </Div>
  </BrowserRouter>,
  document.getElementById("root")
);
