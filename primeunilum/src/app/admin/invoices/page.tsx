/* eslint-disable @typescript-eslint/consistent-indexed-object-style */
/* eslint-disable @typescript-eslint/dot-notation */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */


import Search from '../../ui/search';
import InvoiceTable from '../../ui/invoices/table';
import { CreateInvoice } from '../../ui/invoices/buttons';
import { Suspense } from 'react';
import { InvoicesTableSkeleton } from '~/app/ui/skeletons';
import { type Metadata } from 'next';
/* import Pagination from '~/app/ui/invoices/pagination';
import { api } from '~/trpc/server'; */


export const metadata: Metadata = {
  title: 'Invoices',
};

/* const data = api.invoice.fetchAllInvoices(); */

/* export default async function Invoice({
  searchParams,
}: {
  searchParams: {[key: string]: string | string[] | undefined }
}) {
  const page = searchParams['page']?? '1'
  const per_page = searchParams['per_page']?? '5'

  const start = (Number(page) - 1 ) * Number(per_page)
  const end = start + Number(per_page)

  const entries = (await data).slice(start, end)

  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className='text-2xl'>Invoices</h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Suspense>
          <Search placeholder="Search invoices..." />
        </Suspense>
        <CreateInvoice />
      </div>
      <Suspense key={entries + currentPage} fallback={<InvoicesTableSkeleton />}>
        <InvoiceTable key={per_page} currentPage={currentPage} />
      </Suspense>
      <div className="mt-5 flex w-full justify-center">
         <Pagination totalPages={totalPages} /> 
      </div>
    </div>
  );
}
 */
export default async function Invoice({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query ?? '';
  const currentPage = Number(searchParams?.page) || 1;
/*   const totalPages = await api.invoice.fetchAllInvoices();
  console.log(totalPages)   */
  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className='text-2xl'>Invoices</h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Suspense>
          <Search placeholder="Search invoices..." />
        </Suspense>
        <CreateInvoice />
      </div>
      <Suspense key={query + currentPage} fallback={<InvoicesTableSkeleton />}>
        <InvoiceTable query={query} currentPage={currentPage} />
      </Suspense>
      <div className="mt-5 flex w-full justify-center">
         {/* <Pagination totalPages={totalPages} />  */}
      </div>
    </div>
  );
}