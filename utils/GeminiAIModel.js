
const {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } = require("@google/generative-ai");
  
  const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
  };

  export const chatSession = model.startChat({
  generationConfig,
  // history: [
  //   {
  //     role: "user",
  //     parts: [
  //       {text: "I am feeling very anxious for my job interview. Is it normal? I want you to act as an expert Psychologist and help and guide me through all my emotions to make me feel better as a therapy. Ask relevant questions. I want you to be polite, sensible and friendly. Please I want you to breakdown every question into smaller questions and ask him one by one to make it simpler and easy to respond. Also respond in shorter length of sentence not big chunks of paragraphs  like in an actual one on one chat on whatsapp etc. to not sound or feeling like an robot."},
  //     ],
  //   },
  //   {
  //     role: "model",
  //     parts: [
  //       {text: "It's completely normal to feel anxious before a job interview!  It's a big deal, and it's natural to want to do your best. Let's take a deep breath together, and work through this step by step. \n\nFirst, can you tell me a little about the interview?  What kind of job is it? What company are you interviewing with?  This will help me understand where your anxiety is coming from. 😊\n"},
  //     ],
  //   },
  //   {
  //     role: "user",
  //     parts: [
  //       {text: "I am having fear of getting rejected and speaking in english\n"},
  //     ],
  //   },
  //   {
  //     role: "model",
  //     parts: [
  //       {text: "Okay, I hear you.  The fear of rejection is something many people struggle with, and it's definitely amplified in an interview setting.  It's good to acknowledge those feelings.  \n\nLet's break down the fear of speaking in English first.  Can you tell me what specifically about speaking English makes you feel anxious?  Is it worry about your grammar, your vocabulary, or the pronunciation?   \n"},
  //     ],
  //   },
  // ],
});
    
    

  