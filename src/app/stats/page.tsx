import React from 'react'
import PageLayout from '../layouts/PageLayout'
import Scoreboard from './components/Scoreboard/Scoreboard';
import AllGames from '../scores/components/AllGames/AllGames';
import BestGame from './components/BestGame/BestGame';
import ScoresPerHoleChart from './components/AverageScores/ScoresPerHoleChart';
import { getAverageScoreOnHole, getPlayerAverageScoreOnHole, holeNums, players } from '../util/statFunctions';
import AverageScoresChart from './components/AverageScores/AverageScoresChart';

const Stats = () => {

  const colors = ['red', 'blue', 'yellow', 'green', 'purple', 'orange', 'pink', 'brown', 'grey', 'black'];

  return (
    <PageLayout title='Stats'>
      <div className='flex justify-center gap-4 my-4 flex-col lg:flex-row'>
        <ScoresPerHoleChart
          colors={colors}
        />
        <AverageScoresChart
          colors={colors}
        />
      </div>
      <BestGame />
      <Scoreboard />
    </PageLayout>
  )
}

export default Stats