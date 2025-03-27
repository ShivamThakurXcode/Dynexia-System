"use client";
import { motion } from "framer-motion";
import { CalendarDays, Clock, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const BlogCard = ({ 
  title, 
  excerpt, 
  date, 
  readTime, 
  image, 
  slug 
}: {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: string;
  slug: string;
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
          <span className="flex items-center text-sm text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-600">
            <CalendarDays className="w-4 h-4 mr-1 text-cyan-500" />
            {date}
          </span>
          <span className="flex items-center text-sm dark:text-white text-black">
            <Clock className="w-4 h-4 mr-1" />
            {readTime}
          </span>
        </div>
        
        <h3 className="text-xl font-semibold dark:text-white text-black mb-2">{title}</h3>
        <p className="dark:text-gray-300 text-gray-700 mb-4">{excerpt}</p>
        
        <Link 
          href={`/blog/${slug}`}
          className="inline-flex items-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-600 font-medium"
        >
          Read Article
          <ArrowRight className="w-4 h-4 ml-2 text-cyan-500 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </motion.div>
  );
};

const CategoryPill = ({ 
  name, 
  active = false 
}: {
  name: string;
  active?: boolean;
}) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`px-4 py-2 rounded-full text-sm font-medium ${
        active 
          ? 'bg-gradient-to-r from-cyan-400 to-cyan-600 text-white'
          : 'dark:bg-gray-900/30 bg-blue-50 dark:text-gray-300 text-gray-700 dark:border-gray-800 border-blue-200'
      }`}
    >
      {name}
    </motion.button>
  );
};

export default function BlogPage() {
  const blogPosts = [
    {
      title: "The Future of Web Development in 2024",
      excerpt: "Exploring emerging technologies that will shape the web development landscape in the coming year.",
      date: "May 15, 2024",
      readTime: "5 min read",
      image: "/blog-web-dev.jpg",
      slug: "future-web-dev-2024",
      category: "Development"
    },
    {
      title: "The Future of Web Development in 2024",
      excerpt: "Exploring emerging technologies that will shape the web development landscape in the coming year.",
      date: "May 15, 2024",
      readTime: "5 min read",
      image: "/blog-web-dev.jpg",
      slug: "future-web-dev-2024",
      category: "Development"
    },
    {
      title: "The Future of Web Development in 2024",
      excerpt: "Exploring emerging technologies that will shape the web development landscape in the coming year.",
      date: "May 15, 2024",
      readTime: "5 min read",
      image: "/blog-web-dev.jpg",
      slug: "future-web-dev-2024",
      category: "Development"
    },
    {
      title: "The Future of Web Development in 2024",
      excerpt: "Exploring emerging technologies that will shape the web development landscape in the coming year.",
      date: "May 15, 2024",
      readTime: "5 min read",
      image: "/blog-web-dev.jpg",
      slug: "future-web-dev-2024",
      category: "Development"
    },
    {
      title: "The Future of Web Development in 2024",
      excerpt: "Exploring emerging technologies that will shape the web development landscape in the coming year.",
      date: "May 15, 2024",
      readTime: "5 min read",
      image: "/blog-web-dev.jpg",
      slug: "future-web-dev-2024",
      category: "Development"
    },
    {
      title: "The Future of Web Development in 2024",
      excerpt: "Exploring emerging technologies that will shape the web development landscape in the coming year.",
      date: "May 15, 2024",
      readTime: "5 min read",
      image: "/blog-web-dev.jpg",
      slug: "future-web-dev-2024",
      category: "Development"
    },
    {
      title: "The Future of Web Development in 2024",
      excerpt: "Exploring emerging technologies that will shape the web development landscape in the coming year.",
      date: "May 15, 2024",
      readTime: "5 min read",
      image: "/blog-web-dev.jpg",
      slug: "future-web-dev-2024",
      category: "Development"
    },
    {
      title: "The Future of Web Development in 2024",
      excerpt: "Exploring emerging technologies that will shape the web development landscape in the coming year.",
      date: "May 15, 2024",
      readTime: "5 min read",
      image: "/blog-web-dev.jpg",
      slug: "future-web-dev-2024",
      category: "Development"
    },
    {
      title: "The Future of Web Development in 2024",
      excerpt: "Exploring emerging technologies that will shape the web development landscape in the coming year.",
      date: "May 15, 2024",
      readTime: "5 min read",
      image: "/blog-web-dev.jpg",
      slug: "future-web-dev-2024",
      category: "Development"
    },
   
  ];

  const categories = [
    { name: "All", count: blogPosts.length },
    { name: "Development", count: blogPosts.filter(post => post.category === "Development").length },
    { name: "Design", count: blogPosts.filter(post => post.category === "Design").length },
    { name: "Technology", count: blogPosts.filter(post => post.category === "Technology").length },
    { name: "Cloud", count: blogPosts.filter(post => post.category === "Cloud").length }
  ];

  return (
    <div className="relative overflow-visible bg-transparent">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-cyan-500/10 to-blue-600/10 rounded-full filter blur-3xl" />
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
          <div
            className="inline-flex items-center px-4 py-1.5 rounded-full bg-gradient-to-r from-cyan-400/10 to-cyan-600/10 
            border border-cyan-500/30 text-cyan-500 text-sm mb-4"
          >
            <span className="relative flex h-2 w-2 mr-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            Innovating Since 2018
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight dark:text-white text-black mb-4">
          Dynexia<span className="dark:text-cyan-400 text-cyan-600">  Blog</span>
          </h1>
        
          <p className="text-lg dark:text-gray-300 text-gray-700 max-w-2xl mx-auto">
            Cutting-edge insights on web development, design, and emerging technologies from our team of experts.
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
              active={index === 0}
            />
          ))}
        </motion.div>

        {/* Featured Post */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-center">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-600">
              Featured Article
            </span>
          </h2>
          <div className="relative rounded-2xl overflow-hidden border dark:border-gray-800 border-gray-200">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="h-64 lg:h-auto relative">
                <Image
                  src="/blog-featured.jpg"
                  alt="Featured post"
                  fill
                  className="object-cover"
                />
              </div>
              
              <div className="p-8 lg:p-12 dark:bg-gradient-to-b dark:from-gray-900/50 dark:to-gray-800/20 bg-gradient-to-b from-gray-50/80 to-white">
                <div className="flex gap-4 mb-4">
                  <span className="flex items-center text-sm text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-600">
                    <CalendarDays className="w-4 h-4 mr-1 text-cyan-500" />
                    May 1, 2024
                  </span>
                  <span className="flex items-center text-sm dark:text-white text-black">
                    <Clock className="w-4 h-4 mr-1" />
                    10 min read
                  </span>
                </div>
                
                <h2 className="text-3xl font-bold dark:text-white text-black mb-4">
                  The Evolution of Jamstack Architecture
                </h2>
                <p className="dark:text-gray-300 text-gray-700 mb-6">
                  How modern web architecture is shifting towards edge computing, serverless functions, 
                  and headless CMS solutions for better performance and scalability.
                </p>
                
                <Link
                  href="/blog/jamstack-evolution"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-400 to-cyan-600 text-white rounded-lg font-medium shadow-lg shadow-cyan-500/20"
                >
                  Read Featured Article
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </motion.div>

        {/* All Posts */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-600">
              Latest Articles
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <BlogCard {...post} />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Newsletter CTA */}
        <div className="mt-24 dark:bg-gray-900/30 bg-blue-50 rounded-2xl p-8 md:p-12 border dark:border-gray-800 border-blue-200 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold dark:text-white text-black mb-8 text-center">
        Stay <span className="dark:text-cyan-400 text-cyan-600"> Updated</span>
          </h2>
          
        
          <p className="dark:text-gray-300 text-gray-700 max-w-2xl mx-auto mb-8">
            Subscribe to our newsletter for the latest articles and industry updates.
          </p>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-3 bg-gradient-to-r from-cyan-400 to-cyan-600 text-white rounded-lg font-medium shadow-lg shadow-cyan-500/20"
          >
            Subscribe Now
          </motion.button>
        </div>
      </div>
    </div>
  );
}