import AppAdvetisement from '@/components/AppAdvetisement'
import BrandCarousel from '@/components/BrandCarousel'
import CarPreview from '@/components/CarPreview'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import React from 'react'



export default function Home() {
  return (
    <div className='overflow-x-hidden'>
      <Hero />
      <Services />
      <CarPreview />
      <BrandCarousel />
      <AppAdvetisement />
    </div>
  )
}
