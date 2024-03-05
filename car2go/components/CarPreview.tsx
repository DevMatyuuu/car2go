'use client'

import ProgressBar from '@ramonak/react-progress-bar'
import React, { useState } from 'react'
import useCarPreview from '@/hooks/useCarPreview'
import Image from 'next/image'

export default function CarPreview() {
  const [selectedOption, setSelectedOption] = useState('')

  const handleSelectedChange = (e: any) => {
    setSelectedOption(e.target.value);
  }

  const { CarPreview } = useCarPreview();

  const selectedCarPreview = CarPreview.find(car => car.id === selectedOption)
  console.log(selectedCarPreview)
  return (
    <div className='xl:px-48 xl:py-20 py-20 xl:mb-10'>
      <div className='flex flex-col justify-center items-center lg:py-10 mb-10'>
        <span className='text-[#FFA800]'>Take a look at this</span>
        <span className='lg:text-5xl text-3xl text-primary'>Car Preview</span>
      </div>
        <div className='flex xl:flex-row flex-col items-center justify-between'>
            <div className='flex flex-col justify-center xl:w-[40%] w-[87%] border-2 border-[#971F20] rounded-lg'>
            <div className='flex relative justify-center items-center gap-1 bg-primary py-4 text-white '>
              <select onChange={handleSelectedChange} value={selectedOption} className='py-2 w-auto px-4 text-start bg-primary text-lg border border-white  rounded-xl' >
                  <option value='Select a car' defaultValue={'Select a car'}>Select a car</option>
                  <option value='Nissan 370z'>Nissan 370z</option>
                  <option value='Porsche Lycan'>Porsche Lycan</option>
                  <option value='Nissan 370z'>Nissan 370z</option>
              </select>
            </div>
            <div className='flex flex-col justify-center'>
              <span className='text-center py-4 text-2xl'>Statistics</span>
            </div>
            <div className='flex flex-col gap-10 px-10 xl:py-10 xl:pb-20  pb-10'>
              <div className='flex flex-col gap-2'>
                <span className='xl:text-2xl'>Speed</span>
                <ProgressBar completed={selectedCarPreview ? selectedCarPreview?.speed as string : '0'} borderRadius='5px' height='30px' bgColor='#971F20' animateOnRender={true}/>
              </div>
              <div className='flex flex-col gap-2'>
                <span className='xl:text-2xl'>Gas Consumption</span>
                <ProgressBar completed={selectedCarPreview ? selectedCarPreview?.gasConsumption as string : '0'} borderRadius='5px' height='30px' bgColor='#971F20' animateOnRender={true}/>
              </div>
              <div className='flex flex-col gap-2'>
                <span className='xl:text-2xl'>Control</span>
                <ProgressBar completed={selectedCarPreview ? selectedCarPreview?.control as string : '0'} borderRadius='5px' height='30px' bgColor='#971F20' animateOnRender={true}/>
              </div>
              <div className='flex flex-col gap-2'>
                <span className='xl:text-2xl'>Weight</span>
                <ProgressBar completed={selectedCarPreview ? selectedCarPreview?.weight as string : '0'} borderRadius='5px' height='30px' bgColor='#971F20' animateOnRender={true}/>
              </div>
            </div>
          </div>
          <div className='flex justify-center xl:w-[60%]'>
            <div className='text-center xl:mt-28 xl:py-0 py-10'>
              <span className='text-2xl'>{selectedCarPreview ? selectedCarPreview?.label : 'Select a car'}</span>
              <img src={selectedCarPreview?.image} className='xl:h-80 h-56' alt={selectedCarPreview?.label} loading='lazy'/>
            </div>
          </div>
        </div>
    </div>
  )
}
