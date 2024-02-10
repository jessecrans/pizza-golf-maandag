"use client";

import React from 'react'
import { Chart, LinearScale, PointElement, Legend, Title, Tooltip } from 'chart.js'
import { Scatter } from 'react-chartjs-2'
import { getAverageScoreOnHole, getPlayerAverageScoreOnHole, holeNums, players } from '@/app/util/statFunctions'
import autocolors from 'chartjs-plugin-autocolors'

const ScoresChart = ({ datasets, dataLabels, title, xLabel, yLabel }: {
  datasets: {
    label: string,
    data: {
      x: number,
      y: number
    }[]
  }[],
  dataLabels: number[],
  title: string,
  xLabel: string,
  yLabel: string
}) => {
  Chart.register(autocolors, LinearScale, PointElement, Legend, Title, Tooltip)

  return (
    <div className="overflow-auto w-full h-fit">
      <div className="h-[500px] lg:h-[720px] w-full m-auto p-10 bg-green-950 bg-opacity-50 flex justify-center overflow-auto">
        <Scatter
          options={{
            elements: {
              point: {
                radius: 6
              }
            },
            scales: {
              y: {
                title: {
                  text: yLabel,
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
                  text: xLabel,
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
              autocolors: {
                mode: 'label'
              },
              title: {
                color: 'white',
                display: true,
                text: title,
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
            labels: dataLabels,
            datasets: datasets
          }}
        />
      </div>
    </div>
  )
}

export default ScoresChart