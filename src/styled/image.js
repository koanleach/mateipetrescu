import styled, { css } from "styled-components";

export default styled.img`
  ${(props) =>
    props.logoImage &&
    css`
      width: 100px;
      margin: 10px auto;
    `};

  ${(props) =>
    props.socialIcon &&
    css`
      width: 40px;
    `};
`;
