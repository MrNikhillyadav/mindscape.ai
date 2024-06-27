import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div  className="flex flex-col w-full h-screen text-black p-0  items-center">
      <h2  className="font-bold text-6xl mt-20">Mindscape.ai</h2>
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
          <Button className='my-5'>Try Now</Button>
      </Link>
    </div>
  );
}
