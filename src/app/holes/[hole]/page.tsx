import PageLayout from '@/app/layouts/PageLayout'
import React from 'react'
import { promises as fs } from 'fs'
import HoleInfo from './components/HoleInfo'
import HoleImage from './components/HoleImage'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons/faArrowRight'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

const Hole = async ({
  params
}: {
  params: {
    hole: string
  }
}) => {
  const holeData = await getHoleData({ params });

  return (
    <PageLayout title={`HOLE ${params.hole}`}>
      <HoleInfo
        par={holeData.par}
        difficulty={holeData.difficulty}
      />
      {
        holeData.images.map((image, index) => (
          <HoleImage
            key={index}
            description={holeData.descriptions[index]}
            image={image}
            index={index + 1}
          />
        ))
      }
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
    </PageLayout>
  )
}

interface HoleData {
  par: number
  difficulty: number
  descriptions: Array<string>
  images: Array<string>
}

export const getHoleData = async ({
  params
}: {
  params: {
    hole: string
  }
}) => {
  const holePath = `public/holes/hole${params.hole}`;
  const file = await fs.readFile(`${holePath}/info.json`, 'utf-8');
  let data = JSON.parse(file);

  // getting hole images
  const imageCount = data.descriptions.length;
  let images = [];
  for (let i = 1; i <= imageCount; i++) {
    images.push(`/holes/hole${params.hole}/image${i}.png`);
  }
  data = {
    ...data,
    images
  }

  // console.log(data);
  return data as HoleData;
}


export default Hole