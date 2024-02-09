import React from 'react'
import PageLayout from '../layouts/PageLayout'
import Scoreboard from './components/Scoreboard/Scoreboard';
import AllGames from '../scores/components/AllGames/AllGames';
import BestGame from './components/BestGame/BestGame';
import AverageScoresChart from './components/AverageScores/AverageScoresChart';

const Stats = () => {

  return (
    <PageLayout title='Stats'>
      <BestGame />
      <Scoreboard />
      <AverageScoresChart />
    </PageLayout>
  )
}

export default Stats