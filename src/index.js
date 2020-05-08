import React from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";

import NavMenu from "./components/nav-menu";
import MainContent from "./components/main-content";

import Layout from "./styled/layout";

render(
  <BrowserRouter>
    <Layout>
      <NavMenu />
      <MainContent />
    </Layout>
  </BrowserRouter>,
  document.getElementById("root")
);
