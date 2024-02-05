import React from 'react';
import Link from 'next/link';
import gameData from '../../../public/game_data/game_database.json'
import PageLayout from '../layouts/PageLayout';

const Scores = () => {
  return (
    <PageLayout
      title='Scores'
    >
      <div className='flex flex-col justify-between items-center mb-2'>
        {
          gameData.map((game, index) => {
            return (
              <Link key={game.date} href={`/scores/${game.date}`}>
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