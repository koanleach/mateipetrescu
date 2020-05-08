import styled, { css } from "styled-components";

export default styled.a`
  width: 100px;
  cursor: pointer;


  ${(props) =>
    props.nav &&
    css`
      color: "green";
    `};
`;
