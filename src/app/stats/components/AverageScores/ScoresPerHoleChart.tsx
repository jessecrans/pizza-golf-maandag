"use client";

import React from 'react'
import { Chart, LinearScale, PointElement, Legend, Title, Tooltip } from 'chart.js'
import { Scatter } from 'react-chartjs-2'
import { getAverageScoreOnHole, getPlayerAverageScoreOnHole, holeNums, players } from '@/app/util/statFunctions'

const ScoresPerHoleChart = ({ colors }: {
  colors: string[]
}) => {
  Chart.register(LinearScale, PointElement, Legend, Title, Tooltip)

  const datasets = [{
    label: "Gemiddelde Score",
    data: holeNums.map(holeNum => { return { x: getAverageScoreOnHole(holeNum), y: holeNum } }),
    pointStyle: 'crossRot',
    backgroundColor: 'white',
    borderColor: 'white',
    borderWidth: 2
  }]

  players.forEach((player, index) => {
    datasets.push({
      label: player,
      data: holeNums.map(holeNum => { return { x: getPlayerAverageScoreOnHole(player, holeNum), y: holeNum } }),
      pointStyle: 'circle',
      backgroundColor: colors[index],
      borderColor: 'white',
      borderWidth: 0
    })
  })

  return (
    <div className="overflow-auto w-full h-fit">
      <div className="h-[500px] lg:h-[720px] min-w-[600px] m-auto p-10 bg-green-950 bg-opacity-50 flex justify-center overflow-auto rounded">
        <Scatter
          options={{
            elements: {
              point: {
                radius: 6,
              }
            },
            scales: {
              y: {
                title: {
                  text: "Hole",
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
                  stepSize: 1
                }
              },
              x: {
                title: {
                  text: "Score",
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
              },
            },
            responsive: true,
            maintainAspectRatio: false,
            color: 'white',
            plugins: {
              title: {
                color: 'white',
                display: true,
                text: "Gemiddelde scores per hole",
                font: {
                  size: 20
                }
              },
              tooltip: {
                enabled: true
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

export default ScoresPerHoleChart