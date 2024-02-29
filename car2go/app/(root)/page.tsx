import BrandCarousel from '@/components/BrandCarousel'
import CarPreview from '@/components/CarPreview'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import React from 'react'


export default function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <CarPreview />
      <BrandCarousel />
    </div>
  )
}
