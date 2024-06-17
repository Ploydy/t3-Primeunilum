/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-no-undef */
import React from 'react'
import Image from 'next/image'
import hanabishi from '../../../../public/appliance/appliancehanabishi_n.png'
import Link from 'next/link'
import { api } from '~/trpc/server'

export default async function ApplianceCard() {
  const products = await api.product.getProducts();
  const appliances = products.filter(product => product.category === 'Appliance')
  return (
    <div>

      {appliances.map((appliance) => (
        <div key={appliance.id}>
          <li className="relative flex flex-row items-start border-2 rounded p-2 mt-2">
            <Image src={hanabishi} alt="" className="p-4 ml-10 flex-shrink-0 shadow-lg rounded w-full sm:w-[10rem] xl:mb-2" width="1280" height="200" />

            <div className='flex flex-col justify-between mt-10'>
              <div className="sm:ml-6 xl:ml-6">
                <h3 className="mb-1 text-slate-900 font-mono">
                  <span className="mb-1 block text-sm leading-6 text-slate-600">{appliance.brandname}</span>{appliance.name}
                </h3>
                <div className="prose prose-slate prose-sm text-slate-600">
                  <p>P {appliance.price} PHP</p>
                </div>
                <p className='text-sm'>***** {appliance.reviews} we got reviews</p>
              </div>

            </div>

            <div className='flex flex-col items-center transition-all ml-auto ' >
              <Link href='/customer/cart'>
                <button
                  className="mt-20 group inline-flex items-center rounded text-md font-semibold whitespace-nowrap px-5 py-2 focus:outline-none focus:ring-2 bg-slate-200 text-slate-900 hover:bg-slate-300 focus:ring-slate-500">
                  Add to cart
                </button>
              </Link>

              <Link href='/customer/cart'>
                <button
                  className="my-2 group inline-flex items-center rounded text-md font-semibold whitespace-nowrap px-5 py-2 focus:outline-none focus:ring-2 bg-slate-200 text-slate-900 hover:bg-slate-300 focus:ring-slate-500">
                  Quick view
                </button>
              </Link>
            </div>

          </li>

        </div>))}
    </div>
  )
}

{/*  <li className="relative flex flex-col sm:flex-row xl:flex-col items-start">
  
  <div className="order-1 sm:ml-6 xl:ml-0">
  <h3 className="mb-1 text-slate-900 font-semibold">
  <span className="mb-1 block text-sm leading-6 text-cyan-500">Hero Patterns</span>Seamless SVG background
  patterns by the makers of Tailwind CSS.
  </h3>
  <div className="prose prose-slate prose-sm text-slate-600">
  <p>A collection of over 100 free MIT-licensed high-quality SVG patterns for you to use in your web
  projects.</p>
  </div><a
  className="group inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900 focus:ring-slate-500 mt-6"
  href="">Learn
  more<span className="sr-only">, Seamless SVG background patterns by the makers of Tailwind CSS.</span>
  <svg className="overflow-visible ml-3 text-slate-300 group-hover:text-slate-400"
  width="3" height="6" viewBox="0 0 3 6" fill="none" stroke="currentColor" stroke-width="2"
  stroke-linecap="round" stroke-linejoin="round">
  <path d="M0 0L3 3L0 6"></path>
  </svg></a>
  </div>
  <Image src={hanabishi} alt="" className="mb-6 shadow-md rounded-lg bg-slate-50 w-full sm:w-[17rem] sm:mb-0 xl:mb-6 xl:w-full" width="1216" height="640" />
  
  </li> */}


{/* <li className="relative flex flex-col sm:flex-row xl:flex-col items-start">
  
    <div className="order-1 sm:ml-6 xl:ml-0">
      <h3 className="mb-1 text-slate-900 font-semibold">
        <span className="mb-1 block text-sm leading-6 text-indigo-500">Headless UI</span>Completely unstyled, fully
        accessible UI components
      </h3>
      <div className="prose prose-slate prose-sm text-slate-600">
        <p>Completely unstyled, fully accessible UI components, designed to integrate beautifully with Tailwind
          CSS.</p>
      </div><a
        className="group inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900 focus:ring-slate-500 mt-6"
        href="">Learn
        more<span className="sr-only">, Completely unstyled, fully accessible UI components</span>
        <svg className="overflow-visible ml-3 text-slate-300 group-hover:text-slate-400"
          width="3" height="6" viewBox="0 0 3 6" fill="none" stroke="currentColor" stroke-width="2"
          stroke-linecap="round" stroke-linejoin="round">
          <path d="M0 0L3 3L0 6"></path>
        </svg></a>
    </div>
    <Image src={hanabishi} alt="" className="mb-6 shadow-md rounded-lg bg-slate-50 w-full sm:w-[17rem] sm:mb-0 xl:mb-6 xl:w-full" width="1216" height="640" />
  
  </li> */}