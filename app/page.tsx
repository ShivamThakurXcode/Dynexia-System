import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import Hero from "@/components/hero-section.";

import Link from "next/link";
import ToolsSection from "@/components/tool-section";
import { FeaturesSection } from "@/components/features-section";
import { DynexiaBentoGrid } from "@/components/workingflow-section";
import ThreeDMarqueeDemoSecond from "@/components/3dProject-section";

export default function Home() {
  return (
    <>
      <Hero></Hero>
      <ToolsSection></ToolsSection>
      <FeaturesSection></FeaturesSection>
      <DynexiaBentoGrid></DynexiaBentoGrid>
      <ThreeDMarqueeDemoSecond></ThreeDMarqueeDemoSecond>

      <section className="py-12 md:py-24  lg:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Our Services
              </h2>
              <p className="max-w-[900px] tex t-muted-foreground md:text-xl lg:text-base xl:text-xl">
                We offer a comprehensive range of digital services to help your
                business thrive.
              </p>
            </div>
          </div>

          <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
            {[
              "Web Development",
              "Digital Marketing",
              "UI/UX Design",
              "Mobile Apps",
              "Cloud Solutions",
              "Consulting",
            ].map((service) => (
              <div
                key={service}
                className="flex flex-col items-center space-y-2 rounded-lg border p-4 text-center"
              >
                <CheckCircle className="h-12 w-12 text-primary" />
                <h3 className="font-bold">{service}</h3>
                <p className="text-sm text-muted-foreground">
                  Professional {service.toLowerCase()} services tailored to your
                  needs
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
