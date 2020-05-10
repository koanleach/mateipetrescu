import styled, { css } from "styled-components";

export default styled.img`
  width: 100px;
  padding: 10px;

  ${(props) =>
    props.logoImage &&
    css`
        width: 20px;
    `};
`;
