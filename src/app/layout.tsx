"use client";

import { Syne, Figtree } from "next/font/google";
import "./globals.scss";
import SiteChrome from "./components/site-chrome";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const syne = Syne({
  weight: ["500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-display",
});

const figtree = Figtree({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-body",
});

const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${syne.variable} ${figtree.variable}`}>
        <QueryClientProvider client={queryClient}>
          <SiteChrome>{children}</SiteChrome>
        </QueryClientProvider>
      </body>
    </html>
  );
}
