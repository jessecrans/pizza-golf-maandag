import React from 'react'

const Scoreboard = ({
  currentGameData
}: {
  currentGameData: {
    date: string,
    players: string[],
    scores: number[][]
  }
}) => {
  const holePars = [
    3, 3, 4, 4, 7, 7, 4, 3, 4, 4, 4, 5, 4, 5, 4, 4, 5, 5
  ]

  return (
    <div className='max-w-7xl m-auto p-4 bg-green-950 bg-opacity-40 rounded'>
      <div className='grid grid-cols-26 gap-4 my-2 py-1'>
        <h3 className='col-span-4 text-right'>Holes</h3>
        <div className='col-span-18 grid grid-cols-18 gap-4 px-4 text-right'>
          {
            holePars.map((par, index) => (
              <p key={index} className='text-2xl text-right'>{index + 1}</p>
            ))
          }
        </div>
        <h3 className='col-span-4 text-right'>Total</h3>
      </div>
      <div className='grid grid-cols-26 gap-4 bg-green-400 rounded rounded-tl-xl py-1'>
        <h3 className='col-span-4 text-right'>Par</h3>
        <div className='col-span-18 grid grid-cols-18 gap-4 px-4 text-right'>
          {
            holePars.map((par, index) => (
              <p key={index} className='text-black text-2xl text-right'>{par}</p>
            ))
          }
        </div>
        <p className='col-span-4 text-right pr-2 text-lg'>
          {
            holePars.reduce((a, b) => a + b, 0)
          }
        </p>
      </div>
      {
        currentGameData.players.map((player, index) => (
          <div key={player} className='grid grid-cols-26 my-2 gap-4'>
            <h4 className='col-span-4 text-left pl-2 bg-slate-900 bg-opacity-50 py-1 rounded text-lg'>{player}</h4>
            <div className='col-span-18 grid grid-cols-18 gap-4 bg-slate-900 bg-opacity-50 rounded px-4 text-right items-center'>
              {
                currentGameData.scores[index].map((score, index) => (
                  <p key={index} className='text-lg'>{score}</p>
                ))
              }
            </div>
            <p className='col-span-4 text-right pr-2 bg-slate-900 bg-opacity-50 py-1 rounded'>{currentGameData.scores[index].reduce((a, b) => a + b, 0)}</p>
          </div>
        ))
      }
    </div >
  )
}

export default Scoreboard