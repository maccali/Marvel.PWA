"use client"

import { useState, ChangeEvent, useContext } from 'react';

import { NumericFormat } from 'react-number-format'

import { AiOutlinePlus } from 'react-icons/ai'

import Navigator from '@/utils/navigator';

import { PaginatorStyle, Label } from "./styles"


import { CharactersContext } from "@/contexts/characters";
import { useEffect } from 'react';

function Paginator() {

  const { getData, page, setPage } = useContext(CharactersContext);

  const [changePage, setChangePage] = useState<number>(page + 1)

  const handlePageChange = (e: ChangeEvent<HTMLInputElement>) => {
    setChangePage(Number(e.target.value));
  };

  useEffect(() => {
    getData();
  }, [page])

  const handleActionClick = (changePage: number) => {
    setChangePage(changePage + 1)
    setPage(changePage)
  };

  return (
    <PaginatorStyle>
      <Label >
        <label htmlFor="pager" aria-label="Type a page">
          <NumericFormat
            name="pager"
            type="text"
            value={Number(changePage)}
            onChange={handlePageChange}
          />.
        </label>
        
      </Label>
      <div >
        <div >
          <Navigator
            title={`Add page ${changePage}`}
            style="general-icon-text"
            action={() => handleActionClick(changePage)}
          >
            <AiOutlinePlus />
            <span>More</span>
          </Navigator>
        </div>
      </div>
    </PaginatorStyle>
  )
}

export default Paginator;
