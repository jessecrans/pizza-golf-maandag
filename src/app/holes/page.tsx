import React from 'react'
import PageLayout from '../layouts/PageLayout'
import HoleCard from './components/HoleCard'

const Holes = () => {
  const holes: number[] = [];
  for (let i = 1; i <= 18; i++) {
    holes.push(i);
  }

  return (
    <PageLayout title='Holes'>
      <p>
        Hieronder vind je een overzicht van alle holes. Klik op een hole om de details en strategieën te bekijken.
      </p>
      <div className='flex justify-center'>
        <ol className='grid grid-cols-3 gap-4 mt-4'>
          {
            holes.map((hole) => {
              return (
                <HoleCard
                  key={hole}
                  hole={hole}
                  image={`/holes/thumbnails/hole${hole}.png`}
                />
              )
            })
          }
        </ol>
      </div>
    </PageLayout>
  )
}

export default Holes