"use client"

import Image from 'next/image'

import Navigator from "@/utils/navigator"
import { Card } from './styles';
import Modal from '@/utils/modal/index';
import { useState } from 'react';
import CharacterPainel from '@/painels/character';

interface IDate {
  data: MarvelCharacter
}

export default function CardHeroes({ data }: IDate) {

  const [modalOpen, setModalOpen] = useState<boolean>(false)

  return (<>
    {/* <Navigator title={`Open the page of ${data.name}`} href={`/character/${data.id}`}> */}
    <Navigator title={`Open the page of ${data.name}`} action={() => {
      console.log("oi")
      setModalOpen(true)
    }}>
      <Card>
        <figure>
          <Image
            className='image'
            src={`${data.thumbnail.path.replace(/^http:\/\//i, "https://")}.${data.thumbnail.extension}`}
            alt={`Image of ${data.name}`}
            fill={true}

          />
        </figure>
        <figcaption>
          {data.name}
        </figcaption>
      </Card>
    </Navigator>
    <Modal open={modalOpen} closeModal={() => { setModalOpen(false) }}>
      <CharacterPainel data={data} />
    </Modal>
  </>

  )
}
