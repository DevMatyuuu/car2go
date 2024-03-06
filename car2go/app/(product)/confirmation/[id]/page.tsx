'use client'

import Navbar from '@/components/Navbar';
import { db } from '@/firebase/controller';
import useUserDetails from '@/hooks/useUserDetails'
import useVehicles from '@/hooks/useVehicles';
import useRentDateStore from '@/store/rentDateStore';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import React, { useId } from 'react'

interface Props {
  params: {
      id: string;
  };
}

export default function Confirmation({ params }: Props) {
  const [dateDifference, pickupDate, returnDate] = useRentDateStore((state) => [state.dateDifference, state.pickupDate, state.returnDate])
  const { user } = useUserDetails();
  const { vehicles } = useVehicles();

  const randomId = useId();

  const paramsId = params.id;

  const selectedVehicleConfirmation = vehicles.find(vehicle => vehicle.id === paramsId)

  const rentCar = async () => {
    const docRef = await addDoc(collection(db, 'history'), {
      email: user?.email,
      uid: user?.uid,
      id: randomId, 
      title: selectedVehicleConfirmation?.title,
      timestamp: serverTimestamp(),
      image: selectedVehicleConfirmation?.image
    }); 
  }

  const rentPrice = dateDifference as number * 5000

  return (
    <>
    <Navbar />
    {user
    ?
    <div className='flex pt-48 pb-20 px-48 justify-center'>
      <div className='flex'>
        <span className='text-4xl'>Confirmation</span>
        <span>{selectedVehicleConfirmation?.title}</span>
        <span>{dateDifference}</span>
      </div>
    </div> 
    :
    ''}
    </>
  )
}
