import React from 'react'
import { holeNums, holePars, getBestScoreOnHole, getBestGame, getAverageScoreOnHole, getAverageGameScore } from '@/app/util/statFunctions'

const BestGame = () => {
  return (
    <div
      className='m-auto p-4 bg-green-950 bg-opacity-50 rounded grid gap-2 overflow-auto text-right max-w-screen-2xl mb-4'
    >
      <div className='grid grid-cols-[10rem_repeat(18,_minmax(2rem,_1fr))_10rem] p-2 gap-2'>
        <h3 className='text-yellow-200 text-xl font-bold uppercase'>Holes</h3>
        <div className='grid px-2 text-lg col-span-18 grid-cols-subgrid'>
          {
            holeNums.map((hole) => (
              <p key={hole}>{hole}</p>
            ))
          }
        </div>
        <h3 className='text-yellow-200 text-xl font-bold uppercase'>Total</h3>
      </div>
      <div className='grid p-2 bg-green-400 rounded gap-2 grid-cols-[10rem_repeat(18,_minmax(2rem,_1fr))_10rem]'>
        <h3 className='text-yellow-200 text-xl font-bold uppercase'>Par</h3>
        <div className='grid px-2 text-black text-lg col-span-18 grid-cols-subgrid'>
          {
            holePars.map((par, index) => (
              <p key={index}>{par}</p>
            ))
          }
        </div>
        <p className='font-bold px-2'>
          {
            holePars.reduce((a, b) => a + b, 0)
          }
        </p>
      </div>
      {/* Optimale Ronde */}
      <div className='grid p-2 gap-2 grid-cols-[10rem_repeat(18,_minmax(2rem,_1fr))_10rem]'>
        <h4 className='bg-slate-900 bg-opacity-50 px-2 rounded text-lg font-bold text-left col-span-1 min-w-fit'>Optimaal</h4>
        <div className='grid bg-slate-900 bg-opacity-50 px-2 rounded text-lg col-span-18 grid-cols-subgrid'>
          {
            holeNums.map((hole) => (
              <p key={hole}>{getBestScoreOnHole(hole)}</p>
            ))
          }
        </div>
        <p className='font-bold px-2 col-span-1'>{getBestGame()}</p>
      </div>
      {/* Average Ronde */}
      <div className='grid p-2 gap-2 grid-cols-[10rem_repeat(18,_minmax(3rem,_1fr))_10rem]'>
        <h4 className='bg-slate-900 bg-opacity-50 px-2 rounded text-lg font-bold text-left col-span-1 min-w-fit'>Gemiddeld</h4>
        <div className='grid bg-slate-900 bg-opacity-50 px-2 rounded text-lg col-span-18 grid-cols-subgrid'>
          {
            holeNums.map((hole) => (
              <p key={hole}>{getAverageScoreOnHole(hole).toFixed(2)}</p>
            ))
          }
        </div>
        <p className='font-bold px-2 col-span-1'>{getAverageGameScore().toFixed(2)}</p>
      </div>
    </div >
  )
}

export default BestGame