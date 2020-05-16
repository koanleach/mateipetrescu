import styled from "styled-components";

export default styled.a`
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 900;
  text-transform: uppercase;
  text-decoration: none;
  color: black;
  cursor: pointer;
  padding: 10px;
  margin: 10px;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.3);
    transition: transform 0.2s;
  }
`;
