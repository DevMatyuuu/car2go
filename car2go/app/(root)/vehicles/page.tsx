import Brands from '@/components/Brands'
import React from 'react'

export default function vehicles() {
  return (
    <div className='px-48 py-20'>
      <div className='flex flex-col gap-16 justify-center items-center'>
        <div>
          <h1 className='text-5xl'>Brands</h1>
        </div>
        <Brands />
      </div>
    </div>
  )
}

