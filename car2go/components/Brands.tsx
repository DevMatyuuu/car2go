'use client'

import useCategories from '@/hooks/useCategories'
import { useRouter } from 'next/navigation';
import React from 'react'

export default function Brands() {
  const { categories } = useCategories();
  console.log(categories)

  const router = useRouter();

  const seeVehicles = (title: string | undefined) => {
    router.push(`/vehicles/${title}`)
  }
  
  return (
    <div className='flex gap-20 items-center cursor-pointer'>
      {categories.map((category) => (
        <div key={category.id} onClick={() => seeVehicles(category.title)}>
          <img src={category.image} alt={category.title}/>
        </div>
      ))}
    </div>
  )
}
