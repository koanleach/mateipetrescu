import styled, { css } from "styled-components";

export default styled.a`
  background-color: lightgray;
  border-radius: 6px;
  border: 1px solid #dcdcdc;
  display: inline-block;
  color: #666666;
  font-family: Arial;
  font-size: 15px;
  font-weight: bold;
  padding: 6px 24px;
  text-decoration: none;
  cursor: pointer;

  ${(props) =>
    props.primary &&
    css`
      background: lightcoral;
    `}
    
  ${(props) =>
    props.nav &&
    css`
      color: #000;
    `};
`;
