
import React from 'react'
import Image from "next/image";
import HardwareIMG from '../../../../public/hardware/hardware.jpg'
import Aluminum from '../../../../public/hardware/aluminumPlates.jpg'

export default async function HardwareCard() {
  const products = [
    {
      id: 1,
      name: 'Earthen Bottle',
      href: '#',
      price: '$48',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg',
      imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    },
    {
      id: 2,
      name: 'Nomad Tumbler',
      href: '#',
      price: '$35',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg',
      imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
    },
    {
      id: 3,
      name: 'Focus Paper Refill',
      href: '#',
      price: '$89',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg',
      imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
    },
    {
      id: 4,
      name: 'Machined Mechanical Pencil',
      href: '#',
      price: '$35',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
      imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
  ]
  return (
    <div className="bg-white font-mono">
      <Image
        src={HardwareIMG}
        width={1400}
        height={100}  
        alt="hardware image"
        className="mx-auto"
      />
      <h2 className="font-bold text-2xl px-4 py-2">Hardware</h2>
      <div className="flex text-2xl px-4 py-2">{/* toolbars  */}item per page
        <div className='flex flex-col'>
          columns
        </div>
      </div>
      <div className="mx-auto max-w-2xl px-4 py-2 sm:px-6 sm:py-8 lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <a key={product.id} href={product.href} className="group">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <Image
                  src={Aluminum}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
                <p className="mt-1 text-lg font-medium float-end mr-4 bg-transparent text-gray-900">{product.price}</p>
              </div>
              <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
              <button className='w-full px-6 py-2 my-2 bg-slate-200/50 hover:bg-slate-300/40'>Checkout</button>
              <button className='w-full px-6 py-2 bg-slate-100/50 hover:bg-slate-200/40'>View Product</button>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
