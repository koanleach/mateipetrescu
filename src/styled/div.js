import styled, { css } from "styled-components";

export default styled.div`
  display: flex;
  transition: transform 0.5s;
  transform: translateX(-20vw);

  ${(props) =>
    props.mainLayout &&
    css`
      background-color: white;
    `};

  ${(props) =>
    props.isSideMenuOpen &&
    css`
      transition: transform 0.5s;
      transform: translateX(0);
    `}
`;
