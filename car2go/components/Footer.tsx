import { footerLinks } from '@/constant'
import React from 'react'
import { FaFacebookSquare, FaInstagramSquare} from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const currentYear = new Date().getFullYear();


export default function Footer() {
  return (
    <div className='flex flex-col relative w-full xl:h-[38vh] h-[35vh] bg-primary xl:px-48 px-8 pt-10 xl:pt-0 text-white'>
      <div className='flex xl:flex-row flex-col gap-10 xl:gap-0 justify-between items-center'>
        <div className='grid xl:grid-cols-3 grid-cols-3 xl:gap-5 gap-2 xl:w-[60%] xl:h-[40%]'>
          {footerLinks.map((link) => (
            <div className='cursor-pointer' key={link.id}>
              <h6 className='xl:text-xl text-sm'>
                {link.label}
              </h6>
            </div>
          ))}
        </div>
        <div className='flex items-center gap-3 xl:gap-10'>
          <FaFacebookSquare className='xl:size-10 size-8 rounded-lg'/>
          <FaInstagramSquare className='xl:size-10 size-8 rounded-lg'/>
          <FaSquareXTwitter className='xl:size-10 size-8 rounded-lg'/>
        </div>
      </div>
      <div className='absolute bottom-10 left-1/2 transform -translate-x-1/2 -translate-y-1/2o text-center'>
        <span className='xl:text-base text-sm'>
            Copyright &copy; {currentYear}  All rights reserved 
        </span>
      </div>
    </div>
  )
}
