"use client";

import React, { useState, useEffect, useRef } from 'react';
import { LoaderCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from "@/components/ui/textarea";

function ChatBox({ onSubmit, loading, chatHistory }) {
  const [stateDesc, setStateDesc] = useState('');
  const [messages, setMessages] = useState([]); // Combined state for user and AI messages
  const [showTypingIndicator, setShowTypingIndicator] = useState(false);
  const chatEndRef = useRef(null); // Reference for scrolling

  const handleSubmit = (e) => {
    e.preventDefault();
    if (stateDesc.trim() === '') return; // Prevent sending empty messages
    onSubmit(stateDesc);
    setMessages(prev => [...prev, { type: 'user', text: stateDesc }]); // Add user message
    setStateDesc('');
    setShowTypingIndicator(true);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) { // Check if Enter is pressed without Shift
      handleSubmit(e); // Call handleSubmit to send message
    }
  };

  useEffect(() => {
    // Scroll to the bottom of the chat
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]); 
  useEffect(() => {
    let typingIndicatorTimeout;

    if (showTypingIndicator && chatHistory.length > 0) {
      typingIndicatorTimeout = setTimeout(() => {
        setShowTypingIndicator(false);
        const lastAIResponse = chatHistory[chatHistory.length - 1].ai;
        setMessages(prev => [...prev, { type: 'ai', text: lastAIResponse }]); 
      }, 2000); // Simulate typing delay
    }

    return () => clearTimeout(typingIndicatorTimeout);
  }, [showTypingIndicator, chatHistory]);

  return (
    <Card className='p-4 shadow-md'>
      <CardHeader>
        <CardTitle className='mb-2'>Chat with your AI Psychologist</CardTitle>
        <h2 className='text-sm hidden md:block  leading-4 md:p-0 text-gray-500 text-center md:text-start '> Start a conversation with your personal psychologist.</h2>

      </CardHeader>
      <CardContent>
        {/* Display all messages in sequence */}
        {messages.map((message, index) => (
          <div key={index}>
            <span className={`rounded-md my-2 gap-4 ${message.type === 'user' ? 'bg-black/90 px-4 p-2 inline-flex text-sm text-right text-white border' : 'inline-flex p-2 px-4 text-sm border'}`}>
              {message.type === 'user' ? 'You:' : 'Dr:'} {message.text}
            </span>
          </div>
        ))}

        {/* Typing Indicator */}
        {showTypingIndicator && (
          <div className="rounded-md p-2">
            <span><LoaderCircle className="animate-spin" /></span>
          </div>
        )}

        {/* Reference for scrolling */}
        <div ref={chatEndRef} />

        <form onSubmit={handleSubmit} className="grid w-full gap-2 mt-4">
          <Textarea
            className="w-full rounded-lg border"
            rows={1}
            value={stateDesc}
            onChange={(e) => setStateDesc(e.target.value)}
            onKeyDown={handleKeyDown} // Add key down handler here
            placeholder="Type how are you feeling today here..."
          />
          <Button type="submit">
            {loading ? (
              <>
                <LoaderCircle className="animate-spin" />
                Sending...
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
