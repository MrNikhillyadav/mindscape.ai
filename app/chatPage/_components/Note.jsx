import React from 'react'
import { Lightbulb } from 'lucide-react'

function Note() {
  return (
    <div>
        <div className='text-sm md:text-xl mx-8  mb-8 rounded-md  border leading-4 md:pr-10  text-center md:text-start ' >
          <div className='flex p-4 text-sm justify-start items-center'>
            <strong   > Note </strong>
            <strong><Lightbulb></Lightbulb></strong>
          </div>
          <p className='px-4 pb-2  text-sm'>
          MindXcape.ai is committed to ongoing innovation and improvement. 
          We regularly update our platform with new features, enhancements, and bug fixes. 
          We welcome your feedback and suggestions to help us better serve your needs.
          </p>
        </div>
    </div>
  )
}

export default Note