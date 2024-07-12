/** @type {import('next').NextConfig} */
const nextConfig = {
    // Enable the serverless mode for Next.js
    target: 'serverless',
    // Set the production environment
    env: {
      // Define the environment variables
      NEXT_PUBLIC_GEMINI_API_KEY: process.env.NEXT_PUBLIC_GEMINI_API_KEY,
      NEXT_PUBLIC_DRIZZLE_DB_URL: process.env.NEXT_PUBLIC_DRIZZLE_DB_URL,
    },
    // Enable the Neon database connection
    neon: {
      // Define the Neon database connection string
      url: process.env.NEXT_PUBLIC_DRIZZLE_DB_URL,
    },
    // Define the schema for the Neon database
    schema: {
      // Import the schema file
      import: './schema',
    },
  };
  
  export default nextConfig;