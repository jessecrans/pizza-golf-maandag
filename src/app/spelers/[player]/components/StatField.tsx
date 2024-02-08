import React from 'react'

const StatField = ({
  title,
  value
}: {
  title: string
  value: number | string
}) => {
  return (
    <div className='font-bold uppercase text-xl inline-block border-2 border-green-400 rounded text-center m-4'>
      <h3 className='bg-green-400 bg-opacity-80 text-yellow-200 p-2'>{title}</h3>
      <div className='w-full justify-between items-center bg-green-950 bg-opacity-50 p-8 rounded-b'>
        <h3 className='text-3xl text-white'>{value}</h3>
      </div>
    </div>
  )
}

export default StatField