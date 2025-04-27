"use client";
import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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

    // Set initial state with full opacity
    gsap.set(card, {
      rotation: -20,
      skewY: 8,
      scale: 0.95,
      opacity: 1, // Changed from 0 to 1 for full initial opacity
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".cards-container",
        start: "top bottom",
        end: "bottom center",
        scrub: 1.5,
        ease: "power2.out",
      },
    });

    tl.to(card, {
      rotation: -20 * 0.15,
      skewY: 8 * 0.25,
      scale: 1,
      opacity: 1,
      x: index * 40,
      duration: 1.5,
      ease: "power2.inOut",
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [index, isMobile]);

  return (
    <div
      ref={cardRef}
      className={`absolute transition-all duration-700 ease-out ${
        isMobile
          ? `w-[90%] ${
              index === 0 ? "left-0" : index === 1 ? "left-[10%]" : "left-[20%]"
            }`
          : `w-full ${
              index === 0 ? "left-0" : index === 1 ? "left-1/4" : "left-1/2"
            }`
      }`}
    >
      <div
        ref={glowRef}
        className="absolute inset-0 -z-10 blur-2xl opacity-50 transition-all duration-700"
        style={{
          background:
            "radial-gradient(circle at center, rgba(99,102,241,0.7) 40%, transparent 70%)",
        }}
      />
      <div
        className={`
        border-white/50 border-3 relative z-10 
        ${isMobile ? "h-[180px]" : "h-full"} 
        w-[80%] overflow-hidden rounded-2xl dark:border-white/10 p-1 shadow-mockup
        transition-all duration-700 ease-out
      `}
      >
        <div className="relative z-10 overflow-hidden shadow-2xl border-8 border-white/70 dark:border-white/5 rounded-md h-full w-full">
          <img
            src={imageSrc}
            alt="Card"
            className="w-full h-full object-cover transition-transform duration-700 ease-out"
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
      className="container md:left-0 mx-0 px-0 overflow-hidden mt-0 md:mt-20 md:h-[100vh] h-[30vh]"
    >
      <div
        className={`
        cards-container absolute left-0 w-full 
        ${
          isMobile
            ? "flex-col right-0 w-screen overflow-hidden gap-6 items-start"
            : ""
        } 
        md:h-[100vh] h-[20rem] flex items-center justify-center
        transition-all duration-700 ease-out
      `}
      >
        <div
          style={{
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.2) 20%, rgba(0,0,0,0) 100%)",
            maskImage:
              "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.5) 20%, rgba(0,0,0,0) 100%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.5) 20%, rgba(0,0,0,0) 100%)",
          }}
          className="relative pt-20 h-[140%] w-[100vw] overflow-hidden transition-all duration-700"
        >
          <TiltedCard imageSrc="app-dark.webp" index={0} />
          <TiltedCard imageSrc="app-dark.webp" index={1} />
          <TiltedCard imageSrc="app-dark.webp" index={2} />
        </div>
      </div>
    </div>
  );
}
