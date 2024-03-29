import React from 'react'
import PageLayout from '@/app/layouts/PageLayout'
import gameData from '../../../../public/game_data/game_database.json'
import Scoreboard from './components/Scoreboard'

const ScoreboardPage = ({
  params
}: {
  params: {
    date: string
  }
}) => {
  const currentGameData = gameData.find((game) => game.date === params.date); // find the game data that matches the date in the URL

  if (!currentGameData) { // for invalid dates
    return (
      <PageLayout title={`${params.date}`}>
        <h2>Game not found</h2>
      </PageLayout>
    );
  }

  return (
    <PageLayout title={`${params.date}`}>
      <Scoreboard
        gameData={currentGameData}
      />
    </PageLayout>
  )
}

export default ScoreboardPage