import styled, { css } from "styled-components";

export default styled.p`
  font-family: Arial, Helvetica, sans-serif;

  color: ${(props) => props.color};

  ${(props) =>
    props.smallText &&
    css`
      font-size: 12px;
      margin: auto;
      padding-bottom: 20px;
      font-weight: bolder;
    `};

  ${(props) =>
    props.mediumText &&
    css`
      font-size: 16px;
      margin: auto;
      padding-bottom: 20px;
      font-weight: bolder;
    `};
`;
