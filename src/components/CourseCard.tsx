"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { Star } from "lucide-react";

export type Course = {
  title: string;
  image: string;
  author?: string;
  level?: string;
  price?: string;
  rating?: string;
  lessons?: string;
  duration?: string;
  comments?: string;
  students?: string;
};

const studentAvatars = [
  "/images/course-avatars/avatar-1.png",
  "/images/course-avatars/avatar-2.png",
  "/images/course-avatars/avatar-3.png",
  "/images/course-avatars/avatar-4.png",
];

const cardItem: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

function LevelIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-shuttle-400" aria-hidden>
      <path d="M17 4h3v16h-3V4zM5 14h3v6H5v-6zm6-5h3v11h-3V9z" />
    </svg>
  );
}

export default function CourseCard({
  title,
  image,
  author = "purepearl studio",
  level = "Beginner",
  price = "$25",
  rating = "4.5",
  lessons = "17 Lessons",
  duration = "2 hours 16 mins",
  comments = "59 Comments",
  students = "26+",
}: Course) {
  return (
    <motion.article
      variants={cardItem}
      whileHover={{ y: -6 }}
      className="relative h-[384px] w-full max-w-[373px] overflow-clip rounded-[24px] border border-shuttle-200 bg-white transition-shadow duration-300 hover:shadow-xl"
    >
      <div className="absolute left-[15px] right-[15px] top-[15px] h-[195px] overflow-hidden rounded-xl bg-[#443131]">
        <Image
          src={image}
          alt={title}
          fill
          sizes="341px"
          className="object-cover"
        />
        <div className="absolute left-[13px] top-[150px] flex gap-3">
          {[lessons, duration, comments].map((text) => (
            <span
              key={text}
              className="whitespace-nowrap rounded-3xl bg-[rgba(246,246,246,0.6)] px-3 py-1.5 font-body text-xs font-medium leading-[1.2] text-[#4f4f4f] backdrop-blur-[4px]"
            >
              {text}
            </span>
          ))}
        </div>
      </div>

      <div className="absolute left-[15px] right-[15px] top-[231px] flex flex-col gap-4">
        <div>
          <div className="w-full pr-[61px]">
            <h3 className="truncate font-heading text-xl font-semibold leading-[1.2] tracking-[-0.2px] text-black">
              {title}
            </h3>
          </div>
          <p className="font-body text-xs leading-[1.6] text-[#4f4f4f]">
            by <span className="text-primary">{author}</span>
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1 rounded-3xl bg-shuttle-50 px-3 py-1.5">
            <LevelIcon />
            <span className="font-body text-xs font-medium leading-[1.2] text-shuttle-700">
              {level}
            </span>
          </div>

          <div className="flex -space-x-2">
            {studentAvatars.map((src, index) => (
              <div
                key={src}
                className="relative h-8 w-8 shrink-0 overflow-hidden rounded-full bg-shuttle-200"
              >
                <Image
                  src={src}
                  alt={`Student ${index + 1}`}
                  fill
                  sizes="32px"
                  className="object-cover"
                />
              </div>
            ))}
            <div className="relative flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-lime font-body text-xs font-medium text-shuttle-950">
              {students}
            </div>
          </div>
        </div>

        <div className="flex items-end">
          <span className="flex h-6 items-center font-heading text-xl font-semibold leading-[1.2] tracking-[-0.2px] text-primary">
            {price}
          </span>
          <span className="font-body text-xs leading-[1.6] text-[#4f4f4f]">
            /lifetime
          </span>
        </div>
      </div>

      <div className="absolute right-[15px] top-[231px] flex items-center font-body text-lg leading-[1.6] text-[#4f4f4f]">
        {rating}
        <Star className="ml-1 h-6 w-6 fill-shuttle-200 text-shuttle-200" />
      </div>
    </motion.article>
  );
}
