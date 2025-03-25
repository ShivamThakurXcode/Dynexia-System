"use client";
import {
  ScanFace,
  MonitorSmartphone,
  Eclipse,
  Blocks,
  FastForward,
  Rocket,
  Languages,
  SquarePen,
} from "lucide-react";

export function FeaturesSection() {
  const features = [
    {
      icon: <ScanFace className="text-brand  size-5 stroke-1" />,
      title: "Accessibility first",
      description: "Fully WCAG 2.0 compliant, made with best a11y practices",
    },
    {
      icon: <MonitorSmartphone className="text-brand size-5 stroke-1" />,
      title: "Responsive design",
      description: "Looks and works great on any device and screen size",
    },
    {
      icon: <Eclipse className="text-brand size-5 stroke-1" />,
      title: "Light and dark mode",
      description:
        "Seamless switching between color schemes, 6 themes included",
    },
    {
      icon: <Blocks className="text-brand size-5 stroke-1" />,
      title: "Easy to customize",
      description: "Flexible options to match your product or brand",
    },
    {
      icon: <FastForward className="text-brand size-5 stroke-1" />,
      title: "Top-level performance",
      description: "Made for lightning-fast load times and smooth interactions",
    },
    {
      icon: <Rocket className="text-brand size-5 stroke-1" />,
      title: "Production ready",
      description: "Thoroughly tested and launch-prepared",
    },
    {
      icon: <Languages className="text-brand size-5 stroke-1" />,
      title: "Made for localisation",
      description:
        "Easy to implement support for multiple languages and regions",
    },
    {
      icon: <SquarePen className="text-brand size-5 stroke-1" />,
      title: "CMS friendly",
      description: "Built to work with any headless content management system",
    },
  ];

  return (
    <section className="py-12 bg-transparent md:py-24 px-4 relative overflow-hidden">
      <div className="max-w-screen mx-auto flex flex-col items-center gap-6 sm:gap-20">
        <h2 className="max-w-[560px] text-center text-3xl leading-tight font-semibold sm:text-5xl sm:leading-tight">
          Everything you need. Nothing you don't.
        </h2>

        <div className="grid auto-rows-fr grid-cols-2 gap-0 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-foreground flex flex-col gap-4 p-4"
            >
              <h3 className="text-sm leading-none font-semibold tracking-tight sm:text-base flex items-center gap-2">
                <div className="flex items-center self-start">
                  {feature.icon}
                </div>
                {feature.title}
              </h3>
              <div className="text-muted-foreground flex max-w-[240px] flex-col gap-2 text-sm text-balance">
                {feature.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
