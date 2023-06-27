"use client"

import Image from 'next/image'
import React, { useState, useContext } from 'react'
import { NumericFormat } from 'react-number-format'

// import { NumericFormat } from 'react-number-format'
// import PuffLoader from 'react-spinners/PuffLoader'
import { AiOutlinePlus } from 'react-icons/ai'


import MarvelHelper from '@/helpers/MarvelHelper'

import { CharactersContext } from "@/contexts/characters";
import { CharactersProvider } from "@/contexts/characters";

// import crypto from "crypto"
import { useEffect } from 'react';

import CardHeroes from '@/cards/heroes/index';
import Navigator from '@/utils/navigator';

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
          <CardHeroes data={item} />
        )}
      </Main>
      <Paginator />
    </>
  )
}
