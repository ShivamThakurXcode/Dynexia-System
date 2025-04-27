"use client";
import {
  ScanFace,
  MonitorSmartphone,
  Eclipse,
  Blocks,
  FastForward,
  Rocket,
  Languages,
  SquarePen,
} from "lucide-react";
import { motion } from "framer-motion";

export function FeaturesSection() {
  const features = [
    {
      icon: <ScanFace className="size-5" />,
      title: "Accessibility first",
      description: "Fully WCAG 2.0 compliant, made with best a11y practices",
      color: "bg-blue-100 dark:bg-blue-900/30",
      borderColor: "border-blue-500",
    },
    {
      icon: <MonitorSmartphone className="size-5" />,
      title: "Responsive design",
      description: "Looks and works great on any device and screen size",
      color: "bg-emerald-100 dark:bg-emerald-900/30",
      borderColor: "border-emerald-500",
    },
    {
      icon: <Eclipse className="size-5" />,
      title: "Light and dark mode",
      description:
        "Seamless switching between color schemes, 6 themes included",
      color: "bg-amber-100 dark:bg-amber-900/30",
      borderColor: "border-amber-500",
    },
    {
      icon: <Blocks className="size-5" />,
      title: "Easy to customize",
      description: "Flexible options to match your product or brand",
      color: "bg-purple-100 dark:bg-purple-900/30",
      borderColor: "border-purple-500",
    },
    {
      icon: <FastForward className="size-5" />,
      title: "Top-level performance",
      description: "Made for lightning-fast load times and smooth interactions",
      color: "bg-red-100 dark:bg-red-900/30",
      borderColor: "border-red-500",
    },
    {
      icon: <Rocket className="size-5" />,
      title: "Production ready",
      description: "Thoroughly tested and launch-prepared",
      color: "bg-pink-100 dark:bg-pink-900/30",
      borderColor: "border-pink-500",
    },
    {
      icon: <Languages className="size-5" />,
      title: "Made for localisation",
      description:
        "Easy to implement support for multiple languages and regions",
      color: "bg-cyan-100 dark:bg-cyan-900/30",
      borderColor: "border-cyan-500",
    },
    {
      icon: <SquarePen className="size-5" />,
      title: "CMS friendly",
      description: "Built to work with any headless content management system",
      color: "bg-green-100 dark:bg-green-900/30",
      borderColor: "border-green-500",
    },
  ];

  return (
    <section className="py-12 md:py-24 px-4 sm:px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black dark:text-white leading-tight">
            Comprehensive IT Services & Solutions
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Cutting-edge solutions tailored to your business needs
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className={`group relative overflow-hidden rounded-xl p-6 ${feature.color} border ${feature.borderColor} border-opacity-20 dark:border-opacity-30 transition-all duration-300 hover:shadow-lg hover:shadow-[${feature.borderColor}]/10`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent dark:from-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="relative z-10">
                <div
                  className={`w-12 h-12 rounded-lg ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base">
                  {feature.description}
                </p>

                <button className="mt-4 text-sm font-medium flex items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-blue-600 dark:text-blue-400">
                  Learn more
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    ></path>
                  </svg>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
