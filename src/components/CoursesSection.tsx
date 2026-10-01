"use client";

import { useState } from "react";
import { motion, type Variants } from "framer-motion";
import CourseCard, { type Course } from "./CourseCard";

const tabRows = [
  [
    "Featured",
    "Music",
    "Drawing & Painting",
    "Marketing",
    "Animation",
    "Social Media",
    "UI/UX Design",
    "Creative Marketing",
  ],
  [
    "Digital Illustration",
    "Film & Video",
    "Crafts",
    "Freelance & Entrepreneurship",
    "Graphic Design",
    "Photography",
  ],
  ["Productivity", "Web Development", "Data Science", "Cooking"],
];

const courses: Course[] = [
  { title: "Learn Figma from Basic", image: "/images/courses/course-1.png" },
  { title: "Build Digital Asset", image: "/images/courses/course-2.png" },
  { title: "the Power of Big Data", image: "/images/courses/course-3.png" },
  {
    title: "Balancing Productivity and Self-Care",
    image: "/images/courses/course-4.png",
  },
  {
    title: "Mastering Money Management",
    image: "/images/courses/course-5.png",
  },
  {
    title: "From Idea to Startup Success",
    image: "/images/courses/course-6.png",
  },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const gridContainer: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

export default function CoursesSection() {
  const [activeTab, setActiveTab] = useState("Featured");

  return (
    <section id="courses" className="bg-white  px-4 pb-[72px] pt-[72px]">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="mx-auto flex max-w-[917px] flex-col items-center gap-4 text-center"
      >
        <h2 className="max-w-[588px] font-heading text-3xl font-semibold leading-[1.2] text-[#040819] sm:text-[44px] sm:tracking-[-0.44px]">
          Discover Your Passion, Build Your Skills
        </h2>
        <p className="font-body text-lg leading-[1.6] text-shuttle-400">
          At Bytespace Courses, we bring you closer to life-changing knowledge.
          Explore a variety of courses across different fields, from technology
          to the arts, and make a difference in your career and life.
        </p>
      </motion.div>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="mx-auto mt-[42px] flex flex-col items-center gap-[21px]"
      >
        {tabRows.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            {row.map((tab) => {
              const isActive = activeTab === tab;

              return (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className="relative cursor-pointer whitespace-nowrap rounded-3xl bg-shuttle-50 px-4 py-3 font-body text-base font-medium leading-[1.2] transition-colors hover:bg-shuttle-100"
                >
                  {isActive && (
                    <motion.span
                      layoutId="active-tab"
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 32,
                      }}
                      className="absolute inset-0 rounded-3xl bg-lime"
                    />
                  )}
                  <span
                    className={`relative ${
                      isActive ? "text-shuttle-950" : "text-shuttle-700"
                    }`}
                  >
                    {tab}
                  </span>
                </button>
              );
            })}

            {rowIndex === tabRows.length - 1 && (
              <button className="cursor-pointer font-body text-base font-medium leading-[1.2] text-primary transition-opacity hover:opacity-70">
                + More
              </button>
            )}
          </div>
        ))}
      </motion.div>

      <motion.div
        variants={gridContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        className="mx-auto mt-[77px] grid w-10/12 grid-cols-1 justify-items-center gap-10 md:grid-cols-2 xl:grid-cols-3"
      >
        {courses.map((course) => (
          <CourseCard key={course.title} {...course} />
        ))}
      </motion.div>
    </section>
  );
}
