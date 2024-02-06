import React, { useEffect } from 'react';
import Link from 'next/link';
import gameData from '../../../public/game_data/game_database.json'
import PageLayout from '../layouts/PageLayout';

const Scores = () => {
  return (
    <PageLayout
      title='Scores'
    >
      <div className='grid grid-cols-3 gap-4 mb-2 text-center'>
        {
          gameData
            .toReversed()
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
    </PageLayout>
  )
}

export default Scores