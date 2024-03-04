'use client'

import React, { useState } from 'react'
import { useFormik, FormikProps } from 'formik'
import { auth } from '@/firebase/firebase'
import { SignUpSchema } from '../validation/Validation'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { useRouter } from 'next/navigation'
import logo from '@/public/car2go-logo.webp'
import banner from '@/public/banner.webp'
import Image from 'next/image'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { RiErrorWarningFill } from 'react-icons/ri'
import Link from 'next/link'


const initialValues = {
  email: '',
  password: '',
  cpassword: '',
}

export default function SignUp() {

  const [alreadyUsed, setAlreadyUsed] = useState<string | null>(null)

  const router = useRouter()

  const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;

  const {values, handleChange, handleSubmit, errors }: FormikProps<SignupValues> = useFormik<SignupValues>({
    initialValues: initialValues,
    validationSchema: SignUpSchema,
    validateOnChange: false,
    onSubmit: () => {},
  });

  const handleUserSignup = () => {

    setAlreadyUsed(null)

    const email = values.email 
    const password = values.password
  
    if (!emailRegex.test(email)) {
      console.error('The email address is not formatted correctly.');
      return; 
    }
  
    createUserWithEmailAndPassword(auth, email, password)
      .then(data => {
        console.log(data, 'authData');
        router.push('/login')
      })
      .catch((error) => {
        if (error.code == "auth/email-already-in-use") {
          setAlreadyUsed("The email address is already in use")
        }
      });
  }

  return (
      <div className='flex justify-center items-center h-screen bg-primary xl:bg-white'>
        <div className='flex h-[600px] xl:h-[650px] lg:h-[500px] md:h-[500px] shadow-2xl rounded-xl bg-white'>
          <form onSubmit={handleSubmit} className='flex flex-col justify-center w-[430px] xl:w-[550px] md:w-[350px] items-center py-12 rounded-xl md:rounded-r-none'>
            <Image src={logo} alt='devoro-logo' className='xl:h-24 xl:w-28 h-16 w-20 mb-10' priority/>
            <div className='flex items-center flex-col gap-5 w-full'>
              <div className='flex relative  w-full'>
                <div className='flex tems-center gap-4 w-full justify-center'>
                  <input onChange={handleChange} value={values.email} id="email" name="email" type='text' placeholder='Email' className='xl:w-[50%] w-[80%] px-2 py-2 rounded-lg border border-black/30'/>
                </div>
                <div className='absolute xl:right-[107px] right-14 top-2'>
                  {errors.email &&
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <RiErrorWarningFill size={24} className='text-red-800'/>
                      </TooltipTrigger>
                      <TooltipContent side='left'>
                        <p className=' text-white xl:text-base text-[14px]'>{errors.email}</p>
                      </TooltipContent>      
                    </Tooltip>
                  </TooltipProvider>
                  }  
                  {alreadyUsed &&
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <RiErrorWarningFill size={24} className='text-red-800'/>
                      </TooltipTrigger>
                      <TooltipContent side='left'>
                        <p className='text-white xl:text-base text-[14px]'>{alreadyUsed}</p>
                      </TooltipContent>      
                    </Tooltip>
                  </TooltipProvider>}  
                </div>
              </div>
              <div className='flex relative w-full'>
                <div className='flex tems-center gap-4 w-full justify-center'>
                  <input onChange={handleChange} value={values.password} id="password" name="password" type='password' placeholder='Password' className='xl:w-[50%] w-[80%] px-2 py-2 rounded-lg border border-black/30'/>
                </div>
                <div className='absolute xl:right-[107px] right-14  top-2'>
                  {errors.password &&
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <RiErrorWarningFill size={24} className='text-red-800'/>
                      </TooltipTrigger>
                      <TooltipContent side='left'>
                        <p className='text-white xl:text-base text-[14px]'>{errors.password}</p>
                      </TooltipContent>      
                    </Tooltip>
                  </TooltipProvider>
                  }     
                </div>
              </div>
              <div className='flex relative mb-5 w-full'>
                <div className='flex tems-center gap-4 w-full justify-center'>
                  <input onChange={handleChange} value={values.cpassword} id="cpassword" name="cpassword" type='password' placeholder='Confirm Password' className='xl:w-[50%] w-[80%] px-2 py-2 rounded-lg border border-black/30'/>
                </div>
                <div className='absolute xl:right-[107px] right-14 top-2'>
                  {errors.cpassword &&
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <RiErrorWarningFill size={24} className='text-red-800'/>
                      </TooltipTrigger>
                      <TooltipContent side='left'>
                        <p className='text-white xl:text-base text-[14px]'>{errors.cpassword}</p>
                      </TooltipContent>      
                    </Tooltip>
                  </TooltipProvider>
                  }     
                </div>
              </div>
            </div>
            <div className='flex flex-col items-center text-center gap-5 xl:w-[50%] w-[80%]'>
              <button type='submit' onClick={handleUserSignup} className='bg-primary py-2 xl:px-24 w-full rounded-md font-semibold hover:bg-red-700 text-white'>Sign up</button>
              <div className='flex items-center gap-1 text-sm w-[110%] justify-center'>
                  <span>Already have an account?</span>
                  <Link href={'/login'} className='text-primary underline hover:font-normal'>Login</Link>
              </div>
            </div>
          </form>
          <div>
            <Image src={banner} alt='formImg' className='h-full w-[450px] rounded-r-2xl lg:block hidden md:block'/> 
          </div>
        </div>
      </div>
  )
}
