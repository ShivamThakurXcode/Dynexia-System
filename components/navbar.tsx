"use client";

import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import { Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useTheme } from "next-themes";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { resolvedTheme } = useTheme();

  return (
    <header className="sticky  lg:max-w-screen-xl  w-[90%]  top-5 mx-auto z-50 px-1 border-cyan-700/70 shadow-[0px_12px_83px_0px_rgba(0,_238,_255,_0.23)]  border rounded-2xl bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-glow">
      <div className="container ml-1 pr-1 mr-1 pl-0 flex h-16 items-center justify-between">
        <Link href="/" className="flex gap-2 items-center font-bold">
          <img
            className=" p-1 h-12"
            src="/Dynexia-Pheonix.jpeg"
            alt="Dynexia Logo"
          />
          <img
            className="h-[1.5rem] border-l border-cyan-500/70 pl-1"
            src={
              resolvedTheme === "light"
                ? "logo-txt-light.jpeg"
                : "logo-txt-dark.jpeg"
            }
            alt="Dynexia Logo"
          />
        </Link>
        <nav
          className={`${
            isOpen ? "absolute left-0 top-16 w-full bg-background" : "hidden"
          } border-b md:border-none md:block ml-3   w-[75%] `}
        >
          <ul
            className={`container flex w-full justify-center items-center mx-auto   flex-col space-y-2 md:flex-row md:space-x-6 md:space-y-0 ${
              isOpen ? "py-4" : ""
            }`}
          >
            {[
              ["Home", "/"],
              ["About", "/about"],
              ["Services", "/services"],
              ["Contact", "/contact"],
              ["Contact", "/contact"],
              ["Contact", "/contact"],
            ].map(([title, url]) => (
              <li key={title} className="">
                <Link
                  href={url}
                  className="text-muted-foreground  transition-colors hover:text-primary"
                  onClick={() => setIsOpen(false)}
                >
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <Button
          className="md:hidden"
          variant="ghost"
          size="icon"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Menu className="h-6 w-6 text-white" />
          <span className="sr-only">Toggle menu</span>
        </Button>
        <div className="flex  space-x-4">
          <ModeToggle></ModeToggle>
        </div>
      </div>
    </header>
  );
}
