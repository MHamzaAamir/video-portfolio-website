import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

import { Poppins } from 'next/font/google';



const poppins = Poppins({
  weight: ['400', '500', '600', '700'], 
  subsets: ['latin'],
  variable: '--font-poppins', 
});

export const metadata = {
  title: "The Premier Edits",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
