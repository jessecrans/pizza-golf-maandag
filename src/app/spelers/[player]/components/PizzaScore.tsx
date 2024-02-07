import React from 'react'

const PizzaScore = ({
  title,
  value
}: {
  title: string
  value: number
}) => {
  let style = {
    background: `conic-gradient(transparent ${(1 - value) * 100}%, #ef4444 ${(1 - value) * 100}% ${value * 100}%)`
  }

  return (
    <div className='font-bold uppercase text-xl inline-block border-2 border-green-400 rounded text-center m-4'>
      <h3 className='bg-green-400 bg-opacity-80 text-yellow-200 p-2'>{title}</h3>
      <div className='w-full justify-between items-center bg-green-950 bg-opacity-50 p-8 rounded-b'>
        <div
          className='rounded-full w-36 h-36 flex justify-center items-center'
          style={style}
        >
          <h3 className='text-3xl'>{(value * 100).toFixed(2)}%</h3>
        </div>
      </div>
    </div>
  )
}

export default PizzaScore