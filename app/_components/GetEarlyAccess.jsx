"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Note from "../chatPage/_components/Note";
import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Check } from "lucide-react";
import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import { UserEmail } from '@/utils/schema';

const sql = neon(process.env.NEXT_PUBLIC_DRIZZLE_DB_URL);
export const db = drizzle(sql, { schema: { UserEmail } });

export default function GetEarlyAccess() {
  const [email, setEmail] = useState("");
  const [emailSent, setEmailSent] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const handleEmailSubmit = async () => {
    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email) ) {
      setEmailError("Enter valid email, try again.");
      if(email === ''){
        setEmailError("Empty email, try again."); 
      }
      return;
    }

    try {
      // Save the email to the database
      await db.insert(UserEmail).values({
        email: email,
      });

      // Print the email to the console
      console.log("Email:", email);

      // Clear the email input, set emailSent to true, and disable the button
      setEmail("");
      setEmailSent(true);
      setIsButtonDisabled(true);
      setEmailError("");

      // Show the alert for 2 seconds
      setShowAlert(true);
      const timer = setTimeout(() => {
        setShowAlert(false);
      }, 2000);
    } catch (error) {
      console.error("Error saving email:", error);
      setEmailError("An error occurred while saving your email.");
    }
  };

  useEffect(() => {
    if (showAlert) {
      const timer = setTimeout(() => {
        setShowAlert(false);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [showAlert]);

  return (
    <div className=" max-w-[80vw] m-auto ">
      <div className="  w-full  flex flex-col justify-center  px-2 md:px-0 items-center">
        <div className='  flex   flex-col justify-center items-center md:px-0 md:p-4   ml-4 md:ml-0   mt-10 md:mt-[16vh]'>

        <h3 className=" text-3xl flex flex-col justify-center items-center gap-0 lg:px-20  sm:text-4xl md:text-[62px]  tracking-tight md:tracking-normal leading-[6vh] md:leading-[7vh]  mr-3 md:mr-0   font-bold mb-8">
          <span> <span className='bg-yellow-300 text-black px-1 rounded-sm'>Be the First&nbsp;</span> to Experience</span> 
          the Future of Mental Wellness.
        </h3>
        {/* <h3 className=" text-3xl flex flex-col justify-center items-center gap-[-10vh] lg:px-20  sm:text-4xl md:text-[60px]  tracking-tight md:tracking-normal leading-7 md:leading-0  mr-3 md:mr-0   font-bold mb-6">
          <span> <span className='bg-yellow-300 shadow-md  text-black  '>Be the First&nbsp;</span> to Experience</span> <br></br>
          <span>the Future of <span className='bg-yellow-300 shadow-md px-2 text-black '>Mental Wellness.</span></span>
        </h3> */}
        
          
          <div className="hidden md:block md:text-lg   md:text-start  lg:mx-20 lg:px-4 lg:text-center text-slate-500  ">
            Join our exclusive early access program and be among the first to unlock the power of our AI-powered
            mental health platform. Experience personalized guidance, insightful analytics, and a transformative
            journey towards better well-being.
          </div>
          <div className=" md:hidden md:text-lg tracking-wide leading-5 text-sm  md:text-start  lg:mx-20 lg:px-4 lg:text-center text-slate-500  md:mb-6">
            Join our exclusive early access program and be among the first to unlock the power of our AI-powered
            mental health platform.
          </div>
        </div>

        <div className="flex flex-col gap-2 md:gap-0 md:flex-row px-2 md:px-0  md:items-center my-6 mb-10 md:mb-20">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="hidden md:flex shadow-sm  md:w-[30vw] mr-4"
          />
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="text-start md:hidden  mr-4"
          />
          <Button onClick={handleEmailSubmit} disabled={isButtonDisabled}>
            {emailSent ? (
              <>
                <Check className="mr-2 h-4 w-4 " />
                 Request Sent
              </>
            ) : (
              'Get early access'
            )}
          </Button>
        </div>

        {emailError && (
          <p className="text-red-500 text-xs mb-4">{emailError}</p>
        )}

        {showAlert && (
          <div className="fixed top-[10vh] right-[3vh] bg-green-500 text-white px-4 py-2 rounded-full flex items-center">
            <Check className=" mr-2 h-4 w-4" />
            Sent
          </div>
        )}

        <div className='md:w-[15vw]  rounded-full    text-[15px]  md:my-0 md:text-xs  md:mt-[22vh] text-slate-500 font-md'>
          <p >powered by mindXcape.ai</p>
        </div>
      </div>
    </div>
  );
}