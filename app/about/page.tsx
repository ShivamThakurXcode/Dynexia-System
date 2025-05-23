"use client";
import { CTASection } from "@/components/cta-section";
import {
  Users,
  Rocket,
  Globe,
  Cpu,
  BarChart,
  Code,
  Shield,
  Server,
  Layers,
  LucideIcon,
} from "lucide-react";
import Image from "next/image";
import Head from "next/head";
const FeatureCard = ({
  icon: Icon,
  title,
  description,
  color,
}: {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
}) => (
  <div
    className={`h-full border rounded-2xl p-6 backdrop-blur-sm 
      dark:border-gray-800 border-gray-200
      dark:bg-gradient-to-b dark:from-gray-900/50 dark:to-gray-800/20
      bg-gradient-to-b from-gray-50/80 to-white hover:shadow-lg transition-shadow duration-300`}
  >
    <div className="relative">
      <div
        className={`absolute -top-12 -left-2 w-24 h-24 rounded-full filter blur-3xl 
        ${color.replace("text", "bg")}/10`}
      />
      <Icon className={`h-10 w-10 mb-4 relative z-10 ${color}`} />
    </div>
    <h3 className="text-xl font-semibold dark:text-white text-black mb-2">
      {title}
    </h3>
    <p className="dark:text-gray-300 text-gray-700">{description}</p>
  </div>
);

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About Dynexia - IT Solution Development Experts</title>
        <meta
          name="description"
          content="Learn about Dynexia's mission, vision, and the team behind India's leading IT solution development agency specializing in digital transformation."
        />
        <meta
          name="keywords"
          content="about Dynexia, IT company about us, software development team India, technology experts, Dynexia founders"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.dynexia.com/about" />
        <meta
          property="og:title"
          content="About Dynexia - IT Solution Development Experts"
        />
        <meta
          property="og:description"
          content="Discover the story behind India's premier IT solution development agency"
        />
        <meta property="og:image" content="/images/about-og.jpg" />
        <meta property="og:locale" content="en_IN" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:title"
          content="About Dynexia - Our Technology Journey"
        />
        <meta
          property="twitter:description"
          content="Meet the team behind your trusted IT solution partners"
        />
        <meta property="twitter:image" content="/images/about-twitter.jpg" />

        {/* Canonical */}
        <link rel="canonical" href="https://www.dynexia.com/about" />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Dynexia",
            url: "https://www.dynexia.com",
            logo: "https://www.dynexia.com/images/logo.png",
            description:
              "IT Solution Development Agency specializing in digital transformation",
            founders: [
              {
                "@type": "Person",
                name: "Shivam Thakur",
              },
            ],
            address: {
              "@type": "PostalAddress",
              addressLocality: "Your City",
              addressRegion: "Your State",
              addressCountry: "IN",
            },
          })}
        </script>
      </Head>
      <div className="relative overflow-visible bg-transparent">
        {/* Background elements */}
        <div className="absolute overflow-hidden w-[100vw] inset-0 -z-10">
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] dark:bg-blue-500/10 bg-blue-200/20 rounded-full filter blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] dark:bg-purple-500/10 bg-purple-200/20 rounded-full filter blur-3xl" />
        </div>

        <div className="container mx-auto px-4 py-20 pb-0 md:px-6 max-w-7xl">
          {/* Hero Section */}
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center mb-24">
            <div className="space-y-6">
              <div
                className="inline-flex items-center px-4 py-1.5 rounded-full dark:bg-blue-900/30 bg-blue-100 
              dark:border-blue-500/30 border-blue-200 dark:text-white text-black text-sm mb-4"
              >
                <span className="relative flex h-2 w-2 mr-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full dark:bg-blue-400 bg-blue-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 dark:bg-blue-500 bg-blue-600"></span>
                </span>
                Innovating Since 2018
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight dark:text-white text-black">
                Shaping the{" "}
                <span className="dark:text-white text-black">
                  Digital Future
                </span>
              </h1>
              <p className="text-lg dark:text-gray-300 text-gray-700 max-w-2xl">
                At Dynexia Solutions, we bridge the gap between today's
                challenges and tomorrow's possibilities. As a premier
                development agency, we specialize in crafting cutting-edge
                digital solutions that transform businesses and redefine
                industries.
              </p>

              <div className="grid grid-cols-2 gap-4 mt-8">
                <FeatureCard
                  icon={Users}
                  title="Elite Team"
                  description="30+ specialists in AI, blockchain, and cloud technologies"
                  color="dark:text-white text-black"
                />
                <FeatureCard
                  icon={Rocket}
                  title="Global Impact"
                  description="Trusted by 150+ clients across 12 countries"
                  color="dark:text-white text-black"
                />
              </div>
            </div>

            <div className="relative">
              <div
                className="absolute -inset-4 rounded-3xl dark:bg-gradient-to-br dark:from-blue-500/20 dark:to-purple-500/10 
              bg-gradient-to-br from-blue-100/40 to-purple-100/20 blur-xl"
              />
              <Image
                alt="Dynexia Team"
                className="relative rounded-2xl dark:border-gray-800/50 border-gray-200 w-full h-auto aspect-square object-cover"
                height={600}
                width={600}
                src="/app-dark.webp"
                priority
              />
            </div>
          </div>

          {/* Core Values */}
          <div className="space-y-12 mb-24">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold dark:text-white text-black mb-4">
                Our{" "}
                <span className="dark:text-white text-black">
                  Operating System
                </span>
              </h2>
              <p className="dark:text-gray-300 text-gray-700 text-lg">
                The principles that drive every solution we create
              </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
              {[
                {
                  title: "Visionary Thinking",
                  description:
                    "We anticipate tech trends before they emerge, positioning clients at the innovation frontier. Our foresight has helped numerous businesses pivot before market shifts.",
                  icon: Globe,
                  color: "dark:text-white text-black",
                },
                {
                  title: "Technical Mastery",
                  description:
                    "With certifications in 15+ emerging technologies from quantum computing to neural networks, our team brings unparalleled expertise to every project.",
                  icon: Cpu,
                  color: "dark:text-white text-black",
                },
                {
                  title: "Measured Impact",
                  description:
                    "Every solution delivers tangible ROI through rigorous performance analytics. We implement comprehensive tracking from day one to demonstrate value.",
                  icon: BarChart,
                  color: "dark:text-white text-black",
                },
              ].map((item) => (
                <FeatureCard key={item.title} {...item} />
              ))}
            </div>
          </div>

          {/* Our Approach */}
          <div className="mb-24">
            <h2 className="text-3xl sm:text-4xl font-bold dark:text-white text-black mb-12 text-center">
              Our{" "}
              <span className="dark:text-white text-black">Methodology</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-8">
                {[
                  {
                    icon: Code,
                    title: "Agile Development",
                    description:
                      "We employ Scrum methodology with 2-week sprints, daily standups, and continuous integration to ensure rapid, iterative progress.",
                    color: "dark:text-white text-black",
                  },
                  {
                    icon: Shield,
                    title: "Security First",
                    description:
                      "From code reviews to penetration testing, we bake security into every layer of development, achieving 100% compliance in all audits.",
                    color: "dark:text-white text-black",
                  },
                  {
                    icon: Server,
                    title: "Cloud-Native",
                    description:
                      "All solutions are designed for scalability from day one, leveraging auto-scaling, serverless architectures, and edge computing.",
                    color: "dark:text-white text-black",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className={`flex-shrink-0 ${item.color}`}>
                      <item.icon className="h-8 w-8" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold dark:text-white text-black mb-1">
                        {item.title}
                      </h3>
                      <p className="dark:text-gray-300 text-gray-700">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-8">
                {[
                  {
                    icon: Layers,
                    title: "Full-Stack Expertise",
                    description:
                      "From frontend micro-interactions to database optimization, we handle all technology layers with equal proficiency.",
                    color: "dark:text-white text-black",
                  },
                  {
                    icon: Users,
                    title: "User-Centric Design",
                    description:
                      "Our UX researchers conduct 50+ hours of user testing per project to ensure intuitive, accessible interfaces.",
                    color: "dark:text-white text-black",
                  },
                  {
                    icon: Rocket,
                    title: "Future-Proofing",
                    description:
                      "We architect systems with upgrade paths for coming technologies like Web3 and quantum computing.",
                    color: "dark:text-white text-black",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className={`flex-shrink-0 ${item.color}`}>
                      <item.icon className="h-8 w-8" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold dark:text-white text-black mb-1">
                        {item.title}
                      </h3>
                      <p className="dark:text-gray-300 text-gray-700">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 mb-24">
            {[
              {
                value: "150+",
                label: "Clients Worldwide",
                color: "dark:text-white text-black",
              },
              {
                value: "30+",
                label: "Tech Experts",
                color: "dark:text-white text-black",
              },
              {
                value: "98%",
                label: "Client Retention",
                color: "dark:text-white text-black",
              },
              {
                value: "4.9/5",
                label: "Satisfaction Rating",
                color: "dark:text-white text-black",
              },
            ].map((stat) => (
              <div
                key={stat.label}
                className={`text-center p-6 rounded-2xl dark:border-gray-800 border-gray-200 
                dark:bg-gradient-to-b dark:from-gray-900/30 dark:to-transparent
                bg-gradient-to-b from-gray-50/80 to-white hover:shadow-lg transition-shadow duration-300`}
              >
                <div
                  className={`text-3xl md:text-4xl font-bold mb-2 ${stat.color}`}
                >
                  {stat.value}
                </div>
                <div className="dark:text-gray-300 text-gray-700 text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Enhanced CTA Section */}
          <div className="text-center mb-24">
            <a
              href="/contact"
              className="inline-block px-8 py-4 text-lg font-semibold dark:text-white text-black rounded-full 
              bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 
              transition-all duration-300"
            >
              Start Your Digital Transformation
            </a>
          </div>

          <CTASection />
        </div>
      </div>
    </>
  );
}
