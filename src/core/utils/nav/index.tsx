"use client"

import React, { useState, useEffect } from 'react'

import { CiSquareInfo, CiSaveDown2, CiSearch } from "react-icons/ci"

import Navigator from '@/utils/navigator'

import { DivImage, MenuList, NavigationMenu } from './styles'

import { Container } from "@/utils/container"

import SearchComponent from '@/components/search'

function Nav() {
  const [installBtn, setInstallBtn] = useState<boolean>(false)
  const [openSearch, setOpenSearch] = useState<boolean>(false)
  const [deferredPrompt, setDeferredPrompt] = useState<any>()

  useEffect(() => {
    ; (function () {
      window.addEventListener('beforeinstallprompt', e => {
        // Prevent the mini-infobar from appearing on mobile
        e.preventDefault()
        // Stash the event so it can be triggered later.
        setDeferredPrompt(e)
        // Update UI notify the user they can install the PWA
        // showInstallPromotion();
        setInstallBtn(true)
      })
    })()
  })

  function install() {
    setInstallBtn(false)
    deferredPrompt.prompt()
    // Wait for the user to respond to the prompt
    deferredPrompt.userChoice.then((choiceResult: any) => {
      if (choiceResult.outcome === 'accepted') {
        setInstallBtn(false)
      } else {
        setInstallBtn(true)
      }
    })
  }

  function search() {
    setOpenSearch(!openSearch)
  }

  return (
    <>
      <NavigationMenu>
        <Container>
          <MenuList>
            <li>
              <DivImage>
                <Navigator
                  title="Go Home"
                  href="/"
                  style='menu-icon'
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/icons/icon96.png" alt="Site Logo" />
                </Navigator>
              </DivImage>
            </li>
          </MenuList>
          <MenuList>
            <li>
              <Navigator
                title={`${openSearch ? "Close" : "Open"} Search`}
                action={() => search()}
                style='menu-icon'
              >
                <CiSearch />
                <p>{openSearch ? "Close" : "Open"} Search</p>
              </Navigator>
            </li>
            <li>
              <Navigator
                title="About the App"
                href="/about"
                style='menu-icon'
              >
                <CiSquareInfo />
                <p>About</p>
              </Navigator>
            </li>
            <li>{installBtn ? (
              <Navigator
                title="Install Aplication"
                action={() => install()}
                style='menu-icon'
              >
                <CiSaveDown2 />
                <p>Install</p>
              </Navigator>
            ) : (
              ''
            )}</li>
          </MenuList>
        </Container>
        <SearchComponent openSearch={openSearch} />
      </NavigationMenu>
    </>
  )
}

export default Nav
