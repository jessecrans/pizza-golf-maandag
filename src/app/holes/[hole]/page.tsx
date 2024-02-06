import PageLayout from '@/app/layouts/PageLayout'
import React from 'react'
import { promises as fs } from 'fs'
import HoleInfo from './components/HoleInfo'
import HoleImage from './components/HoleImage'
import HoleArrows from './components/HoleArrows'
import holeData from '../../../../public/holes/info.json'

const Hole = ({
  params
}: {
  params: {
    hole: string
  }
}) => {
  const currentHoleData = getHoleData({ params });

  return (
    <PageLayout title={`HOLE ${params.hole}`}>
      <HoleInfo
        par={currentHoleData.par}
        difficulty={currentHoleData.difficulty}
      />
      <HoleArrows params={params} />
      {
        currentHoleData.images.map((image, index) => (
          <HoleImage
            key={index}
            description={currentHoleData.descriptions[index]}
            image={image}
            index={index + 1}
          />
        ))
      }
      <HoleArrows params={params} />
    </PageLayout>
  )
}

type HoleData = {
  par: number
  difficulty: number
  descriptions: string[]
  images: string[]
}

const getHoleData = ({
  params
}: {
  params: {
    hole: string
  }
}) => {
  let data = holeData[parseInt(params.hole)]

  // getting hole images
  const imageCount = data.descriptions.length;
  let images = [];
  for (let i = 1; i <= imageCount; i++) {
    images.push(`/holes/hole${params.hole}/image${i}.png`);
  }
  const parsedData = {
    ...data,
    images
  }

  // console.log(data);
  return parsedData as HoleData;
}

export default Hole