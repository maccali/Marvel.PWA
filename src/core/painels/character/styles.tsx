import styled from "styled-components";

export const Main = styled.main`
    display: grid;
    margin-top: 16px;
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


// <section className='bio'>
// {/* <Image
//   className='image'
//   src={`${data.thumbnail.path.replace(/^http:\/\//i, "https://")}.${data.thumbnail.extension}`}
//   alt={`Image of ${data.name}`}
//   fill={true}

// /> */}
// <h1 className='name'>{data.name}</h1>
// <p className='description'>{data.description}</p>
// <p className='modified'>{data.modified}</p>
// <p className='urls'>{JSON.stringify(data.urls)}</p>



// </section>
// <section className='comics'>
// <h2>Commics</h2>
// {JSON.stringify(data.comics.items)}
// </section>
// <section className='series'>
// <h2>Series</h2>
// {JSON.stringify(data.series.items)}
// </section>

// <section className='stories'>
// <h2>Stories</h2>
// {JSON.stringify(data.stories.items)}
// </section>
// <CharacterEventsPainel className='events' id={data.id} />