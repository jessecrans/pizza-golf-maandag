import React from 'react'
import PageLayout from '../layouts/PageLayout'
import Scoreboard from './components/Scoreboard/Scoreboard';
import AllGames from '../scores/components/AllGames/AllGames';
import BestGame from './components/BestGame/BestGame';

const Stats = () => {

  return (
    <PageLayout title='Stats'>
      <BestGame />
      <Scoreboard />
    </PageLayout>
  )
}

export default Stats