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
    <div className='flex  text-xl justify-between p-3 md:px-8 items-center  bg-slate-100'>
        {/* <Image className='  p-4 md:p-0' src={'/logo.svg'} width={90} height={90} /> */}
        <h1  className=' text-xl font-medium md:font-bold cursor-pointer'>MindScape.ai</h1>
        <ul className='hidden md:flex text-slate-600  justify-between items-center p-2 gap-10'>
           <Link href='/chatPage' className='text-lg cursor-pointer hover:font-bold   transition-all'>Chat</Link>
           <Link href="/about" className='text-lg cursor-pointer hover:font-bold hover:text-black  transition-all'>About</Link>
           <li className='text-lg cursor-pointer hover:font-bold hover:text-black  transition-all'>Contact</li>
           <li className='text-lg cursor-pointer hover:font-bold hover:text-black  transition-all'>Premium</li>
        </ul>
        <div className='cursor-pointer '>
            user.info
        </div>
        
    </div>
  )
}

export default Header