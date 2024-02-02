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
    <div className='grid grid-cols-2 gap-4 bg-green-950 bg-opacity-50 p-4 my-4 rounded items-center'>
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