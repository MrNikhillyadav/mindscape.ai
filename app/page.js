import { Button } from "@/components/ui/button";
import { Lightbulb } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div  className=" max-w-[80vw] m-auto ">
      <div className="  w-full  flex flex-col  text-black justify-center  items-center">

            <div className=' flex flex-col justify-center items-center p-4  mt-[20vh]'>
                  <h2  className="  font-semibold tracking-tight py-4 text-6xl">Redefine Your Mental Wellness</h2>
                  <div className=" text-center mx-20 px-10 leading-tight tracking-tight text-slate-500 text-[1.4vw]">
                      Unlock mental clarity with our AI-Psychologist. Share your thoughts, receive personalized guidance, 
                      and find support anytime, anywhere.
                      Your journey to better well-being starts here.
                  </div>
            </div>

            <Link href='/chatPage' >
                <Button className='my-5 mb-8'>Try for free</Button>
            </Link>

            {/* Notice */}
            <div className='w-[60vw] text-sm md:text-xl mt-20 mb-4 drop-shadow-sm rounded-md  bg-slate-100/50 leading-4 md:pr-10 md:mx-6 text-gray-500 text-center md:text-start ' >
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
    </div>
  );
}
