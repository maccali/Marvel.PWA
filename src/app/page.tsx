import React from 'react'
import HomePainel from '@/painels/home'
import Nav from '@/utils/nav'
import { customMetadata } from '@/utils/meta/index';
import { CharactersProvider } from "@/contexts/characters";
import Offline from '@/components/app/offline'

export const metadata = customMetadata({})

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
