import React from 'react'

const Medaille = ({
  color,
  value
}: {
  color: string,
  value: string
}) => {
  return (
    <div className='w-12 h-12 relative flex justify-center items-center'>
      <div className='block w-0 h-0 absolute -top-8 border-t-[3rem] border-t-blue-500 border-x-[1.5rem] border-x-transparent rounded-b-full'></div>
      <h3 className={`${color} w-12 h-12 rounded-full relative flex justify-center items-center text-2xl border-l-2 border-b-2 border-black border-opacity-50`}>{value}</h3>
    </div>
  )
}

export default Medaille