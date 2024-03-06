import Brands from '@/components/Brands'
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
  title: "Car2Go | Brands",
  description: "Offering top notch brands for you",
};

export default function vehiclesCollection() {
  return (
    <>
    <Navbar />
    <div className='px-48 py-20 xl:h-screen xl:pt-48'>
      <div className='flex flex-col gap-16 justify-center items-center'>
        <div>
          <h1 className='text-5xl text-primary'>Brands</h1>
        </div>
        <Brands />
      </div>
    </div>
    </>
  )
}