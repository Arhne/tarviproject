import type { Metadata } from "next";
import { Poppins, Open_Sans, Josefin_Sans } from "next/font/google";
import "./globals.scss";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer";

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

export const metadata: Metadata = {
  title: "African Rebirth",
  description: " ...Rebuilding and Rebranding the African Continent",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
     
     <body className={josesans.className}>
      <Navbar/> 
      <main className='relative overflow-hidden'>
      {children}
      </main> 
      <Footer/> 
      </body>
    </html>
  );
}
