"use client"

import React, { useContext } from 'react'


import { CharactersContext } from "@/contexts/characters";

// import crypto from "crypto"
import { useEffect } from 'react';

import CardHeroes from '@/cards/character/index';

import { Main } from './styles'


import Paginator from './../../utils/paginator/index';

export default function HomePainel() {

  const { getData, charactersResponse } = useContext(CharactersContext)

  useEffect(() => {
    getData(true)
  }, [])

  return (
    <>
      <Main>
        {charactersResponse?.map(item =>
          // <CardHeroes key={item.id} data={item} />
          <CardHeroes data={item} key={item.id} />
        )}
      </Main>
      <Paginator />
    </>
  )
}
