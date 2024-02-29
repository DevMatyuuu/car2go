'use client'

import React from 'react'
import Marquee from 'react-fast-marquee'
import useCategories from '@/hooks/useCategories'

export default function BrandCarousel() {
  const { categories } = useCategories();
  return (
      <Marquee className='flex justify-center items-center w-full py-20 bg-[#D8D8D8]'>
      {categories.map((category) => (
        <div className='mx-28'>
          <img src={category.image} alt={category.title}/>
        </div>
      ))}   
      </Marquee>
  )
}
