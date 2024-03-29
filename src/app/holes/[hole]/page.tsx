import PageLayout from '@/app/layouts/PageLayout'
import React from 'react'
import HoleInfo from './components/HoleInfo'
import HoleImage from './components/HoleImage'
import HoleArrows from './components/HoleArrows'
import holeData from '../../../../public/holes/info.json'
import HoleLeaderboard from './components/HoleLeaderboard'

const Hole = ({
  params
}: {
  params: {
    hole: string
  }
}) => {
  if (parseInt(params.hole) < 1 || parseInt(params.hole) > 18) {
    return (
      <PageLayout title='404'>
        <p>Geen hole gevonden met dit getal.</p>
      </PageLayout>
    )
  }

  const currentHoleData = getHoleData({ params });

  return (
    <PageLayout title={`HOLE ${params.hole}`}>
      <HoleInfo
        par={currentHoleData.par}
        difficulty={currentHoleData.difficulty}
        holeNum={parseInt(params.hole)}
      />
      <HoleLeaderboard params={params} />
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
  let data = holeData[parseInt(params.hole) - 1]

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

  return parsedData as HoleData;
}

export default Hole