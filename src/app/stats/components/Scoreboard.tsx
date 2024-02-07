'use client'
import React, { useState } from 'react'
import { getAllPlayers, getAverageScores, getWorstScores, getBestScores, getAverageScoresPerHole, getGamesPlayed, getNumberOfWins, getAverageFinishPosition } from '../../util/statFunctions'
import { ScoreboardRow } from './ScoreboardRow'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSort } from '@fortawesome/free-solid-svg-icons'

const Scoreboard = () => {
  const [playerOrder, setPlayerOrder] = useState(getAllPlayers());
  const [sortingBy, setSortingBy] = useState('averageScore');

  const scoreMetrics: { // define the types of metrics to sort by
    [key: string]: {
      [key: string]: number
    }
  } = {
    averageScores: getAverageScores(),
    wins: getNumberOfWins(),
    averageFinishPositions: getAverageFinishPosition(),
    gamesPlayed: getGamesPlayed(),
    bestScores: getBestScores(),
    worstScores: getWorstScores()
  }

  const scoreHeaderNames: { // 
    [key: string]: string
  } = {
    averageScores: 'Gemiddelde Score',
    wins: 'Winsten',
    averageFinishPositions: 'Gemiddelde Positie',
    gamesPlayed: 'Rondes Gespeeld',
    bestScores: 'Beste Score',
    worstScores: 'Slechtste Score'
  }

  let playerData: {
    [key: string]: {
      name: string,
      averageScore: number,
      wins: number,
      averageFinishPosition: number
      gamesPlayed: number,
      bestScore: number,
      worstScore: number
    }
  } = {};

  getAllPlayers().forEach(player => {
    playerData[player] = {
      name: player,
      averageScore: scoreMetrics.averageScores[player],
      wins: scoreMetrics.wins[player],
      averageFinishPosition: scoreMetrics.averageFinishPositions[player],
      gamesPlayed: scoreMetrics.gamesPlayed[player],
      bestScore: scoreMetrics.bestScores[player],
      worstScore: scoreMetrics.worstScores[player]
    }
  })

  const sortPlayers = (by: {
    [key: string]: number
  }) => {
    setPlayerOrder(
      Object.keys(by).sort((a, b) => by[b] - by[a])
    )
  }

  const sortPlayersExtra = ({
    by,
    order
  }: {
    by: {
      [key: string]: number
    },
    order: 'asc' | 'desc'
  }) => {
    Object.keys(by).sort((a, b) => by[b] - by[a])
    if (order === 'asc') {
      setPlayerOrder(
        Object.keys(by).sort((a, b) => by[a] - by[b])
      )
    } else {
      setPlayerOrder(
        Object.keys(by).sort((a, b) => by[b] - by[a])
      )
    }
  }

  const sortPlayersAlphabetically = ({
    order
  }: {
    order: 'asc' | 'desc'
  }) => {
    if (order === 'asc') {
      setPlayerOrder(
        getAllPlayers().sort()
      )
    } else {
      setPlayerOrder(
        getAllPlayers().sort().reverse()
      )
    }
  }

  return (
    <div className='m-auto p-4 bg-green-950 bg-opacity-50 rounded grid gap-2 overflow-auto text-center max-w-screen-xl'>
      <div
        className='grid p-2 gap-2 text-yellow-200 text-xl font-bold uppercase bg-green-400 bg-opacity-70 rounded'
        style={{
          gridTemplateColumns: 'repeat(7, minmax(10rem, 1fr))'
        }}
      >
        <div>
          <button
            onClick={() => {
              if (sortingBy === 'player') {
                sortPlayersAlphabetically({ order: 'desc' });
                setSortingBy('');
              } else {
                sortPlayersAlphabetically({ order: 'asc' });
                setSortingBy('player');
              }
            }}
            className='uppercase flex justify-evenly w-full h-full items-center hover:opacity-75 hover:no-underline'
          >
            <h3>Player</h3>
            <FontAwesomeIcon icon={faSort} />
          </button>
        </div>
        {
          Object.keys(scoreMetrics).map((metric, index) => {
            return (
              <div key={index}>
                <button
                  onClick={() => {
                    if (sortingBy === metric) {
                      sortPlayersExtra({
                        by: scoreMetrics[metric],
                        order: 'asc'
                      });
                      setSortingBy('');
                    } else {
                      sortPlayersExtra({
                        by: scoreMetrics[metric],
                        order: 'desc'
                      });
                      setSortingBy(metric);
                    }
                  }}
                  className='uppercase flex justify-evenly w-full h-full items-center hover:opacity-75 hover:no-underline'
                >
                  <h3>{scoreHeaderNames[metric]}</h3>
                  <FontAwesomeIcon icon={faSort} />
                </button>
              </div>
            )
          })
        }
      </div>
      {
        playerOrder.map((player, index) => <ScoreboardRow key={index} playerData={playerData[player]} />)
      }
    </div>
  )
}

export default Scoreboard