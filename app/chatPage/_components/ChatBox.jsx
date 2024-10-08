"use client";

import React, { useState, useEffect } from 'react';
import { Check, LoaderCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Textarea } from "@/components/ui/textarea"
import { Skeleton } from "@/components/ui/skeleton"



function ChatBox({ onSubmit, loading, chatHistory }) {
  const [stateDesc, setStateDesc] = useState('');
  const [userMessage, setUserMessage] = useState('');
  const [showUserMessage, setShowUserMessage] = useState(false);
  const [showTypingIndicator, setShowTypingIndicator] = useState(false);
  const [showAIResponse, setShowAIResponse] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(stateDesc);
    setUserMessage(stateDesc);
    setStateDesc('');
    setShowUserMessage(true);
    setShowTypingIndicator(true);
    setShowAIResponse(false);
  };

  useEffect(() => {
    let typingIndicatorTimeout;

    if (showTypingIndicator && chatHistory.length > 0) {
      typingIndicatorTimeout = setTimeout(() => {
        setShowTypingIndicator(false);
        setShowAIResponse(true);
      }, 2000); // Show the typing indicator for 2 seconds
    }

    return () => clearTimeout(typingIndicatorTimeout);
  }, [showTypingIndicator, chatHistory.length]);

  return (
    <Card className='p-4 shadow-md'>
      <CardHeader>
        <CardTitle className='mb-2'>Chat with your AI Psychologist</CardTitle>
      </CardHeader>
      <CardContent>
        {chatHistory.map((chat, index) => (
          <div key={index} className="flex flex-col gap-2  ">
            {showUserMessage && index === chatHistory.length - 1 && (
              <div className=" rounded-md p-2">
                <strong>You:</strong> {userMessage}
              </div>
            )}

            {showAIResponse && index === chatHistory.length - 1 && (
              
                <div className=" shadow-white shadow-sm border-2 rounded-md px-4 mb-6 py-2">
                <strong>Dr:</strong> {chat.ai}
              </div>
            
            )}

            { showTypingIndicator && index === chatHistory.length - 1 && (
              <div className="  rounded-md p-2 ">
                <span >  <LoaderCircle className="animate-spin" />  </span>
              </div>
            )}
          </div>
        ))}

        {/* <Separator className="my-4" /> */}

        <form onSubmit={handleSubmit} className="grid w-full gap-2  mt-8 ">
          <Textarea
            className="w-full   rounded-lg "
            rows={1}
            value={stateDesc}
            onChange={(e) => setStateDesc(e.target.value)}
            placeholder="Type how are you feeling today here..."
          ></Textarea>

          <Button type="submit">
            {loading ? (
              <>
              {/* <LoaderCircle className="animate-spin" /> */}
             Sent
              </>
            ) : (
              'Send Message'
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}

export default ChatBox;