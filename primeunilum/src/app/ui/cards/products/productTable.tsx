import React from 'react'
import { api } from '~/trpc/server'
import Image from 'next/image'
import { formatPrice } from '~/app/lib/utils'
import { DeleteProduct, UpdateProduct } from './buttons'

export default async function ProductTable() {
  const products = await api.product.getProducts()
  return (
    <section className="container mx-auto font-mono">
      <div className="w-full mb-8 overflow-x-hidden rounded-lg shadow-lg">
        <div className="w-full overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
                <th className="px-4 py-3">Name</th>
                <th className="px-4 py-3">Brandname</th>
                <th className="px-8 py-3">Price</th>
                <th className="px-4 py-3">Quantity</th>
                <th className="px-4 py-3">Reviews</th>
                <th className="px-4 py-3">Category</th>
                <th className="px-4 py-3">Actions</th>
              </tr>
            </thead>

            <tbody className="bg-white">
              {products?.map((product) => (
                <tr key={product.id} className="text-gray-700">
                  <td className="px-4 py-3 border">
                    <div className="flex items-center text-sm">
                      <div className="relative w-8 h-8 mr-3 rounded-full md:block">
                        <img className="object-cover w-full h-full rounded-full" src="https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="" loading="lazy" />
                        <div className="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                      </div>
                      <div>
                        <p className="font-semibold text-black">{product.name}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-sm font-semibold border">{product.brandname}</td>
                  <td className="px-4 py-3 text-xs border">
                    <span className="px-2 py-1 font-semibold leading-tight bg-green-100 rounded-sm"> {formatPrice(product.price)}</span>
                  </td>
                  <td className="px-4 py-3 text-sm border">{product.quantity}</td>
                  <td className="px-4 py-3 text-sm border">{product.reviews}</td>
                  <td className="px-4 py-3 text-sm border">{product.category}</td>
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex justify-end gap-3">
                      <UpdateProduct id={product.id} />
                      <DeleteProduct id={product.id} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section >

  )
}
