import React from "react";
import { Helmet } from "react-helmet";

import About from "./about";
import Gallery from "./gallery";
import Shop from "./shop";
import Contact from "./contact";

export default () => {
  return (
    <>
      <About />
      <Gallery />
      <Shop />
      <Contact />
      <Helmet>
        <title>Matei | Home</title>
      </Helmet>
    </>
  );
};
