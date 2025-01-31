import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
   
      <div  className="h-[91vh] mt-2  overflow-y-clip max-w-[80vw] m-auto ">
      <div className="  w-full  flex flex-col justify-center  items-center">

            <div className=' flex flex-col justify-center items-center p-4   mt-[12vh]'>
                  <h2  className="  font-semibold tracking-tight py-4 text-6xl">Redefine Your Mental Wellness</h2>
                  <div className=" text-center mx-24 px-10 leading-tight  text-gray-500 text-md">
                      Unlock mental clarity with our AI-Psychologist. Share your thoughts, receive personalized guidance, 
                      and find support anytime, anywhere.
                      Your journey to better well-being starts here.
                  </div>
            </div>

            <Link href='/chatPage' className="outline-none" >
                 <Button >Click to chat now</Button>
             </Link>

            
              <Image src={"/heroImg4.png"} width={1000} height={400} alt="heroImg"
              className=" dark:hidden rounded-xl mt-16 shadow-md cursor-pointer"/>

              <Image src={"/heroImg4Dark.png"} width={1000} height={400} alt="heroImg"
              className="hidden dark:block rounded-xl mt-14 mb-4 border border-l border-t shadow-md pt-1 bg-gradient-to-b from-white/35 to-black  shadow-white/80 cursor-pointer"/>


       </div>
    </div> 
    
  );
}
