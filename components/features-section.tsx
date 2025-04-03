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
      icon: <ScanFace className="size-5" />,
      title: "Accessibility first",
      description: "Fully WCAG 2.0 compliant, made with best a11y practices",
      glowColor: "rgba(59, 130, 246, 0.7)", // Blue
    },
    {
      icon: <MonitorSmartphone className="size-5" />,
      title: "Responsive design",
      description: "Looks and works great on any device and screen size",
      glowColor: "rgba(16, 185, 129, 0.7)", // Emerald
    },
    {
      icon: <Eclipse className="size-5" />,
      title: "Light and dark mode",
      description:
        "Seamless switching between color schemes, 6 themes included",
      glowColor: "rgba(245, 158, 11, 0.7)", // Amber
    },
    {
      icon: <Blocks className="size-5" />,
      title: "Easy to customize",
      description: "Flexible options to match your product or brand",
      glowColor: "rgba(139, 92, 246, 0.7)", // Purple
    },
    {
      icon: <FastForward className="size-5" />,
      title: "Top-level performance",
      description: "Made for lightning-fast load times and smooth interactions",
      glowColor: "rgba(239, 68, 68, 0.7)", // Red
    },
    {
      icon: <Rocket className="size-5" />,
      title: "Production ready",
      description: "Thoroughly tested and launch-prepared",
      glowColor: "rgba(236, 72, 153, 0.7)", // Pink
    },
    {
      icon: <Languages className="size-5" />,
      title: "Made for localisation",
      description:
        "Easy to implement support for multiple languages and regions",
      glowColor: "rgba(6, 182, 212, 0.7)", // Cyan
    },
    {
      icon: <SquarePen className="size-5" />,
      title: "CMS friendly",
      description: "Built to work with any headless content management system",
      glowColor: "rgba(5, 150, 105, 0.7)", // Green
    },
  ];

  return (
    <section className="py-8 md:py-16 px-4 relative">
      <div className="max-w-screen mx-auto flex flex-col items-center gap-6 sm:gap-20">
        <div className="grid auto-rows-fr grid-cols-2 gap-0 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-foreground flex flex-col gap-4 p-4"
            >
              <h3 className="text-sm leading-none font-semibold tracking-tight sm:text-base flex items-center gap-2">
                <div
                  className="relative p-2"
                  style={{
                    filter: `drop-shadow(0 0 8px  ${feature.glowColor})`,
                  }}
                >
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
