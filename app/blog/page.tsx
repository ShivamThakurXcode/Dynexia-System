"use client";
import { motion } from "framer-motion";
import { CalendarDays, Clock, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "./blogData";
import { notFound } from "next/navigation";
import { useState } from "react";
import { CTASection } from "@/components/cta-section";
import Head from "next/head";

const BlogCard = ({
  title,
  excerpt,
  date,
  readTime,
  image,
  slug,
  disableDetails = false,
}: {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: string;
  slug: string;
  disableDetails?: boolean;
}) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="group relative h-full rounded-2xl overflow-hidden border dark:border-gray-800 border-gray-200 dark:bg-gradient-to-b dark:from-gray-900/50 dark:to-gray-800/20 bg-gradient-to-b from-gray-50/80 to-white"
    >
      {/* Image */}
      <div className="h-48 relative overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex gap-4 mb-3">
          <span className="flex items-center text-sm text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
            <CalendarDays className="w-4 h-4 mr-1 text-blue-500" />
            {date}
          </span>
          <span className="flex items-center text-sm dark:text-white text-black">
            <Clock className="w-4 h-4 mr-1" />
            {readTime}
          </span>
        </div>

        <h3 className="text-xl font-semibold dark:text-white text-black mb-2">
          {title}
        </h3>
        <p className="dark:text-gray-300 text-gray-700 mb-4">{excerpt}</p>

        {!disableDetails ? (
          <Link
            href={`/blog/${slug}`}
            className="inline-flex items-center text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 font-medium"
          >
            Read Article
            <ArrowRight className="w-4 h-4 ml-2 text-blue-500 group-hover:translate-x-1 transition-transform" />
          </Link>
        ) : (
          <span className="inline-flex items-center text-gray-400 cursor-not-allowed font-medium opacity-60">
            Read Article
            <ArrowRight className="w-4 h-4 ml-2" />
          </span>
        )}
      </div>
    </motion.div>
  );
};

const CategoryPill = ({
  name,
  active = false,
  onClick,
}: {
  name: string;
  active?: boolean;
  onClick: () => void;
}) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`px-4 py-2 rounded-full text-sm font-medium ${
        active
          ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white"
          : "dark:bg-gray-900/30 bg-blue-50 dark:text-gray-300 text-gray-700 dark:border-gray-800 border-blue-200"
      }`}
    >
      {name}
    </motion.button>
  );
};

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  // Featured post data
  const featuredPost = {
    title: "The Evolution of Jamstack Architecture",
    excerpt:
      "How modern web architecture is shifting towards edge computing, serverless functions, and headless CMS solutions for better performance and scalability.",
    date: "May 1, 2024",
    readTime: "10 min read",
    image: "/blog-featured.jpg",
    slug: "jamstack-evolution",
    category: "Development",
  };

  const categories = [
    { name: "All", count: blogPosts.length },
    {
      name: "Development",
      count: blogPosts.filter((post) => post.category === "Development").length,
    },
    {
      name: "Design",
      count: blogPosts.filter((post) => post.category === "Design").length,
    },
    {
      name: "Technology",
      count: blogPosts.filter((post) => post.category === "Technology").length,
    },
    {
      name: "Cloud",
      count: blogPosts.filter((post) => post.category === "Cloud").length,
    },
  ];

  const filteredPosts =
    activeCategory === "All"
      ? blogPosts
      : blogPosts.filter((post) => post.category === activeCategory);

  // Check if featured post should be shown based on active category
  const showFeaturedPost =
    activeCategory === "All" || featuredPost.category === activeCategory;

  return (
    <>
      <Head>
        <title>IT Solutions Blog | Dynexia Insights</title>
        <meta
          name="description"
          content="Latest articles on web development, mobile apps, cloud solutions and digital transformation trends from Dynexia's IT experts."
        />
        <meta
          name="keywords"
          content="IT blog, technology articles, web development blog India, software trends, Dynexia insights"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.dynexia.com/blog" />
        <meta
          property="og:title"
          content="Dynexia IT Solutions Blog - Technology Insights"
        />
        <meta
          property="og:description"
          content="Expert articles on software development, digital transformation and emerging tech trends"
        />
        <meta property="og:image" content="/images/blog-og.jpg" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="Dynexia Technology Blog" />
        <meta
          property="twitter:description"
          content="Cutting-edge insights from IT solution developers"
        />
        <meta property="twitter:image" content="/images/blog-twitter.jpg" />

        <link rel="canonical" href="https://www.dynexia.com/blog" />
      </Head>

      <div className="relative overflow-visible bg-transparent">
        {/* Background elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full filter blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] dark:bg-purple-500/10 bg-purple-200/20 rounded-full filter blur-3xl" />
        </div>

        <div className="container mx-auto px-4 py-20 pb-0 md:px-6 max-w-7xl">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-24 text-center"
          >
            <div className="inline-flex items-center px-4 py-1.5 rounded-full dark:bg-blue-900/30 bg-blue-100 dark:border-blue-500/30 border-blue-200 dark:text-white text-black text-sm mb-4">
              <span className="relative flex h-2 w-2 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full dark:bg-blue-400 bg-blue-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 dark:bg-blue-500 bg-blue-600"></span>
              </span>
              Our Blog
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight dark:text-white text-black mb-4">
              Dynexia
              <span className="dark:text-white text-black"> Blog</span>
            </h1>

            <p className="text-lg dark:text-gray-300 text-gray-700 max-w-2xl mx-auto">
              Cutting-edge insights on web development, design, and emerging
              technologies from our team of experts.
            </p>
          </motion.div>

          {/* Categories */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-wrap gap-4 justify-center mb-16"
          >
            {categories.map((category, index) => (
              <CategoryPill
                key={index}
                name={`${category.name} (${category.count})`}
                active={category.name === activeCategory}
                onClick={() => setActiveCategory(category.name)}
              />
            ))}
          </motion.div>

          {/* Featured Post - Only show when category matches */}
          {showFeaturedPost && (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-20"
            >
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-center dark:text-white text-black">
                Featured Article
              </h2>
              <div className="relative rounded-2xl overflow-hidden border dark:border-gray-800 border-gray-200">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="h-64 lg:h-auto relative">
                    <Image
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="p-8 lg:p-12 dark:bg-gradient-to-b dark:from-gray-900/50 dark:to-gray-800/20 bg-gradient-to-b from-gray-50/80 to-white">
                    <div className="flex gap-4 mb-4">
                      <span className="flex items-center text-sm text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
                        <CalendarDays className="w-4 h-4 mr-1 text-blue-500" />
                        {featuredPost.date}
                      </span>
                      <span className="flex items-center text-sm dark:text-white text-black">
                        <Clock className="w-4 h-4 mr-1" />
                        {featuredPost.readTime}
                      </span>
                    </div>

                    <h2 className="text-3xl font-bold dark:text-white text-black mb-4">
                      {featuredPost.title}
                    </h2>
                    <p className="dark:text-gray-300 text-gray-700 mb-6">
                      {featuredPost.excerpt}
                    </p>

                    <Link
                      href={`/blog/${featuredPost.slug}`}
                      className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-medium shadow-lg shadow-blue-500/20"
                    >
                      Read Featured Article
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* All Posts */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center dark:text-white text-black">
              Latest Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 pb-20 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <BlogCard
                    title={post.title}
                    excerpt={post.excerpt}
                    date={post.date}
                    readTime={post.readTime}
                    image={post.image}
                    slug={post.slug}
                    disableDetails={post.disableDetails}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
          <CTASection />
        </div>
      </div>
    </>
  );
}
