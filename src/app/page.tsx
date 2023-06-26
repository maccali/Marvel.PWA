
import React from 'react'
import HomePainel from '@/painels/home'
import Nav from '@/utils/nav'
import Meta from '@/utils/meta/index';


export const metadata = {
  viewport: {
    width: "device-width",
    initialScale: 1,
    minimumScale: 1,
    maximumScale: 5
  },
  other: {
    "google-site-verification": "fsdfsd"
  }
  // "google-site-verification": "fsdfsd"
}
// <Head>
// <meta charSet="utf-8" />
// <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
// <meta
//   name="google-site-verification"
//   content="imEmJjnY8LRB_gCyQpOHG1E6dLgt7_SySHboWMsERho"
// />
// <meta name="description" content={description}></meta>
// <meta
//   name="viewport"
//   content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=5"
// />
// <meta name="theme-color" content="#2c2c7b"></meta>

// <link rel="manifest" href="/manifest.json?v=5" />
// <link rel="icon" href="/favicon.ico?v=5" />

// {/* Apple Tags*/}
// <link rel="apple-touch-icon" href="/icons/icon192.png?v2" />
// <meta name="apple-mobile-web-app-capable" content="yes"></meta>
// <meta name="apple-mobile-web-app-status-bar-style" content="black"></meta>

// {/* Open Grafh Tags */}
// <meta name="og:type" property="og:type" content="website" />
// <meta name="og:title" property="og:title" content={title} />
// <meta
//   name="og:description"
//   property="og:description"
//   content={description}
// />
// <meta name="og:site_name" property="og:site_name" content={siteName} />
// <meta name="og:url" property="og:url" content="https://apod.pictu.one" />
// <meta name="og:image" property="og:image" content={imagemUrl} />

// {/* Twitter Tags */}
// <meta name="twitter:card" content="summary" />
// <meta name="twitter:title" content={title} />
// <meta name="twitter:description" content={description} />
// <meta name="twitter:site" content={siteName} />
// <meta name="twitter:creator" content="Guilherme Maccali" />
// <meta name="twitter:image" content={imagemUrl} />

// {/* <script data-ad-client="ca-pub-8175357641608662" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script> */}
// </Head>

export default function Home() {


  return (
    <>
      <Meta />
      <Nav />
      <HomePainel />
    </>
  )
}
