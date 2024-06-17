import React, { Suspense } from 'react'
import HardwareCard from '~/app/ui/collections/hardwareCard'
import { CardsSkeleton } from '~/app/ui/skeletons'

export default function Hardware() {
  return (
    <div className='bg-white'>
      <h1 className='font-bold text-3xl pl-6 pt-4 mb-20' >
        Hardware
      </h1>
      <ul className="grid grid-cols-1 items-start ">
        <Suspense fallback={<CardsSkeleton />}>
          <HardwareCard />
        </Suspense>
      </ul>
    </div>
  )
}
