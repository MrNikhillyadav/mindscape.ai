import { Separator } from '@radix-ui/react-separator'
import { Lightbulb } from 'lucide-react'
import React from 'react'
import Note from '../chatPage/_components/Note'

function aboutPage() {
  return (
    <div className='max-w-[80vw] m-auto  pt-[4vw] px-[6vw]'>

      <div className=' mt-8 px-10'>
          <h1 className=' text-5xl mb-6 font-bold '>About MindXcape.ai </h1>
          <div className='text-sm md:text-xl   text-gray-500 text-center md:text-start ' >
            MindXcape.ai is an innovative AI-powered platform that revolutionizes the way people 
            interact with technology. Our mission is to empower individuals and businesses by providing 
            cutting-edge AI solutions that enhance productivity, creativity, and decision-making.
          </div>
      </div>

      <Separator className="my-4" />

       <div className='my-10'>
          <h1 className=' px-10 text-3xl font-bold '>The Mindscape.ai Advantage </h1>
          <div className='text-sm md:text-xl p-2  leading-4 md:p-4 md:pr-10 md:mx-6 text-gray-500 text-center md:text-start ' >
          Mindscape.ai is designed to be your personal AI assistant, tailored to your unique needs and preferences. Whether you&apos;re a busy professional,
           a creative thinker, or an aspiring entrepreneur, our platform offers a suite of powerful tools to help you achieve your goals.
          </div>
          </div> 


    
      
       <div className='my-10'>
          <h1 className=' px-10 text-3xl font-bold '>Personalized AI Assistance </h1>
          <div className='text-sm md:text-xl p-2  leading-4 md:p-4 md:pr-10 md:mx-6 text-gray-500 text-center md:text-start ' >
          Our advanced AI algorithms learn from your interactions and preferences, providing personalized recommendations, insights,
          and support to help you work smarter, not harder. From task automation to content generation, Mindscape.ai is your
           trusted partner in unlocking your full potential.
          </div>
      </div> 

        <Note/>
    </div>
  )
}

export default aboutPage