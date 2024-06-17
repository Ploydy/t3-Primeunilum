import React, { Suspense } from 'react'
import ApplianceCard from '~/app/ui/collections/applianceCard'
import { CardsSkeleton } from '~/app/ui/skeletons'

export default function Appliance() {
  return (
    <div className='bg-white'>
      <h1 className='font-bold text-3xl pl-6 pt-4 mb-20' >
        Appliances
      </h1>
        <ul className="grid grid-cols-1 items-start ">
          <Suspense fallback={<CardsSkeleton />}>
            <ApplianceCard />
          </Suspense>
        </ul>
    </div>
  )
}
