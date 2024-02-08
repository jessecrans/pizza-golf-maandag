import React from 'react'
import PageLayout from '../layouts/PageLayout'
import Scoreboard from './components/Scoreboard/Scoreboard';
import AllGames from '../scores/components/AllGames/AllGames';

const Stats = () => {

  return (
    <PageLayout title='Stats'>
      <Scoreboard />
    </PageLayout>
  )
}

export default Stats