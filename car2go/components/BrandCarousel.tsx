'use client'

import React from 'react'
import Marquee from 'react-fast-marquee'
import useCategories from '@/hooks/useCategories'

export default function BrandCarousel() {
  const { categories } = useCategories();
  return (
      <Marquee className='flex justify-center items-center w-full xl:py-20 py-10 bg-[#D8D8D8]'>
      {categories.map((category) => (
        <div className='xl:mx-28 mx-8' key={category.id}>
          <img src={category.image} alt={category.title} className='xl:h-auto h-16'/>
        </div>
      ))}   
      </Marquee>
  )
}
