import { services } from '@/constant'
import React from 'react'


export default function Services() {
  return (
    <div className='flex flex-col bg-primary text-white xl:h-auto h-auto xl:px-48 px-8 py-20 xl:py-20'>
      <div className='flex flex-col justify-center items-center lg:py-10 mb-10'>
        <span className='text-[#FFA800]'>Our Main</span>
        <span className='lg:text-5xl text-3xl'>Services</span>
      </div>
      <div className='flex lg:flex-row flex-col gap-20 lg:gap-0 justify-between'>
        {services.map((service) => (
          <div key={service.id} className='flex flex-col items-center gap-5'>
            <span className='hidden md:block'>{service.icon}</span>
            <span className='md:hidden block'>{service.iconMobile}</span>
            <span className='lg:text-2xl'>{service.label}</span>
            <p className='xl:w-[380px] w-[300px] text-xs xl:text-justify text-center xl:leading-5'>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
