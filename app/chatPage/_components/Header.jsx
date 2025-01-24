"use client"
import React, { useEffect,useState } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import ThemeToggleButton from './ThemeToggleButton'
import { Button } from "@/components/ui/button";

function Header() {
  const pathname = usePathname(); //usePathname hook tell the active bath.

  useEffect(() => {
    console.log(pathname);
  }, [pathname]);

  return (
    <div className='max-w-[80vw] m-auto py-2 border rounded-lg mt-2'>
      <div className=" flex text-xl justify-between p-3 md:p-0 md:px-8 items-center" >

        <Link href="/"  className=' text-xl font-medium md:font-bold cursor-pointer'>
            MindXcape
        </Link>

        <div className='flex justify-between gap-[12vw] items-center  '>
              <ul className='hidden md:flex  justify-between items-center p-2 gap-10'>
                <Link href='/chatPage' className='text-[1vw] font-medium cursor-pointer hover:font-bold   transition-all'>Chat</Link>
                <Link href="/about" className='text-[1vw] font-medium cursor-pointer hover:font-bold  transition-all'>About</Link>
                <Link href="/contact" className='text-[1vw] font-medium cursor-pointer hover:font-bold  transition-all'>Contact</Link>
                <Link href="/FAQs" className='text-[1vw] font-medium cursor-pointer hover:font-bold  transition-all'>FAQs</Link>
              </ul>

              <ThemeToggleButton/>
              
              <Link href='#' className="outline-none" >
                 <Button >Signup</Button>
             </Link>
        </div>
         
      </div>
    </div>
  )
}

export default Header