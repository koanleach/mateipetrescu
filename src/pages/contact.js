import React from "react";
import Button from "../styled/button";
import { Helmet } from "react-helmet";

export default () => {
  return (
    <>
      <Helmet>
        <title>Matei | Contact</title>
      </Helmet>
      <h2>Contact Page</h2>
      <p>This is the Contact Page content...</p>
      <Button primary>Send me a message!</Button>
    </>
  );
};
