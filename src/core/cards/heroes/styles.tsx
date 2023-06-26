import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 350px;
  text-decoration: none;
  margin: 8px;
  transition: all .15s;
  position: relative;

  &:hover {
    transform: scale(1.08) rotate(-3deg);
    z-index: 400;
  }
  

  figure {
    display: flex;
    height: 100%;
    position: relative;
    margin: 0px;
    padding: 4px;
    background-color: #000;
  }
  
  figure img{
    object-fit: cover;
    width: 100%;
    height: 100%;
  }

  figcaption {
    position: absolute;
    display: flex;
    background-color: #000000bd;
    height: 50px;
    width: 300px;
    margin-top: calc(350px - 50px);
    color: #fff;
    z-index: 300;
    padding-left: 8px;
    align-items: center;

  }
`;

