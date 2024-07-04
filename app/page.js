"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Note from "./chatPage/_components/Note";
import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Check } from "lucide-react";
import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import { UserEmail } from '@/utils/schema';

const sql = neon(process.env.NEXT_PUBLIC_DRIZZLE_DB_URL);
export const db = drizzle(sql, { schema: { UserEmail } });

export default function Home() {
  const [email, setEmail] = useState("");
  const [emailSent, setEmailSent] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  const handleEmailSubmit = async () => {
    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError("Enter valid email, try again.");
      return;
    }

    try {
      // Save the email to the database
      await db.insert(UserEmail).values({
        email: email,
      });

      // Print the email to the console
      console.log("Email:", email);

      // Clear the email input and set emailSent to true
      setEmail("");
      setEmailSent(true);
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
      <div className="  w-full  flex flex-col justify-center  items-center">
        <div className=' flex flex-col justify-center items-center p-4   mt-[20vh]'>
          <h2 className="  font-semibold tracking-tight py-4 text-6xl">Redefine Your Mental Wellness</h2>
          <div className=" text-center mx-20 px-10 leading-tight tracking-tight text-slate-500 text-[1.4vw]">
            Unlock mental clarity with our AI-Psychologist. Share your thoughts, receive personalized guidance,
            and find support anytime, anywhere.
            Your journey to better well-being starts here.
          </div>
        </div>

        <div className="flex items-center my-5 mb-20">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className=" w-[20vw] mr-4"
          />
          <Button onClick={handleEmailSubmit}>
            {emailSent ? (
              <>
                <Check className="mr-2 h-4 w-4 " />
                Request Sent
              </>
            ) : (
              'Get access'
            )}
          </Button>
        </div>

        {emailError && (
          <p className="text-red-500 text-xs mb-4">{emailError}</p>
        )}

        {showAlert && (
          <div className="fixed bottom-[10vh] right-[12vh] bg-green-500 text-white px-4 py-2 rounded-full flex items-center">
            <Check className=" mr-2 h-4 w-4" />
            Sent
          </div>
        )}

      <div className='w-[15vw] border p-1 rounded-full  text-center text-xs mt-[20vh] font-md'>
        <p classname='opacity-20'>powered by mindXcape.ai</p>
      </div>

        {/* <div className='w-[65vw] mt-20 opacity-40 '>
          <Note />
          </div> */}

      </div>
    </div>
  );
}