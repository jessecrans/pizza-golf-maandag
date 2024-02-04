import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className='m-2 mb-0 rounded border-2 border-green-400 text-white text-4xl font-bold uppercase text-center'>
      <h1 className='bg-green-400 bg-opacity-70 p-4'>Pizza Golf Maandag</h1>
      <ul className='text-yellow-200 text-xl bg-green-700 bg-opacity-50 p-2 flex flex-row justify-center gap-4'>
        <li>
          <Link href='/'>Home</Link>
        </li>
        <li>
          <Link href='/holes'>Holes</Link>
        </li>
        <li>
          <Link href='/scores'>Scores</Link>
        </li>
        <li>
          <Link href='/stats'>Stats</Link>
        </li>
        <li>
          <Link href='/spelers'>Spelers</Link>
        </li>
        <li>
          <Link href='/over'>OVER</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar