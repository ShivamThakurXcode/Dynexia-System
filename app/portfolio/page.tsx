"use client";

import { motion } from "framer-motion";
import { Code, Server, Cpu } from "lucide-react";
import Image from "next/image";
import Head from "next/head";

// Type definitions
interface Project {
  title: string;
  description: string;
  tags: string[];
  image: string;
  link: string;
}

interface Service {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

interface StatItem {
  value: string;
  label: string;
  color: string;
}

const ProjectCard = ({ title, description, tags, image, link }: Project) => (
  <motion.div
    whileHover={{ y: -5 }}
    transition={{ type: "spring", stiffness: 300 }}
    className="group relative h-full rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800"
  >
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-gray-900/80 z-10" />
    <Image
      src={image}
      alt={title}
      width={600}
      height={400}
      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      priority={false}
    />
    <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
      <div className="flex flex-wrap gap-2 mb-3">
        {tags.map((tag, i) => (
          <span
            key={i}
            className="px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm bg-white/10 text-white border border-white/10"
          >
            {tag}
          </span>
        ))}
      </div>
      <h3 className="text-xl font-bold text-white mb-1">{title}</h3>
      <p className="text-gray-300 text-sm">{description}</p>
      <a
        href={link}
        className="mt-3 inline-flex items-center text-cyan-400 hover:text-cyan-300 text-sm font-medium"
        aria-label={`View ${title} project details`}
      >
        View Project
        <svg
          className="w-4 h-4 ml-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          />
        </svg>
      </a>
    </div>
  </motion.div>
);

const ServiceCard = ({ icon: Icon, title, description }: Service) => (
  <motion.div
    whileHover={{ y: -5 }}
    transition={{ type: "spring", stiffness: 300 }}
    className="h-full rounded-2xl p-6 backdrop-blur-sm border border-gray-200 dark:border-gray-800 dark:bg-gradient-to-b dark:from-gray-900/50 dark:to-gray-800/20 bg-gradient-to-b from-gray-50/80 to-white"
  >
    <div className="relative">
      <div className="absolute -top-12 -left-2 w-24 h-24 rounded-full filter blur-3xl bg-cyan-500/10" />
      <Icon className="h-10 w-10 mb-4 relative z-10 text-cyan-600 dark:text-cyan-400" />
    </div>
    <h3 className="text-xl font-semibold dark:text-white text-black mb-2">
      {title}
    </h3>
    <p className="dark:text-gray-300 text-gray-700">{description}</p>
  </motion.div>
);

export default function PortfolioPage() {
  const projects: Project[] = [
    {
      title: "Enterprise SaaS Platform",
      description:
        "Scalable cloud solution for Fortune 500 companies with AI integration",
      tags: ["Web App", "Cloud", "AI"],
      image: "/images/projects/saas-platform.jpg",
      link: "/portfolio/saas-platform",
    },
    {
      title: "Blockchain Payment Gateway",
      description:
        "Decentralized payment processing with near-instant settlement",
      tags: ["Blockchain", "Fintech", "Web3"],
      image: "/images/projects/blockchain-payment.jpg",
      link: "/portfolio/blockchain-payment",
    },
    {
      title: "IoT Fleet Management",
      description: "Real-time tracking and analytics for logistics companies",
      tags: ["IoT", "Big Data", "Mobile"],
      image: "/images/projects/iot-fleet.jpg",
      link: "/portfolio/iot-fleet",
    },
    {
      title: "Healthcare AI Assistant",
      description: "Diagnostic support system for medical professionals",
      tags: ["AI/ML", "Healthcare", "NLP"],
      image: "/images/projects/healthcare-ai.jpg",
      link: "/portfolio/healthcare-ai",
    },
  ];

  const services: Service[] = [
    {
      icon: Code,
      title: "Custom Web Development",
      description:
        "Tailored web applications built with modern frameworks like Next.js and React",
    },
    {
      icon: Server,
      title: "Cloud Architecture",
      description:
        "Scalable cloud solutions using AWS, Azure, and GCP with Kubernetes",
    },
    {
      icon: Cpu,
      title: "AI Integration",
      description:
        "Machine learning models and AI-powered features for your applications",
    },
  ];

  const stats: StatItem[] = [
    {
      value: "150+",
      label: "Projects Completed",
      color: "dark:text-white text-black",
    },
    {
      value: "98%",
      label: "Client Satisfaction",
      color: "dark:text-white text-black",
    },
    {
      value: "30+",
      label: "Technologies Used",
      color: "dark:text-white text-black",
    },
    {
      value: "12",
      label: "Industries Served",
      color: "dark:text-white text-black",
    },
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: projects.map((project, index) => ({
      "@type": "CreativeWork",
      position: index + 1,
      name: project.title,
      description: project.description,
      url: `https://www.dynexia.com${project.link}`,
      image: `https://www.dynexia.com${project.image}`,
    })),
  };

  return (
    <>
      <Head>
        <title>Our Portfolio | Dynexia IT Solution Case Studies</title>
        <meta
          name="description"
          content="Explore our portfolio of successful IT projects including web applications, mobile apps, and enterprise solutions delivered to clients across industries."
        />
        <meta
          name="keywords"
          content="IT portfolio India, web development projects, mobile app case studies, software development examples, Dynexia work samples"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.dynexia.com/portfolio" />
        <meta
          property="og:title"
          content="Dynexia Portfolio | IT Solution Case Studies"
        />
        <meta
          property="og:description"
          content="See how we've helped businesses transform through technology"
        />
        <meta
          property="og:image"
          content="https://www.dynexia.com/images/portfolio-og.jpg"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale" content="en_IN" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Our Technology Projects | Dynexia"
        />
        <meta
          name="twitter:description"
          content="Case studies of our successful IT implementations"
        />
        <meta
          name="twitter:image"
          content="https://www.dynexia.com/images/portfolio-twitter.jpg"
        />
        <meta name="twitter:site" content="@dynexia" />
        <meta name="twitter:creator" content="@shivamthakur" />

        {/* Canonical */}
        <link rel="canonical" href="https://www.dynexia.com/portfolio" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>

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
            className="mb-24 text-center"
          >
            <div className="inline-flex items-center px-4 py-1.5 rounded-full dark:bg-cyan-900/30 bg-cyan-100 dark:border-cyan-500/30 border-cyan-200 dark:text-white text-black text-sm mb-6">
              <span className="relative flex h-2 w-2 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full dark:bg-cyan-400 bg-cyan-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 dark:bg-cyan-500 bg-cyan-600"></span>
              </span>
              Our Portfolio
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight dark:text-white text-black mb-4">
              Innovation{" "}
              <span className="dark:text-cyan-400 text-cyan-600">Showcase</span>
            </h1>
            <p className="text-lg dark:text-gray-300 text-gray-700 max-w-2xl mx-auto">
              Explore our latest projects and solutions that are transforming
              industries and driving digital transformation.
            </p>
          </motion.div>

          {/* Projects Grid */}
          <section aria-labelledby="projects-heading" className="mb-24">
            <h2
              id="projects-heading"
              className="text-3xl sm:text-4xl font-bold dark:text-white text-black mb-8 text-center"
            >
              Featured{" "}
              <span className="dark:text-cyan-400 text-cyan-600">Projects</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                >
                  <ProjectCard {...project} />
                </motion.div>
              ))}
            </div>
          </section>

          {/* Services */}
          <section aria-labelledby="services-heading" className="mb-24">
            <h2
              id="services-heading"
              className="text-3xl sm:text-4xl font-bold dark:text-white text-black mb-8 text-center"
            >
              Our{" "}
              <span className="dark:text-cyan-400 text-cyan-600">
                Solutions
              </span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                >
                  <ServiceCard {...service} />
                </motion.div>
              ))}
            </div>
          </section>

          {/* Stats */}
          <section
            aria-labelledby="stats-heading"
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-24"
          >
            <h2 id="stats-heading" className="sr-only">
              Our Achievements
            </h2>
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="text-center p-6 rounded-2xl dark:border-gray-800 border-gray-200 dark:bg-gradient-to-b dark:from-gray-900/30 dark:to-transparent bg-gradient-to-b from-gray-50/80 to-white"
              >
                <div
                  className={`text-3xl md:text-4xl font-bold mb-2 ${stat.color}`}
                >
                  {stat.value}
                </div>
                <div className="dark:text-gray-300 text-gray-700 text-sm">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </section>

          {/* CTA */}
          <section
            aria-labelledby="cta-heading"
            className="dark:bg-gray-900/30 bg-cyan-50 rounded-2xl p-8 md:p-12 border dark:border-gray-800 border-cyan-200 text-center"
          >
            <h2
              id="cta-heading"
              className="text-2xl sm:text-3xl font-bold dark:text-white text-black mb-4"
            >
              Ready to Start Your Project?
            </h2>
            <p className="dark:text-gray-300 text-gray-700 max-w-2xl mx-auto mb-8">
              Let's discuss how we can bring your vision to life with our
              expertise in cutting-edge web solutions.
            </p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-block px-8 py-3 bg-gradient-to-r from-cyan-600 to-cyan-500 text-white rounded-lg font-medium shadow-lg"
              aria-label="Contact us to start your project"
            >
              Get in Touch
            </motion.a>
          </section>
        </div>
      </div>
    </>
  );
}
