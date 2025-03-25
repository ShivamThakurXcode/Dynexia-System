import type React from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dynexia - System - Digital Solution",
  description: "A cutting-edge digital solution for your business needs",
  generator: "Dynexia",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} overflow-x-hidden mx-auto `}>
        {/* Background gradient */}
        <div className="fixed opacity-30 inset-0 -z-10 overflow-hidden">
          <div className="absolute top-0 left-1/2 w-[900px] h-[900px] bg-cyan-600/30 rounded-full filter blur-[100px]"></div>
          <div className="absolute bottom-0 right-1/2 w-[900px] h-[900px] bg-purple-600/30 rounded-full filter blur-[100px]"></div>
        </div>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <div className="flex w-full max-w-screen-xl min-h-screen  sm:mx-auto mx-auto flex-col">
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

import "./globals.css";
