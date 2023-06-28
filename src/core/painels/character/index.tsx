"use client"

import Image from 'next/image'
import React from 'react'

import { Main } from './styles'

import CharacterEventsPainel from "@/painels/character/events"
import CharacterComicsPainel from "@/painels/character/comics"


interface IDate {
  data: MarvelCharacter
}

export default function CharacterPainel({ data }: IDate) {
  return (
    <>
      <Main>
        <section className='bio'>
          {/* <Image
            className='image'
            src={`${data.thumbnail.path.replace(/^http:\/\//i, "https://")}.${data.thumbnail.extension}`}
            alt={`Image of ${data.name}`}
            fill={true}

          /> */}
          <h1 className='name'>{data.name}</h1>
          <p className='description'>{data.description}</p>
          <p className='modified'>{data.modified}</p>
          <p className='urls'>{JSON.stringify(data.urls)}</p>



        </section>
        <section className='comics'>
          <h2>Comics</h2>
          <CharacterComicsPainel id={Number(data.id)} />
          == {JSON.stringify(data.comics.items)}
        </section>
        <section className='series'>
          <h2>Series</h2>
          {JSON.stringify(data.series.items)}
        </section>

        <section className='stories'>
          <h2>Stories</h2>
          
          {JSON.stringify(data.stories.items)}
        </section>
        <section className='events'>

          <CharacterEventsPainel id={Number(data.id)} />
        </section>
      </Main>
    </>
  )
}
