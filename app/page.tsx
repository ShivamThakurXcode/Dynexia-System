import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import Hero from "@/components/hero-section.";

import Link from "next/link";
import ToolsSection from "@/components/tool-section";
import { FeaturesSection } from "@/components/features-section";
import { DynexiaBentoGrid } from "@/components/workingflow-section";
import { MarqueeDemoVertical } from "@/components/webPreview-section";
import { CTASection } from "@/components/cta-section";
import { MarqueeDemo } from "@/components/testimonial-section";
import ScrollEffectCards from "@/components/ui/HoverEffectCards";
import { FAQSection } from "@/components/faq-section";
export default function Home() {
  return (
    <>
      <Hero />
      <ToolsSection />
      <FeaturesSection />
      <MarqueeDemoVertical />
      <DynexiaBentoGrid />
      <MarqueeDemo />
      <FAQSection />
      <CTASection />
    </>
  );
}
