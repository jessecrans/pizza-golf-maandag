import React from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons/faArrowRight'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

const HoleArrows = ({
  params
}: {
  params: {
    hole: string
  }
}) => {
  return (
    <div className="flex justify-between items-center p-4">
      {
        <Link className={'text-2xl ' + (parseInt(params.hole) > 1 ? 'hover:opacity-60' : 'pointer-events-none opacity-40')} href={`/holes/${parseInt(params.hole) - 1}`}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </Link>
      }
      {
        <Link className={'text-2xl ' + (parseInt(params.hole) < 18 ? 'hover:opacity-60' : 'pointer-events-none opacity-40')} href={`/holes/${parseInt(params.hole) + 1}`}>
          <FontAwesomeIcon icon={faArrowRight} />
        </Link>
      }
    </div>
  )
}

export default HoleArrows