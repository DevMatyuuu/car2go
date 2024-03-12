'use client'

import useVehicles from '@/hooks/useVehicles';
import React from 'react'
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import Navbar from '@/components/Navbar';



interface Props {
  params: {
      vehicles: string;
  };
}

export default function Vehicles({ params }: Props) {
  const { vehicles } = useVehicles();

  const router = useRouter();

  const seeDetails = (category: string | undefined, id: string | undefined) => {
    router.push(`/brands/${category}/${id}`)
  }

  const paramsId = params.vehicles

  const selectedVehicles = vehicles.filter(vehicle => vehicle.category === paramsId)

  return (
    <>
    <Navbar />
    <div className='flex flex-col gap-16 xl:px-48 px-8 py-40 h-screen xl:pt-48'>
        <Link className='flex items-center' href={'/brands'}>
          <MdOutlineKeyboardArrowLeft className='size-10 text-primary'/>
          <button className='text-lg'>Back</button>
        </Link>
        <div className='flex xl:gap-16 gap-6 items-center'>
          {selectedVehicles.map(vehicle => 
          <div key={vehicle.id} onClick={() => seeDetails(vehicle.category, vehicle.id)} className='flex flex-col relative items-center justify-center px-2 py-5 xl:w-[400px] w-[250px] xl:h-72 h-48 group cursor-pointer hover:bg-black/20 rounded-xl'>
            <div className='absolute inset-0 bg-black/5 xl:group-hover:bg-black/20 xl:group-hover:scale-102 duration-500 rounded-xl'></div>
            <img src={vehicle.image} alt={vehicle.title} className='xl:h-44 h-20 mb-5'/>
            <span className='xl:text-base text-sm'>{vehicle.title}</span>
            <button className='hidden absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/75 hover:bg-white duration-500 px-5 py-5 rounded-full z-50 xl:group-hover:block cursor-pointer'>Learn more</button>
          </div>
          )}
        </div>
    </div>
    </>
  )
}