import styled, { css } from "styled-components";

export default styled.button`
  width: 100px;
  height: 20px;
  min-width: 50px;
  min-height: 50px;
  cursor: pointer;
  border-radius: 3px;

  ${(props) =>
    props.primaryButton &&
    css`
      background: lightcoral;
    `}

  ${(props) =>
    props.menuButton &&
    css`
      cursor: pointer;
      position: sticky;
      top: 30px;
      width: 50px;
      height: 50px;
      border-radius: 100%;
      background-color: black;
      color: white;
      border: none;
      margin: 30px;
    `}
`;
