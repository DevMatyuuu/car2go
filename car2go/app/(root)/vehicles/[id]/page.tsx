'use client'

import useVehicles from '@/hooks/useVehicles';
import React from 'react'

interface Props {
  params: {
      id: string;
  };
}

export default function carDetails({ params }: Props) {
  const { vehicles } = useVehicles();

  const paramsId = params.id

  const selectedVehicles = vehicles.filter(vehicle => vehicle.category === paramsId)

  console.log(selectedVehicles)

  return (
    <div className='flex gap-16 px-48 py-20 h-auto'>
        {selectedVehicles.map(vehicle => 
        <div key={vehicle.id} className='flex flex-col relative items-center px-2 py-5 w-[400px] group'>
          <div className='absolute inset-0 bg-black/5 group-hover:bg-black/20 group-hover:scale-102 duration-500 rounded-xl'></div>
          <img src={vehicle.image} alt={vehicle.title} className={`${vehicle.id === 'Nissan r34' ? 'h-48 mt-7 mb-4' : 'h-60'}`}/>
          <span>{vehicle.title}</span>
          <button className='hidden absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/75 hover:bg-white duration-500 px-5 py-5 rounded-full z-50 group-hover:block cursor-pointer'>Learn more</button>
        </div>
        )}
    </div>
  )
}




