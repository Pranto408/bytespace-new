"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type Ornament = {
  src: string;
  width: number;
  height: number;
  left?: number;
  right?: number;
  top?: number;
  bottom?: number;
  flip?: boolean;
};

const ornaments: Ornament[] = [
  {
    src: "/images/cta/triangle-lime.png",
    width: 188,
    height: 188,
    right: 172,
    top: 0,
  },
  {
    src: "/images/cta/spiral-lime-large.png",
    width: 330,
    height: 199,
    right: 0,
    bottom: 0,
  },
  {
    src: "/images/cta/spiral-lime-top-left.png",
    width: 267,
    height: 223,
    left: 0,
    top: 0,
  },
  {
    src: "/images/cta/spiral-white.png",
    width: 175,
    height: 175,
    left: 178,
    top: 5,
    flip: true,
  },
  {
    src: "/images/cta/cone-white.png",
    width: 140,
    height: 188,
    left: 0,
    top: 225,
  },
  {
    src: "/images/cta/ring-lime.png",
    width: 342,
    height: 189,
    left: 20,
    bottom: 0,
  },
  {
    src: "/images/cta/cylinder-white.png",
    width: 214,
    height: 370,
    right: 0,
    top: 6,
  },
];

export default function CtaSection() {
  return (
    <section
      className="relative flex min-h-[488px] items-center justify-center overflow-hidden bg-primary px-4 py-16"
      style={{
        backgroundImage:
          "linear-gradient(to right, rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.12) 1px, transparent 1px)",
        backgroundSize: "120px 120px",
        backgroundPosition: "center top",
      }}
    >
      <div className="pointer-events-none absolute inset-0 hidden lg:block">
        {ornaments.map((item) => (
          <div
            key={item.src}
            className={`absolute ${item.flip ? "-scale-x-100" : ""}`}
            style={{
              left: item.left,
              right: item.right,
              top: item.top,
              bottom: item.bottom,
              width: item.width,
              height: item.height,
            }}
          >
            <Image
              src={item.src}
              alt=""
              fill
              sizes={`${item.width}px`}
              className="object-contain"
            />
          </div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 flex flex-col items-center gap-10 text-center"
      >
        <h2 className="max-w-[710px] font-heading text-3xl font-semibold leading-[1.2] text-shuttle-50 sm:text-[44px] sm:tracking-[-0.44px]">
          Unlock Your Potential as a Creator with ByteSpace
        </h2>
        <p className="max-w-[964px] font-body text-lg leading-[1.6] text-shuttle-50">
          Experience the collaboration of numerous creators and an expanding
          selection of courses. Register now and become a part of a community
          comprising over 10,000 local and international creators. Utilize our
          Course Editor, and showcase your expertise by publishing your finest
          course on the ByteSpace Course Library.
        </p>
        <button className="cursor-pointer rounded-3xl bg-lime px-6 py-3 font-body text-lg font-medium leading-[1.2] text-shuttle-950 transition-transform duration-200 hover:scale-105 active:scale-95">
          Join as Creator
        </button>
      </motion.div>
    </section>
  );
}
