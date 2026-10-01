"use client";

import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import CourseCard from "@/components/CourseCard";

type AuthLayoutProps = {
  heading: string;
  description: string;
  children: ReactNode;
};

const avatars = [1, 2, 3, 4, 5, 6, 7];

export default function AuthLayout({
  heading,
  description,
  children,
}: AuthLayoutProps) {
  return (
    <main
      className="relative min-h-screen overflow-hidden bg-primary xl:h-[1024px] xl:min-h-0"
      style={{
        backgroundImage:
          "linear-gradient(to right, rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.12) 1px, transparent 1px)",
        backgroundSize: "120px 120px",
        backgroundPosition: "center top",
      }}
    >
      <div className="relative mx-auto flex max-w-[1198px] flex-col items-center gap-8 px-4 pb-12 pt-[35px] xl:block xl:h-full xl:px-0 xl:pb-0">
        <Link
          href="/"
          aria-label="ByteSpace home"
          className="self-start xl:absolute xl:left-0 xl:top-[35px]"
        >
          <Image
            src="/images/logo.png"
            alt="ByteSpace"
            width={29}
            height={32}
            priority
          />
        </Link>

        <div className="flex w-full max-w-[579px] flex-col gap-4 text-shuttle-50 xl:absolute xl:left-0 xl:top-[120px] xl:max-w-[475px]">
          <p className="font-heading text-xl font-semibold leading-[1.2] tracking-[-0.2px]">
            {heading}
          </p>
          <p className="font-body text-lg leading-[1.6]">{description}</p>
        </div>

        <div className="pointer-events-none absolute inset-0 hidden xl:block">
          <div className="absolute left-[1px] top-[394px] w-[373px]">
            <CourseCard
              title="Build Digital Asset"
              image="/images/courses/course-2.png"
              darkBadge
            />
          </div>

          <div className="absolute left-[112px] top-[305px] w-[373px]">
            <CourseCard
              title="the Power of Big Data"
              image="/images/courses/course-3.png"
              darkBadge
            />
          </div>

          <div className="absolute left-[227px] top-[740px] flex w-[258px] flex-col justify-center gap-2 rounded-2xl bg-lime p-4">
            <div>
              <p className="font-body text-base font-medium leading-6 text-shuttle-950">
                Happy Students
              </p>
              <div className="flex items-center font-body text-[10px] leading-[1.5]">
                <span className="font-bold text-shuttle-950">4.5&nbsp;</span>
                <span className="text-[#424348]">(240)</span>
                <Star className="h-4 w-4 fill-primary text-primary" />
              </div>
            </div>

            <div className="flex -space-x-4">
              {avatars.map((n) => (
                <div
                  key={n}
                  className="relative h-[43px] w-[43px] shrink-0 overflow-hidden rounded-full bg-shuttle-200"
                >
                  <Image
                    src={`/images/avatars/avatar-${n}.png`}
                    alt="Student"
                    fill
                    sizes="43px"
                    className="object-cover"
                  />
                </div>
              ))}
              <div className="relative z-10 flex h-[43px] w-[43px] shrink-0 items-center justify-center rounded-full bg-black font-body text-xs font-bold text-shuttle-50">
                2K+
              </div>
            </div>
          </div>

          <div className="absolute left-[349px] top-[626px] h-[175px] w-[175px] -scale-x-100">
            <Image
              src="/images/cta/spiral-white.png"
              alt=""
              fill
              sizes="175px"
              className="object-contain"
            />
          </div>

          <div className="absolute left-[30px] top-[320px] h-[146px] w-[146px]">
            <Image
              src="/images/auth/ring-lime.png"
              alt=""
              fill
              sizes="146px"
              className="object-contain"
            />
          </div>

          <div className="absolute -left-6 top-[702px] h-[188px] w-[188px]">
            <Image
              src="/images/cta/triangle-lime.png"
              alt=""
              fill
              sizes="188px"
              className="object-contain"
            />
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="w-full max-w-[579px] rounded-3xl bg-white px-6 py-10 sm:px-[63px] sm:pb-10 sm:pt-[61px] xl:absolute xl:right-0 xl:top-[120px] xl:h-[784px]"
        >
          {children}
        </motion.div>
      </div>
    </main>
  );
}
