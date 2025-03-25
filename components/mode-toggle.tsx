"use client";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function ModeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  if (!mounted) {
    return (
      <Button variant="ghost" size="icon" disabled>
        <Sun className="h-[1.2rem] w-[1.2rem]" />
      </Button>
    );
  }

  return (
    <div className="flex items-center gap-3">
      <button
        onClick={toggleTheme}
        className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-300 transition-colors hover:bg-gray-400   focus:outline-1   dark:bg-slate-700 dark:hover:bg-slate-600"
      >
        <span className="sr-only">Toggle theme</span>
        <motion.span
          className="absolute flex items-center justify-center"
          animate={{
            x: theme === "dark" ? 22 : 2,
          }}
          transition={{ type: "spring" }}
        >
          <motion.div
            key={theme}
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className="flex h-4 w-4 items-center justify-center rounded-full bg-white"
          >
            {theme === "light" ? (
              <Sun className="h-3 w-3 text-black" />
            ) : (
              <Moon className="h-3 w-3 text-black" />
            )}
          </motion.div>
        </motion.span>
      </button>
    </div>
  );
}
