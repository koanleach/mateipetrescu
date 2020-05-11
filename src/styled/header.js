import styled, { css } from "styled-components";

export default styled.header`
  display: flex;
  justify-content: center;

  ${(props) =>
    props.nav &&
    css`
      color: "green";
    `};
`;
