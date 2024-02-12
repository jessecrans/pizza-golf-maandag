import Image from 'next/image'
import React from 'react'

const HoleImage = ({
  image,
  description,
  index
}: {
  image: string
  description: string
  index: number
}) => {
  return (
    <div className='flex flex-col justify-start items-center lg:grid lg:grid-cols-2 gap-4 bg-green-950 bg-opacity-50 p-4 mb-4 rounded'>
      <img
        src={image}
        alt={`image ${index}`}
        className='w-full m-auto max-w-lg border-2 rounded'
      />
      <p>{description}</p>
    </div>
  )
}

export default HoleImage