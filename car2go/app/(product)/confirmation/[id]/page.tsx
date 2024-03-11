'use client'

import Navbar from '@/components/Navbar';
import { db } from '@/firebase/controller';
import useUserDetails from '@/hooks/useUserDetails'
import useVehicles from '@/hooks/useVehicles';
import useRentDateStore from '@/store/rentDateStore';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import React, { useId, useState } from 'react'
import { format } from "date-fns"
import { paymentModes } from '@/constant';
import Image from 'next/image';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import Lottie from 'lottie-react'
import thanksAnimation from '@/assets/thanks-animation.json'

interface Props {
  params: {
      id: string;
  };
}


export default function Confirmation({ params }: Props) {
  const [dateDifference, pickupDate, returnDate] = useRentDateStore((state) => [state.dateDifference, state.pickupDate, state.returnDate]);
  const [activePayment, setActivePayment] = useState<null | number>(null);

  const { user } = useUserDetails();
  const { vehicles } = useVehicles();

  const handlePaymentClick = (id: number | null) => {
    setActivePayment(id);
  };

  const randomId = useId();

  const paramsId = params.id;

  const selectedVehicleConfirmation = vehicles.find(vehicle => vehicle.id === paramsId)

  const rentPrice = dateDifference as number * 5000;
  const percentage = rentPrice * .05;
  const totalPrice = rentPrice - percentage ;

  const rentCar = async () => {
    const docRef = await addDoc(collection(db, 'history'), {
      email: user?.email,
      uid: user?.uid,
      id: randomId, 
      title: selectedVehicleConfirmation?.title,
      timestamp: serverTimestamp(),
      image: selectedVehicleConfirmation?.image,
      pickUp: format(pickupDate as any, "PPP"),
      return: format(returnDate as any, "PPP"),
      Price: totalPrice,
    }); 
  };

  return (
    <>
    <Navbar />
    {user
    ?
    <div className='flex flex-col pt-48 pb-20 px-48 justify-center w-full h-auto items-center'>
      <div className='flex mb-10'>
        <span className='text-4xl text-center text-primary'>Confirmation</span>
      </div>
      <div className='w-full'>
        <div className='bg-primary py-3 - px-10'>
          <span className='text-xl text-white'>This is a confirmation regarding the car of your choice:</span>
        </div>
        <div className='flex gap-20 py-20 w-full'>
          <img src={selectedVehicleConfirmation?.image} alt={selectedVehicleConfirmation?.title} className='w-[70%]'/>
          <div className='flex gap-10 h-full w-full'>
            <div className='flex flex-col justify-start gap-7 w-[50%] px-10 bg-slate-200 py-10 rounded-lg'>
              <span>Details:</span>
              <span>Car model: {selectedVehicleConfirmation?.title}</span>
              <span>Pick-up Date: {format(pickupDate as any, "PPP")}</span>
              <span>Return Date: {format(returnDate as any, "PPP")}</span>
              <span>Location: 184 Tumbang Preso bldg, Mandaluyong City</span>
            </div>
            <div className='flex flex-col gap-5 w-[50%] py-10 justify-center px-10 bg-slate-200 rounded-lg'>
              <span>Billing:</span>
              <span>Base Rate: ₱5000</span>
              <span>Number of days booked: {dateDifference} days</span>
              <span>Rent price: ₱{rentPrice}</span>
              <span>Tax: ₱{ percentage } (5% of Rent Price)</span>
              <h2 className='text-xl pt-7'>Total Price: <span className='text-primary'>₱{totalPrice}</span></h2>
            </div>
          </div>
        </div>
        <div className='bg-primary py-3 - px-10'>
          <span className='text-xl text-white'>Mode of Payment:</span>
        </div>
        <div className='flex justify-start py-12 gap-10'>
          {paymentModes.map((mode) => (
            <div key={mode.id}>
              <Image onClick={() => handlePaymentClick(mode.id)} key={mode.id} src={mode.image} alt={mode.label} className={`${activePayment === mode.id ? 'border-4 border-yellow-500 brightness-100' : 'brightness-75'} h-32 w-40 rounded-xl cursor-pointer hover:scale-105 duration-500 hover:brightness-100`}/>
            </div>
          ))}
        </div>
        <div className='flex justify-center items-center gap-7 mt-32 text-base'>
          <button className='underline text-primary underline-offset-2 hover:text-red-700'>Cancel</button>
          <div>
            <Dialog>
              <DialogTrigger onClick={rentCar} disabled={activePayment === null} className={`${activePayment === null ? 'cursor-not-allowed' : 'cursor-pointer hover:bg-red-700'} w-full text-start px-8 py-3 text-sm bg-primary rounded-lg text-white`}>Confirm</DialogTrigger>
              <DialogContent className='h-auto py-10'>
                <DialogHeader className='flex flex-col justify-center items-center gap-5'>
                  <DialogTitle>Thank you for Confirming your order</DialogTitle>
                  <div>
                    <Lottie animationData={thanksAnimation} loop={false}/>
                  </div>
                  <div className='w-full text-center'>
                    <span>You may now check your history to see your transactions</span>
                  </div>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </div> 
    :
    ''}
    </>
  )
}
