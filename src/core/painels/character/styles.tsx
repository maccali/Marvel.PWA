import styled from "styled-components";

export const Main = styled.main`
    display: grid;
    grid-gap: 10px;
    height: auto;
    justify-items: center;
    grid-template-areas:
      "bio"
      "comics"
      "series"
      "stories"
      "events";
    grid-template-rows: auto auto auto auto;
    grid-template-columns: 1fr;

    section.bio{
      display: grid;
      justify-content: center;
      margin-top: 84px;
      height: 350px;
      width: calc(230px * 4 + 16px * 3);
      grid-template-areas:
      "name"
      "modified"
      "image";
      grid-template-rows: 35px 32px 290px;
      grid-template-columns: 1fr;
      column-gap: 16px;
      color:white;
    }

    section.bio .image {
      grid-area: image;
      display: flex;
      height: 100%;
      position: relative;
    }

    section.bio .image img{
      position: absolute;
      height: 100%;
      width: 100%;
      object-fit: contain;
      object-position: left top;
    }
    
    section.bio .name {
      grid-area: name;
      display: flex;
      align-items: flex-start;
      margin: 0;
    }
    
    section.bio .description {
      grid-area: description;
      margin: 0;
    }
    
    section.bio .modified {
      grid-area: modified;
      margin: 0;
    }

    section .head {
      display: flex;
      flex-direction: row;
      justify-content: center ;
    }

    section .head h2 {
      display: flex;
      margin-top: 16px;
      height: 50px;
      align-items: self-end;
    }

    section .head div{
      height: 0px;
    }

    section h2 {
      color:white;
    }

    section.series .head div,
    section.series .head h2 {
      width: 230px;
      margin: 8px;
    }

    section.comics .head div,
    section.comics .head h2 {
      width: 230px;
      margin: 8px;
    }

    section.events .head div,
    section.events .head h2 {
      width: 230px;
      margin: 8px;
    }

    section.stories .head div,
    section.stories .head h2 {
      width: 230px;
      margin: 8px;
    }

    .bio {
      grid-area: bio;
    }
    .comics {
      grid-area: comics;
    }
    .series {
      grid-area: series;
    }
    .stories {
      grid-area: stories;
    }
    .events {
      grid-area: events;
    }

`;