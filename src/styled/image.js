import styled, { css } from "styled-components";

export default styled.img`
  margin: 3px;

  ${(props) =>
    props.logoImage &&
    css`
      width: 100px;
    `};
`;
