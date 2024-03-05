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
    <div className='flex justify-center xl:py-0 xl:px-0 h-auto'>
      {selectedVehicleDetails ? 
      <div className='flex flex-col'>
        <div key={selectedVehicleDetails.id}>
          <img src={selectedVehicleDetails.header} alt={selectedVehicleDetails.title} className='w-[200vw] h-[78vh]'/>
        </div>
        <div className='flex items-center xl:py-40'>
          <div className=''>
            <img src={selectedVehicleDetails.detailsImage} className='xl:h-[600px] xl:w-[2500px] xl:rounded-r-full'/>
          </div>
          <div className='flex flex-col gap-7 w-full text-start xl:px-48'>
            <span className='text-primary text-7xl'>{selectedVehicleDetails.title}</span>
            <div>
              <p>{selectedVehicleDetails.description}</p>
            </div>
            <div className='xl:pt-7'>
              <button className='bg-primary px-6 py-3 rounded-lg text-white hover:bg-red-700'>Rent this car</button>
            </div>
          </div>
        </div>
      </div>: ''}
    </div>
  )
}