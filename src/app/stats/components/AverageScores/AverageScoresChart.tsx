"use client";

import React from 'react'
import { Chart, LinearScale, PointElement, Legend, Title } from 'chart.js'
import { Scatter } from 'react-chartjs-2'
import { getAverageScoreOnHole, getPlayerAverageScoreOnHole, holeNums, players } from '@/app/util/statFunctions'
import autocolors from 'chartjs-plugin-autocolors'

const AverageScoresChart = () => {
  Chart.register(autocolors, LinearScale, PointElement, Legend, Title)

  const datasets = [{
    label: "Gemiddelde Score",
    data: holeNums.map(holeNum => getAverageScoreOnHole(holeNum)),
    radius: 6,
  }]

  players.forEach(player => {
    datasets.push({
      label: player,
      data: holeNums.map(holeNum => getPlayerAverageScoreOnHole(player, holeNum)),
      radius: 6,
    })
  })

  return (
    <div className="overflow-auto">
      <div className="h-[720px] w-[1280px] m-auto p-10 bg-green-950 bg-opacity-50 my-4 flex justify-center overflow-auto">
        <Scatter
          options={{
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
                max: 14,
                grid: {
                  color: 'rgba(255, 255, 255, 0.2)',
                },
                ticks: {
                  color: 'white'
                }
              },
              x: {
                title: {
                  text: "Hole",
                  display: true,
                  color: 'white'
                },
                grid: {
                  color: 'rgba(255, 255, 255, 0.2)',
                },
                ticks: {
                  color: 'white',
                  stepSize: 1
                }
              }
            },
            responsive: true,
            aspectRatio: 2,
            maintainAspectRatio: false,
            color: 'white',
            plugins: {
              autocolors: {
                mode: 'label'
              },
              title: {
                color: 'white',
                display: true,
                text: 'Gemiddelde Scores per Hole',
                font: {
                  size: 20
                }
              }
            },
          }}

          data={{
            labels: holeNums,
            datasets: datasets
          }}
        />
      </div>
    </div>
  )
}

export default AverageScoresChart