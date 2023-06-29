
import React, { useState } from 'react'
import styles from './styles.module.css'


import { CiShare1, CiSquareCheck, CiFacebook, CiTwitter } from "react-icons/ci"
import { AiOutlineLink, AiOutlineShareAlt } from "react-icons/ai"
import { IoIosLink } from "react-icons/io"
import { IoShareOutline, IoShareSocialOutline } from "react-icons/io5"
import { HiOutlineShare, HiLink } from "react-icons/hi"
import { TfiLink, TfiShare, TfiCheckBox } from "react-icons/tfi"

import CopyToClipboard from 'react-copy-to-clipboard'

import ShareLinks from './shareLinks'

import Navigator from '@/utils/navigator'

type SocialFace = {
  title: string
  text: string
  url: string
}

function Social({ title, text, url }: SocialFace) {
  const [copied, setCopied] = useState(false)

  url = `${process.env.APP_URL}/${url}`

  function share() {
    console.log(title, text, url)
    navigator.share({
      title,
      text,
      url
    })
  }

  async function chackmate() {
    setCopied(true)
    await sleep(3000)
    setCopied(false)
  }

  function sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms))
  }

  return (
    <>
      <div className={styles.card}>
        <CopyToClipboard text={url} onCopy={() => chackmate()}>
          <div title="Copie o link" className={styles.iconchange}>
            {copied ? <CiSquareCheck /> : <TfiLink />}
          </div>
        </CopyToClipboard>
        {typeof window === "undefined" && navigator.share ? (
          <>
            <Navigator
              title="Compartilhe com Facebook"
              target="_blank"
              href={`${ShareLinks.facebook}${url}`}              
              style='general-icon'
            >
              <CiFacebook />
            </Navigator>
            <Navigator
              title="Compartilhe com  Twitter"
              target="_blank"
              href={`${ShareLinks.twitter}${url}`}
              style='general-icon'
            >
              <CiTwitter />
            </Navigator>
          </>
        ) : (
          <>
            <Navigator
              title="Compartilhe para todo mundo"
              action={() => share()}
              style='general-icon'
            >
              <TfiShare />
            </Navigator>
          </>
        )}
      </div>
    </>
  )
}

export default Social
