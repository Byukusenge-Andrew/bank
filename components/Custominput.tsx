'use client'

import React from 'react'
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { FieldPath, useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Control } from 'react-hook-form'
import { authformSchema } from '@/lib/utils'


const formSchema = authformSchema('sign-up')

interface Custominput{
    control:Control<z.infer<typeof formSchema>>,
    name:FieldPath<z.infer<typeof formSchema>>,
    label:string,
    placeholder:string
}


const Custominput = ({control,name,label,placeholder}:any ) => {
  return (
    <FormField
          control={control}
          name={name}
          render={({ field }) => (
           <div className='form-item'>
               <FormLabel className='form-label'>{label}</FormLabel> 
               <div className='flex w-full flex-col'>
                <FormControl>
                    <Input
                      placeholder={placeholder}
                      className='input-class'
                      {...field}
                    type={name === 'password'?'password' : 'text'}
                    autoComplete={name === 'password' ? 'current-password' : name}
                    {...field}
                    />
                </FormControl>
                <FormMessage
                className='form-message mt-2'/>
                </div> 
           </div>
          )}
        />
        )
}

export default Custominput