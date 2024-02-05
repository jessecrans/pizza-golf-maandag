"use client"
import React, { useEffect } from 'react'

const Scoreboard = ({
  gameData
}: {
  gameData: {
    date: string,
    players: string[],
    scores: number[][],
  }
}) => {
  const holePars = [
    3, 3, 4, 4, 7, 7, 4, 3, 4, 4, 4, 5, 4, 5, 4, 4, 5, 5
  ]

  return (
    // does not work for small screeens because for some reason the grid-cols-[] is not applied
    <div
      style={{
        gridTemplateColumns: `5rem 3.5rem repeat(${gameData.players.length}, minmax(7rem, 1fr))`
      }}
      className='m-auto p-4 bg-green-950 bg-opacity-50 rounded grid gap-2 overflow-auto text-right max-w-screen-xl lg:grid-cols-1'
    >
      <div className='grid grid-rows-20 p-2 gap-2 lg:grid-rows-1 lg:grid-cols-26'>
        <h3 className='text-yellow-200 text-xl font-bold uppercase lg:col-span-4'>Holes</h3>
        <div className='row-span-18 grid grid-rows-subgrid px-2 text-lg lg:row-span-1 lg:col-span-18 lg:grid-cols-18'>
          {
            holePars.map((par, index) => (
              <p key={index}>{index + 1}</p>
            ))
          }
        </div>
        <h3 className='text-yellow-200 text-xl font-bold uppercase lg:col-span-4'>Total</h3>
      </div>
      <div className='grid grid-rows-20 p-2 bg-green-400 rounded gap-2 lg:grid-rows-1 lg:grid-cols-26'>
        <h3 className='text-yellow-200 text-xl font-bold uppercase lg:col-span-4'>Par</h3>
        <div className='row-span-18 grid grid-rows-subgrid px-2 text-black text-lg lg:row-span-1 lg:col-span-18 lg:grid-cols-18'>
          {
            holePars.map((par, index) => (
              <p key={index}>{par}</p>
            ))
          }
        </div>
        <p className='font-bold lg:col-span-4 px-2'>
          {
            holePars.reduce((a, b) => a + b, 0)
          }
        </p>
      </div>
      {
        gameData.players.map((player, index) => (
          <div key={player} className='grid grid-rows-20 p-2 gap-2 lg:grid-rows-1 lg:grid-cols-26'>
            <h4 className='bg-slate-900 bg-opacity-50 px-2 rounded text-lg text-left lg:col-span-4'>{player}</h4>
            <div className='row-span-18 grid grid-rows-subgrid bg-slate-900 bg-opacity-50 px-2 rounded text-lg lg:row-span-1 lg:col-span-18 lg:grid-cols-18'>
              {
                gameData.scores[index].map((score, index) => (
                  <p key={index}>{score}</p>
                ))
              }
            </div>
            <p className='font-bold px-2 lg:col-span-4'>{gameData.scores[index].reduce((a, b) => a + b, 0)}</p>
          </div>
        ))
      }
    </div >
  )
}

export default Scoreboard