import React from 'react'
import '@fortawesome/fontawesome-svg-core/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPizzaSlice } from '@fortawesome/free-solid-svg-icons';

const HoleInfo = ({
  par,
  difficulty
}: {
  par: number,
  difficulty: number
}) => {
  const maxDifficulty = [1, 2, 3, 4, 5];

  return (
    <div className='grid grid-cols-2 gap-4'>
      <div className='text-center uppercase font-bold'>
        <h3>
          PAR
        </h3>
        <p className='bg-green-950 bg-opacity-50 rounded p-2 mt-2 text-xl'>
          {par}
        </p>
      </div>
      <div className='text-center uppercase font-bold lg:inline'>
        <h3>
          DIFFICULTY
        </h3>
        <div className='bg-green-950 bg-opacity-50 rounded p-2 mt-2'>
          {
            maxDifficulty.map((_, index) => {
              if (index < difficulty) {
                return (
                  <span key={index} className='text-yellow-400 m-1 text-xl'>
                    <FontAwesomeIcon icon={faPizzaSlice} />
                  </span>
                )
              } else {
                return (
                  <span key={index} className='text-gray-400 text-opacity-50 m-1 text-xl'>
                    <FontAwesomeIcon icon={faPizzaSlice} />
                  </span>
                )
              }
            })
          }
        </div>
      </div>
    </div>
  )
}

export default HoleInfo