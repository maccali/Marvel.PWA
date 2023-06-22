"use client"

import Image from 'next/image'
import React, { useState } from 'react'

import { NumericFormat } from 'react-number-format'
import PuffLoader from 'react-spinners/PuffLoader'
import { AiOutlinePlus } from 'react-icons/ai'

import styles from './page.module.css'

import MarvelHelper from '@/helpers/MarvelHelper'
import Navigator from "@/utils/navigator"

import crypto from "crypto"
import { useEffect } from 'react';

export default async function Home() {


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


    let result = []
    console.log("await marvelHelper.getListOfCharacters({ limit, offset })", await marvelHelper.getListOfCharacters({ limit, offset }))

    if (characterName) {
      result = await marvelHelper.getListOfCharacters({ limit, offset, characterName }).data.results
    } else {
      result = await marvelHelper.getListOfCharacters({ limit, offset }).data.results
    }

    console.log("result", result)
    setResultSet(result)

    setLoad(false)
  }

  useEffect(() => {
    getData(0)
  }, [])

  return (
    <main className={styles.main}>
      {resultSet.map(item =>
        <>
          <p>{item.name}</p>
        </>
      )}

      {load ? (
        <PuffLoader color="#36d7b7" />
      ) : (
        <div className={styles.cont}>
          <div className={styles.card}>
            <div className={styles.line}>
              <div className={styles.divinput}>
                <label htmlFor="pager" aria-label="Type a page">
                  <NumericFormat
                    name="pager"
                    type="text"
                    value={page}
                    onChange={e => setPage(e.target.value)}
                  />
                </label>
              </div>
            </div>
            <div className={styles.line}>
              <div className={styles.line}>
                <Navigator title="One more page" action={() => getData(page)}>
                  <AiOutlinePlus />
                  <span>More</span>
                </Navigator>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}
