"use client";
import { useState } from "react";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What IT services does Dynexia provide?",
      answer:
        "We offer comprehensive IT solutions including cloud computing, cybersecurity, network infrastructure, software development, IT consulting, and 24/7 technical support services tailored to your business needs.",
    },
    {
      question: "How quickly can you respond to support requests?",
      answer:
        "Our standard response time is under 30 minutes for critical issues, with most problems resolved within 2-4 hours. We offer priority SLA options for businesses requiring faster response times.",
    },
    {
      question: "Do you provide managed IT services?",
      answer:
        "Yes, we offer fully managed IT services where we proactively monitor and maintain your systems, handle all updates and patches, and provide unlimited support for a fixed monthly fee.",
    },
    {
      question: "What cybersecurity measures do you implement?",
      answer:
        "We deploy enterprise-grade security including next-gen firewalls, endpoint protection, multi-factor authentication, regular vulnerability scans, employee training, and compliance management.",
    },
    {
      question: "Can you help with cloud migration?",
      answer:
        "Absolutely. Our cloud specialists handle seamless migrations to AWS, Azure, or Google Cloud with minimal downtime, including optimization for cost-efficiency and performance.",
    },
    {
      question: "What industries do you specialize in?",
      answer:
        "While we serve all industries, we have particular expertise in healthcare (HIPAA compliance), financial services, legal firms, manufacturing, and professional services.",
    },
    {
      question: "How do your pricing models work?",
      answer:
        "We offer flexible pricing including per-user/month managed services, project-based fees, and customized enterprise agreements. All pricing is transparent with no hidden costs.",
    },
    {
      question: "Do you provide 24/7 monitoring?",
      answer:
        "Yes, our Network Operations Center provides 24/7/365 monitoring with immediate alerting and automated responses to many common issues before they impact your business.",
    },
  ];

  return (
    <section className="py-12 md:py-20 px-4 relative bg-transparent">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col items-center gap-6 mb-12">
          <div className="flex items-center gap-2">
            <HelpCircle className="size-6 text-primary" />
            <span className="text-sm font-medium text-primary">FAQs</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-center">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl">
            Find answers to common questions about our IT solutions and
            services.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border rounded-lg overflow-hidden transition-all"
            >
              <button
                className="flex items-center justify-between w-full p-4 text-left hover:bg-muted/50 transition-colors"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-medium text-start">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="size-5 text-muted-foreground shrink-0" />
                ) : (
                  <ChevronDown className="size-5 text-muted-foreground shrink-0" />
                )}
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="p-4 pt-0 text-muted-foreground">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            Still have questions?{" "}
            <a
              href="/contact"
              className="text-primary hover:underline font-medium"
            >
              Contact our team
            </a>{" "}
            for more information.
          </p>
        </div>
      </div>
    </section>
  );
}
