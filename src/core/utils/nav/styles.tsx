import styled from "styled-components";

export const NavigationMenu = styled.nav`
  height: 60px;
  background-color: var(--black);

  div {
    display: flex;
    justify-content: space-between;
  }
`;

export const MenuList = styled.ul`
  display: flex;
  padding: 0;
  margin: 0;
  list-style: none;

  & li {
    height: inherit;
  }

  & li a,
  & li button {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    padding-left: 15px;
    padding-right: 15px;
    color: #f1f1f1;
    font-size: 17px;
    transition: all 0.17s;
    height: 100%;
    cursor: pointer;
  }

  & li a svg,
  & li button svg {
    height: 30px;
    width: 30px;
    margin-right: 6px;
    color: #f1f1f1;
  }

  & li a:hover,
  & li button:hover {
    background-color: #272727;
    text-decoration: none;
    color: #f1f1f1;
  }

  & li a:hover svg,
  & li button:hover svg {
    color: #f1f1f1;
  }
`;

export const DivImage = styled.div`
  display: inline-flex;
  height: inherit;
  align-items: center;

  & img {
    height: 60px;
  }
`;
