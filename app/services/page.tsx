"use client";
import { CTASection } from "@/components/cta-section";
import {
  Code,
  Server,
  Cpu,
  Smartphone,
  Database,
  Cloud,
  PenTool,
  Shield,
  BarChart,
  Globe,
  Zap,
  CpuIcon,
  Network,
  Lock,
  Code2,
  Layers,
} from "lucide-react";

export function ServicesSection() {
  const services = [
    {
      icon: <Code className="size-5" />,
      title: "Web Development",
      description:
        "Custom web applications built with modern frameworks for optimal performance.",
      color: "bg-blue-100 dark:bg-blue-900/30",
      borderColor: "border-blue-500",
      highlights: [
        "React/Next.js",
        "TypeScript",
        "Responsive Design",
        "Performance Optimization",
      ],
    },
    {
      icon: <Server className="size-5" />,
      title: "Backend Solutions",
      description:
        "Scalable server architecture and API development for your applications.",
      color: "bg-purple-100 dark:bg-purple-900/30",
      borderColor: "border-purple-500",
      highlights: [
        "Node.js & Express",
        "REST & GraphQL",
        "Database Design",
        "Auth Systems",
      ],
    },
    {
      icon: <Cpu className="size-5" />,
      title: "AI Integration",
      description:
        "Implement machine learning models to enhance your applications.",
      color: "bg-emerald-100 dark:bg-emerald-900/30",
      borderColor: "border-emerald-500",
      highlights: [
        "Computer Vision",
        "NLP",
        "Predictive Analytics",
        "Chatbots",
      ],
    },
    {
      icon: <Smartphone className="size-5" />,
      title: "Mobile Development",
      description:
        "Cross-platform mobile apps that deliver native experiences.",
      color: "bg-amber-100 dark:bg-amber-900/30",
      borderColor: "border-amber-500",
      highlights: [
        "React Native",
        "iOS & Android",
        "Offline Capabilities",
        "Push Notifications",
      ],
    },
    {
      icon: <Database className="size-5" />,
      title: "Database Solutions",
      description:
        "Optimized data storage and retrieval systems for your applications.",
      color: "bg-red-100 dark:bg-red-900/30",
      borderColor: "border-red-500",
      highlights: [
        "SQL & NoSQL",
        "Database Optimization",
        "Data Migration",
        "Backup Strategies",
      ],
    },
    {
      icon: <Cloud className="size-5" />,
      title: "Cloud Services",
      description:
        "Deploy and scale your applications with reliable cloud infrastructure.",
      color: "bg-cyan-100 dark:bg-cyan-900/30",
      borderColor: "border-cyan-500",
      highlights: [
        "AWS & Azure",
        "Serverless",
        "CI/CD Pipelines",
        "Auto-scaling",
      ],
    },
    {
      icon: <PenTool className="size-5" />,
      title: "UI/UX Design",
      description:
        "Beautiful, intuitive interfaces that enhance user engagement.",
      color: "bg-pink-100 dark:bg-pink-900/30",
      borderColor: "border-pink-500",
      highlights: [
        "User Research",
        "Wireframing",
        "Design Systems",
        "Usability Testing",
      ],
    },
    {
      icon: <Shield className="size-5" />,
      title: "Security Services",
      description:
        "Protect your applications with comprehensive security solutions.",
      color: "bg-green-100 dark:bg-green-900/30",
      borderColor: "border-green-500",
      highlights: [
        "Pen Testing",
        "Security Audits",
        "Data Encryption",
        "Compliance",
      ],
    },
    {
      icon: <Zap className="size-5" />,
      title: "Performance Optimization",
      description:
        "Enhance your application speed and efficiency with expert optimization.",
      color: "bg-indigo-100 dark:bg-indigo-900/30",
      borderColor: "border-indigo-500",
      highlights: [
        "Load Optimization",
        "Resource Management",
        "Caching",
        "Monitoring",
      ],
    },
    {
      icon: <Globe className="size-5" />,
      title: "DevOps Solutions",
      description: "Streamline your development and deployment processes.",
      color: "bg-orange-100 dark:bg-orange-900/30",
      borderColor: "border-orange-500",
      highlights: [
        "Containerization",
        "Kubernetes",
        "Infra as Code",
        "Monitoring",
      ],
    },
    {
      icon: <Network className="size-5" />,
      title: "Blockchain Development",
      description: "Decentralized applications and smart contract solutions.",
      color: "bg-fuchsia-100 dark:bg-fuchsia-900/30",
      borderColor: "border-fuchsia-500",
      highlights: [
        "Smart Contracts",
        "DApps",
        "Tokenization",
        "Web3 Integration",
      ],
    },
    {
      icon: <Layers className="size-5" />,
      title: "Full-Stack Solutions",
      description: "End-to-end development from frontend to backend systems.",
      color: "bg-teal-100 dark:bg-teal-900/30",
      borderColor: "border-teal-500",
      highlights: [
        "Architecture Design",
        "API Development",
        "Database",
        "Deployment",
      ],
    },
  ];

  const processSteps = [
    {
      icon: <Code2 className="size-5" />,
      title: "Discovery",
      description: "We analyze your requirements and define project scope",
      color: "bg-blue-500",
    },
    {
      icon: <PenTool className="size-5" />,
      title: "Planning",
      description: "Creating detailed roadmap and architecture design",
      color: "bg-purple-500",
    },
    {
      icon: <CpuIcon className="size-5" />,
      title: "Development",
      description: "Agile implementation with regular progress updates",
      color: "bg-emerald-500",
    },
    {
      icon: <Shield className="size-5" />,
      title: "Testing",
      description: "Rigorous quality assurance and user testing",
      color: "bg-amber-500",
    },
    {
      icon: <Cloud className="size-5" />,
      title: "Deployment",
      description: "Smooth launch with monitoring setup",
      color: "bg-red-500",
    },
    {
      icon: <Lock className="size-5" />,
      title: "Support",
      description: "Ongoing maintenance and feature updates",
      color: "bg-cyan-500",
    },
  ];

  return (
    <div className="relative overflow-visible bg-transparent">
      <div className="container mx-auto px-4 py-20 pb-0 md:px-6 max-w-7xl">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full dark:bg-blue-900/30 bg-blue-100 dark:border-blue-500/30 border-blue-200 dark:text-white text-black text-sm mb-4">
            <span className="relative flex h-2 w-2 mr-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full dark:bg-blue-400 bg-blue-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 dark:bg-blue-500 bg-blue-600"></span>
            </span>
            Our Expertise
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight dark:text-white text-black mb-4">
            Comprehensive{" "}
            <span className="dark:text-white text-black">IT Solutions</span>
          </h1>
          <p className="text-lg dark:text-gray-300 text-gray-700 max-w-2xl mx-auto">
            We deliver end-to-end digital services to transform your ideas into
            high-performance applications.
          </p>
        </div>

        {/* Services Grid */}
        <section className="py-12 md:py-16 px-4 relative">
          <div className="max-w-screen mx-auto flex flex-col items-center gap-6 sm:gap-12">
            <div className="grid auto-rows-fr grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <div
                  key={index}
                  className={`group relative overflow-hidden rounded-xl p-6 ${service.color} border ${service.borderColor} border-opacity-20 dark:border-opacity-30 transition-all duration-300 hover:shadow-lg hover:-translate-y-1`}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent dark:from-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  <div className="relative z-10">
                    <div
                      className={`w-12 h-12 rounded-lg ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base mb-4">
                      {service.description}
                    </p>

                    <ul className="grid grid-cols-2 gap-2 mb-4">
                      {service.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-blue-500 mr-1">•</span>
                          <span className="text-xs text-gray-600 dark:text-gray-300">
                            {highlight}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <button className="mt-2 text-sm font-medium flex items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-blue-600 dark:text-blue-400">
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
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Process */}
        <div className="my-24">
          <h2 className="text-3xl sm:text-4xl font-bold dark:text-white text-black mb-12 text-center">
            Our <span className="text-black dark:text-white">Process</span>
          </h2>

          <div className="relative">
            <div className="absolute left-1/2 top-0 h-full w-0.5 bg-gradient-to-b from-blue-500 to-purple-500 hidden md:block transform -translate-x-1/2"></div>

            <div className="grid md:grid-cols-6 gap-6">
              {processSteps.map((step, index) => (
                <div
                  key={index}
                  className={`relative transition-transform duration-300 hover:scale-105 ${
                    index === 0
                      ? "md:col-start-1"
                      : index === 1
                      ? "md:col-start-2"
                      : index === 2
                      ? "md:col-start-3"
                      : index === 3
                      ? "md:col-start-4"
                      : index === 4
                      ? "md:col-start-5"
                      : "md:col-start-6"
                  }`}
                >
                  <div className="hidden md:flex absolute w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 items-center justify-center text-white font-bold text-xl -top-6 left-1/2 transform -translate-x-1/2 z-10">
                    {index + 1}
                  </div>
                  <div className="h-full p-6 rounded-xl dark:bg-gray-900/50 bg-white/80 backdrop-blur-sm border dark:border-gray-800 border-gray-200 flex flex-col items-center text-center">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center text-white mb-4"
                      style={{ backgroundColor: step.color }}
                    >
                      {step.icon}
                    </div>
                    <h3 className="text-lg font-semibold dark:text-white text-black mb-2">
                      {step.title}
                    </h3>
                    <p className="dark:text-gray-300 text-gray-700 text-sm">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <CTASection />
      </div>
    </div>
  );
}

export default function ServicesPage() {
  return <ServicesSection />;
}
