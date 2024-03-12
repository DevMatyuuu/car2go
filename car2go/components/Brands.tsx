'use client'

import useCategories from '@/hooks/useCategories'
import { useRouter } from 'next/navigation';
import React from 'react'

export default function Brands() {
  const { categories } = useCategories();

  const router = useRouter();

  const seeVehicles = (title: string | undefined) => {
    router.push(`/brands/${title}`)
  }
  
  return (
    <div className='grid xl:grid-cols-4 grid-cols-2 xl:gap-20 gap-20 items-center cursor-pointer'>
      {categories.map((category) => (
        <div key={category.id} onClick={() => seeVehicles(category.title)}>
          <img src={category.image} alt={category.title} className='xl:w-auto w-28 mx-auto'/>
        </div>
      ))}
    </div>
  )
}
