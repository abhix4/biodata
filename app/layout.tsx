import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/App-Sidebar";

const geistSans = Geist({
  weight: '400',
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bio data",
  description: "A free and minimal bio data generator",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.className} antialiased`}
      >
    {/* <div className="w-full"> */}
      {/* <SidebarProvider className="w-full"> */}
        {/* <AppSidebar /> */}
        {children}
        <Toaster/>
      {/* </SidebarProvider> */}
    {/* </div> */}
      </body>
    </html>
  );
}
