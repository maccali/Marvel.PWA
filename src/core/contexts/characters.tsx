"use client"

import { createContext, ReactNode, useEffect, useState } from "react";

import MarvelHelper from '@/helpers/MarvelHelper'

type CharactersContextType = {
  charactersResponse: MarvelCharacter[] | null;
  charactersLoading: boolean,
  charactersLoadingFail: boolean,
  page: number,
  setPage: (page: number) => void
  getData: (characterName?: string) => void
};

const CharactersContext = createContext({} as CharactersContextType);

type Props = {
  children: ReactNode;
}

function CharactersProvider({ children }: Props) {

  const marvelHelper = new MarvelHelper()

  const [responseData, setResponseData] = useState<Array<MarvelCharacter>>([])
  const [load, setLoad] = useState<boolean>(false)
  const [fail, setFail] = useState<boolean>(false)
  const [page, setPage] = useState<number>(0)

  async function getData(characterName?: string) {
    setLoad(true)

    const limit = 10
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

    setResponseData([...responseData, ...results])
    setPage(page + 1)
    setLoad(false)
  }

  useEffect(() => {
    console.log("responseData", responseData);
  }, [responseData]);

  return (
    <CharactersContext.Provider
      value={{
        charactersLoading: load,
        charactersLoadingFail: fail,
        charactersResponse: responseData,
        page,
        setPage,
        getData
      }}
    >
      {children}
    </CharactersContext.Provider>
  );
}

export { CharactersContext, CharactersProvider };