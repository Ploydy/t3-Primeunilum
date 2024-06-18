import React, { Suspense } from 'react'
import HousewareCard from '~/app/ui/collections/housewareCard'
import { CardsSkeleton } from '~/app/ui/skeletons'

export default function HouseWares() {
  return (
    <div className='bg-white shadow-md'>
      <h1 className='font-bold text-3xl pl-6 pt-4 mb-20' >
        HouseWares
      </h1>
      <ul className="grid grid-cols-1 items-start ">
        <Suspense fallback={<CardsSkeleton />}>
          <HousewareCard />
        </Suspense>
      </ul>
    </div>
  )
}
