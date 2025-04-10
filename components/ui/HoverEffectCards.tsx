"use client";
import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const TiltedCard = ({
  imageSrc,
  index,
}: {
  imageSrc: string;
  index: number;
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (!cardRef.current || isMobile) return;

    const card = cardRef.current;

    // Set initial styles (desktop only)
    gsap.set(card, {
      rotation: -24,
      skewY: 12,
      scale: 0.9,
    });

    // Animation for each card (desktop only)
    gsap.to(card, {
      rotation: -24 * 0.2,
      skewY: 12 * 0.2,
      scale: 1,
      x: index * 60,
      scrollTrigger: {
        trigger: ".cards-container",
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [index, isMobile]);

  return (
    <div
      ref={cardRef}
      className={`absolute ${
        isMobile
          ? `w-[80%] ${
              index === 0 ? "left-0" : index === 1 ? "left-[25%]" : "left-[50%]"
            }`
          : `w-full ${
              index === 0 ? "left-0" : index === 1 ? "left-1/4" : "left-1/2"
            }`
      }`}
    >
      <div
        ref={glowRef}
        className="absolute inset-0 -z-10 blur-2xl opacity-50 transition-all duration-300"
        style={{
          background:
            "radial-gradient(circle at center, rgba(99,102,241,0.7) 0%, transparent 70%)",
        }}
      />
      <div
        className={`
        border-white/50 border-3 relative z-10 
        ${isMobile ? "h-[200px]" : "h-full"} 
        w-full overflow-hidden rounded-2xl dark:border-white/10 p-1 shadow-mockup
      `}
      >
        <div className="relative z-10 overflow-hidden shadow-2xl border-8 border-white/70 dark:border-white/5 rounded-md h-full w-full">
          <img
            src={imageSrc}
            alt="Card"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default function ScrollEffectCards() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div
      ref={containerRef}
      className="container border my-0 py-0 bottom-0 mx-0 px-0 left-0 overflow-visible mt-20 md:h-[100vh] h-[25vh]"
    >
      <div
        className={`
        cards-container absolute left-0 w-full 
        ${isMobile ? "scale-150 flex-col gap-4" : "scale-80"} 
        md:h-[100vh] h-[20vh] flex items-center justify-center
      `}
      >
        <TiltedCard imageSrc="app-dark.webp" index={0} />
        <TiltedCard imageSrc="app-dark.webp" index={1} />
        <TiltedCard imageSrc="app-dark.webp" index={2} />
      </div>
    </div>
  );
}
