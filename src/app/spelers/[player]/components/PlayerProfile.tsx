import React from 'react'
import * as statFunctions from '@/app/util/statFunctions'
import PodiumGraphic from './PodiumGraphic'
import StatField from './StatField'
import PizzaScore from './PizzaScore'
import Link from 'next/link'

const PlayerProfile = ({
  player
}: {
  player: string
}) => {

  return (
    <>
      <div className='flex justify-center items-center flex-col sm:flex-row'>
        <PizzaScore
          title='Pizza Score'
          value={statFunctions.getPizzaScores()[player]}
        />
        <PodiumGraphic
          goldCount={statFunctions.getPlayerNumberOfPositionPlacements(player, 0)}
          silverCount={statFunctions.getPlayerNumberOfPositionPlacements(player, 1)}
          bronzeCount={statFunctions.getPlayerNumberOfPositionPlacements(player, 2)}
        />
      </div>
      <hr className='border-green-400 border-2' />
      <div className='flex items-center flex-wrap justify-center'>
        <StatField
          title='Beste Score'
          value={statFunctions.getPlayerBestScore(player)}
        />
        <StatField
          title='Gemiddelde Score'
          value={statFunctions.getPlayerAverageScore(player).toFixed(2)}
        />
        <StatField
          title='Slechtste Score'
          value={statFunctions.getPlayerWorstScore(player)}
        />
      </div>
      <hr className='border-green-400 border-2' />
      <div className='flex items-center flex-wrap justify-center'>
        <Link
          href={`/holes/${statFunctions.getPlayerBestHole(player)}`}
          className='hover:opacity-80'
        >
          <StatField
            title='Beste Hole'
            value={statFunctions.getPlayerBestHole(player)}
          />
        </Link>
        <Link
          href={`/holes/${statFunctions.getPlayerWorstHole(player)}`}
          className='hover:opacity-80'
        >
          <StatField
            title='Slechtste Hole'
            value={statFunctions.getPlayerWorstHole(player)}
          />
        </Link>
      </div>
      <hr className='border-green-400 border-2' />
      <div className='flex items-center flex-wrap justify-center'>
        <StatField
          title='Hole In Ones'
          value={statFunctions.getPlayerHoleInOnes(player)}
        />
        <StatField
          title='Albatrosses'
          value={statFunctions.getPlayerParMinusXCount(player, 3)}
        />
        <StatField
          title='Eagles'
          value={statFunctions.getPlayerParMinusXCount(player, 2)}
        />
        <StatField
          title='Birdies'
          value={statFunctions.getPlayerParMinusXCount(player, 1)}
        />
      </div >
    </>
  )
}

export default PlayerProfile

/*
  stats:
  number of gold, silver, bronze
  best n worst score
  average score
  number of hole in ones
  number of eagles
  number of birdies
  best hole: grootste percentage verschil met gemiddeld
  slechtste hole: grootste percentage verschil met gemiddeld
  pizza rating: average score, average finish position, percentage wins, percentage of top 3 finishes
*/
