import React from 'react'
import Link from 'next/link'

const HoleCard = ({
  hole,
  image
}: {
  hole: number,
  image: string
}) => {
  return (
    <Link
      className='border-2 border-green-400 rounded hover:no-underline hover:opacity-70'
      href={`/holes/${hole}`}
    >
      <div className='relative'>
        <img
          src={image}
          alt={`Hole ${hole} image`}
          className='rounded -z-1'
        />
        <div className='absolute bottom-0 right-0 bg-green-400 z-1 rounded-tl-2xl text-3xl flex justify-center items-center w-16 h-16'>
          {hole}
        </div>
      </div>
    </Link>
  )
}

export default HoleCard