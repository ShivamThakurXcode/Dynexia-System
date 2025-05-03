"use client";
import { motion } from "framer-motion";

import {
  ArrowRight,
  CheckCircle,
  ExternalLink,
  Lock,
  Shield,
  Zap,
  Clock,
  Users,
  Server,
  BarChart,
  FileText,
  GitBranch,
  Calendar,
  Settings,
  Trello,
  MessageSquare,
  LayoutDashboard,
  Code,
  GitPullRequest,
  NotebookText,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import Head from "next/head";

const portalFeatures = [
  {
    icon: <LayoutDashboard className="size-5" />,
    title: "Project Dashboard",
    description: "Real-time overview of all your active projects",
    color: "bg-blue-100 dark:bg-blue-900/30",
    borderColor: "border-blue-500",
  },
  {
    icon: <GitPullRequest className="size-5" />,
    title: "Version Control",
    description: "Track changes and manage project versions",
    color: "bg-purple-100 dark:bg-purple-900/30",
    borderColor: "border-purple-500",
  },
  {
    icon: <MessageSquare className="size-5" />,
    title: "Team Collaboration",
    description: "Direct communication with your development team",
    color: "bg-emerald-100 dark:bg-emerald-900/30",
    borderColor: "border-emerald-500",
  },
  {
    icon: <NotebookText className="size-5" />,
    title: "Documentation Hub",
    description: "Centralized storage for all project files",
    color: "bg-amber-100 dark:bg-amber-900/30",
    borderColor: "border-amber-500",
  },
  {
    icon: <Trello className="size-5" />,
    title: "Task Management",
    description: "Kanban boards for tracking project milestones",
    color: "bg-red-100 dark:bg-red-900/30",
    borderColor: "border-red-500",
  },
  {
    icon: <Calendar className="size-5" />,
    title: "Project Timeline",
    description: "Visual roadmap of deadlines and deliverables",
    color: "bg-pink-100 dark:bg-pink-900/30",
    borderColor: "border-pink-500",
  },
  {
    icon: <Code className="size-5" />,
    title: "Development Tracking",
    description: "Monitor code commits and deployments",
    color: "bg-cyan-100 dark:bg-cyan-900/30",
    borderColor: "border-cyan-500",
  },
  {
    icon: <Settings className="size-5" />,
    title: "Custom Workflows",
    description: "Tailor the system to your project needs",
    color: "bg-green-100 dark:bg-green-900/30",
    borderColor: "border-green-500",
  },
];

const testimonials = [
  {
    quote:
      "The portal transformed how we manage projects. Real-time tracking and documentation in one place is game-changing.",
    author: "David R., Project Manager",
    role: "Software Development",
  },
  {
    quote:
      "Our team's efficiency improved by 40% after switching to Dynexia's project management system.",
    author: "Jennifer M., Tech Lead",
    role: "Enterprise Solutions",
  },
];

const securityFeatures = [
  { icon: <Shield className="size-5" />, text: "SOC 2 Type II Certified" },
  { icon: <Lock className="size-5" />, text: "GDPR Compliant" },
  { icon: <Zap className="size-5" />, text: "Two-Factor Authentication" },
  { icon: <Server className="size-5" />, text: "End-to-End Encryption" },
];

const ProjectManagementPortal = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Head>
        <title>Book IT Consultation | Dynexia Experts</title>
        <meta
          name="description"
          content="Schedule a free consultation with Dynexia's IT specialists to discuss your project requirements and get expert advice."
        />
        <meta
          name="keywords"
          content="IT consultation booking, free tech consultation, software development meeting, web development consultation India, schedule IT expert call"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.dynexia.com/book" />
        <meta
          property="og:title"
          content="Book Free IT Consultation with Dynexia"
        />
        <meta
          property="og:description"
          content="Schedule a call with our technology experts to discuss your project needs"
        />
        <meta property="og:image" content="/images/book-og.jpg" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:title"
          content="Book Free IT Strategy Session"
        />
        <meta
          property="twitter:description"
          content="Reserve your slot with Dynexia's technology consultants today"
        />
        <meta property="twitter:image" content="/images/book-twitter.jpg" />

        <link rel="canonical" href="https://www.dynexia.com/book" />
      </Head>

      <div className="relative min-h-screen ">
        {/* Animated background elements */}

        <div className="container mx-auto px-4 py-20 md:px-6 max-w-7xl">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-blue-500/20 dark:to-purple-500/20 border border-blue-200 dark:border-blue-500/30 text-black dark:text-white text-sm mb-4"
            >
              <span className="relative flex h-2 w-2 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
              </span>
              Dynexia Client Portal
            </motion.div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-black dark:text-white mb-6">
              Your Project{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
                Command Center
              </span>
            </h1>

            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-8">
              Access the complete suite of tools to initiate, monitor, and
              manage your development projects in one secure platform.
            </p>

            {/* Portal Preview */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="relative rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(59,130,246,0.3)] dark:shadow-[0_0_50px_rgba(59,130,246,0.15)] border border-blue-200/50 dark:border-blue-500/20 mb-12 mx-auto max-w-4xl group"
            >
              <Image
                src="/dynexia-portal-preview.jpg"
                alt="Dynexia Client Portal Preview"
                width={1200}
                height={600}
                className="w-full h-auto transform transition-transform duration-500 group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40">
                <span className="text-white font-medium px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 backdrop-blur-sm">
                  Launch Project Portal
                </span>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="https://portal.dynexia.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-medium shadow-lg hover:shadow-blue-500/30 transition-all"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                Enter Client Portal
                <ExternalLink className="w-5 h-5 ml-2" />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                href="/contact"
                className="inline-flex items-center px-8 py-4 border border-gray-200 dark:border-gray-700 text-black dark:text-white rounded-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-all"
              >
                Request Demo
                <ArrowRight className="w-5 h-5 ml-2" />
              </motion.a>
            </div>
          </motion.div>

          {/* Features Section */}
          <section className="py-12 md:py-16 px-4 relative">
            <div className="max-w-screen mx-auto flex flex-col items-center gap-6 sm:gap-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-black dark:text-white text-center">
                Everything You Need to{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
                  Manage Projects
                </span>
              </h2>

              <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl text-center">
                Our comprehensive portal provides all the tools your team needs
                to successfully deliver projects on time and on budget.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
                {portalFeatures.map((feature, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -5 }}
                    className={`group relative overflow-hidden rounded-xl p-6 ${feature.color} border ${feature.borderColor} border-opacity-20 dark:border-opacity-30 transition-all duration-300 hover:shadow-lg`}
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
                      <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base mb-4">
                        {feature.description}
                      </p>

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
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Testimonials Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="my-24"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-black dark:text-white mb-12 text-center">
              Trusted by{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
                Development Teams
              </span>
            </h2>

            <div className="relative max-w-3xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: activeTestimonial === index ? 1 : 0,
                    y: activeTestimonial === index ? 0 : 20,
                  }}
                  transition={{ duration: 0.5 }}
                  className={`absolute inset-0 ${
                    activeTestimonial === index ? "z-10" : "z-0"
                  }`}
                >
                  <div className="bg-white dark:bg-gray-900/50 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-gray-200 dark:border-gray-800">
                    <blockquote className="text-lg italic text-gray-700 dark:text-gray-300 mb-6">
                      "{testimonial.quote}"
                    </blockquote>
                    <div className="font-semibold text-black dark:text-white">
                      {testimonial.author}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {testimonial.role}
                    </div>
                  </div>
                </motion.div>
              ))}

              <div className="flex justify-center gap-2 pt-32">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTestimonial(index)}
                    className={`w-3 h-3 rounded-full ${
                      activeTestimonial === index
                        ? "bg-blue-500"
                        : "bg-gray-300 dark:bg-gray-700"
                    }`}
                    aria-label={`View testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Security Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="mb-16 max-w-4xl mx-auto text-center"
          >
            <div className="relative bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-blue-500/10 dark:from-blue-900/20 dark:via-purple-900/20 dark:to-blue-900/20 rounded-3xl p-12 border border-blue-200/50 dark:border-blue-500/20 backdrop-blur-sm shadow-xl">
              <div className="absolute -top-8 left-1/2 -translate-x-1/2">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 p-0.5">
                  <div className="w-full h-full rounded-2xl bg-white dark:bg-gray-900 flex items-center justify-center">
                    <Lock className="w-8 h-8 text-transparent bg-clip-text bg-gradient-to-br from-blue-500 to-purple-600" />
                  </div>
                </div>
              </div>

              <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 mb-8 mt-4">
                Enterprise-Grade Security
              </h3>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {securityFeatures.map((feature, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="flex flex-col items-center gap-3 p-4 rounded-xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50"
                  >
                    <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30">
                      {feature.icon}
                    </div>
                    <span className="text-gray-800 dark:text-gray-200 text-sm font-medium">
                      {feature.text}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Final CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="text-center"
          >
            <h3 className="text-2xl font-bold text-black dark:text-white mb-6">
              Ready to Transform Your Project Management?
            </h3>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              href="https://portal.dynexia.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-medium shadow-lg hover:shadow-blue-500/30 transition-all"
            >
              Access Client Portal
              <ExternalLink className="w-5 h-5 ml-2" />
            </motion.a>

            <div className="mt-8 text-sm text-gray-600 dark:text-gray-400 flex items-center justify-center gap-2">
              <Lock className="w-4 h-4" />
              <span>Your data is protected with bank-level security</span>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default ProjectManagementPortal;
