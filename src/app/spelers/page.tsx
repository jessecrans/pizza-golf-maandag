import React from 'react'
import PageLayout from '../layouts/PageLayout'
import { getAllPlayers } from '@/app/util/statFunctions'
import Link from 'next/link'

const Spelers = () => {
  return (
    <PageLayout title='spelers'>
      <ul className='flex flex-col'>
        {
          getAllPlayers().map((player, index) => {
            return (
              <Link key={index} href={`/spelers/${player}`}>{player}</Link>
            )
          })
        }
      </ul>
    </PageLayout>
  )
}

/*
  stats:
  number of gold, silver, bronze
  best n worst score
  average score
  number of hole in ones
  number of eagles
  number of birdies
  best hole: grootste percentage verschil met gemiddeld
  slechtste hole: grootste percentage verschil met gemiddeld
  pizza rating: average score, average finish position, percentage wins, percentage of top 3 finishes
*/

export default Spelers