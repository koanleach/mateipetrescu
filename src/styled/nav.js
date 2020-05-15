import styled, { css } from "styled-components";

export default styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${(props) =>
    props.mainNav &&
    css`
      flex-direction: column;
    `}

  ${(props) =>
    props.socialNav &&
    css`
      flex-direction: row;
      justify-content: space-around;
      padding: 0 50px;

    `}
`;
