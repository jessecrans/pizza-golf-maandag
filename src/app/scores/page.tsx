import React from 'react';
import Link from 'next/link';
import gameData from '../../../public/game_data/game_database.json'
import PageLayout from '../layouts/PageLayout';
import AllGames from './components/AllGames/AllGames';

const Scores = () => {


  return (
    <PageLayout
      title='Scores'
    >
      <h3 className='text-yellow-200 font-bold uppercase text-center text-xl m-4 mt-0'>Per Datum</h3>
      <div className='grid grid-cols-3 gap-4 mb-2 text-center'>
        {
          gameData
            .slice()
            .reverse()
            .map((game, index) => {
              return (
                <Link
                  key={game.date}
                  href={`/scores/${game.date}`}
                  className='bg-green-950 bg-opacity-50 p-2 rounded'
                >
                  {game.date}
                </Link>
              )
            })
        }
      </div>
      <h3 className='text-yellow-200 text-xl font-bold uppercase text-center m-4'>Elke Game Allertijde</h3>
      <AllGames />
    </PageLayout>
  )
}

export default Scores