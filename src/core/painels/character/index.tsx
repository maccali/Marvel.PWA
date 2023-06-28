"use client"

import Image from 'next/image'
import React from 'react'

import { Main } from './styles'

import CharacterEventsPainel from "@/painels/character/parts/events"
import CharacterComicsPainel from "@/painels/character/parts/comics"
import CharacterSeriesPainel from "@/painels/character/parts/series"
import CharacterStoriesPainel from "@/painels/character/parts/stories"
import { Container } from '@/utils/container'

interface IDate {
  data: MarvelCharacter
}

export default function CharacterPainel({ data }: IDate) {
  return (
    <>
      <Container>
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
            <div className='head'>
              <h2>Comics</h2>
              <div></div>
              <div></div>
              <div></div>
            </div>

            <CharacterComicsPainel id={Number(data.id)} />
          </section>
          <section className='series'>
            <div className='head'>
              <h2>Series</h2>
              <div></div>
              <div></div>
              <div></div>
            </div>
            <CharacterSeriesPainel id={Number(data.id)} />
          </section>
          <section className='stories'>
            <div className='head'>
              <h2>Stories</h2>
              <div></div>
              <div></div>
              <div></div>
            </div>
            <CharacterStoriesPainel id={Number(data.id)} />
          </section>
          <section className='events'>
            <div className='head'>
              <h2>Events</h2>
              <div></div>
              <div></div>
              <div></div>
            </div>
            <CharacterEventsPainel id={Number(data.id)} />
          </section>
        </Main>
      </Container>
    </>
  )
}
