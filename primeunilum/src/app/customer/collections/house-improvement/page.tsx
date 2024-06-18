import React, { Suspense } from 'react'
import HouseImprovementCard from '~/app/ui/collections/houseimpCard'
import { CardsSkeleton } from '~/app/ui/skeletons'

export default function HomeImprovement() {
  return (
    <div className='bg-white shadow-md'>
    <h1 className='font-bold text-3xl pl-6 pt-4 mb-20' >
    Home Improvement
    </h1>
    <ul className="grid grid-cols-1 items-start ">
      <Suspense fallback={<CardsSkeleton />}>
        <HouseImprovementCard />
      </Suspense>
    </ul>
  </div>
  )
}
