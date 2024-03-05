import Image from 'next/image'
import React from 'react'
import heroImg from '@/assets/hero-img.webp'
import Link from 'next/link'

export default function Hero() {
  return (
    <div className='flex md:flex-col lg:flex-row md:items-center xl:items-start lg:justify-between lg:px-48 lg:py-32 lg:pb-60 md:px-16 py-20 xl:pt-60 pt-32 px-8 h-auto'>
          <div className='flex flex-col lg:justify-start text-center lg:text-start lg:w-[50%]'>
            <span className='text-[#FFA800] ml-1'>
              Plan your trip now
            </span>
            <p className='xl:text-[70px] text-[40px] lg:leading-[85px] xl:mb-16 mb-10'>
              Drive into your next <span className='text-primary'>adventure</span> with us. Your journey, our super wheels.
            </p>
              <Link href={'/brands'}><button className='md:hidden lg:block mx-auto lg:mx-0 bg-primary hover:bg-red-700 text-white lg:w-[30%] w-[70%] h-14 rounded-xl'>Rent now</button></Link>
          </div>
          <div className='hidden md:block lg:block md:w-full lg:w-auto'>
            <Image src={heroImg} alt='hero-img' className='md:mx-auto lg:mx-0 md:h-80 md:w-96 md:mb-5 lg:h-auto lg:w-auto'/>
            <button className='hidden lg:hidden md:block mx-auto lg:mx-0 bg-primary text-white lg:w-[30%] md:w-[70%] w-[70%] h-14 rounded-xl'>Rent now</button>
          </div>
    </div>
  )
}
