import PageLayout from '@/app/layouts/PageLayout'
import React from 'react'
import { promises as fs } from 'fs'
import HoleInfo from './components/HoleInfo'
import HoleImage from './components/HoleImage'
import HoleArrows from './components/HoleArrows'
// import '../../../../public/holes'

const Hole = async ({
  params
}: {
  params: {
    hole: string
  }
}) => {
  console.log(process.cwd());

  const holeData = await getHoleData({ params });

  return (
    <PageLayout title={`HOLE ${params.hole}`}>
      <HoleInfo
        par={holeData.par}
        difficulty={holeData.difficulty}
      />
      <HoleArrows params={params} />
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
      <HoleArrows params={params} />
    </PageLayout>
  )
}

interface HoleData {
  par: number
  difficulty: number
  descriptions: Array<string>
  images: Array<string>
}

const getHoleData = async ({
  params
}: {
  params: {
    hole: string
  }
}) => {
  const file = await fs.readFile(`public/holes/hole${params.hole}/info.json`, 'utf-8');
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