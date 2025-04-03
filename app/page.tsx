import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import Hero from "@/components/hero-section.";

import Link from "next/link";
import ToolsSection from "@/components/tool-section";
import { FeaturesSection } from "@/components/features-section";
import { DynexiaBentoGrid } from "@/components/workingflow-section";
import { MarqueeDemoVertical } from "@/components/webPreview-section";
import { MarqueeDemo } from "@/components/testimonial-section";

export default function Home() {
  return (
    <>
      <Hero></Hero>
      <ToolsSection></ToolsSection>
      <FeaturesSection></FeaturesSection>
      <DynexiaBentoGrid></DynexiaBentoGrid>
      <MarqueeDemoVertical></MarqueeDemoVertical>
      <MarqueeDemo></MarqueeDemo>
    </>
  );
}
