"use client"; // Add this line at the top to mark as a Client Component

import { FaFigma, FaReact, FaNodeJs, FaDocker, FaAws } from "react-icons/fa";
import {
  SiAdobexd,
  SiNextdotjs,
  SiVuedotjs,
  SiAngular,
  SiExpress,
  SiDjango,
  SiLaravel,
  SiPostgresql,
  SiMongodb,
  SiJest,
  SiCypress,
  SiRedux,
  SiTailwindcss,
  SiSass,
  SiWebpack,
  SiVite,
  SiEslint,
  SiPrettier,
  SiStorybook,
} from "react-icons/si";

export default function ToolsSection() {
  const tools = [
    // Design & Collaboration
    {
      name: "Figma",
      version: null,
      icon: <FaFigma className="max-h-full max-w-full opacity-70" />,
    },
    {
      name: "Adobe XD",
      version: "55.0.12",
      icon: <SiAdobexd className="max-h-full max-w-full opacity-70" />,
    },

    // Frontend
    {
      name: "React",
      version: "19.0.0",
      icon: <FaReact className="max-h-full max-w-full opacity-70" />,
    },
    {
      name: "Next.js",
      version: "14.1.0",
      icon: <SiNextdotjs className="max-h-full max-w-full opacity-70" />,
    },
    {
      name: "Vue",
      version: "3.4.0",
      icon: <SiVuedotjs className="max-h-full max-w-full opacity-70" />,
    },
    {
      name: "Angular",
      version: "16.0.0",
      icon: <SiAngular className="max-h-full max-w-full opacity-70" />,
    },

    // Backend
    {
      name: "Node.js",
      version: "20.0.0",
      icon: <FaNodeJs className="max-h-full max-w-full opacity-70" />,
    },
    {
      name: "Express",
      version: "4.18.2",
      icon: <SiExpress className="max-h-full max-w-full opacity-70" />,
    },
    {
      name: "Django",
      version: "4.2.0",
      icon: <SiDjango className="max-h-full max-w-full opacity-70" />,
    },
    {
      name: "Laravel",
      version: "10.0.0",
      icon: <SiLaravel className="max-h-full max-w-full opacity-70" />,
    },

    // Database
    {
      name: "PostgreSQL",
      version: "15.0.0",
      icon: <SiPostgresql className="max-h-full max-w-full opacity-70" />,
    },
    {
      name: "MongoDB",
      version: "6.0.0",
      icon: <SiMongodb className="max-h-full max-w-full opacity-70" />,
    },

    // Testing
    {
      name: "Jest",
      version: "29.0.0",
      icon: <SiJest className="max-h-full max-w-full opacity-70" />,
    },
    {
      name: "Cypress",
      version: "12.0.0",
      icon: <SiCypress className="max-h-full max-w-full opacity-70" />,
    },

    // State Management
    {
      name: "Redux",
      version: "5.0.0",
      icon: <SiRedux className="max-h-full max-w-full opacity-70" />,
    },

    // Styling
    {
      name: "Tailwind CSS",
      version: "3.4.14",
      icon: <SiTailwindcss className="max-h-full max-w-full opacity-70" />,
    },
    {
      name: "Sass",
      version: "1.66.0",
      icon: <SiSass className="max-h-full max-w-full opacity-70" />,
    },

    // Other
    {
      name: "Webpack",
      version: "5.88.0",
      icon: <SiWebpack className="max-h-full max-w-full opacity-70" />,
    },
    {
      name: "Vite",
      version: "4.0.0",
      icon: <SiVite className="max-h-full max-w-full opacity-70" />,
    },
    {
      name: "ESLint",
      version: "8.0.0",
      icon: <SiEslint className="max-h-full max-w-full opacity-70" />,
    },
    {
      name: "Prettier",
      version: "3.0.0",
      icon: <SiPrettier className="max-h-full max-w-full opacity-70" />,
    },
    {
      name: "Storybook",
      version: "7.0.0",
      icon: <SiStorybook className="max-h-full max-w-full opacity-70" />,
    },
    {
      name: "Docker",
      version: "24.0.0",
      icon: <FaDocker className="max-h-full max-w-full opacity-70" />,
    },
    {
      name: "AWS",
      version: null,
      icon: <FaAws className="max-h-full max-w-full opacity-70" />,
    },
  ];

  return (
    <section className="bg-background px-4 py-12 text-foreground sm:py-24 md:py-32">
      <div className="mx-auto flex max-w-container flex-col items-center gap-8 text-center">
        <div className="flex flex-col items-center gap-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand/30 px-2.5 py-1 text-xs font-semibold text-brand transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 dark:border-border/20">
            Last updated: 9 Feb 2025
          </div>
          <h2 className="text-md font-semibold sm:text-2xl">
            Built with industry-standard tools and best practices
          </h2>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-8">
          {tools.map((tool, index) => (
            <div
              key={index}
              className="flex items-center gap-2 text-sm font-medium"
            >
              {tool.icon}
              <span>{tool.name}</span>
              {tool.version && (
                <span className="text-muted-foreground">{tool.version}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
