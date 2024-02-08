import React from 'react'
import { getLeaderboardOnHole } from '@/app/util/statFunctions'
import Medaille from './Medaille'
import Link from 'next/link'

const HoleLeaderboard = ({
  params
}: {
  params: {
    hole: string
  }
}) => {
  const holeLeaderboard = getLeaderboardOnHole(parseInt(params.hole));
  const colorArray = ['bg-amber-400', 'bg-zinc-400', 'bg-orange-800'];

  return (
    <div className='flex flex-col gap-8 mt-8 items-center'>
      {
        holeLeaderboard.map((player, index) => {
          if (index < 3) {
            return (
              <div key={index} className='flex justify-between items-center text-2xl font-bold bg-green-950 bg-opacity-50 rounded p-4 px-8 w-full max-w-screen-sm'>
                <Medaille color={colorArray[index]} value={`${index + 1}`} />
                <Link href={`/spelers/${player.name}`}>
                  <h4 className='text-yellow-200'>{player.name}</h4>
                </Link>
                <p>{player.score.toFixed(2)}</p>
              </div>
            );
          }
        })
      }
    </div >
  )
}

export default HoleLeaderboard