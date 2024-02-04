"use client";
import React, { useEffect, useState } from 'react';
import Scoreboard from './components/Scoreboard';
import gameData from '../../../public/game_data/game_database.json'
import PageLayout from '../layouts/PageLayout';

const Scores = () => {
  const [currentGameData, setCurrentGameData] = useState(gameData[gameData.length - 1]);

  return (
    <PageLayout
      title={`Scores - ${currentGameData.date}`}
    >
      <Scoreboard
        currentGameData={currentGameData}
      />
    </PageLayout>
  )
}

export default Scores