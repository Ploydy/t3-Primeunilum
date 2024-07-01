import React, { Suspense } from 'react'
import { CreateSupplier } from '~/app/ui/tablebuttons/SupplierButton'
import Search from '~/app/ui/search'
import { InvoicesTableSkeleton } from '~/app/ui/skeletons'
import SupplierTable from '~/app/ui/tables/SupplierTable'

export default function Suppliers() {
  return (
    <div>
      <div className="w-full">
        <div className="flex w-full items-center justify-between">
          <h1 className='text-2xl'>Suppliers</h1>
        </div>
        <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
          <Suspense>
            <Search placeholder="Search suppliers..." />
          </Suspense>
          <CreateSupplier />
        </div>
        <Suspense fallback={<InvoicesTableSkeleton />}>
          <SupplierTable />
        </Suspense>
        <div className="mt-5 flex w-full justify-center">
        </div>
      </div>
    </div>
  )
}