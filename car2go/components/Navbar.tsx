import React from 'react'
import logo from '@/public/car2go-logo.webp'
import Image from 'next/image'
import { navLinks } from '@/constant'
import Link from 'next/link'

export default function Navbar() {
  return (
    <div>
      <div className='flex xl:px-48 xl:py-4 lg:px-28 md:px-20 px-8 py-6 items-center justify-between'>
        <Image src={logo} alt='Logo' className='lg:h-16 lg:w-20 h-12 w-14' priority/>
        <div className='flex items-center xl:gap-32 lg:gap-16'>
          <div className='lg:flex hidden xl:gap-16 lg:gap-8'>
            {navLinks.map((link) => (
              <div key={link.id} className='hover:text-primary'>
                <Link href={link.route}>{link.label}</Link>
              </div>
            ))}
          </div>
          <div className='flex xl:gap-8 lg:gap-6 gap-5 items-center'>
            <Link href={'/login'} className='underline underline-offset-3 hover:text-primary'>Login</Link>
            <Link href={'/register'}>
              <button className='lg:px-8 lg:py-3 px-4 py-2 bg-primary hover:bg-red-700 lg:text-base text-xs text-white lg:rounded-xl rounded-lg'>Register</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
