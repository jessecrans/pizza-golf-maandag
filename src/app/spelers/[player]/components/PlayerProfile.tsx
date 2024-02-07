import React from 'react'
import * as statFunctions from '@/app/util/statFunctions'
import PodiumGraphic from './PodiumGraphic'
import StatField from './StatField'
import PizzaScore from './PizzaScore'

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
          goldCount={statFunctions.getNumberOfWins()[player]}
          silverCount={statFunctions.getSilverCounts()[player]}
          bronzeCount={statFunctions.getBronzeCounts()[player]}
        />
      </div>
      <hr className='border-green-400 border-2' />
      <div className='flex items-center flex-wrap justify-center'>
        <StatField
          title='Gemiddelde Score'
          value={statFunctions.getAverageScores()[player].toFixed(2)}
        />
        <StatField
          title='Beste Score'
          value={statFunctions.getBestScores()[player]}
        />
        <StatField
          title='Slechtste Score'
          value={statFunctions.getWorstScores()[player]}
        />
        <StatField
          title='Beste Hole'
          value={statFunctions.getBestHoles()[player] + 1}
        />
        <StatField
          title='Slechtste Hole'
          value={statFunctions.getWorstHoles()[player] + 1}
        />
        <StatField
          title='Hole In Ones'
          value={statFunctions.getHoleInOnes()[player]}
        />
        <StatField
          title='Albatrosses'
          value={statFunctions.getAlbatrosses()[player]}
        />
        <StatField
          title='Eagles'
          value={statFunctions.getEagles()[player]}
        />
        <StatField
          title='Birdies'
          value={statFunctions.getBirdies()[player]}
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
