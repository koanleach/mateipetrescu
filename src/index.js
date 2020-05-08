import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./pages/home";
import Gallery from "./pages/gallery";
import Shop from "./pages/shop";
import Contact from "./pages/contact";
import About from "./pages/about";

import Menu from "./components/menu";

render(
  <BrowserRouter>
    <Menu />
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/about" component={About} />
      <Route path="/gallery" component={Gallery} />
      <Route path="/shop" component={Shop} />
      <Route path="/contact" component={Contact} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
