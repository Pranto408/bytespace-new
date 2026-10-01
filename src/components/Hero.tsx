"use client";

import { motion, type Variants } from "framer-motion";
import { Search, Star } from "lucide-react";
import Image from "next/image";

const avatars = [1, 2, 3, 4, 5, 6, 7];

// Animation settings
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const textContainer: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
};

const avatarContainer: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 1.4 } },
};

const avatarItem: Variants = {
  hidden: { opacity: 0, scale: 0.5 },
  show: { opacity: 1, scale: 1 },
};

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden bg-primary pb-24 lg:h-[1024px] lg:pb-0"
      style={{
        backgroundImage:
          "linear-gradient(to right, rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.12) 1px, transparent 1px)",
        backgroundSize: "120px 120px",
      }}
    >
      {/* Decorations (desktop only, positioned on a 1440px canvas) */}
      <div className="pointer-events-none absolute left-1/2 top-0 hidden h-[1024px] w-[1440px] -translate-x-1/2 lg:block">
        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="absolute left-[145px] top-[582px] h-[1149px] w-[1149px] rounded-full bg-lime"
        />

        {/* 3D ornaments */}
        <div className="absolute left-[-118px] top-[221px] h-[385px] w-[385px]">
          <Image
            src="/images/ornament-lime-spiral.png"
            alt=""
            fill
            className="object-contain"
          />
        </div>

        <div className="absolute left-[183px] top-[477px] h-[175px] w-[175px] -scale-x-100">
          <Image
            src="/images/ornament-white-spiral-small.png"
            alt=""
            fill
            className="object-contain"
          />
        </div>

        <div className="absolute left-[18px] top-[682px] h-[342px] w-[342px]">
          <Image
            src="/images/ornament-white-ring.png"
            alt=""
            fill
            className="object-contain"
          />
        </div>

        <div className="absolute left-[1231px] top-[221px] h-[370px] w-[370px]">
          <Image
            src="/images/ornament-lime-cylinder.png"
            alt=""
            fill
            className="object-contain"
          />
        </div>

        <div className="absolute left-[1106px] top-[464px] h-[188px] w-[188px]">
          <Image
            src="/images/ornament-white-triangle.png"
            alt=""
            fill
            className="object-contain"
          />
        </div>

        <div className="absolute left-[1127px] top-[672px] h-[330px] w-[330px]">
          <Image
            src="/images/ornament-white-spiral-large.png"
            alt=""
            fill
            className="object-contain"
          />
        </div>

        {/* Student photo */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5, ease: "easeOut" }}
          className="absolute left-[461px] top-[512px] h-[541px] w-[578px] drop-shadow-2xl"
        >
          <Image
            src="/images/hero-student.png"
            alt="Smiling student with headphones"
            fill
            className="object-cover"
            priority
          />
        </motion.div>

        {/* Card: UI/UX Design */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1, ease: "easeOut" }}
          className="absolute left-[404px] top-[639px] flex flex-col justify-center rounded-2xl bg-white p-4 backdrop-blur-[10px]"
        >
          <p className="font-body text-base font-medium leading-[1.2] text-shuttle-950">
            UI/UX Design
          </p>
          <div className="flex items-start gap-2 font-body text-xs leading-[1.6] text-shuttle-400">
            <span>200 Courses</span>
            <span className="text-[10px] leading-[1.5]">•</span>
            <span>1000+ Students</span>
          </div>
        </motion.div>

        {/* Card: Learning Progress */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1.2, ease: "easeOut" }}
          className="absolute left-[842px] top-[651px] flex flex-col gap-2 rounded-2xl bg-white p-4 backdrop-blur-[10px]"
        >
          <p className="font-body text-sm font-medium leading-[1.2] text-shuttle-950">
            Learning Progress
          </p>
          <p className="w-[200px] font-heading text-5xl font-semibold leading-[1.2] tracking-[-0.48px] text-shuttle-950">
            55%
          </p>
          <div className="h-2 w-[200px] rounded-full bg-[#f6f6f6]">
            {/* 112px = 55% of 200px */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 112 }}
              transition={{ duration: 1.2, delay: 1.6, ease: "easeOut" }}
              className="h-2 rounded-full bg-lime"
            />
          </div>
        </motion.div>

        {/* Card: Happy Students */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1.4, ease: "easeOut" }}
          className="absolute left-[328px] top-[837px] flex w-[258px] flex-col justify-center gap-2 rounded-2xl bg-white p-4 backdrop-blur-[10px]"
        >
          <div>
            <p className="font-body text-base font-medium leading-[1.2] text-shuttle-950">
              Happy Students
            </p>
            <div className="flex items-center font-body text-xs leading-[1.6]">
              <span className="text-shuttle-950">4.5&nbsp;</span>
              <span className="text-shuttle-400">(240)</span>
              <Star className="h-4 w-4 fill-lime text-lime" />
            </div>
          </div>

          <motion.div
            className="flex -space-x-4"
            variants={avatarContainer}
            initial="hidden"
            animate="show"
          >
            {avatars.map((n) => (
              <motion.div
                key={n}
                variants={avatarItem}
                className="relative h-[43px] w-[43px] shrink-0 overflow-hidden rounded-full bg-shuttle-200"
              >
                <Image
                  src={`/images/avatars/avatar-${n}.png`}
                  alt="Student"
                  fill
                  className="object-cover"
                />
              </motion.div>
            ))}

            {/* z-10 keeps this circle above the last avatar */}
            <motion.div
              variants={avatarItem}
              className="relative z-10 flex h-[43px] w-[43px] shrink-0 items-center justify-center rounded-full bg-lime font-body text-xs font-bold text-shuttle-950"
            >
              2K+
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Heading, text and search bar */}
      <motion.div
        variants={textContainer}
        initial="hidden"
        animate="show"
        className="relative z-10 mx-auto flex max-w-[1200px] flex-col items-center gap-[60px] px-4 pt-36 text-center lg:pt-[169px]"
      >
        <div className="flex flex-col items-center gap-8">
          <motion.h1
            variants={fadeUp}
            className="max-w-[935px] font-heading text-4xl font-semibold leading-[1.2] text-white sm:text-6xl lg:text-[72px] lg:tracking-[-0.72px]"
          >
            Get Access to Hundreds Courses Available
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="max-w-[819px] font-body text-lg leading-[1.6] text-shuttle-100"
          >
            Unlock your creativity, gain valuable knowledge, and grow your
            business with our wide range of courses.
          </motion.p>
        </div>

        <motion.div
          variants={fadeUp}
          role="search"
          className="flex w-full max-w-[581px] flex-col gap-4 sm:flex-row sm:items-start"
        >
          <div className="flex h-[52px] w-full items-center gap-2 rounded-[24px] bg-white px-6 transition focus-within:ring-4 focus-within:ring-lime/60 sm:w-[461px]">
            <Search className="h-6 w-6 shrink-0 text-shuttle-400" />

            <input
              type="text"
              placeholder="Course, topic, creator"
              className="w-full bg-transparent font-body text-lg text-shuttle-950 outline-none placeholder:text-shuttle-400"
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.95 }}
            className="h-[46px] rounded-[24px] bg-lime px-6 font-body text-lg font-medium text-shuttle-950"
          >
            Search
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
}
