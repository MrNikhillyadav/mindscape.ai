"use client";

import React, { useState } from 'react';
import { db } from '@/utils/db';
import { insert } from 'drizzle-orm';
import { LoaderCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ChatConversation } from '@/utils/schema';
import { chatSession } from '@/utils/GeminiAIModel';

function ChatInterface() {
  const [stateDesc, setStateDesc] = useState('');
  const [loading, setLoading] = useState(false);
  const [jsonResponse, setJsonResponse] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(stateDesc);
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
      const ChatJsonResp =(result.response.text()).replace('```json','').replace('```','');
      const jsonData = JSON.parse(ChatJsonResp);
      // console.log(jsonData);
      // console.log(jsonData.message);
      setJsonResponse(jsonData.message);

      // Insert the user's state description into the database
      await db.insert(ChatConversation).values({
        stateDesc: stateDesc,
        createdBy: 'user', // Replace with the actual user's identifier
        createdAt: new Date().toISOString(),
        mockId: 'mock-id-1', // Replace with a unique identifier
      });

      // Clear the input field
      setStateDesc('');
      setLoading(false);
    } catch (error) {
      console.error('Error saving chat conversation:', error);
      setLoading(false);
    }
  };

  return (
    <div className="border rounded-md p-4">
      <div className="mb-4">
        <h2 className="text-lg font-bold">Chat with your AI Psychologist</h2>
        <p className="text-gray-500">Describe your current mental state:</p>
      </div>
      <form onSubmit={handleSubmit}>
        <textarea
          className="w-full border rounded-md p-2 mb-2"
          rows={4}
          value={stateDesc}
          onChange={(e) => setStateDesc(e.target.value)}
          placeholder="Type your description here..."
        ></textarea>

        <Button type="submit">
          {loading ? (
            <>
              <LoaderCircle className="animate-spin" />
              Generating from AI
            </>
          ) : (
            'Send'
          )}
        </Button>
      </form>

      {jsonResponse && (
        <div className="mt-4">
          <h3 className="text-lg font-bold">AI Psychologist's Response:</h3>
          {/* <pre>{JSON.stringify(jsonResponse, null, 2)}</pre> */}
          <div>{jsonResponse}</div>
        </div>
      )}
    </div>
  );
}

export default ChatInterface;