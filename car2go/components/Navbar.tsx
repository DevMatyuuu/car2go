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


export default function Navbar() {

  const { user } = useUserDetails();

  const router = useRouter();

  const handleLogout = () => {               
    signOut(auth).then(() => {
        router.push("/");
    }).catch((error) => {
    });
}

  return (
    <div className='fixed w-full z-50'>
      <div className='flex bg-white top-0 xl:px-48 xl:py-6 lg:px-28 md:px-20 px-8 py-6 items-center justify-between'>
        <Image src={logo} alt='Logo' className='lg:h-16 lg:w-20 h-12 w-14' priority/>
        <div className='flex items-center xl:gap-32 lg:gap-16'>
          <div className='lg:flex hidden xl:gap-16 lg:gap-8'>
            {navLinks.map((link) => (
              <div key={link.id} className='hover:text-primary'>
                <Link href={link.route}>{link.label}</Link>
              </div>
            ))}
          </div>
          {user 
          ? 
          <div className='flex xl:gap-8 lg:gap-6 gap-5 items-center'>
            <DropdownMenu>
              <DropdownMenuTrigger className='flex gap-1 items-center'>
                <span className='text-primary'>{user.email}</span>
                <MdKeyboardArrowDown />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem className='cursor-pointer'> My Profile</DropdownMenuItem>
                <DropdownMenuItem className='cursor-pointer'> History</DropdownMenuItem>
                <DropdownMenuSeparator />
                  <Dialog>
                    <DialogTrigger className='w-full text-start px-2.5 text-sm'>Log out</DialogTrigger>
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
            <Link href={'/login'} className='underline underline-offset-3 hover:text-primary'>Login</Link>
            <Link href={'/signup'}>
              <button className='lg:px-8 lg:py-3 px-4 py-2 bg-primary hover:bg-red-700 lg:text-base text-xs text-white lg:rounded-xl rounded-lg'>Register</button>
            </Link>
          </div>  }
        </div>
      </div>
    </div>
  )
}
