"use client";

import React, { useState, useEffect } from 'react';
import { LoaderCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

function ChatBox({ onSubmit, loading, chatHistory }) {
  const [stateDesc, setStateDesc] = useState('');
  const [showUserMessage, setShowUserMessage] = useState(false);
  const [showTypingIndicator, setShowTypingIndicator] = useState(false);
  const [showAIResponse, setShowAIResponse] = useState(false);
  const [latestResponseIndex, setLatestResponseIndex] = useState(-1);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(stateDesc);
    setStateDesc('');
    setShowUserMessage(true);
    setShowTypingIndicator(true);
    setShowAIResponse(false);
    setLatestResponseIndex(chatHistory.length);
  };

  useEffect(() => {
    let typingIndicatorTimeout;

    if (showTypingIndicator && latestResponseIndex === chatHistory.length - 1) {
      typingIndicatorTimeout = setTimeout(() => {
        setShowTypingIndicator(false);
        setShowAIResponse(true);
      }, 2000); // Show the typing indicator for 2 seconds
    }

    return () => clearTimeout(typingIndicatorTimeout);
  }, [showTypingIndicator, latestResponseIndex, chatHistory.length]);

  return (
    <Card className='shadow-md'>
      <CardHeader>
        <CardTitle>Chat with your AI Psychologist</CardTitle>
      </CardHeader>
      <CardContent>
        {chatHistory.map((chat, index) => (
          <div key={index} className="flex flex-col gap-2 my-3">
            <div className="bg-blue-100 shadow-md text-blue-600 rounded-md p-2">
              <strong>You:</strong> {chat.user}
            </div>

            <div className="bg-slate-100 shadow-md rounded-md p-2">
              <strong>Dr:</strong> {chat.ai}
            </div>

            {index === chatHistory.length - 1 && showTypingIndicator && (
              <div className="bg-slate-100 shadow-md rounded-md p-2">
                <span className="animate-dots"> <strong>typing...</strong> </span>
              </div>
            )}
          </div>
        ))}

        <Separator className="my-4" />

        <form onSubmit={handleSubmit} className="flex flex-row gap-4 justify-center items-center">
          <textarea
            className="w-full border rounded-lg px-4 p-2 mb-2"
            rows={2}
            value={stateDesc}
            onChange={(e) => setStateDesc(e.target.value)}
            placeholder="Type how are you feeling today here..."
          ></textarea>

          <Button type="submit">
            {loading ? (
              <>
                <LoaderCircle className="animate-spin" />
                AI Responding
              </>
            ) : (
              'Send'
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}

export default ChatBox;
