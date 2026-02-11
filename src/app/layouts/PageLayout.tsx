import { faPizzaSlice } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React from 'react'

const PageLayout = ({
  title,
  children
}: Readonly<{
  title: string,
  children: React.ReactNode
}>) => {
  return (
    <main className='border-2 border-green-400 m-2 rounded'>
      <h2 className='bg-green-400 bg-opacity-70 px-4 py-1 text-yellow-200 text-center text-3xl font-bold uppercase'>
        {title === "DrVanox" ? "DrVanox*" : title}
      </h2>
      <div className='bg-green-700 bg-opacity-50 p-4 text-white'>
        {children}
        <footer className='mt-4 text-center text-xs'>
          {title === "Home" || title === "Holes" || title === "Over" ? "" :
            <p>* Al DrVanox z'n resultaten zijn ongeldig verklaard wegens valsspelen. <Link href="/">Voor meer info zie de uitspraak van de organisatie.</Link></p>
          }
          <p>
            2024 <FontAwesomeIcon icon={faPizzaSlice} /> Pizza Golf Maandag - <span className='italic'>Een Website van Hugo van Schalm en Jesse Crans</span>
          </p>
        </footer>
      </div>
    </main>
  )
}

export default PageLayout