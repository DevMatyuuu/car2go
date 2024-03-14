'use client'

import React, { useEffect, useState } from 'react'
import useVehicles from '@/hooks/useVehicles';
import CarDetailsNavbar from '@/components/CarDetailsNavbar';
import useUserDetails from '@/hooks/useUserDetails';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { CalendarIcon } from "@radix-ui/react-icons"
import { format } from "date-fns"
 
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import useRentDateStore from '@/store/rentDateStore';

interface Props {
  params: {
      id: string;
  };
}

export default function CarDetails({ params }: Props) {
  const [setDateDifference, pickupDate, setPickupDate, returnDate, setReturnDate] = useRentDateStore((state) => [state.setDateDifference, state.pickupDate, state.setPickupDate, state.returnDate, state.setReturnDate]);

  const { vehicles } = useVehicles();
  const { user } = useUserDetails();

  const paramsId = params.id;

  const selectedVehicleDetails = vehicles.find(vehicle => vehicle.id === paramsId)

  const router = useRouter();

  const confirmation = (id: string | undefined) => {
    router.push(`/confirmation/${id}`)
  }

  useEffect(() => {
    const diffTime = Math.abs((pickupDate as any) - (returnDate as any));
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    setDateDifference(diffDays);
  }, [pickupDate, returnDate])

  return (
    <>
    <CarDetailsNavbar />
    <div className='flex justify-center xl:py-0 xl:px-0 h-auto'>
      {selectedVehicleDetails ? 
      <div className='flex flex-col'>
        <div key={selectedVehicleDetails.id}>
          <img src={selectedVehicleDetails.header} alt={selectedVehicleDetails.title} className='w-[200vw] xl:h-[100vh] h-[30vh]'/>
        </div>
        <div className={user ? 'flex xl:py-40' : 'flex xl:py-40 items-center'}>
          <div className=''>
            <img src={selectedVehicleDetails.detailsImage} className='xl:block hidden xl:h-[600px] xl:w-[2800px] xl:rounded-r-full'/>
          </div>
          <div className='flex flex-col gap-7 w-full text-start xl:pr-48 xl:pl-28 py-20 xl:py-0'>
            <span className='text-primary xl:text-7xl text-3xl text-center xl:text-start px-8 xl:px-0'>{selectedVehicleDetails.title}</span>
            <div className='px-8 xl:px-0 text-sm xl:text-base'>
              <p>{selectedVehicleDetails.description}</p>
            </div>
            {user 
            ? 
            <div className='flex flex-col gap-7 xl:mt-7'>
              <div className='flex flex-col xl:flex-row justify-center items-center gap-5'>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-[240px] justify-start text-left font-normal",
                        !pickupDate && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {pickupDate ? format(pickupDate, "PPP") : <span>Pick a pick-up date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={pickupDate as any}
                      onSelect={setPickupDate}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-[240px] justify-start text-left font-normal",
                        !returnDate && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {returnDate ? format(returnDate, "PPP") : <span>Pick a return date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={returnDate as Date}
                      onSelect={setReturnDate}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>
              <div className='mx-auto'>
                <button onClick={() => confirmation(selectedVehicleDetails.id)} className={`${pickupDate === '' ? 'cursor-not-allowed' : 'hover:bg-red-700'} text-white bg-primary px-6 py-3 rounded-lg`} disabled={pickupDate == undefined}>
                  Rent this car
                </button>
              </div>
            </div>
            : 
            <div>
              <Link href={'/login'} className='text-primary underline underline-offset-2'>Log-in your account to rent a car</Link>
            </div>}
          </div>
        </div>
      </div>: ''}
    </div>
    </>
  )
}