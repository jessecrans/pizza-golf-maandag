import React from 'react'
import * as statFunctions from '@/app/util/statFunctions'
import PodiumGraphic from './PodiumGraphic'
import StatField from './StatField'

const PlayerProfile = ({
  player
}: {
  player: string
}) => {


  return (
    <div>
      <PodiumGraphic
        goldCount={statFunctions.getNumberOfWins()[player]}
        silverCount={statFunctions.getSilverCounts()[player]}
        bronzeCount={statFunctions.getBronzeCounts()[player]}
      />
      <StatField
        title='Gemiddelde Score'
        value={99.9}
      />
    </div>
  )
}

export default PlayerProfile