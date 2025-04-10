import { Button } from "./ui/button";

export function CTASection() {
  return (
    <section className="relative mx-5 py-20 overflow-hidden">
      {/* Glowing gradient background elements */}
      <div className="absolute inset-0 overflow-hidden border dark:border-white/10 border-black/10 rounded-2xl">
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-purple-600 rounded-full filter blur-[80px] opacity-20 dark:opacity-20"></div>
        <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-cyan-600 rounded-full filter blur-[80px] opacity-20 dark:opacity-20"></div>
      </div>

      {/* Glassmorphism container */}
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white dark:bg-gradient-to-r dark:from-blue-300 dark:to-purple-400 dark:bg-clip-text dark:text-transparent">
            Ready to Build Your Dream Website?
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 mb-10 max-w-3xl mx-auto">
            Let's turn your vision into reality with our expert website
            development services. From concept to launch, we'll handle every
            step of the process.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="px-8 py-6 text-lg bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 text-white">
              Book a Free Consultation
            </Button>
            <Button
              variant="outline"
              className="px-8 py-6 text-lg border-gray-300 dark:border-white/30 text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-white/10 hover:border-gray-400 dark:hover:border-white/50 transition-all duration-300 backdrop-blur-sm"
            >
              View Our Portfolio
            </Button>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-8 text-gray-700 dark:text-gray-300">
            <div className="flex items-center gap-2 backdrop-blur-sm bg-white/70 dark:bg-black/5 px-4 py-2 rounded-full border border-gray-200 dark:border-white/10">
              <CheckCircle className="w-5 h-5 text-green-500 dark:text-green-400" />
              <span>Custom Designs</span>
            </div>
            <div className="flex items-center gap-2 backdrop-blur-sm bg-white/70 dark:bg-black/5 px-4 py-2 rounded-full border border-gray-200 dark:border-white/10">
              <CheckCircle className="w-5 h-5 text-green-500 dark:text-green-400" />
              <span>Mobile Responsive</span>
            </div>
            <div className="flex items-center gap-2 backdrop-blur-sm bg-white/70 dark:bg-black/5 px-4 py-2 rounded-full border border-gray-200 dark:border-white/10">
              <CheckCircle className="w-5 h-5 text-green-500 dark:text-green-400" />
              <span>SEO Optimized</span>
            </div>
            <div className="flex items-center gap-2 backdrop-blur-sm bg-white/70 dark:bg-black/5 px-4 py-2 rounded-full border border-gray-200 dark:border-white/10">
              <CheckCircle className="w-5 h-5 text-green-500 dark:text-green-400" />
              <span>Fast Loading</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CheckCircle(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <path d="m9 11 3 3L22 4" />
    </svg>
  );
}
