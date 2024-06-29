"use client";
import { insert, del } from 'drizzle-orm';
import React, { useState } from 'react';
import { db } from '@/utils/db';
import { ChatConversation } from '@/utils/schema';
import { chatSession } from '@/utils/GeminiAIModel';
import ChatBox from './ChatBox';

function ChatInterface() {
  const [loading, setLoading] = useState(false);
  const [jsonResponse, setJsonResponse] = useState(null);
  const [chatHistory, setChatHistory] = useState([]);

  const handleSubmit = async (stateDesc) => {
    setLoading(true);

    const Inputprompt = `${stateDesc}, I want you to act as an expert Psychologist and help and guide me through all my
    emotions to make me feel better as a therapy. Ask relevant questions. I want you to be polite, sensible and friendly.
    Please I want you to breakdown every question into smaller questions and ask him one by one to make it simpler and 
    easy to respond. 
    
    You always need to ask the visitor/customer/patient his/her name and call him/her by that.
    At first give a quick one liner that you are their personal Psychologist one time  and then win their trust and tell them that you are there for him/her always, no worries. 
    Show them empathy,love, care and look at the emotion they are going through.
    
    
    Do not ask more than one question at a time . Also respond in much shorter length of sentence not big chunks of paragraphs like in an actual one on one
    chat on whatsapp etc. to not sound or feeling like an robot. Always respond in JSON format. `;

    try {
      const result = await chatSession.sendMessage(Inputprompt);
      const ChatJsonResp = result.response.text().replace('```json', '').replace('```', '');
      const jsonData = JSON.parse(ChatJsonResp);
      const aiResponse = jsonData.message;

      // Insert the user's state description into the database
      await db.insert(ChatConversation).values({
        stateDesc: stateDesc,
        createdBy: 'user', // Replace with the actual user's identifier
        createdAt: new Date().toISOString(),
        mockId: 'mock-id-1', // Replace with a unique identifier
      });

      // Update the chat history
      setChatHistory([...chatHistory, { user: stateDesc, ai: aiResponse }]);

      setLoading(false);
    } catch (error) {
      console.error('Error saving chat conversation:', error);
      setLoading(false);
    }
  };


  return (
    <ChatBox
      onSubmit={handleSubmit}
      loading={loading}
      chatHistory={chatHistory}
    />
  );
}

export default ChatInterface;
