"use client";
import {
  Code,
  Server,
  ShieldCheck,
  Database,
  Cpu,
  Network,
  Zap,
  Cloud,
} from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function DynexiaBentoGrid() {
  const items = [
    {
      title: "Consultation & Planning",
      description:
        "Understanding your business needs and crafting tailored IT strategies",
      icon: <Code className="w-6 h-6 text-cyan-400" />,
      className: "md:col-span-2",
      color: "from-cyan-500/20 to-cyan-600/10",
    },
    {
      title: "Infrastructure Setup",
      description:
        "Building robust, scalable IT foundations for your operations",
      icon: <Server className="w-6 h-6 text-emerald-400" />,
      className: "md:col-span-1",
      color: "from-emerald-500/20 to-emerald-600/10",
    },
    {
      title: "Security Solutions",
      description: "Implementing cutting-edge cybersecurity measures",
      icon: <ShieldCheck className="w-6 h-6 text-purple-400" />,
      className: "md:col-span-1",
      color: "from-purple-500/20 to-purple-600/10",
    },
    {
      title: "Data Management",
      description: "Optimizing data storage, processing, and analytics",
      icon: <Database className="w-6 h-6 text-blue-400" />,
      className: "md:col-span-2",
      color: "from-blue-500/20 to-blue-600/10",
    },
    {
      title: "AI Integration",
      description: "Leveraging artificial intelligence for business automation",
      icon: <Cpu className="w-6 h-6 text-amber-400" />,
      className: "md:col-span-1",
      color: "from-amber-500/20 to-amber-600/10",
    },
    {
      title: "Networking Solutions",
      description: "Designing high-performance enterprise networks",
      icon: <Network className="w-6 h-6 text-red-400" />,
      className: "md:col-span-1",
      color: "from-red-500/20 to-red-600/10",
    },
    {
      title: "24/7 Support",
      description: "Round-the-clock monitoring and maintenance",
      icon: <Cloud className="w-6 h-6 text-indigo-400" />,
      className: "md:col-span-1",
      color: "from-indigo-500/20 to-indigo-600/10",
    },
  ];

  return (
    <section className="py-7 md:py-14 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className=" text-center text-3xl leading-tight font-semibold sm:text-5xl sm:leading-tight">
            The Dynexia Workflow
          </h2>

          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our comprehensive IT solutions process designed to transform your
            business infrastructure
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-screen mx-auto">
          {items.map((item, i) => (
            <div
              key={i}
              className={cn(
                "relative rounded-xl  p-6 overflow-hidden",
                "bg-gradient-to-br border border-white/10",
                "transition-all duration-300 group",
                item.className,
                item.color
              )}
            >
              {/* Spotlight effect */}
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-transparent via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute inset-0 bg-[radial-gradient(200px_circle_at_var(--x,_var(--y))_rgba(255,255,255,0.1),transparent_80%] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Glitter particles */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(8)].map((_, j) => (
                  <motion.div
                    key={j}
                    className="absolute bg-white rounded-full"
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: [0, 0.6, 0],
                      x: Math.random() * 100 - 50,
                      y: Math.random() * 100 - 50,
                    }}
                    transition={{
                      duration: 2 + Math.random() * 3,
                      repeat: Infinity,
                      delay: Math.random() * 2,
                    }}
                    style={{
                      width: `${Math.random() * 3 + 1}px`,
                      height: `${Math.random() * 3 + 1}px`,
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                    }}
                  />
                ))}
              </div>

              <div className="relative flex flex-col h-full z-10">
                <div className="mb-4 p-3 rounded-lg bg-white/5 w-fit backdrop-blur-sm">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 dark:text-white text-black">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {item.description}
                </p>
                <div className="mt-4 pt-4 border-t border-white/5 text-xs text-cyan-400">
                  Step {i + 1} of our workflow
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
