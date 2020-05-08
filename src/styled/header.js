import styled, { css } from "styled-components";

export default styled.header`
  width: 100px;
  cursor: pointer;


  ${(props) =>
    props.nav &&
    css`
      color: "green";
    `};
`;
