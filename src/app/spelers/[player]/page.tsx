import React from 'react'
import PageLayout from '@/app/layouts/PageLayout'
import PlayerProfile from './components/PlayerProfile'
import * as statFuntions from '@/app/util/statFunctions'

const PlayerPage = ({
  params
}: {
  params: {
    player: string
  }
}) => {
  return (
    <PageLayout title={params.player}>
      <PlayerProfile player={params.player} />
    </PageLayout>
  )
}

export default PlayerPage