"use client";

import { FaFigma, FaReact, FaNodeJs, FaDocker, FaAws } from "react-icons/fa";
import {
  SiNextdotjs,
  SiExpress,
  SiMongodb,
  SiTailwindcss,
  SiEslint,
  SiPrettier,
  SiRedux,
  SiVite,
} from "react-icons/si";
import { motion } from "framer-motion";

export default function ToolsSection() {
  const tools = [
    { name: "Figma", icon: <FaFigma className="icon-style" /> },
    {
      name: "React",
      version: "19.0.0",
      icon: <FaReact className="icon-style" />,
    },
    {
      name: "Next.js",
      version: "14.1.0",
      icon: <SiNextdotjs className="icon-style" />,
    },
    {
      name: "Node.js",
      version: "20.0.0",
      icon: <FaNodeJs className="icon-style" />,
    },
    {
      name: "Express",
      version: "4.18.2",
      icon: <SiExpress className="icon-style" />,
    },
    {
      name: "MongoDB",
      version: "6.0.0",
      icon: <SiMongodb className="icon-style" />,
    },
    {
      name: "Tailwind CSS",
      version: "3.4.14",
      icon: <SiTailwindcss className="icon-style" />,
    },
    {
      name: "ESLint",
      version: "8.0.0",
      icon: <SiEslint className="icon-style" />,
    },
    {
      name: "Prettier",
      version: "3.0.0",
      icon: <SiPrettier className="icon-style" />,
    },
    {
      name: "Docker",
      version: "24.0.0",
      icon: <FaDocker className="icon-style" />,
    },
    { name: "AWS", icon: <FaAws className="icon-style" /> },
    {
      name: "Redux",
      version: "5.0.0",
      icon: <SiRedux className="icon-style" />,
    },
    { name: "Vite", version: "4.0.0", icon: <SiVite className="icon-style" /> },
  ];

  // Duplicate the tools array to create seamless looping
  const duplicatedTools = [...tools, ...tools];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="px-4  text-foreground sm:py-24 mt-9 relative"
    >
      <div className="mx-auto flex max-w-container flex-col items-center gap-8 text-center">
        <div className="flex flex-col items-center gap-6">
          <div className="badge">Last updated: 9 Feb 2025</div>
          <h2 className="text-md font-semibold sm:text-2xl">
            Built with industry-standard tools and best practices
          </h2>
        </div>

        <div className="w-full relative">
          {/* Marquee container with clip-path fade */}
          <div className="relative overflow-hidden h-24 [mask-image:_linear-gradient(to_right,transparent_0,black_60px,black_calc(100%-60px),transparent_100%)]">
            {/* First marquee row (left to right) */}
            <div className="absolute top-0 left-0 w-full">
              <motion.div
                className="flex items-center gap-8 py-2"
                animate={{
                  x: ["-50%", "0%"],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                {duplicatedTools.map((tool, index) => (
                  <div
                    key={`first-${index}`}
                    className="flex items-center gap-2 text-sm font-medium shrink-0"
                  >
                    {tool.icon}
                    <span>{tool.name}</span>
                    {tool.version && (
                      <span className="text-muted-foreground">
                        {tool.version}
                      </span>
                    )}
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Second marquee row (right to left) */}
            <div className="absolute bottom-0 left-0 w-full">
              <motion.div
                className="flex items-center gap-8 py-2"
                animate={{
                  x: ["0%", "-50%"],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                {duplicatedTools.map((tool, index) => (
                  <div
                    key={`second-${index}`}
                    className="flex items-center gap-2 text-sm font-medium shrink-0"
                  >
                    {tool.icon}
                    <span>{tool.name}</span>
                    {tool.version && (
                      <span className="text-muted-foreground">
                        {tool.version}
                      </span>
                    )}
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
