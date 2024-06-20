import React, { Suspense } from 'react'
import AllProductsCard from '~/app/ui/collections/allProductsCard'
import { CardsSkeleton } from '~/app/ui/skeletons'

export default function AllProducts() {
  return (
    <div className='bg-white shadow-md'>
      <h1 className='font-bold text-3xl pl-6 pt-4 mb-20' >
        All products
      </h1>
      <ul className="grid grid-cols-1 items-start ">
        <Suspense fallback={<CardsSkeleton />}>
          <AllProductsCard />
        </Suspense>
      </ul>
    </div>
  )
}
