import React, { Suspense } from 'react'
import ProductTable from '~/app/ui/cards/products/productTable'
import { CreateInvoice } from '~/app/ui/invoices/buttons'
import Search from '~/app/ui/search'
import { InvoicesTableSkeleton } from '~/app/ui/skeletons'

export default function Stocks() {
  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className='text-2xl'>Products</h1>
      </div>
      <div className="my-4 flex items-center justify-between gap-2 md:mt-8">
        <Suspense>
          <Search placeholder="Search products..." />
        </Suspense>
        <CreateInvoice />
      </div>

      <div className='bg-white shadow-md rounded'>
        <h1 className='font-bold text-3xl pl-6 pt-4 mb-20' >
          Product list
        </h1>
        <ul className="grid grid-cols-1 items-start ">
          <Suspense fallback={<InvoicesTableSkeleton />}>
            <ProductTable />
          </Suspense>
        </ul>
      </div>

    </div>
  )
}