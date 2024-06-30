import React from 'react'
import ChatInterface from './_components/ChatInterface';


function chatSection() {
  return (
    <div className=' md:p-10 '>

      <div className='flex justify-center items-center flex-col md:block my-10'>
          <h1 className='font-bold text-3xl  md:text-4xl'> MindXcape.ai </h1>
          <h2 className='text-sm md:text-lg p-2 leading-4 md:p-0 text-gray-500 text-center md:text-start '> Start a conversation with your personal psychologist.</h2>
      </div>

      <ChatInterface/>



      
    </div>
  )
}

export default chatSection