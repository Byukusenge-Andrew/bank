'use client'

import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
  Form,
} from "@/components/ui/form"
import Custominput from './Custominput'
import { authformSchema } from '@/lib/utils'
import { Loader2 } from 'lucide-react'







const AuthForm = ({type}:{type:string}) => {
   const [user,setUser] = useState(null)
   const [isLoading, setIsLoading] = useState(false)

   const formSchema = authformSchema(type)


    // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password:"",
    },
  })
 
  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    
    setIsLoading(true)
    console.log(values)
    setIsLoading(false)
  }
  return (
    <section className='auth-form'>
        <header className='flex flex-col gap-5 md:gap-8'>
        <Link href='/' className='cursor-pointer flex items-center gap-1 ' >
        <Image src= "/icons/logo.svg" width={34} height={34} alt="Horizon logo" 
        
        />
        <h1 className='text-26 font-ibm-plex-serif font-bold text-black-1'>
            Horizon
        </h1>
            </Link>
            <div className="flex flex-col gap-1 md:gap-3">

                <h1 className='text-24 lg:text-36 font-semibold text-gray-900'>
                    {user ? 'Link Account':type === 'sign-in' ? 'Sign In' : 'Sign Up' }
                </h1>
                <p className='text-16 font-normal text-gray-600'>
                    {user
                    ? 'Link your account to get started'
                :'Please enter your details'}
                </p>
            </div>
        </header>
    {user?(
        <div className="flex flex-col gap-4">
            {/*Plaidlink*/}
        </div>
    ):(
        <>
        <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
      {type === 'sign-up' && (
        <>
        <div className='flex gap-4'>
          <Custominput control={form.control} name="firstName" label="First Name" placeholder="Enter your First Name" />
        <Custominput control={form.control} name="lastName" label="Last Name" placeholder="Enter your Last Name" />  
        </div>
        <Custominput control={form.control} name="address" label="Address" placeholder="Enter your Address" />

        <div className='flex gap-4'>
              <Custominput control={form.control} name="postalcode" label="Postal Code" placeholder="Example 1101" />

                      <Custominput control={form.control} name="state" label="State" placeholder="Enter your State" />
        </div>
        <div className='flex gap-4'>
       <Custominput control={form.control} name="dateOfBirth" label="Date of Birth" placeholder="YYYY-MM-DD" />
        <Custominput control={form.control} name="ssn" label="SSN" placeholder="Enter your SSN" />

        </div>
        
        
      
     
        
        </>   
    
    )}


        <Custominput control={form.control} name="email" label="Email" placeholder="Enter your email" />
        <Custominput control={form.control} name="password" label="Password" placeholder="Enter your password" />
        <div className='flex flex-col gap-4'>
            <Button type="submit" disabled={isLoading} className='form-btn'>
            {isLoading ?(
                <>
                <Loader2 size={20} className='animate-spin'/>
                &nbsp;
                Loading...
                
                </>
            ) :type === 'sign-in' ? 'Sign In' : 'Sign Up' }
            </Button>
        </div>
      </form>
    </Form>

    <footer className='flex justify-center gap-1'>

   <p className=' text-14 font-normal text-gray-600'>
    {type === 'sign-in' ? 'Don\'t have an account?': 'Already have an account?'}
   </p>
   <Link href={type === 'sign-in' ? '/sign-up':'/sign-in'} className='form-link'>
   {type === 'sign-in' ? '/sign-up':'/sign-in'}
   </Link>
        </footer>
        </>

    )}
    </section>
  )
}

export default AuthForm