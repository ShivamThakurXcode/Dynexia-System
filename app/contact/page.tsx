"use client";

import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Linkedin,
  Twitter,
  Github,
} from "lucide-react";
import Head from "next/head";
import { useForm } from "react-hook-form";

export default function ContactPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
    // Add your form submission logic here
  };

  return (
    <>
      <Head>
        <title>Contact Us | Dynexia IT Solutions</title>
        <meta
          name="description"
          content="Get in touch with Dynexia's expert IT team for your project inquiries, support, or partnership opportunities in India."
        />
        <meta
          name="keywords"
          content="contact Dynexia, IT support contact, web development company contact, software agency India contact, Dynexia phone number"
        />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.dynexia.com/contact" />
        <meta property="og:title" content="Contact Dynexia IT Solutions Team" />
        <meta
          property="og:description"
          content="Reach out to our IT experts for consultations, project discussions, or support inquiries"
        />
        <meta property="og:image" content="/images/contact-og.jpg" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://www.dynexia.com/contact"
        />
        <meta property="twitter:title" content="Contact Dynexia IT Solutions" />
        <meta
          property="twitter:description"
          content="Connect with our team for your custom software development needs"
        />
        <meta property="twitter:image" content="/images/contact-twitter.jpg" />

        {/* Canonical */}
        <link rel="canonical" href="https://www.dynexia.com/contact" />
      </Head>
      <div className="relative overflow-visible bg-transparent">
        {/* Background elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full filter blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] dark:bg-purple-500/10 bg-purple-200/20 rounded-full filter blur-3xl" />
        </div>

        <div className="container mx-auto px-4 py-20 md:px-6 max-w-7xl">
          {/* Header Section */}
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
              Contact Us
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight dark:text-white text-black mb-4">
              Dynexia
              <span className="dark:text-white text-black"> Contact</span>
            </h1>

            <p className="text-lg dark:text-gray-300 text-gray-700 max-w-2xl mx-auto">
              Have a project in mind or want to discuss how we can help your
              business? Reach out to our team.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="rounded-2xl p-8 dark:bg-gradient-to-b dark:from-gray-900/50 dark:to-gray-800/20 bg-gradient-to-b from-gray-50/80 to-white border dark:border-gray-800 border-gray-200 shadow-lg"
            >
              <h2 className="text-2xl font-bold dark:text-white text-gray-900 mb-6">
                Send us a message
              </h2>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium dark:text-gray-300 text-gray-700 mb-1"
                  >
                    Full Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    {...register("name", { required: "Name is required" })}
                    className="w-full px-4 py-3 rounded-lg dark:bg-gray-800/30 bg-white dark:border-gray-700 border-gray-300 dark:text-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your full name here"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.name.message as string}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium dark:text-gray-300 text-gray-700 mb-1"
                  >
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address",
                      },
                    })}
                    className="w-full px-4 py-3 rounded-lg dark:bg-gray-800/30 bg-white dark:border-gray-700 border-gray-300 dark:text-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your email address here"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.email.message as string}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium dark:text-gray-300 text-gray-700 mb-1"
                  >
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    {...register("phone", {
                      required: "Phone number is required",
                      pattern: {
                        value: /^[6-9]\d{9}$/,
                        message: "Please enter valid Indian phone number",
                      },
                    })}
                    className="w-full px-4 py-3 rounded-lg dark:bg-gray-800/30 bg-white dark:border-gray-700 border-gray-300 dark:text-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your 10-digit phone number"
                  />
                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.phone.message as string}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium dark:text-gray-300 text-gray-700 mb-1"
                  >
                    Subject
                  </label>
                  <input
                    id="subject"
                    type="text"
                    {...register("subject", {
                      required: "Subject is required",
                    })}
                    className="w-full px-4 py-3 rounded-lg dark:bg-gray-800/30 bg-white dark:border-gray-700 border-gray-300 dark:text-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter the subject of your message"
                  />
                  {errors.subject && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.subject.message as string}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium dark:text-gray-300 text-gray-700 mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    {...register("message", {
                      required: "Message is required",
                    })}
                    className="w-full px-4 py-3 rounded-lg dark:bg-gray-800/30 bg-white dark:border-gray-700 border-gray-300 dark:text-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Type your message here..."
                  ></textarea>
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.message.message as string}
                    </p>
                  )}
                </div>

                <motion.button
                  whileHover={{
                    scale: 1.03,
                    boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)",
                  }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full flex justify-center items-center px-6 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-medium shadow-lg hover:shadow-blue-500/30 transition-all"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </motion.button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="rounded-2xl p-8 dark:bg-gradient-to-b dark:from-gray-900/50 dark:to-gray-800/20 bg-gradient-to-b from-gray-50/80 to-white border dark:border-gray-800 border-gray-200 shadow-lg">
                <h2 className="text-2xl font-bold dark:text-white text-gray-900 mb-6">
                  Contact Information
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full dark:bg-gray-800/30 bg-gray-100 text-gray-600 dark:text-gray-400">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-medium dark:text-gray-300 text-gray-700">
                        Email
                      </h3>
                      <a
                        href="mailto:contact@dynexia.com"
                        className="text-gray-600 dark:text-gray-400 hover:underline"
                      >
                        contact@dynexia.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full dark:bg-gray-800/30 bg-gray-100 text-gray-600 dark:text-gray-400">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-medium dark:text-gray-300 text-gray-700">
                        Phone
                      </h3>
                      <a
                        href="tel:+11234567890"
                        className="text-gray-600 dark:text-gray-400 hover:underline"
                      >
                        +1 (123) 456-7890
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full dark:bg-gray-800/30 bg-gray-100 text-gray-600 dark:text-gray-400">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-medium dark:text-gray-300 text-gray-700">
                        Office
                      </h3>
                      <p className="dark:text-gray-400 text-gray-600">
                        123 Tech Street
                        <br />
                        San Francisco, CA 94107
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="rounded-2xl p-8 dark:bg-gradient-to-b dark:from-gray-900/50 dark:to-gray-800/20 bg-gradient-to-b from-gray-50/80 to-white border dark:border-gray-800 border-gray-200 shadow-lg">
                <h2 className="text-2xl font-bold dark:text-white text-gray-900 mb-6">
                  Follow Us
                </h2>

                <div className="flex flex-wrap gap-4">
                  <motion.a
                    whileHover={{ y: -3 }}
                    href="https://linkedin.com/company/dynexia"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-12 h-12 rounded-full dark:bg-gray-800 bg-white dark:text-gray-300 text-gray-700 dark:border-gray-700 border-gray-200 shadow-sm"
                  >
                    <Linkedin className="w-5 h-5" />
                  </motion.a>

                  <motion.a
                    whileHover={{ y: -3 }}
                    href="https://twitter.com/dynexia"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-12 h-12 rounded-full dark:bg-gray-800 bg-white dark:text-gray-300 text-gray-700 dark:border-gray-700 border-gray-200 shadow-sm"
                  >
                    <Twitter className="w-5 h-5" />
                  </motion.a>

                  <motion.a
                    whileHover={{ y: -3 }}
                    href="https://github.com/dynexia"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-12 h-12 rounded-full dark:bg-gray-800 bg-white dark:text-gray-300 text-gray-700 dark:border-gray-700 border-gray-200 shadow-sm"
                  >
                    <Github className="w-5 h-5" />
                  </motion.a>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="rounded-2xl overflow-hidden border dark:border-gray-800 border-gray-200 shadow-lg h-64">
                <div className="w-full h-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center">
                  <MapPin className="w-12 h-12 text-gray-400 dark:text-gray-600" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}
