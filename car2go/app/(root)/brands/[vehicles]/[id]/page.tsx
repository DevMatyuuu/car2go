'use client'

import React from 'react'
import useVehicles from '@/hooks/useVehicles';

interface Props {
  params: {
      id: string;
  };
}

export default function CarDetails({ params }: Props) {
  const { vehicles } = useVehicles();

  const paramsId = params.id;

  const selectedVehicleDetails = vehicles.find(vehicle => vehicle.id === paramsId)
  console.log(paramsId)
  return (
    <div className='flex justify-center xl:py-0 xl:px-0 h-screen xl:pt-28'>
      {selectedVehicleDetails ? 
      <div className='flex flex-col'>
        <div key={selectedVehicleDetails.id}>
          <img src={selectedVehicleDetails.header} alt={selectedVehicleDetails.title} className='w-[200vw] h-[85vh]'/>
        </div>
        <div>
          <span>{selectedVehicleDetails.title}</span>
        </div>
      </div>: ''}
    </div>
  )
}
