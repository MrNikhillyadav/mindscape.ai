import { Separator } from '@radix-ui/react-separator'
import { Lightbulb } from 'lucide-react'
import React from 'react'

function aboutPage() {
  return (
    <div className=' border  p-[6vw]'>

        {/* About  */}
      <div>
          <h1 className=' px-10 text-5xl font-bold '>About Mindscape.ai </h1>
          <div className='text-sm md:text-xl p-2 mt-4  rounded-md shadow-sm leading-4 md:p-4 md:pr-10 md:mx-6 text-gray-500 text-center md:text-start ' >
            Mindscape.ai is an innovative AI-powered platform that revolutionizes the way people 
            interact with technology.<br/> Our mission is to empower individuals and businesses by providing 
            cutting-edge AI solutions that enhance productivity, creativity, and decision-making.
          </div>
      </div>
      <Separator className="my-4" />

        {/* The Mindscape.ai Advantage  */}
      {/* <div className='my-10'>
          <h1 className=' px-10 text-3xl text-black font-bold '>The Mindscape.ai Advantage </h1>
          <div className='text-sm md:text-xl p-2  leading-4 md:p-4 md:pr-10 md:mx-6 text-gray-500 text-center md:text-start ' >
          Mindscape.ai is designed to be your personal AI assistant, tailored to your unique needs and preferences. Whether you're a busy professional,
           a creative thinker, or an aspiring entrepreneur, our platform offers a suite of powerful tools to help you achieve your goals.
          </div>
          </div> */}


        {/* Get started with mindspace.ai  */}
      {/* <div className='my-10'>
          <h1 className=' px-10 text-3xl text-black font-bold '>Get started with mindspace.ai</h1>
          <div className='text-sm md:text-xl p-2  leading-4 md:p-4 md:pr-10 md:mx-6 text-gray-500 text-center md:text-start ' >
          Our advanced AI algorithms learn from your interactions and preferences, providing personalized recommendations, insights,
          and support to help you work smarter, not harder. From task automation to content generation, Mindscape.ai is your trusted partner in unlocking your full potential.
          </div>
          </div> */}
      
        {/* Personalized AI Assistance  */}
      {/* <div className='my-10'>
          <h1 className=' px-10 text-3xl text-black font-bold '>Personalized AI Assistance </h1>
          <div className='text-sm md:text-xl p-2  leading-4 md:p-4 md:pr-10 md:mx-6 text-gray-500 text-center md:text-start ' >
          Our advanced AI algorithms learn from your interactions and preferences, providing personalized recommendations, insights,
          and support to help you work smarter, not harder. From task automation to content generation, Mindscape.ai is your trusted partner in unlocking your full potential.
          </div>
      </div> */}

        {/* Notice */}
        <div className='text-sm md:text-xl mt-20 rounded-md  bg-slate-100 leading-4 md:pr-10 md:mx-6 text-gray-500 text-center md:text-start ' >
          <div className='flex p-4 text-black text-sm justify-start items-center'>
            <strong   > Note </strong>
            <strong><Lightbulb></Lightbulb></strong>
          </div>
          <p className='px-4 pb-2 text-sm'>
          Mindscape.ai is committed to ongoing innovation and improvement. 
          We regularly update our platform with new features, enhancements, and bug fixes. We welcome your feedback and suggestions to help us better serve your needs.
          </p>
        </div>
    </div>
  )
}

export default aboutPage