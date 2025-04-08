"use client";
import { motion, useScroll, useTransform, cubicBezier } from "framer-motion";
import { Button } from "@/components/ui/button";

const TiltedCard = ({
  imageSrc,
  index,
  rotate,
  skewY,
  scale,
  left,
}: {
  imageSrc: string;
  index: number;
  rotate: any;
  skewY: any;
  scale: any;
  left: any;
}) => {
  return (
    <motion.div
      style={{
        rotate,
        skewY,
        scale,
        left,
        zIndex: 1000 - index,
      }}
      transition={{
        type: "spring",
        stiffness: 50,
        damping: 15,
        mass: 0.5,
      }}
      className="absolute   top-0 rounded-md w-full h-[17rem] sm:h-[12rem] md:h-[16rem] lg:h-[40rem] cursor-pointer will-change-transform"
    >
      <motion.div
        className="absolute  top-0  border rounded-xl shadow-lg overflow-visible"
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
        }}
        whileHover={{ scale: 1.0 }}
        transition={{ type: "spring", stiffness: 400 }}
      >
        <img
          src={imageSrc}
          alt="Card"
          className="w-full h-full object-cover rounded-xl border-8 border-white/30"
        />
      </motion.div>
    </motion.div>
  );
};

const ScrollEffectCards = () => {
  const { scrollY } = useScroll();

  const easing = cubicBezier(0.34, 1, 0.64, 1);
  const easing2 = cubicBezier(0.16, 1, 0.3, 1);

  const rotate = useTransform(scrollY, [0, 300], [-29, -5], { ease: easing });
  const skewY = useTransform(scrollY, [0, 300], [16, 0], { ease: easing2 });
  const scale = useTransform(scrollY, [0, 300], [0.88, 1], { ease: easing });

  return (
    <div className="relative right-20 mb-0 md:bottom-36 max-w-[screen] mx-auto left-0    h-[30rem] sm:h-[47rem] z-10 overflow-visible">
      <div
        style={{
          WebkitMaskImage:
            "linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0.8), rgba(0,0,0,0))",
          maskImage:
            "linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0.8), rgba(0,0,0,0))",
        }}
        className="relative border overflow-visible w-full mx-auto h-full pt-20 md:pt-40 flex justify-center items-center"
      >
        <div className="relative w-[95%] sm:w-[87%] md:w-[90%] lg:w-[80%] h-full">
          {[0, 1, 2].map((index) => (
            <TiltedCard
              key={index}
              imageSrc="app-dark.webp"
              index={index}
              rotate={rotate}
              skewY={skewY}
              scale={scale}
              left={useTransform(
                scrollY,
                [0, 300],
                [`${index * 10}%`, `${index * 15}%`],
                { ease: easing }
              )}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default function Hero() {
  return (
<<<<<<< HEAD
    <>
      {/* Hero */}
      <div className="container pb-10     py-24 pt-32 ">
        <img
          alt="shape"
          loading="lazy"
          width="411"
          height="276"
          decoding="async"
          className="absolute opacity-30 left-0 top-0 -z-10"
          src="hero-shape-1.svg"
          style={{ color: "transparent" }}
        />
=======
    <section className="max-w-screen px-4">
      {/* Background shapes */}
      <img
        alt="shape"
        loading="lazy"
        width="411"
        height="276"
        decoding="async"
        className="absolute opacity-30 left-0 top-0 -z-10"
        src="hero-shape-1.svg"
        style={{ color: "transparent" }}
      />
      <img
        alt="shape"
        loading="lazy"
        width="820"
        height="692"
        decoding="async"
        className="absolute opacity-35 right-0 top-0 -z-10"
        src="hero-shape-2.svg"
        style={{ color: "transparent" }}
      />
>>>>>>> 5c3c0d405af25f0044f4209bfe3b785523c46523

      {/* Content container */}
      <div className="container pl-0  mx-auto min-w-full w-screen overflow-visible relative pt-20 md:pt-32">
        {/* Grid layout */}
        <div className="grid  md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center">
          <div>
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
              Dynexia System: Your IT Solution Provider
            </h1>
            <p className="mt-3 text-xl text-muted-foreground">
              Simplify your IT needs with Dynexia System, the ultimate web
              development agency that provides IT solutions.
            </p>
            {/* Buttons */}
            <div className="mt-7 grid gap-3 w-full sm:inline-flex">
              <Button size={"lg"}>Get started</Button>
              <Button variant={"outline"} size={"lg"}>
                Contact us
              </Button>
            </div>
            {/* End Buttons */}
          </div>
          {/* Col */}

          {/* End Col */}
        </div>
<<<<<<< HEAD
        {/* End Grid */}
        <ScrollEffectCards></ScrollEffectCards>
      </div>
      {/* End Hero */}
    </>
=======

        {/* Animated cards - now positioned below the text */}
        <ScrollEffectCards />
      </div>
    </section>
>>>>>>> 5c3c0d405af25f0044f4209bfe3b785523c46523
  );
}
