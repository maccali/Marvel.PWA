import React from 'react'
import CardCredit from '@/cards/credit'

function About() {
  const credits: SiteCredit[] = [

    {
      title: 'Developer Site',
      explanation: `Site of developer who delevoped this project.`,
      externalUrl: 'https://guilhermemaccali.com/',
      imgUrl: '/imgs/developer-site-logo.svg'
    },
    {
      title: 'Marvel Site',
      explanation: `Site of Marvel which gives the API`,
      externalUrl: 'https://www.marvel.com',
      imgUrl: '/imgs/marvel-site-logo.svg'
    },
    {
      title: 'Source Code',
      explanation: `Code of project for developers.`,
      externalUrl: 'https://github.com/maccali/Marvel.PWA',
      imgUrl: '/imgs/github-site-logo.svg'
    }
  ]

  return (
    <>
      <main className="container mx-auto pt-20 flex-wrap pr-4 pl-4">
        <div className="flex justify-center">
          <h1 className='text-white text-3xl'>About</h1>
        </div>
        <div className='flex flex-row flex-wrap justify-evenly'>
          {credits.map(item => (
            <CardCredit
              key={item.title}
              data={item}
            />
          ))}
        </div>
      </main>
    </>
  )
}

export default About