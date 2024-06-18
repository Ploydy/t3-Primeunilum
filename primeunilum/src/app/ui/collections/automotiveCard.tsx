import Link from 'next/link';
import React from 'react'
import { api } from '~/trpc/server';
import AirFreshener from '../../../../public/automotive/automotive.jpg'
import Image from "next/image";

export default async function AutomotiveCard() {
  const products = await api.product.getProducts();
  const automotives = products.filter(product => product.category === 'Automotive')
  return (
    <div>
      {automotives.map((automotive) => (
        <div key={automotive.id}>
          <li className="relative flex flex-row items-start border-2 rounded p-2 mt-2">

            <Image src={AirFreshener} alt="" className="p-4 ml-10 flex-shrink-0 shadow-lg rounded w-full sm:w-[10rem] xl:mb-2" width="1280" height="200" />

            <div className='flex flex-col justify-between mt-5'>
              <div className="sm:ml-6 xl:ml-6">
                <h3 className="mb-1 text-slate-900 font-mono">
                  <span className="mb-1 block text-sm leading-6 text-slate-600">{automotive.brandname}</span><Link href={`/customer/collections/hardware/${automotive.name}`}>
                    {automotive.name}</Link>
                </h3>
                <div className="prose prose-slate prose-sm text-slate-600">
                  <p>P {automotive.price} PHP</p>
                </div>
                <p className='text-sm'>***** {automotive.reviews} we got reviews</p>
              </div>

            </div>

            <div className='flex flex-col items-center transition-all ml-auto' >
              <Link href='/customer/cart'>
                <button
                  className="shadow-md mt-5 group inline-flex items-center rounded text-md font-semibold whitespace-nowrap px-5 py-2 focus:outline-none focus:ring-2 bg-slate-200 text-slate-900 hover:bg-slate-300 focus:ring-slate-500">
                  Add to cart
                </button>
              </Link>


              <button
                className="shadow-md my-2 group inline-flex items-center rounded text-md font-semibold whitespace-nowrap px-5 py-2 focus:outline-none focus:ring-2 bg-slate-200 text-slate-900 hover:bg-slate-300 focus:ring-slate-500">
                Quick view
              </button>
            </div>

          </li>
        </div>))}

    </div >
  )
}
