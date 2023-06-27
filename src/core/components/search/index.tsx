"use client"

import { useState, ChangeEvent, useContext } from 'react';
import { CharactersContext } from "@/contexts/characters";


import { Search, SearchInputContainer, SearchButtonContainer } from './styles';
import Navigator from '@/utils/navigator';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { useEffect } from 'react';

interface ISearch {
  openSearch: boolean
}

export default function SearchCompoment({ openSearch }: ISearch) {
  const { getData, setCharacterName, characterName } = useContext(CharactersContext);

  const [changeName, setChangeName] = useState<string | undefined>(undefined)

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    const named = e.target.value
    setChangeName(named ? named : undefined);
  };

  function getSearch() {
    setCharacterName(changeName)
  }

  useEffect(() => {
    getData(true);
  }, [characterName])


  return <Search >
    <div className={`${openSearch ? "active" : "inactive"}`}>
      <SearchInputContainer>
        <input type="text" value={changeName} onChange={handleNameChange} />
      </SearchInputContainer>
      <SearchButtonContainer>
        <Navigator title='Pesquisar' style='general-icon' action={() => {
          getSearch()
        }}>
          <AiOutlineArrowRight />
        </ Navigator>
      </SearchButtonContainer>
    </div>
  </Search>;
}
