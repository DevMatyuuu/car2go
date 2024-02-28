'use client'

import { stats } from '@/constant'
import ProgressBar from '@ramonak/react-progress-bar'
import React from 'react'

export default function CarPreview() {
  return (
    <div className='xl:px-48 xl:py-20'>
      <div className='flex flex-col justify-center items-center lg:py-10 mb-10'>
        <span className='text-[#FFA800]'>Take a look at this</span>
        <span className='lg:text-5xl text-3xl text-primary'>Car Preview</span>
      </div>
      <div>
        <div className='flex flex-col justify-center xl:w-[40%] border-2 border-[#971F20] rounded-lg'>
          <div className='text-center bg-primary py-4'>
            <span className='text-white text-2xl'>Nissan 370z</span>
          </div>
          <div className='flex flex-col justify-center'>
            <span className='text-center py-4 text-2xl'>Statistics</span>
          </div>
          <div className='flex flex-col gap-10 px-10 py-10'>
            {stats.map((stat) => (
              <div key={stat.id} className='flex flex-col gap-2'>
                <span className='text-2xl'>{stat.label}</span>
                <ProgressBar completed={stat.value} borderRadius='5px' height='30px' bgColor='#971F20' animateOnRender={true}/>
              </div>
            ))}
            <div>
              <span></span>
            </div>
          </div>
        </div>
        <div>

        </div>
      </div>
    </div>
  )
}
