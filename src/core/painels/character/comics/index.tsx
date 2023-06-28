"use client"

import React, { useState } from 'react'

import { Main } from './styles'
import CardCommic from '@/cards/comic'

import MarvelHelper from '@/helpers/MarvelHelper';
import { useEffect } from 'react';

interface ICharacterComicsPainel {
  id: number
}

export default function CharacterComicsPainel({ id }: ICharacterComicsPainel) {

  const [characterComics, setCharacterComics] = useState<MarvelComic[]>([])

  async function getData() {

    const dataResponse = new MarvelHelper();
    console.log("id", id)
    const response = await dataResponse.getComicsOfCharacterById(Number(id));

    console.log("response", response)

    const result = response.data.results

    setCharacterComics(result)
    console.log("result", result)
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <>
      <Main>
        {characterComics.map(item => {
          return <CardCommic key={item.id} data={item} />
        })}
      </Main>
    </>
  )
}
