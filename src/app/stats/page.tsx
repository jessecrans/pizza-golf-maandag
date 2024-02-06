import React from 'react'
import PageLayout from '../layouts/PageLayout'
import Scoreboard from './components/Scoreboard';

const Stats = () => {

  return (
    <PageLayout title='Stats'>
      <p>Kom later terug voor meer stats.</p>
      <Scoreboard />
    </PageLayout>
  )
}

export default Stats