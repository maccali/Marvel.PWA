"use client"

import { useState, ChangeEvent, useContext } from 'react';

import { NumericFormat } from 'react-number-format'

import { AiOutlinePlus } from 'react-icons/ai'

import Navigator from '@/utils/navigator';

import { PaginatorStyle } from "./styles"


type GetDataFunction = (page: number, characterName?: string) => void;

import { CharactersContext } from "@/contexts/characters";

function Paginator() {

  const { getData, page, setPage } = useContext(CharactersContext);



  const handlePageChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPage(Number(e.target.value));
  };

  const handleActionClick = () => {
    getData();
  };

  return (
    <PaginatorStyle>
      <div >
        <label htmlFor="pager" aria-label="Type a page">
          <NumericFormat
            name="pager"
            type="text"
            value={page}
            onChange={handlePageChange}
          />
        </label>
      </div>
      <div >
        <div >
          <Navigator
            title="One more page"
            style="general-icon-text"
            action={handleActionClick}
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
