import React, { Suspense } from 'react'
import HardwareCard from '~/app/ui/collections/hardwareCard'
import { CardsSkeleton } from '~/app/ui/skeletons'
import Image from "next/image";
import HardwareIMG from '../../../../../public/hardware/hardware.jpg'

export default function Hardware() {
  return (
    <div>
      <div className="bg-white font-mono">
        <Image
          src={HardwareIMG}
          width={1400}
          height={50}
          alt="hardware image"
          className="mx-auto h-auto"
        />
        <h2 className="font-bold text-2xl px-4 py-2">Hardware</h2>
        <div className="flex text-2xl px-4 py-2">{/* toolbars  */}item per page
          <div className='flex flex-col'>
            columns
          </div>
        </div>
        <Suspense fallback={<CardsSkeleton />}>
          <HardwareCard />
        </Suspense>
      </div>
    </div>
  )
}
