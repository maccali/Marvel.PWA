"use client"

import React, { useState, useEffect } from 'react'
import { BarLoader } from 'react-spinners'

import CardSerie from '@/cards/serie'
import MarvelHelper from '@/helpers/MarvelHelper';

import { Main, LoaderStyle, TextHelp } from '../styles'

interface ICharacterSeriesPainel {
  id: number
}

export default function CharacterSeriesPainel({ id }: ICharacterSeriesPainel) {

  const [characterSeries, setCharacterSeries] = useState<MarvelComic[]>([])
  const [load, setLoad] = useState<boolean>(true)

  async function getData() {
    setLoad(true)

    const dataResponse = new MarvelHelper();
    const response = await dataResponse.getSeriesOfCharacterById(Number(id));
    const result = response.data.results

    setCharacterSeries(result)
    setLoad(false)
  }

  useEffect(() => {
    getData()
  }, [])

  if (load) {
    return (
      <LoaderStyle>
        < BarLoader color='#f00c18' width={200} height={10} />
      </LoaderStyle >
    )
  }

  return (
    <>
      <Main>
        {!characterSeries || characterSeries.length == 0 && <TextHelp>No Events Founded</TextHelp>}
        {characterSeries.map(item => {
          return <CardSerie key={item.id} data={item} />
        })}
      </Main>
    </>
  )
}
