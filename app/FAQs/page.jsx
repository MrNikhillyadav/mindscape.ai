import React from 'react'
import { Separator } from '@/components/ui/separator'
import { Lightbulb } from 'lucide-react'

function FrequentQuestion() {
  return (
    <div>
           <div className=' border  p-[6vw]'>

{/* About  */}
<div>
  <h1 className=' px-10 text-5xl font-bold '>Frequently Asked Questions <span className='text-slate-400/90 drop-shadow-sm' >(FAQs)</span> </h1>

  <div className='text-sm md:text-xl mt-10  rounded-md shadow-sm leading-4 md:p-4 md:pr-10 md:mx-6 text-center md:text-start ' >
        <h1 className='  text-3xl font-bold '>1. What is mindXcape.ai?</h1>
        <p className=' text-slate-500 mt-4'>We're dedicated to continuously improving our AI-powered platform to better serve your needs.
        Whether you have suggestions,questions, or simply want to share your experience, we're here to listen.</p>
  </div>
  <Separator className="my-2" />
  <div className='text-sm md:text-xl mt-5  rounded-md shadow-sm leading-4 md:p-4 md:pr-10 md:mx-6 text-center md:text-start ' >
        <h1 className='  text-3xl font-bold '>2. How can I get started with mindXcape.ai?</h1>
        <p className=' text-slate-500 mt-4'>Getting started with mindXcape.ai is easy! Simply visit our website, sign up for an account, and you can begin your personalized chat 
        sessions with your AI psychologist. Our intuitive interface and guided onboarding process will ensure a seamless experience from the very first interaction.</p>
  </div>
  <Separator className="my-2" />
  <div className='text-sm md:text-xl mt-5  rounded-md shadow-sm leading-4 md:p-4 md:pr-10 md:mx-6 text-center md:text-start ' >
        <h1 className='  text-3xl font-bold '>3. How does mindXcape.ai work?</h1>
        <p className=' text-slate-500 mt-4'>mindXcape.ai  will be utilizing advanced natural language processing and machine learning algorithms in future to engage 
        in conversational therapy sessions. By analyzing your thoughts, emotions, and concerns, the AI can provide tailored insights, coping strategies, and a safe space for self-exploration.</p>
  </div>
  <Separator className="my-2" />
  <div className='text-sm md:text-xl mt-5  rounded-md shadow-sm leading-4 md:p-4 md:pr-10 md:mx-6 text-center md:text-start ' >
        <h1 className='  text-3xl font-bold '>4. Is mindXcape.ai a replacement for traditional therapy?</h1>
        <p className=' text-slate-500 mt-4'>No, mindXcape.ai is not intended to replace traditional therapy with a licensed mental health professional. It's designed to complement 
        and enhance the therapeutic experience by providing additional support and resources between in-person sessions.</p>
  </div>
  <Separator className="my-2" />
  <div className='text-sm md:text-xl mt-5  rounded-md shadow-sm leading-4 md:p-4 md:pr-10 md:mx-6 text-center md:text-start ' >
        <h1 className='  text-3xl font-bold '>5. What kind of issues can mindXcape.ai help with?</h1>
        <p className=' text-slate-500 mt-4'>mindXcape.ai can assist with a wide range of mental health concerns, including anxiety, depression, stress management, relationship challenges,
         personal growth, and more. The AI is trained to provide empathetic and evidence-based guidance for various psychological and emotional well-being topics.</p>
  </div>

</div>
<Separator className="my-4" />

{/* Notice */}
<div className='text-sm md:text-xl mt-20 rounded-md  bg-slate-100 leading-4 md:pr-10 md:mx-6 text-gray-500 text-center md:text-start ' >
  <div className='flex p-4 text-black text-sm justify-start items-center'>
    <strong   > Note </strong>
    <strong><Lightbulb></Lightbulb></strong>
  </div>
  <p className='px-4 pb-2 text-sm'>
  MindXcape.ai is committed to ongoing innovation and improvement. 
  We regularly update our platform with new features, enhancements, and bug fixes. We welcome your feedback and suggestions to help us better serve your needs.
  </p>
</div>
</div>
    </div>
  )
}

export default FrequentQuestion