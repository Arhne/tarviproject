"use client";
import { Poppins, Open_Sans, Josefin_Sans } from "next/font/google";
import "./globals.scss";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const opensans = Open_Sans({ 
  weight: ["400", "500", "700", "800"],
  style: ["normal"],
  subsets: ["latin"],
 });

 const josesans = Josefin_Sans({ 
  weight: ["400", "500", "700"],
  style: ["normal"],
  subsets: ["latin"],
 });



const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
     
     <body className={josesans.className}>
      <Navbar/> 
      <QueryClientProvider client={queryClient}>
      <main className='relative overflow-hidden'>
      {children}
      </main> 
      </QueryClientProvider>
      <Footer/> 
      </body>
    </html>
  );
}
