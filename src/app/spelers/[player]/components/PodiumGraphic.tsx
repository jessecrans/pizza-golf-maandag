import React from 'react'

const PodiumGraphic = ({
  goldCount,
  silverCount,
  bronzeCount
}: {
  goldCount: number
  silverCount: number
  bronzeCount: number
}) => {
  return (
    <div className='font-bold uppercase text-xl inline-block border-2 border-green-400 rounded text-center'>
      <h3 className='bg-green-400 bg-opacity-80 text-yellow-200'>Podiums</h3>
      <div className='inline-grid grid-cols-3 bg-green-950 bg-opacity-50 p-4 rounded'>
        <div className='flex flex-col justify-between items-center gap-4'>
          <h3>{silverCount}</h3>
          <div className='bg-zinc-400 w-10 h-14'></div>
        </div>
        <div className='flex flex-col justify-between items-center gap-4'>
          <h3>{goldCount}</h3>
          <div className='bg-amber-400 w-10 h-20'></div>
        </div>
        <div className='flex flex-col justify-between items-center gap-4'>
          <h3>{bronzeCount}</h3>
          <div className='bg-orange-800 w-10 h-10'></div>
        </div>
      </div>
    </div>
  )
}

export default PodiumGraphic