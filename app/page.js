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
      <div className="  w-full  flex flex-col justify-center  items-center">
        <div className=' flex flex-col justify-center items-center p-4   mt-[20vh]'>
          <h3 className="text-4xl font-bold mb-4">Be the First to Experience the Future of Mental Wellness</h3>
          <p className="text-lg mx-20 text-slate-500 mb-6">
            Join our exclusive early access program and be among the first to unlock the power of our AI-powered
            mental health platform. Experience personalized guidance, insightful analytics, and a transformative
            journey towards better well-being.
          </p>
        </div>

        <div className="flex items-center my-5 mb-20">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className=" w-[25vw] mr-4"
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

        <div className='w-[15vw] border p-1 rounded-full  text-center text-xs mt-[20vh] font-md'>
          <p >powered by mindXcape.ai</p>
        </div>
      </div>
    </div>
  );
}