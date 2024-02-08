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
    <div className='font-bold uppercase text-xl inline-block border-2 border-green-400 rounded text-center m-4'>
      <h3 className='bg-green-400 bg-opacity-80 text-yellow-200 p-2'>Podiums</h3>
      <div className='inline-flex justify-between items-center gap-6 bg-green-950 bg-opacity-50 p-8 pb-4 rounded-b'>
        <div className='w-14 h-14 relative flex justify-center items-center'>
          <div className='block w-0 h-0 absolute -top-5 border-t-[2.5rem] border-t-blue-500 border-x-[1.25rem] border-x-transparent rounded-b-full'></div>
          <h3 className='bg-zinc-400 w-14 h-14 rounded-full relative flex justify-center items-center'>2</h3>
        </div>
        <div className='w-20 h-20 relative flex justify-center items-center'>
          <div className='block w-0 h-0 absolute -top-5 border-t-[4rem] border-t-blue-500 border-x-[2rem] border-x-transparent rounded-b-full'></div>
          <h3 className='bg-amber-400 w-20 h-20 rounded-full relative flex justify-center items-center text-4xl'>1</h3>
        </div>
        <div className='w-14 h-14 relative flex justify-center items-center'>
          <div className='block w-0 h-0 absolute -top-5 border-t-[2.5rem] border-t-blue-500 border-x-[1.25rem] border-x-transparent rounded-b-full'></div>
          <h3 className='bg-orange-800 w-14 h-14 rounded-full relative flex justify-center items-center'>3</h3>
        </div>
      </div>
      <br />
      <div className='inline-flex w-full justify-between items-center gap-3 bg-green-950 bg-opacity-50 pb-4 px-14 rounded-b'>
        <h3>{silverCount}</h3>
        <h3 className='text-3xl'>{goldCount}</h3>
        <h3>{bronzeCount}</h3>
      </div>
    </div>
  )
}

export default PodiumGraphic