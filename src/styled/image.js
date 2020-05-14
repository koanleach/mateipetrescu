import styled, { css } from "styled-components";

export default styled.img`
  margin: 10px;

  ${(props) =>
    props.logoImage &&
    css`
      width: 100px;
    `};
`;
