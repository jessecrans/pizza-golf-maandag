"use client";
import React, { useEffect, useState } from 'react';
import Scoreboard from './components/Scoreboard';
import gameData from '../../../public/game_data/game_database.json'
import PageLayout from '../layouts/PageLayout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Scores = () => {
  const [currentGameDataIndex, setCurrentGameDataIndex] = useState(gameData.length - 1);

  let title = `Scores - ${gameData[currentGameDataIndex].date}`
  useEffect(() => {
    title = `Scores - ${gameData[currentGameDataIndex].date}`
  }, [currentGameDataIndex])

  return (
    <PageLayout
      title={title}
    >
      <div className='flex justify-between items-center mb-2'>
        {
          <button
            onClick={() => setCurrentGameDataIndex(currentGameDataIndex - 1)}
            className={'text-3xl ' + (currentGameDataIndex > 0 ? 'hover:opacity-60' : 'pointer-events-none opacity-40')}
          >
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>
        }
        {
          <button
            onClick={() => setCurrentGameDataIndex(currentGameDataIndex + 1)}
            className={'text-3xl ' + (currentGameDataIndex < gameData.length - 1 ? 'hover:opacity-60' : 'pointer-events-none opacity-40')}
          >
            <FontAwesomeIcon icon={faArrowRight} />
          </button>

        }
      </div>
      <Scoreboard
        currentGameData={gameData[currentGameDataIndex]}
      />
    </PageLayout>
  )
}

export default Scores