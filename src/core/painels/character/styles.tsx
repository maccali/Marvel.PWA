import styled from "styled-components";

export const Main = styled.main`
    display: grid;
    grid-gap: 10px;
    height: auto;
    grid-template-areas:
      "bio"
      "events"
      "series"
      "comics"
      "stories";
    grid-template-rows: auto auto auto auto;
    grid-template-columns: 1fr;

    section .head {
      display: flex;
      flex-direction: row;
      justify-content: center ;
    }

    section .head h2 {
      margin-top: 16px;
      height: 30px;
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