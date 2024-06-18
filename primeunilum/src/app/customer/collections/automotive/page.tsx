import React, { Suspense } from 'react'
import AutomotiveCard from '~/app/ui/collections/automotiveCard'
import { CardsSkeleton } from '~/app/ui/skeletons'

export default function Automotive() {
  return (
    <div className='bg-white shadow-md'>
      <h1 className='font-bold text-3xl pl-6 pt-4 mb-20' >
        Automotive
      </h1>
      <ul className="grid grid-cols-1 items-start ">
        <Suspense fallback={<CardsSkeleton />}>
          <AutomotiveCard />
        </Suspense>
      </ul>
    </div>
  )
}
