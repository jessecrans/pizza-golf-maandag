'use client'
import React, { useState } from 'react'
import gameData from '../../../../public/game_data/game_database.json'
import { getAllPlayers, getAverageScores, getWorstScores, getBestScores, getAverageScoresPerHole, getGamesPlayed, getNumberOfWins, getAverageFinishPosition } from './statFunctions'
import { ScoreboardRow } from './ScoreboardRow'

const Scoreboard = () => {
  const [playerOrder, setPlayerOrder] = useState(getAllPlayers({ gameData }));

  const averageScores = getAverageScores({ gameData });
  const wins = getNumberOfWins({ gameData });
  const averageFinishPositions = getAverageFinishPosition({ gameData });
  const gamesPlayed = getGamesPlayed({ gameData });
  const bestScores = getBestScores({ gameData });
  const worstScores = getWorstScores({ gameData });

  let playerData: { [key: string]: {
    name: string,
    averageScore: number,
    wins: number,
    averageFinishPosition: number
    gamesPlayed: number,
    bestScore: number,
    worstScore: number
  } }  = {};

  getAllPlayers({ gameData }).forEach(player => {
    playerData[player] = {
      name: player,
      averageScore: averageScores[player],
      wins: wins[player],
      averageFinishPosition: averageFinishPositions[player],
      gamesPlayed: gamesPlayed[player],
      bestScore: bestScores[player],
      worstScore: worstScores[player]
    }
  })

  return (
    <div className='m-auto p-4 bg-green-950 bg-opacity-50 rounded grid gap-2 overflow-auto text-right max-w-screen-xl'>
      <div className='grid grid-cols-7 p-2 gap-2 text-yellow-200 text-xl font-bold uppercase'>  
        <h3>Player</h3>
        <h3>Gemiddelde Score</h3>
        <h3>Wins</h3>
        <h3>Gemiddelde eindpositie</h3>
        <h3>Gespeelde games</h3>
        <h3>Beste score</h3>
        <h3>Slechtste score</h3>
      </div>
      <ScoreboardRow playerData={playerData['YellowVarik']} />
    </div>

    // <div>
    //   {
    //     playerOrder.map(player => (
    //       <p key={player}>{player}</p>
    //     ))
    //   }
    //   {
    //     Object.entries(getAverageScores({ gameData })).map(([player, score]) => (
    //       <p key={player}>{player}: {score}</p>
    //     ))
    //   }
    //   {
    //     Object.entries(getBestScores({ gameData })).map(([player, score]) => (
    //       <p key={player}>{player}: {score}</p>
    //     ))
    //   }
    //   {
    //     Object.entries(getWorstScores({ gameData })).map(([player, score]) => (
    //       <p key={player}>{player}: {score}</p>
    //     ))
    //   }
    //   {
    //     Object.entries(getAverageScoresPerHole({ gameData, hole: 17 })).map(([player, score]) => (
    //       <p key={player}>{player}: {score}</p>
    //     ))
    //   }
    //   {
    //     Object.entries(getGamesPlayed({ gameData })).map(([player, games]) => (
    //       <p key={player}> {player}: {games} </p>
    //     ))
    //   }
    //   {
    //     Object.entries(getNumberOfWins({ gameData })).map(([player, wins]) => (
    //       <p key={player}> {player}: {wins} </p>
    //     ))
    //   }
    //   {
    //     Object.entries(getAverageFinishPosition({ gameData })).map(([player, position]) => (
    //       <p key={player}> {player}: {position} </p>
    //     ))
    //   }
    // </div>
  )
}

export default Scoreboard