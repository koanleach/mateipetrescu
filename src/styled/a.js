import styled, { css } from "styled-components";

export default styled.a`
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none;
  cursor: pointer;

  ${(props) =>
    props.navLink &&
    css`
      margin: 10px;
    `};
`;
