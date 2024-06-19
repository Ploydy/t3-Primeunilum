import React, { Suspense } from 'react'
import { CreateProduct } from '~/app/ui/cards/products/buttons'
import ProductTable from '~/app/ui/cards/products/productTable'
import Search from '~/app/ui/search'
import { InvoicesTableSkeleton } from '~/app/ui/skeletons'

export default function Stocks() {
  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className='text-2xl'>Products List</h1>
      </div>
      <div className="my-4 flex items-center justify-between gap-2 md:mt-8">
        <Suspense>
          <Search placeholder="Search products..." />
        </Suspense>
        <CreateProduct />
      </div>
      <ul className="grid grid-cols-1 items-start ">
        <Suspense fallback={<InvoicesTableSkeleton />}>
          <ProductTable />
        </Suspense>
      </ul>
    </div>
  )
}