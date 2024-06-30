import { Button } from "@/components/ui/button";
import { Lightbulb } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div  className="  w-full  flex flex-col  text-black p-0  items-center">
      <h2  className="font-semibold text-6xl mt-[20vh]">Redefine Your Mental Wellness</h2>
      <div className="p-4  px-[18vw]  text-center text-slate-500 text-[1.4vw]">

          {/* Another description */}

          {/* Experience the future of mental health with our AI-Psychologist platform. 
          Open up about your thoughts and concerns, receive personalized guidance, and gain mental clarity.
          Our advanced AI is here to provide empathetic support, practical advice, and a safe space for you to explore your inner world. 
          Accessible anytime, anywhere, our platform is your trusted companion on the journey to better mental well-being */}

          Unlock mental clarity with our AI-Psychologist. Share your thoughts, receive personalized guidance, 
          and find support anytime, anywhere.
          Your journey to better well-being starts here.
      </div>

      <Link href='/chatPage' >
          <Button className='my-5'>Try for free</Button>
      </Link>

      {/* Notice */}
    <div className='w-[60vw] text-sm md:text-xl mt-20 drop-shadow-sm rounded-md  bg-slate-100/50 leading-4 md:pr-10 md:mx-6 text-gray-500 text-center md:text-start ' >
        <div className='flex p-4 text-black text-sm justify-start items-center'>
          <strong   > Note </strong>
          <strong><Lightbulb></Lightbulb></strong>
        </div>
        <p className='px-4 pb-4 text-sm'>
          MindXcape.ai is committed to ongoing innovation and improvement. 
          We regularly update our platform with new features, enhancements, and bug fixes. We welcome your feedback and suggestions to help us better serve your needs.
        </p>
    </div>
    </div>
  );
}
