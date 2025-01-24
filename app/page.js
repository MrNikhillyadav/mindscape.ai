import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
   
      <div  className=" max-w-[80vw] m-auto ">
      <div className="  w-full  flex flex-col justify-center  items-center">

            <div className=' flex flex-col justify-center items-center p-4   mt-[14vh]'>
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

            
              <Image src={"/heroImg2.png"} width={1100} height={800} alt="heroImg"
              className="rounded-xl mt-16 "/>


       </div>
    </div> 
    
  );
}
