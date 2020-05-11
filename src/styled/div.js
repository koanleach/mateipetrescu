import styled, { css } from "styled-components";

export default styled.div`
  display: flex;

  ${(props) =>
    props.mainLayout &&
    css`
      background-color: lightblue;
    `};
`;
