import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 230px;
  height: 350px;
  text-decoration: none;
  margin: 8px;
  transition: all .2s;
  position: relative;

  &:hover, &:active {
    z-index: 400;
  }

  &:hover > figcaption, 
  &:active > figcaption 
  {
    height: 350px;
    margin-top: 0px;
  }

  &:hover > figcaption p,
  &:active > figcaption p
  {
    opacity: 1;
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
    height: 0px;
    width: 230px;
    margin-top: 350px;
    color: #fff;
    z-index: 300;
    padding-left: 8px;
    align-items: center;
    transition: all .1s;
  }

  figcaption p {
    opacity: 0;
    transition-delay: .2s;
  }

  &:not(:hover) > figcaption p,
  &:not(:active) > figcaption p
   {
    transition-delay: 0s;
  }
`;


