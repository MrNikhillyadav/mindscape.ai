import { Separator } from '@/components/ui/separator'
import { Lightbulb } from 'lucide-react'
import React from 'react'
import Note from '../chatPage/_components/Note'

function contactPage() {
  return (
    <div className='  max-w-[80vw] m-auto pt-[6vw] px-[6vw]'>

    
  <div className='mb-10'>
      <h1 className=' px-10 text-5xl font-bold '>Get in touch. <span className='text-slate-400/90 drop-shadow-sm' >Your feedback matters.</span> </h1>
      <div className='text-sm md:text-xl p-2 mt-4  rounded-md shadow-sm leading-4 md:p-4 md:pr-10 md:mx-6 text-gray-500 text-center md:text-start ' >
      At mindXcape.ai, we're on a mission to revolutionize mental health and empower individuals like you to unlock
       the true potential of your mind. Your voice and feedback are essential to this journey.
      </div>

      <div className='text-sm md:text-xl mt-10  rounded-md shadow-sm leading-4 md:p-4 md:pr-10 md:mx-6 text-center md:text-start ' >
      <h1 className='  text-3xl font-bold '>Share Your Thoughts <span className='text-slate-400/90 drop-shadow-sm' >. Shape the Future.</span> </h1>
        <p className=' text-slate-500 mt-4'>We're dedicated to continuously improving our AI-powered platform to better serve your needs. Whether you have suggestions,
             questions, or simply want to share your experience, we're here to listen.</p>
      </div>
  </div>
  {/* <Separator className="my-4" /> */}

    {/* Notice */}
    <Note/>
</div>
  )
}

export default contactPage