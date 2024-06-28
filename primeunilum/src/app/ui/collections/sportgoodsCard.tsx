import React from 'react'
import Image from "next/image";
import { api } from '~/trpc/server';
import Link from 'next/link';


export default async function SportGoodsCard() {

  const Products = await api.product.getProducts();
  const sportgoods = Products.filter(product => product.category === 'Sportgoods')

  return (
    <div>
      {sportgoods.map((product) => (
        <div key={product.id}>
          <li className="relative flex flex-row items-start border-2 rounded p-2 mt-2">

            <Image src={product.img} alt="" className="p-4 ml-10 flex-shrink-0 shadow-lg rounded w-full sm:w-[10rem] xl:mb-2" width="1280" height="200" />

            <div className='flex flex-col justify-between mt-5'>
              <div className="sm:ml-6 xl:ml-6">
                <h3 className="mb-1 text-slate-900 uppercase font-mono">
                  <span className="mb-1 block text-sm  leading-6 text-slate-600">{product.brandname}</span><Link href={`/customer/products/${product.name}`}>
                    {product.name}</Link>
                </h3>
                <div className="prose prose-slate prose-sm text-slate-600">
                  <p>P {product.price} PHP</p>
                </div>
                <p className='text-sm'>***** {product.reviews} we got reviews</p>
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
