import styled, { css } from "styled-components";

export default styled.nav`
  ${(props) =>
    props.mainNav &&
    css`
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      align-items: center;

      a {
        font-family: Arial, Helvetica, sans-serif;
        font-weight: 900;
        text-transform: uppercase;
        text-decoration: none;
        color: black;
        cursor: pointer;
        padding: 10px;
        margin: 10px;

        &:hover {
          border-radius: 3px;
          box-shadow: 0 0 0 3px;
        }
      }
    `}
`;
