import React from 'react'
import phone from '@/assets/phone.webp'
import googlePlayLogo from '@/assets/google-play-logo.webp'
import Image from 'next/image'

export default function AppAdvetisement() {
  return (
    <div className='md:bg-appAdsBG bg-primary xl:h-screen h-[65vh] bg-cover bg-no-repeat w-[104%] relative xl:px-48 xl:py-20 px-8'>
      <Image src={phone} alt='phone' className='absolute top-[350px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 xl:translate-x-0 xl:translate-y-0 xl:top-48 xl:left-72 xl:h-[600px] h-[250px] w-[300px] xl:w-[700px]'/>
      <div className='xl:float-right xl:mt-28 pt-20'>
        <div className='flex flex-col items-center'>
          <span className='xl:text-6xl text-3xl xl:text-start text-center xl:px-0 px-5 text-white xl:text-black'>Download our App now!</span>
          <Image src={googlePlayLogo} alt='google-play-logo' className='xl:w-auto xl:h-auto w-48 h-16'/>
        </div>
      </div>
    </div>
  )
}
