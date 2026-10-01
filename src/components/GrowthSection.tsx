"use client";

import Image from "next/image";
import { motion, type MotionProps } from "framer-motion";
import { CircleCheck, Star } from "lucide-react";
import CourseCard from "./CourseCard";

const stats = [
  { value: "12K", label: "Students" },
  { value: "70+", label: "Courses" },
  { value: "16", label: "Creators" },
];

const features = [
  "Share Your Expertise",
  "Monetize Your Passion",
  "Flexibility and Autonomy",
  "Build a Community",
];

const avatars = [1, 2, 3, 4, 5, 6, 7];

const glowBackground = [
  "radial-gradient(circle 568px at calc(50% - 304px) 102px, rgba(212,251,32,0.4) 0%, rgba(212,251,32,0) 70%)",
  "radial-gradient(circle 568px at calc(50% + 659px) 110px, rgba(0,59,226,0.12) 0%, rgba(0,59,226,0) 70%)",
  "radial-gradient(circle 568px at calc(50% - 660px) 751px, rgba(0,59,226,0.12) 0%, rgba(0,59,226,0) 70%)",
  "radial-gradient(circle 568px at calc(50% + 570px) 1356px, rgba(0,59,226,0.12) 0%, rgba(0,59,226,0) 70%)",
  "radial-gradient(circle 336px at calc(50% - 671px) 1282px, rgba(212,251,32,0.4) 0%, rgba(212,251,32,0) 70%)",
].join(",");

const photoShadow =
  "drop-shadow(17px 24px 24px rgba(0,0,0,0.1)) drop-shadow(51px 73px 72px rgba(0,0,0,0.13))";

const fadeIn: MotionProps = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.5 },
};

export default function GrowthSection() {
  return (
    <section className="relative overflow-hidden bg-[#fafafa]">
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: glowBackground, backgroundRepeat: "no-repeat" }}
      />

      <div className="relative mx-auto flex max-w-[1198px] flex-col gap-16 px-4 py-16 xl:gap-[72px] xl:px-0 xl:py-[120px]">
        <div className="flex flex-col items-center gap-10 xl:flex-row xl:gap-[63px]">
          <motion.div
            {...fadeIn}
            className="flex w-full max-w-[574px] shrink-0 flex-col gap-10"
          >
            <h2 className="font-heading text-3xl font-semibold leading-[1.2] text-shuttle-950 sm:text-[44px] sm:tracking-[-0.44px]">
              Your Path to Professional Growth Starts Here!
            </h2>
            <p className="max-w-[477px] font-body text-lg leading-[1.6] text-shuttle-700">
              Explore our curated selection of courses tailored to enhance your
              capabilities and accelerate your career journey. Whether you are
              looking to sharpen specific skills, gain industry expertise, or
              embark on a new career path entirely, we have the resources you
              need.
            </p>

            <div className="flex items-end gap-14">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="font-heading text-4xl font-medium leading-[44px] tracking-[-0.36px] text-primary">
                    {stat.value}
                  </p>
                  <p className="font-body text-lg leading-[1.6] text-shuttle-700">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            {...fadeIn}
            className="h-[304px] w-[342px] shrink-0 sm:h-[414px] sm:w-[466px] xl:h-[552px] xl:w-[621px]"
          >
            <div className="relative h-[552px] w-[621px] origin-top-left scale-[0.55] sm:scale-75 xl:scale-100">
              <div className="absolute left-0 top-0 w-[373px]">
                <CourseCard
                  title="Learn Figma from Basic"
                  image="/images/courses/course-1.png"
                />
              </div>

              <div className="absolute left-0 top-[12px] h-[540px] w-[577px]">
                <Image
                  src="/images/hero-student.png"
                  alt="Smiling student holding a laptop"
                  fill
                  sizes="577px"
                  className="object-cover"
                  style={{ filter: photoShadow }}
                />
              </div>

              <div className="absolute left-[345px] top-[213px] flex flex-col gap-2 rounded-2xl bg-white p-4">
                <p className="font-body text-sm font-medium leading-6 text-shuttle-950">
                  Learning Progress
                </p>
                <p className="w-[200px] font-heading text-5xl font-semibold leading-[1.2] tracking-[-0.48px] text-shuttle-950">
                  55%
                </p>
                <div className="h-2 w-[200px] rounded-full bg-[#f6f6f6]">
                  <div className="h-2 w-[112px] rounded-full bg-lime" />
                </div>
              </div>

              <div className="absolute left-[406px] top-[67px] h-[215px] w-[215px]">
                <Image
                  src="/images/growth-spiral-1.png"
                  alt=""
                  fill
                  sizes="215px"
                  className="object-contain"
                />
              </div>
            </div>
          </motion.div>
        </div>

        <div className="flex flex-col items-center gap-10 xl:flex-row xl:gap-[79px]">
          <motion.div
            {...fadeIn}
            className="h-[328px] w-[298px] shrink-0 sm:h-[447px] sm:w-[406px] xl:h-[596px] xl:w-[541px]"
          >
            <div className="relative h-[596px] w-[541px] origin-top-left scale-[0.55] sm:scale-75 xl:scale-100">
              <div className="absolute left-0 top-[44px] flex flex-col gap-2 rounded-2xl bg-primary p-4">
                <div className="text-shuttle-50">
                  <p className="font-body text-base font-medium leading-[1.2]">
                    Total Revenue
                  </p>
                  <p className="font-body text-[10px] leading-[1.2]">
                    July 1-28
                  </p>
                </div>
                <div className="flex w-[200px] items-center justify-between">
                  <span className="font-heading text-2xl font-semibold leading-8 tracking-[-0.24px] text-shuttle-50">
                    $120.29
                  </span>
                  <span className="rounded-3xl bg-[#cbfc01] px-2 py-0.5 font-body text-[10px] font-medium leading-5 text-shuttle-950">
                    +12$
                  </span>
                </div>
                <div className="h-2 w-[200px] rounded-full bg-white">
                  <div className="h-2 w-[112px] rounded-full bg-lime" />
                </div>
              </div>

              <div className="absolute left-0 top-[194px] flex w-[134px] flex-col gap-2 rounded-2xl bg-primary p-4">
                <div className="text-shuttle-50">
                  <p className="font-body text-base font-medium leading-[1.2]">
                    Year to Date
                  </p>
                  <p className="font-body text-[10px] leading-[1.2]">2023</p>
                </div>
                <p className="whitespace-nowrap font-heading text-2xl font-semibold leading-8 tracking-[-0.24px] text-shuttle-50">
                  $1,200.38
                </p>
                <span className="self-start rounded-3xl bg-[#cbfc01] px-2 py-0.5 font-body text-[10px] font-medium leading-5 text-shuttle-950">
                  +12$
                </span>
              </div>

              <div className="absolute left-[28px] top-0 h-[596px] w-[435px]">
                <Image
                  src="/images/growth-creator.png"
                  alt="Smiling creator with headphones holding a tablet"
                  fill
                  sizes="435px"
                  className="object-cover"
                  style={{ filter: photoShadow }}
                />
              </div>

              <div className="absolute left-[283px] top-[413px] flex w-[258px] flex-col justify-center gap-2 rounded-2xl bg-white p-4">
                <div>
                  <p className="font-body text-base font-medium leading-6 text-shuttle-950">
                    Happy Students
                  </p>
                  <div className="flex items-center font-body text-[10px] leading-[1.5]">
                    <span className="font-bold text-shuttle-950">
                      4.5&nbsp;
                    </span>
                    <span className="text-shuttle-400">(240)</span>
                    <Star className="h-4 w-4 fill-lime text-lime" />
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
                  <div className="relative z-10 flex h-[43px] w-[43px] shrink-0 items-center justify-center rounded-full bg-lime font-body text-xs font-bold text-shuttle-950">
                    2K+
                  </div>
                </div>
              </div>

              <div className="absolute left-[305px] top-[114px] h-[215px] w-[215px]">
                <Image
                  src="/images/growth-spiral_2.png"
                  alt=""
                  fill
                  sizes="215px"
                  className="object-contain"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            {...fadeIn}
            className="flex w-full max-w-[580px] shrink-0 flex-col gap-10"
          >
            <h2 className="max-w-[391px] font-heading text-3xl font-semibold leading-[1.2] text-shuttle-950 sm:text-[44px] sm:tracking-[-0.44px]">
              Create &amp; Manage Courses Easily.
            </h2>
            <p className="max-w-[574px] font-body text-lg leading-[1.6] text-shuttle-700">
              <span className="font-bold text-shuttle-950">ByteSpace</span>{" "}
              supports individuals or entities in the creation, publication, and
              administration of educational courses.
            </p>

            <ul className="flex flex-col gap-4">
              {features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-center gap-2 font-body text-lg font-medium leading-[1.2] text-shuttle-950"
                >
                  <CircleCheck className="h-6 w-6 shrink-0 fill-primary text-white" />
                  {feature}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
