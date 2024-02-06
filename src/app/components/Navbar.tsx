"use client";
import { faBars, faBurger, faHamburger, faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import React, { useState } from 'react';

const Navbar = () => {
  const [navbarVisible, setNavbarVisible] = useState(false);

  const toggleNavbar = () => {
    setNavbarVisible(!navbarVisible);
  }

  return (
    <nav className='m-2 mb-0 rounded border-2 border-green-400 text-white text-4xl font-bold uppercase text-center'>
      <div className='bg-green-400 bg-opacity-70 p-4 text-2xl sm:text-4xl flex justify-between items-center sm:block'>
        <Link href="/">
          <FontAwesomeIcon
            icon={faHome}
            className='sm:hidden'
          />
        </Link>
        <h1>Pizza Golf Maandag</h1>
        <button
          className='sm:hidden'
          onClick={toggleNavbar}
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>
      <ul
        className={`text-yellow-200 text-lg bg-green-700 bg-opacity-50 p-2 sm:flex flex-col justify-center items-center sm:flex-row sm:text-xl sm:gap-4 ${navbarVisible ? 'block' : 'hidden'}`}
      >
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
    </nav >
  )
}

export default Navbar