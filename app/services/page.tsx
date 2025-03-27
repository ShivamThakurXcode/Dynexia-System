"use client";
import { motion } from "framer-motion";
import { Code, Server, Cpu, Smartphone, Database, Cloud, PenTool, Shield } from "lucide-react";

const ServiceCard = ({ 
  icon: Icon, 
  title, 
  description,
  highlights 
}: {
  icon: any;
  title: string;
  description: string;
  highlights: string[];
}) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="h-full rounded-xl border dark:border-gray-800 border-gray-200 dark:bg-gradient-to-b dark:from-gray-900/50 dark:to-gray-800/20 bg-gradient-to-b from-gray-50/80 to-white p-6"
    >
      <div className="relative">
        <div className="absolute -top-12 -left-2 w-24 h-24 rounded-full filter blur-3xl bg-cyan-500/10" />
        <Icon className="h-10 w-10 mb-4 text-cyan-600 dark:text-cyan-400" />
      </div>
      <h3 className="text-xl font-semibold dark:text-white text-black mb-2">{title}</h3>
      <p className="dark:text-gray-300 text-gray-700 mb-4">{description}</p>
      <ul className="space-y-2">
        {highlights.map((highlight, i) => (
          <li key={i} className="flex items-start">
            <span className="text-cyan-500 mr-2">•</span>
            <span className="dark:text-gray-300 text-gray-700 text-sm">{highlight}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default function ServicesPage() {
  const services = [
    {
      icon: Code,
      title: "Web Development",
      description: "Custom web applications built with modern frameworks for optimal performance.",
      highlights: [
        "React/Next.js development",
        "TypeScript integration",
        "Responsive design",
        "Performance optimization"
      ]
    },
    {
      icon: Server,
      title: "Backend Solutions",
      description: "Scalable server architecture and API development for your applications.",
      highlights: [
        "Node.js & Express",
        "REST & GraphQL APIs",
        "Database design",
        "Authentication systems"
      ]
    },
    {
      icon: Cpu,
      title: "AI Integration",
      description: "Implement machine learning models to enhance your applications.",
      highlights: [
        "Computer vision",
        "Natural language processing",
        "Predictive analytics",
        "Chatbot integration"
      ]
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "Cross-platform mobile apps that deliver native experiences.",
      highlights: [
        "React Native development",
        "iOS & Android apps",
        "Offline capabilities",
        "Push notifications"
      ]
    },
    {
      icon: Database,
      title: "Database Solutions",
      description: "Optimized data storage and retrieval systems for your applications.",
      highlights: [
        "SQL & NoSQL solutions",
        "Database optimization",
        "Data migration",
        "Backup strategies"
      ]
    },
    {
      icon: Cloud,
      title: "Cloud Services",
      description: "Deploy and scale your applications with reliable cloud infrastructure.",
      highlights: [
        "AWS & Azure deployment",
        "Serverless architecture",
        "CI/CD pipelines",
        "Auto-scaling"
      ]
    },
    {
      icon: PenTool,
      title: "UI/UX Design",
      description: "Beautiful, intuitive interfaces that enhance user engagement.",
      highlights: [
        "User research",
        "Wireframing & prototyping",
        "Design systems",
        "Usability testing"
      ]
    },
    {
      icon: Shield,
      title: "Security Services",
      description: "Protect your applications with comprehensive security solutions.",
      highlights: [
        "Penetration testing",
        "Security audits",
        "Data encryption",
        "Compliance consulting"
      ]
    }
  ];

  const processSteps = [
    {
      title: "Discovery",
      description: "We analyze your requirements and define project scope"
    },
    {
      title: "Planning",
      description: "Creating detailed roadmap and architecture design"
    },
    {
      title: "Development",
      description: "Agile implementation with regular progress updates"
    },
    {
      title: "Testing",
      description: "Rigorous quality assurance and user testing"
    },
    {
      title: "Deployment",
      description: "Smooth launch with monitoring setup"
    },
    {
      title: "Support",
      description: "Ongoing maintenance and feature updates"
    }
  ];

  return (
    <div className="relative overflow-visible bg-transparent">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] dark:bg-cyan-500/10 bg-cyan-200/20 rounded-full filter blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] dark:bg-purple-500/10 bg-purple-200/20 rounded-full filter blur-3xl" />
      </div>

      <div className="container mx-auto px-4 py-20 md:px-6 max-w-7xl">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-1.5 rounded-full dark:bg-cyan-900/30 bg-cyan-100 dark:border-cyan-500/30 border-cyan-200 dark:text-white text-black text-sm mb-4">
            <span className="relative flex h-2 w-2 mr-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full dark:bg-cyan-400 bg-cyan-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 dark:bg-cyan-500 bg-cyan-600"></span>
            </span>
            Our Expertise
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight dark:text-white text-black mb-4">
            Comprehensive <span className="dark:text-white text-black">Digital Solutions</span>
          </h1>
          <p className="text-lg dark:text-gray-300 text-gray-700 max-w-2xl mx-auto">
            We deliver end-to-end digital services to transform your ideas into high-performance applications.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="mb-24">
          <h2 className="text-3xl sm:text-4xl font-bold dark:text-white text-black mb-8 text-center">
            Our <span className="dark:text-white text-black">Services</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <ServiceCard {...service} />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Our Process */}
        <div className="mb-24">
          <h2 className="text-3xl sm:text-4xl font-bold dark:text-white text-black mb-12 text-center">
            Our <span className="dark:text-white text-black">Process</span>
          </h2>
          
          <div className="relative">
            <div className="absolute left-8 top-0 h-full w-0.5 bg-gradient-to-b from-cyan-500 to-purple-500 hidden md:block"></div>
            
            <div className="space-y-12 md:space-y-0">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="relative md:flex items-center"
                >
                  <div className={`hidden md:flex absolute w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500 to-purple-500 items-center justify-center text-white font-bold text-xl -left-8 ${index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'}`}>
                    {index + 1}
                  </div>
                  <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16'}`}>
                    <h3 className="text-2xl font-semibold dark:text-white text-black mb-2">{step.title}</h3>
                    <p className="dark:text-gray-300 text-gray-700">{step.description}</p>
                  </div>
                  <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pl-16' : 'md:pr-16 md:text-right'}`}>
                    <div className="md:hidden w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                      {index + 1}
                    </div>
                    <div className="w-full h-48 bg-gray-200 dark:bg-gray-800 rounded-xl"></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="dark:bg-gray-900/30 bg-cyan-50 rounded-2xl p-8 md:p-12 border dark:border-gray-800 border-cyan-200 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold dark:text-white text-black mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="dark:text-gray-300 text-gray-700 max-w-2xl mx-auto mb-8">
            Let's discuss how we can help you achieve your business goals with our technical expertise.
          </p>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-3 bg-gradient-to-r from-cyan-600 to-cyan-500 text-white rounded-lg font-medium shadow-lg"
          >
            Contact Us
          </motion.button>
        </div>
      </div>
    </div>
  );
}