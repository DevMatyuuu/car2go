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
    <div className='flex flex-col gap-16 px-48 py-20 h-screen xl:pt-56'>
        <Link className='flex items-center' href={'/brands'}>
          <MdOutlineKeyboardArrowLeft className='size-10 text-primary'/>
          <button className='text-lg'>Back</button>
        </Link>
        <div className='flex gap-16 items-center'>
          {selectedVehicles.map(vehicle => 
          <div key={vehicle.id} onClick={() => seeDetails(vehicle.category, vehicle.id)} className='flex flex-col relative items-center px-2 py-5 w-[400px] group'>
            <div className='absolute inset-0 bg-black/5 group-hover:bg-black/20 group-hover:scale-102 duration-500 rounded-xl'></div>
            <img src={vehicle.image} alt={vehicle.title} className='h-44 mb-5'/>
            <span>{vehicle.title}</span>
            <button className='hidden absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/75 hover:bg-white duration-500 px-5 py-5 rounded-full z-50 group-hover:block cursor-pointer'>Learn more</button>
          </div>
          )}
        </div>
    </div>
    </>
  )
}