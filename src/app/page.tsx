import React from 'react'
import HomePainel from '@/painels/home'
import Nav from '@/utils/nav'
import { generateMetadata } from '@/utils/meta/index';
import { CharactersProvider } from "@/contexts/characters";

export const metadata = generateMetadata({})

export default function Home() {

  return (
    <>
      <CharactersProvider>
        <Nav />
        <HomePainel />
      </CharactersProvider>
    </>
  )
}
