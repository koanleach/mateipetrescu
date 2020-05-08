import styled, { css } from "styled-components";

export default styled.button`
  width: 100px;
  cursor: pointer;

  ${(props) =>
    props.primary &&
    css`
      background: lightcoral;
    `}
`;