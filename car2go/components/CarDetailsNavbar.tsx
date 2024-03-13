'use client'

import logo from '@/public/car2go-logo.webp'
import Image from 'next/image'
import { navLinks } from '@/constant'
import Link from 'next/link'
import useUserDetails from '@/hooks/useUserDetails'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { MdKeyboardArrowDown } from "react-icons/md";
import { useRouter } from 'next/navigation'
import { signOut } from 'firebase/auth'
import { auth } from '@/firebase/firebase'
import { Divide, Divide as Hamburger } from 'hamburger-react'
import { useEffect, useState } from 'react'
import { IoLogOutOutline } from "react-icons/io5";


export default function CarDetailsNavbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isScroll, setIsScroll] = useState<string | null | boolean>(false);

  const { user } = useUserDetails();

  const router = useRouter();

  const handleLogout = () => {               
    signOut(auth)
    .then(() => {
        router.push("/");
    })
    .catch((error) => {
    });
  }

  useEffect(() => {
    window.addEventListener("scroll", checkClassNav);
  }, []);

  const checkClassNav = () => {
    if (window.scrollY >= 80) {
      setIsScroll("");
    } else {
      setIsScroll(null);
    }
  };


  return (
    <div className='fixed w-full z-50'>
      <div className={`${window.scrollY >= 80 ? 'text-black bg-white' : 'text-white bg-transparent'} flex top-0 xl:px-48 xl:py-6 lg:px-28 md:px-20 px-8 py-4 items-center justify-between`}>
        <Image src={logo} alt='Logo' className='lg:h-16 lg:w-20 h-12 w-14' priority/>
        <div className='hidden lg:flex items-center xl:gap-32 lg:gap-16'>
          <div className='lg:flex hidden xl:gap-16 lg:gap-8'>
            {navLinks.map((link) => (
              <div key={link.id} className='hover:text-red-700'>
                <Link href={link.route}>{link.label}</Link>
              </div>
            ))}
          </div>
          {user 
          ? 
          <div className='flex xl:gap-8 lg:gap-6 gap-5 items-center'>
            <DropdownMenu>
              <DropdownMenuTrigger className='flex gap-1 items-center'>
                <span className={`${window.scrollY >= 80 ? 'text-primary' : 'text-white'} hover:text-red-700`}>{user.email}</span>
                <MdKeyboardArrowDown />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem className='cursor-pointer hover:bg-gray-100'> My Profile</DropdownMenuItem>
                <DropdownMenuItem className='cursor-pointer hover:bg-gray-100'> History</DropdownMenuItem>
                <DropdownMenuSeparator />
                  <Dialog>
                    <DialogTrigger className='w-full text-start px-2.5 py-2 text-sm hover:bg-gray-100'>Log out</DialogTrigger>
                    <DialogContent className='h-[20vh]'>
                      <DialogHeader className='flex flex-col justify-center items-center gap-5'>
                        <DialogTitle>Are you sure you want to logout?</DialogTitle>
                        <div className='flex justify-center gap-5'>
                          <DialogClose>
                            <button className='bg-red-500 hover:bg-red-800 text-white py-1.5 px-5 rounded-lg'>
                              Cancel
                            </button>
                          </DialogClose>
                          <DialogClose>
                            <button onClick={handleLogout} className='font-bold'>
                                Logout
                            </button>
                          </DialogClose>
                        </div>
                      </DialogHeader>
                    </DialogContent>
                  </Dialog>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          :
          <div className='flex xl:gap-8 lg:gap-6 gap-5 items-center'>
            <Link href={'/login'} className='underline underline-offset-3 hover:text-red-700'>Login</Link>
            <Link href={'/signup'}>
              <button className='lg:px-8 lg:py-3 px-4 py-2 bg-primary hover:bg-red-700 lg:text-base text-xs text-white lg:rounded-xl rounded-lg'>Register</button>
            </Link>
          </div>  }
        </div>
        {/* mobile nav */}
        <div className='lg:hidden'>
            <Divide toggle={setIsOpen} toggled={isOpen} />
        </div>
      </div>
      <div className={`${!isOpen ? '-right-[1000px]' : 'right-0' } flex-col xl:flex-row lg:hidden h-screen duration-500 ease-in-out py-24 absolute flex items-center w-full bg-white`}>
        <div className='flex h-[45vh] lg:hidden flex-col items-center justify-center xl:gap-16 lg:gap-8 w-full gap-14 px-8'>
          {navLinks.map((link) => (
            <div key={link.id} className='hover:text-primary text-3xl'>
              <Link href={link.route}>{link.label}</Link>
            </div>
          ))}
          <Link href={`/history/${user?.uid}`} className='hover:text-primary text-3xl'>History</Link>
          <Link href={'/'} className='hover:text-primary text-3xl'>My Account</Link>
        </div>
        {user 
          ? 
          <div className='flex flex-col gap-3 justify-center items-center px-8 w-full mt-56'>
            <div>
              <span className='text-xl text-primary'>{user.email}</span>
            </div>
            <Dialog>
              <DialogTrigger className='flex items-center justify-center gap-1 w-full text-start text-sm'>
                <span className='text-lg'>Log out</span>
                <IoLogOutOutline className='size-10'/>
              </DialogTrigger>
              <DialogContent className='h-[20vh] w-[80%] rounded-xl'>
                <DialogHeader className='flex flex-col justify-center items-center gap-5'>
                  <DialogTitle>Are you sure you want to logout?</DialogTitle>
                  <div className='flex justify-center gap-5'>
                    <DialogClose>
                      <button className='bg-red-500 hover:bg-red-800 text-white py-1.5 px-5 rounded-lg'>
                        Cancel
                      </button>
                    </DialogClose>
                    <DialogClose>
                      <button onClick={handleLogout} className='font-bold'>
                          Logout
                      </button>
                    </DialogClose>
                  </div>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </div>
          :
          <div className='flex flex-col gap-5 items-center w-full px-8 mt-40'>
            <Link href={'/login'} className='border-2 border-primary w-full hover:text-primary text-center py-3 rounded-lg text-xl'>Login</Link>
            <Link href={'/signup'} className='bg-primary hover:bg-red-700 text-xl w-full text-white rounded-lg py-4 text-center'>Register</Link>
          </div>  }
      </div>
    </div>
  )
}
