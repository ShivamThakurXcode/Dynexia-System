"use client";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import { Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { resolvedTheme } = useTheme();

  const navLinks = [
    { title: "Home", url: "/" },
    { title: "About", url: "/about" },
    { title: "Services", url: "/services" },
    { title: "Portfolio", url: "/portfolio" },
    { title: "Blog", url: "/blog" },
    { title: "Contact us", url: "/contact" },
  ];

  return (
    <header className="sticky top-5 z-50 mx-auto  w-[90%] max-w-screen-xl rounded-2xl border border-cyan-700/60  px-1 shadow-[0px_12px_83px_0px_rgba(0,_238,_255,_0.23)] backdrop-blur supports-[backdrop-filter]:bg-background/10">
      <div className="container flex h-11 items-center justify-between px-4 pl-2">
        {/* Logo */}
        <Link href="/" className="flex h-[50%] items-center gap-2 font-bold">
          <Image
            className="p-1"
            src="/Dynexia-Pheonix.jpeg"
            alt="Dynexia Logo"
            width={48}
            height={48}
            priority
          />
          <Image
            className="h-full border-l border-cyan-500/70 pl-1"
            src={
              resolvedTheme === "light"
                ? "/logo-txt-light.jpeg"
                : "/logo-txt-dark.jpeg"
            }
            alt="Dynexia Logo Text"
            width={100}
            height={24}
            priority
          />
        </Link>

        {/* Navigation */}
        <nav
          className={`${
            isOpen
              ? "absolute left-0 top-16 w-full bg-background border-b md:border-none"
              : "hidden"
          } md:block`}
        >
          <ul className="container mx-auto flex flex-col space-y-2 md:flex-row md:items-center md:space-x-6 md:space-y-0">
            {navLinks.map(({ title, url }) => (
              <li key={title}>
                <Link
                  href={url}
                  className="text-muted-foreground transition-colors hover:text-primary"
                  onClick={() => setIsOpen(false)}
                >
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right side buttons */}
        <div className="flex items-center gap-4">
          <Button
            variant="outline"
            className="hidden h-8 border  md:flex  border-cyan-900  rounded-xl bg-white hover:text-white text-gray-800"
          >
            Book
          </Button>

          <ModeToggle />

          {/* Mobile Menu Button */}
          <Button
            className="md:hidden"
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>
    </header>
  );
}
