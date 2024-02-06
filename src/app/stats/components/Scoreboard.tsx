'use client'
import React, { useState } from 'react'
import gameData from '../../../../public/game_data/game_database.json'
import { getAllPlayers, getAverageScores, getWorstScores, getBestScores, getAverageScoresPerHole, getGamesPlayed, getNumberOfWins, getAverageFinishPosition } from './statFunctions'

const Scoreboard = () => {
  const [playerOrder, setPlayerOrder] = useState(getAllPlayers({ gameData }));

  return (
    <div>
      {
        playerOrder.map(player => (
          <p key={player}>{player}</p>
        ))
      }
      {
        Object.entries(getAverageScores({ gameData })).map(([player, score]) => (
          <p key={player}>{player}: {score}</p>
        ))
      }
      {
        Object.entries(getBestScores({ gameData })).map(([player, score]) => (
          <p key={player}>{player}: {score}</p>
        ))
      }
      {
        Object.entries(getWorstScores({ gameData })).map(([player, score]) => (
          <p key={player}>{player}: {score}</p>
        ))
      }
      {
        Object.entries(getAverageScoresPerHole({ gameData, hole: 17 })).map(([player, score]) => (
          <p key={player}>{player}: {score}</p>
        ))
      }
      {
        Object.entries(getGamesPlayed({ gameData })).map(([player, games]) => (
          <p key={player}> {player}: {games} </p>
        ))
      }
      {
        Object.entries(getNumberOfWins({ gameData })).map(([player, wins]) => (
          <p key={player}> {player}: {wins} </p>
        ))
      }
      {
        Object.entries(getAverageFinishPosition({ gameData })).map(([player, position]) => (
          <p key={player}> {player}: {position} </p>
        ))
      }
    </div>
  )
}

export default Scoreboard