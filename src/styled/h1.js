import styled, { css } from "styled-components";

export default styled.h1`
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none;

  ${(props) =>
    props.navLink &&
    css`
      margin: 10px;
    `};

  ${(props) =>
    props.subTitle &&
    css`
      font-size: 16px;
      margin: auto;
      font-weight: bold;
    `};
`;
