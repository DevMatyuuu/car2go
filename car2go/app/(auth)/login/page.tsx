'use client'

import React, { useState } from 'react'
import { useFormik, FormikProps } from 'formik'
import { auth } from '@/firebase/firebase'
import { LoginSchema } from '../validation/Validation'
import { signInWithEmailAndPassword } from 'firebase/auth'
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




interface LoginValues {
    email: string;
    password: string;
  }

const initialValues = {
  email: '',
  password: '',
}


export default function Login() {

  const [invalid, setInvalid] = useState<string | null>(null)

  const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;

  const router = useRouter();

  const {values, handleChange, handleSubmit, errors}: FormikProps<LoginValues> = useFormik<LoginValues>({
        initialValues: initialValues,
        validationSchema: LoginSchema,
        validateOnChange: false,
        onSubmit: () => {},
      });

  const signIn = () => {
    setInvalid(null)
    const email = values.email 
    const password = values.password
  
    if (!emailRegex.test(email)) {
      console.error('The email address is not formatted correctly.');
      return; 
    }
  
    signInWithEmailAndPassword(auth, email, password)
      .then(data => {
        router.push('/')
      })
      .catch((error) => {
        if (error.code == "auth/invalid-credential") {
          setInvalid("Email or Password is incorrect")
        }
      });
    }
    
    return (
        <div>
          <div className='flex justify-center items-center h-screen lg:bg-white bg-primary z-50'>
            <div className='flex h-[550px] xl:h-[600px] lg:h-[500px] md:h-[500px] shadow-2xl rounded-xl bg-white'>
              <div className='justify-center w-[90%] xl:w-auto flex flex-col py-24 bg-white/70 xl:rounded-l-2xl rounded-2xl'>
                <form onSubmit={handleSubmit} className='flex flex-col w-[430px] xl:w-[550px] md:w-[350px] h-[85%] items-center rounded-xl md:rounded-r-none'>
                      <Image src={logo} alt='devoro-logo' className='xl:h-24 xl:w-28 h-16 w-20 mb-10' priority/>
                      <div className='flex items-center flex-col gap-5 w-full'>
                          <div className='flex relative w-full'>
                              <div className='flex items-center gap-4 w-full justify-center'>
                                <input onChange={handleChange} value={values.email} id="email" name="email" type='type' placeholder='Email' className='xl:w-[50%] w-[80%] px-2 py-2 rounded-lg border border-black/30'/>
                              </div>
                              <div className='absolute right-[107px] top-2'>
                                {errors.email &&
                                  <TooltipProvider>
                                  <Tooltip>
                                    <TooltipTrigger>
                                      <RiErrorWarningFill size={24} className='text-red-800'/>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                      <p className='text-white'>{errors.email}</p>
                                    </TooltipContent>      
                                  </Tooltip>
                                </TooltipProvider>
                                }    
                                {invalid &&
                                  <TooltipProvider>
                                    <Tooltip>
                                      <TooltipTrigger>
                                        <RiErrorWarningFill size={24} className='text-red-800'/>
                                      </TooltipTrigger>
                                      <TooltipContent side='left'>
                                        <p className='text-white xl:text-base text-[14px]'>{invalid}</p>
                                      </TooltipContent>      
                                    </Tooltip>
                                  </TooltipProvider>
                                  } 
                              </div>
                          </div>
                          <div className='flex relative mb-1 w-full'>
                              <div className='flex tems-center gap-4 w-full justify-center'>
                              <input onChange={handleChange} value={values.password} id="password" name="password" type='password' placeholder='Password' className='xl:w-[50%] w-[80%] px-2 py-2 rounded-lg border border-black/30'/>
                              </div>
                              <div className='absolute right-[107px] top-2'>
                                {errors.password &&
                                 <TooltipProvider>
                                 <Tooltip>
                                   <TooltipTrigger>
                                     <RiErrorWarningFill size={24} className='text-red-800'/>
                                   </TooltipTrigger>
                                   <TooltipContent>
                                     <p className='text-white'>{errors.password}</p>
                                   </TooltipContent>      
                                 </Tooltip>
                               </TooltipProvider>
                                }    
                                {invalid &&
                                  <TooltipProvider>
                                    <Tooltip>
                                      <TooltipTrigger>
                                        <RiErrorWarningFill size={24} className='text-red-800'/>
                                      </TooltipTrigger>
                                      <TooltipContent side='left'>
                                        <p className='text-white xl:text-base text-[14px]'>{invalid}</p>
                                      </TooltipContent>      
                                    </Tooltip>
                                  </TooltipProvider>
                                  }  
                              </div>
                          </div>
                      </div>
                      <Link href={'/'} className='text-primary hover:text-red-700 font-bold text-xs mb-5 xl:w-[50%] w-[80%] flex justify-end px-1'>Forgot Password</Link>
                      <button type='submit' onClick={signIn} className='bg-primary py-2 xl:px-28 xl:w-[50%] w-[80%] xl:w- rounded-md font-semibold hover:bg-red-700 text-white'>Log in</button>
                  </form>
                  <div className='flex justify-center flex-col items-center text-center gap-5 w-full mx-auto'>
                      <div className='flex items-center text-sm justify-center gap-1.5'>
                          <span>Don't have an account yet?</span>
                          <Link href={'/signup'} className='text-primary underline hover:font-normal'>Register Now!</Link>
                      </div>  
                  </div>
                </div>
                <div>
                  <Image src={banner} alt='formImg' className='h-full w-[400px] rounded-r-2xl lg:block hidden md:block' priority/> 
                </div>
            </div>
            </div>
        </div>
        )
}
