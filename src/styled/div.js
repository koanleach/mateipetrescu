import styled, { css } from "styled-components";

export default styled.div`
  display: flex;
  transition: transform 0.5s;
  transform: translateX(-300px);


  ${(props) =>
    props.mainLayout &&
    css`
      background-color: lightblue;
    `};

  ${(props) =>
    props.isSideMenuOpen &&
    css`
      transition: transform 0.5s;
      transform: translateX(0);
    `}
`;
