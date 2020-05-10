import React from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";

import NavMenu from "./components/side-menu";
import MainContent from "./components/main-content";

import Layout from "./styled/div";

render(
  <BrowserRouter>
    <Layout>
      <NavMenu />
      <MainContent />
    </Layout>
  </BrowserRouter>,
  document.getElementById("root")
);
