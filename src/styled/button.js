import styled, { css } from "styled-components";

export default styled.button`
  width: 100px;
  height: 20px;
  cursor: pointer;

  ${(props) =>
    props.primary &&
    css`
      background: lightcoral;
    `}

  ${(props) =>
    props.menuButton &&
    css`
      position: fixed;
      width: 50px;
      height: 50px;
      border-radius: 100%;
      background-color: black;
      color: white;
      font-size: 38px;
      left: 10vw;
      top: 2vw;
    `}
`;
