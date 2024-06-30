// _components krne se is folder ko as a routes consider nahi krega Nextjs

"use client"
import React, { useEffect } from 'react'
// import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import Link from 'next/link'



function Header() {
// copy code from nextjs pathname doc

    const pathname = usePathname() //usePathname hook tell the active bath.
    useEffect(() => {
    console.log(pathname)
  }, [])

  return (
    <div className='max-w-[80vw] m-auto '>
        <div className="flex text-xl justify-between font- p-3 md:px-8 items-center text-black " >

            <Link href="/"  className=' text-xl font-medium md:font-bold cursor-pointer'>MindXcape</Link>
            <ul className='hidden md:flex  justify-between items-center p-2 gap-10'>
              {/* <Link href='/chatPage' className='text-[1vw] font-medium cursor-pointer hover:font-bold   transition-all'>Chat</Link> */}
              <Link href="/about" className='text-[1vw] font-medium cursor-pointer hover:font-bold hover:text-black  transition-all'>About</Link>
              <Link href="/contact" className='text-[1vw] font-medium cursor-pointer hover:font-bold hover:text-black  transition-all'>Contact</Link>
              <Link href="/FAQs" className='text-[1vw] font-medium cursor-pointer hover:font-bold hover:text-black  transition-all'>FAQs</Link>
            </ul>
            <div className='text-[1vw] font-medium cursor-pointer '>
                user.info
            </div>

        </div>
        
    </div>
  )
}

export default Header