import styled, { css } from "styled-components";

export default styled.footer`
  display: flex;
  justify-content: center;

  ${(props) =>
    props.nav &&
    css`
      color: "green";
    `};
`;
