import type { Metadata } from "next";
import { Inter,Outfit } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { NavBar } from "@/components/NavBar";

const inter = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Razominer",
  description: "Leads Extraction PowerHouse",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <body className={cn(
        'min-h-screen font-Outfit antialiased grainy',
        inter.className
      )}>
        <NavBar/>
        {children}
        </body>
    </html>
  );
}
