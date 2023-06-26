"use client"

import Image from 'next/image'
import React, { useState } from 'react'

// import { NumericFormat } from 'react-number-format'
// import PuffLoader from 'react-spinners/PuffLoader'
import { AiOutlinePlus } from 'react-icons/ai'


import MarvelHelper from '@/helpers/MarvelHelper'
import Navigator from "@/utils/navigator"

// import crypto from "crypto"
import { useEffect } from 'react';

export default function HomePainel() {


  const [page, setPage] = useState<number>(0)
  const [load, setLoad] = useState<boolean>(false)

  const marvelHelper = new MarvelHelper()
  // const result = await marvelHelper.getListOfCharacters({ limit: 30, offset: 50 })
  // console.log("result.data.results[0].series.items", result.data.results[0].series.items)

  const [resultSet, setResultSet] = useState<MarvelCharacter[]>([])

  async function getData(page: number, characterName?: string) {
    setLoad(true)

    const limit = 50
    const offset = limit * page



    let result: MarvelApiResponse
    let results: Array<MarvelCharacter>


    if (characterName) {
      result = await marvelHelper.getListOfCharacters({ limit, offset, characterName })
      results = result.data.results
    } else {
      result = await marvelHelper.getListOfCharacters({ limit, offset })
      results = result.data.results
    }

    // console.log("result", result)
    setResultSet(results)

    setLoad(false)
  }

  useEffect(() => {
    getData(0)
  }, [])

  return (
    <main >
      lvolszdfihjgo;asghisdopghjdsiolghsdlfghuidsiopgudsfhuiohjsdfgbpsdssssDDGGGFFhhg

      {resultSet?.map(item =>
        <>
          <p>{item.name}</p>
        </>
      )}


    </main>
  )
}
