"use client";
import { useState } from "react";
import { motion } from "framer-motion";

const TiltedCard = ({
  imageSrc,
  index,
  isHovered,
}: {
  imageSrc: string;
  index: number;
  isHovered: boolean;
}) => {
  return (
    <motion.div
      initial={{
        rotateX: 0,
        rotateY: 0,
        rotate: -24,
        skewY: 14,
        scale: 1,
        left: `${index * 4}%`,
        top: `${index * 6}%`,
      }}
      animate={{
        rotateX: isHovered ? 0 : 0,
        rotateY: isHovered ? 0 : 0,
        rotate: isHovered ? -5 : -24,
        skewY: isHovered ? 0 : 14,
        scale: isHovered ? 1 : 0.88,
        left: isHovered ? `${index * 15}%` : `${index * 10}%`,
        top: `${index * 4}%`,
      }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="absolute border-5 rounded-md  w-[80%] h-[8rem] sm:h-[12rem] md:h-[16rem] lg:h-[500px] cursor-pointer"
    >
      <div className="absolute scale-95 -left-10 -top-10   border border-white/35 rounded-xl shadow-lg">
        <img
          src={imageSrc}
          alt="Card"
          className="w-full rounded-xl  border-8 border-white/ h-full object-cover"
        />
      </div>
    </motion.div>
  );
};

export default function HoverEffectCards() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="w-full h-full min-h-screen ">
      <div
        style={{
          WebkitMaskImage:
            "linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0.6), rgba(0,0,0,0))",
          maskImage:
            "linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0.6), rgba(0,0,0,0))",
        }}
        className="flex absolute w-full  border overflow-visible h-full pt-20 left-0 mx-auto justify-center items-center min-h-screen"
      >
        {/* Cards Container */}
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="absolute overflow-visible md:scale-90 lg:w-[100%] w-[87%] h-full flex justify-center items-center"
        >
          <TiltedCard
            imageSrc="app-dark.webp"
            index={0}
            isHovered={isHovered}
          />
          <TiltedCard
            imageSrc="app-dark.webp"
            index={1}
            isHovered={isHovered}
          />
          <TiltedCard
            imageSrc="app-dark.webp"
            index={2}
            isHovered={isHovered}
          />
        </div>
      </div>
    </div>
  );
}
