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
      <h3 className='py-1 text-yellow-200 font-bold text-lg bg-green-400 bg-opacity-60 text-center'>
        {hole}
      </h3>
      <img
        src={image}
        alt={`Hole ${hole} image`}
        className='rounded-b text-center'
      />
    </Link>
  )
}

export default HoleCard