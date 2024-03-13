import { footerLinks } from '@/constant'
import { Poppins } from 'next/font/google';
import React from 'react'
import { FaFacebookSquare, FaInstagramSquare} from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const currentYear = new Date().getFullYear();

const poppins = Poppins({
  subsets: ["latin"],
  weight: "300"
});


export default function Footer() {
  return (
    <div className={`${poppins.className} flex flex-col relative w-full xl:h-[38vh] h-[35vh] bg-primary xl:px-48 px-8 pt-16 xl:pt-16 text-white`}>
      <div className='flex xl:flex-row flex-col gap-20 xl:gap-0 justify-between items-center'>
        <div className='grid xl:grid-cols-3 grid-cols-3 xl:gap-5 gap-2 xl:w-[60%] xl:h-[40%]'>
          {footerLinks.map((link) => (
            <div className='cursor-pointer' key={link.id}>
              <h6 className='xl:text-lg text-sm'>
                <span className='hover:text-[#FFA800]'>{link.label}</span>
              </h6>
            </div>
          ))}
        </div>
        <div className='flex items-center gap-3 xl:gap-10'>
          <FaFacebookSquare className='xl:size-10 size-6 rounded-lg cursor-pointer'/>
          <FaInstagramSquare className='xl:size-10 size-6 rounded-lg cursor-pointer'/>
          <FaSquareXTwitter className='xl:size-10 size-6 rounded-lg cursor-pointer'/>
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
