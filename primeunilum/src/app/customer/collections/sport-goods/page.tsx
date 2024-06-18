import React, { Suspense } from 'react'
import SportGoodsCard from '~/app/ui/collections/sportgoodsCard'
import { CardsSkeleton } from '~/app/ui/skeletons'

export default function SportGoods() {
  return (
    <div className='bg-white shadow-md'>
      <h1 className='font-bold text-3xl pl-6 pt-4 mb-20' >
        SportGoods
      </h1>
      <ul className="grid grid-cols-1 items-start ">
        <Suspense fallback={<CardsSkeleton />}>
          <SportGoodsCard />
        </Suspense>
      </ul>
    </div>
  )
}
