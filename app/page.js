import { Button } from "@/components/ui/button";
import { Lightbulb } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Note from "./chatPage/_components/Note";

export default function Home() {
  return (
    <div  className=" max-w-[80vw] m-auto ">
      <div className="  w-full  flex flex-col justify-center  items-center">

            <div className=' flex flex-col justify-center items-center p-4   mt-[20vh]'>
                  <h2  className="  font-semibold tracking-tight py-4 text-6xl">Redefine Your Mental Wellness</h2>
                  <div className=" text-center mx-20 px-10 leading-tight tracking-tight text-slate-500 text-[1.4vw]">
                      Unlock mental clarity with our AI-Psychologist. Share your thoughts, receive personalized guidance, 
                      and find support anytime, anywhere.
                      Your journey to better well-being starts here.
                  </div>
            </div>

            <Link href='/chatPage' >
                <Button className='my-5 mb-20'>Try for free</Button>
            </Link>

            <div className='w-[65vw] mt-20  '>
              <Note />
            </div>

      </div>
    </div>
  );
}
