"use client"

import Image from 'next/image'
import React, { useState } from 'react'


import { Main } from './styles'
import MarvelHelper from '@/helpers/MarvelHelper';
import { useEffect } from 'react';

interface ICharacterEventsPainel {
  id: number
}

export default function CharacterEventsPainel({ id }: ICharacterEventsPainel) {

  const [characterEvents, setCharacterEvents] = useState<MarvelEventData[]>([])

  async function getData() {

    const dataResponse = new MarvelHelper();
    const response = await dataResponse.getEventOfCharacterById(Number(id));

    const result = response.data.results

    setCharacterEvents(result)
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <>
      <Main>
        ???
        {characterEvents.map(item => {
          return <p>{item.title}</p>
        })}
        {characterEvents ? JSON.stringify(characterEvents) : ""}
      </Main>
    </>
  )
}
interface IDate {
  data: MarvelCharacter
}