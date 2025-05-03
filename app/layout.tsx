import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Dynexia - IT Solution Development Agency in India",
    template: "%s | Dynexia",
  },
  description:
    "Premier IT solution development agency in India offering web development, mobile apps, cloud solutions, and digital transformation services.",
  keywords: [
    "IT solutions India",
    "web development company",
    "mobile app development",
    "software agency",
    "digital transformation",
    "Dynexia",
    "IT services",
  ],
  generator: "Dynexia",
  applicationName: "Dynexia",
  referrer: "origin-when-cross-origin",
  authors: [{ name: "Shivam Thakur", url: "https://dynexia-netlify.app" }],
  creator: "Shivam Thakur",
  publisher: "Dynexia",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  metadataBase: new URL("https://www.dynexia-netlify.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Dynexia - IT Solution Development Agency",
    description:
      "Premier IT solution development agency offering cutting-edge technology services",
    url: "https://www.dynexia-netlify.app",
    siteName: "Dynexia",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Dynexia - IT Solutions",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dynexia - IT Solution Development Agency",
    description:
      "Premier IT solution development agency offering cutting-edge technology services",
    creator: "@dynexia",
    images: ["/images/twitter-card.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body
        className={`${inter.className} overflow-x-hidden md:overflow-x-hidden mx-auto`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* Background gradient */}
          <div className="fixed w-screen opacity-30 inset-0 -z-10 overflow-hidden">
            <div className="absolute top-0 left-1/2 w-[900px] h-[900px] bg-cyan-600/30 rounded-full filter blur-[100px]"></div>
            <div className="absolute bottom-0 right-1/2 w-[900px] h-[900px] bg-purple-600/30 rounded-full filter blur-[100px]"></div>
          </div>
          <Navbar />
          <div className="flex w-full max-w-screen-xl min-w-screen min-h-screen sm:mx-auto mx-auto flex-col">
            <main className="flex-1">{children}</main>
          </div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
