import Link from 'next/link';
import React from 'react'
import { api } from '~/trpc/server';

export default async function AluminumCard() {
  const products = await api.product.getProducts();
  return (
    <div className="h-full w-full">
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4'>
        {products?.map((product) => (
          <Link
            key={product.id}
            className="flex flex-col items-stretch justify-start gap-2 rounded-lg p-4 border-2 border-solid transition-all bg-black/5 border-black/5 hover:bg-black/10"
            href={`/admin/customers/${product.id}`}>
            <h2 className="font-mono font-bold text-lg">{product.brandname}</h2>
            <h2 className="font-mono font-bold text-lg">{product.name}</h2>
            <h2 className="font-mono font-bold text-lg">{product.price}</h2>
            <h2 className="font-mono font-bold text-lg">{product.reviews}</h2>
            <p className="text-sm"> - {product.name}</p>
            <h2 className="font-mono font-bold text-lg">Customer Description Generator</h2>
            <p className="text-xs">Write a detailed and engaging product description for your online store.</p>
          </Link>
        ))}
      </div>
    </div>
  )
}