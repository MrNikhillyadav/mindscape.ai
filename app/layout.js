import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./chatPage/_components/Header";
import { Separator } from '@/components/ui/separator';
import { ThemeProvider } from "./ThemeProvider";
import localFont from 'next/font/local'



const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MindXcape AI",
  description: "Your personal AI psychologist",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <Header />
          <Separator />
          <div>{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}