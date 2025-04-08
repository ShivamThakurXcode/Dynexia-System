"use client";
import { motion, useScroll, useTransform } from "framer-motion";

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
      style={{ rotate, skewY, scale, left }}
      transition={{ type: "spring", stiffness: 60, damping: 12 }}
      className="absolute border-5 rounded-md w-[80%] h-[8rem] sm:h-[12rem] md:h-[16rem] lg:h-[500px] cursor-pointer"
    >
      <div className="absolute scale-95 -left-10 -top-10 border border-black/80 rounded-xl shadow-lg">
        <img
          src={imageSrc}
          alt="Card"
          className="w-full rounded-xl border-8 border-white/30 h-full object-cover"
        />
      </div>
    </motion.div>
  );
};

export default function ScrollEffectCards() {
  const { scrollY } = useScroll();

  // Transform scrollY values smoothly
  const rotate = useTransform(scrollY, [0, 300], [-24, -5]);
  const skewY = useTransform(scrollY, [0, 300], [14, 0]);
  const scale = useTransform(scrollY, [0, 300], [0.88, 1]);

  return (
    <div className="w-full h-[65vh]">
      <div
        style={{
          WebkitMaskImage:
            "linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0.8), rgba(0,0,0,0))",
          maskImage:
            "linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0.8), rgba(0,0,0,0))",
        }}
        className="flex absolute ml-0 top-[50%] w-[100vw]  overflow-visible lg:h-full pt-20 left-0 mx-auto justify-center items-center h-[50%]"
      >
        <div className="relative overflow-visible md:scale-90 lg:w-[100%] w-[87%] h-full flex justify-center items-center">
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
                [`${index * 10}%`, `${index * 15}%`]
              )}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
