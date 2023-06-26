
import React from 'react'
import HomePainel from '@/painels/home'
import Nav from '@/utils/nav'
import { generateMetadata } from '@/utils/meta/index';


console.log(generateMetadata({}))



export const metadata = generateMetadata({})

export default function Home() {

  return (
    <>
      <Nav />
      <HomePainel />
    </>
  )
}
