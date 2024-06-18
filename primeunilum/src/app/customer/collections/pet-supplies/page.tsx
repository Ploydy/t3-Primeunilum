import React, { Suspense } from 'react'
import PetSuppliesCard from '~/app/ui/collections/petsuppliesCard'
import { CardsSkeleton } from '~/app/ui/skeletons'

export default function PetSupplies() {
  return (
    <div className='bg-white shadow-md'>
      <h1 className='font-bold text-3xl pl-6 pt-4 mb-20' >
        PetSupplies
      </h1>
      <ul className="grid grid-cols-1 items-start ">
        <Suspense fallback={<CardsSkeleton />}>
          <PetSuppliesCard />
        </Suspense>
      </ul>
    </div>
  )
}
