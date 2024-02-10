"use client";

import React from 'react'
import { Chart, LinearScale, LineElement, PointElement, Legend, Title, Tooltip, CategoryScale } from 'chart.js'
import { Line } from 'react-chartjs-2'
import { getPlayerGames, players, getAllDates } from '@/app/util/statFunctions';
import gameData from "../../../../../public/game_data/game_database.json"

const AverageScoresChart = ({ colors }: { colors: string[] }) => {
  Chart.register(LinearScale, CategoryScale, LineElement, PointElement, Legend, Title, Tooltip);

  const data: { [key: string]: { x: string, y: number }[] } = {};
  players.forEach(player => data[player] = []);
  gameData.forEach(game => {
    game.players.forEach((player, index) => {
      data[player].push({
        x: game.date,
        y: game.scores[index].reduce((a, b) => a + b, 0)
      })
    })
  })

  const datasets = players.map((player, index) => {
    return {
      label: player,
      data: data[player],
      borderColor: colors[index],
      backgroundColor: colors[index],
    }
  })

  return (
    <div className="w-full overflow-auto">
      <div className='h-[500px] lg:h-[720px] min-w-[600px] m-auto p-10 bg-green-950 bg-opacity-50 flex justify-center overflow-auto rounded'>
        <Line
          options={{
            elements: {
              point: {
                radius: 6,
              }
            },
            scales: {
              y: {
                title: {
                  text: "Score",
                  display: true,
                  color: 'white',
                  font: {
                    weight: 'normal'
                  }
                },
                grid: {
                  color: 'rgba(255, 255, 255, 0.2)',
                },
                ticks: {
                  color: 'white',
                }
              },
              x: {
                grid: {
                  color: 'rgba(255, 255, 255, 0.2)',
                },
                ticks: {
                  color: 'white',
                  stepSize: 1
                }
              },
            },
            responsive: true,
            maintainAspectRatio: false,
            color: 'white',
            plugins: {
              title: {
                color: 'white',
                display: true,
                text: "Score per game",
                font: {
                  size: 20
                }
              },
              tooltip: {
                enabled: true
              }
            },
          }}
          data={
            {
              labels: getAllDates(),
              datasets: datasets
            }
          }
        />
      </div>
    </div>
  )
}

export default AverageScoresChart