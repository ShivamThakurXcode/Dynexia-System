"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Twitter, Instagram, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";

export default function Footer() {
  const [isOpen, setIsOpen] = useState(false);
  const { resolvedTheme } = useTheme();
  return (
    <footer className="relative max-w-screen overflow-hidden border-t shadow-lg dark:border-gray-800">
      {/* Gradient background elements */}
      <div className="absolute inset-0 overflow-hidden border-t dark:border-white/20 border-black/20 ">
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-purple-600 rounded-full filter blur-[80px] opacity-30 dark:opacity-30"></div>
        <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-cyan-600 rounded-full filter blur-[80px] opacity-30 dark:opacity-30"></div>
      </div>

      {/* Clippath shapes */}
      <div className="absolute inset-0 -z-20 overflow-hidden opacity-20">
        <div className="absolute top-0 left-0 w-full h-full">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 1000 500"
            preserveAspectRatio="none"
            className="w-full h-full"
          >
            <defs>
              <clipPath id="footerClipPath">
                <path d="M0,0 L1000,0 L1000,500 Q500,450 0,500 L0,0 Z" />
              </clipPath>
            </defs>
            <rect
              width="100%"
              height="100%"
              fill="url(#footerGradient)"
              clipPath="url(#footerClipPath)"
            />
          </svg>
        </div>
      </div>

      <div className="container px-4 py-10 md:px-6 lg:py-10 relative z-10">
        <div className="grid gap-12 lg:grid-cols-4">
          {/* Company Info */}
          <div className="space-y-6">
            {/* Logo */}
            <Link href="/" className="flex w-full h-10 items-center">
              <Image
                className="p-1"
                src="/Dynexia-Pheonix.jpeg"
                alt="Dynexia Logo"
                width={48}
                height={48}
                priority
              />
              <Image
                className="h-[80%] border-l border-cyan-500/70 pl-1"
                src={
                  resolvedTheme === "light"
                    ? "/logo-txt-light.jpeg"
                    : "/logo-txt-dark.jpeg"
                }
                alt="Dynexia Logo Text"
                width={150}
                height={48}
                priority
              />
            </Link>

            <p className="text-muted-foreground leading-relaxed">
              Building the future of digital experiences with cutting-edge
              technology and innovative solutions.
            </p>
            <div className="flex items-center space-x-2 text-muted-foreground">
              <Mail className="h-5 w-5" />
              <span>contact@dynexia.com</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold">Quick Links</h3>
            <ul className="space-y-3">
              {[
                ["Home", "/"],
                ["About", "/about"],
                ["Services", "/services"],
                ["Portfolio", "/portfolio"],
                ["Contact", "/contact"],
              ].map(([title, url]) => (
                <li key={title}>
                  <Link
                    href={url}
                    className="text-muted-foreground hover:text-primary transition-colors flex items-center"
                  >
                    <span className="w-2 h-2 rounded-full bg-blue-500 mr-2"></span>
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold">Connect With Us</h3>
            <div className="flex flex-wrap gap-3">
              {[
                { icon: Facebook, name: "Facebook", url: "#" },
                { icon: Twitter, name: "Twitter", url: "#" },
                { icon: Instagram, name: "Instagram", url: "#" },
                { icon: Linkedin, name: "LinkedIn", url: "#" },
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full p-3 bg-gradient-to-br from-gray-100 to-gray-50 dark:from-gray-800 dark:to-gray-900 shadow-sm hover:shadow-md transition-all"
                >
                  <social.icon className="h-5 w-5 text-muted-foreground hover:text-primary" />
                  <span className="sr-only">{social.name}</span>
                </a>
              ))}
            </div>

            <div className="pt-4">
              <h4 className="text-sm font-medium mb-3">Join our community</h4>
              <p className="text-sm text-muted-foreground">
                Be part of our growing network of innovators and tech
                enthusiasts.
              </p>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold">Stay Updated</h3>
            <p className="text-muted-foreground">
              Subscribe to our newsletter for the latest updates and insights.
            </p>
            <form className="space-y-3">
              <div className="relative">
                <Input
                  className="w-full pl-4 pr-32 py-5 rounded-lg border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Your email address"
                  type="email"
                  required
                />
                <button
                  type="submit"
                  className="absolute right-1 top-1 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 text-white px-4 py-2 rounded-md text-sm font-medium"
                >
                  Subscribe
                </button>
              </div>
            </form>
            <p className="text-xs text-muted-foreground">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 pt-8 border-t dark:border-gray-800 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Dynexia System. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            Crafted with passion by Shivam Thakur
          </p>
        </div>
      </div>
    </footer>
  );
}
