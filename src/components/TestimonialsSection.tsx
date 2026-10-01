"use client";

import React from "react";
import { motion, type MotionProps } from "framer-motion";
import { TestimonialCard, type Testimonial } from "./TestimonialCard";

const testimonialsData: Testimonial[] = [
  {
    id: 1,
    name: "Sarah M.",
    role: "Enthusiastic Learner",
    avatarSrc: "/images/testimonials/testimonial-1.png",
    quote:
      "ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning.",
  },
  {
    id: 2,
    name: "James L.",
    role: "Lifelong Learner",
    avatarSrc: "/images/testimonials/testimonial-2.png",
    quote:
      "I've tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development.",
  },
  {
    id: 3,
    name: "Alex B.",
    role: "Inspired Creator",
    avatarSrc: "/images/testimonials/testimonial-3.png",
    quote:
      "As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It's fulfilling to see my courses making a positive impact on learners globally.",
  },
];

const glowBackground = [
  "radial-gradient(circle 336px at calc(50% + 11px) 198px, rgba(212,251,32,0.45) 0%, rgba(212,251,32,0) 70%)",
  "radial-gradient(circle 568px at calc(50% + 690px) 327px, rgba(212,251,32,0.4) 0%, rgba(212,251,32,0) 70%)",
  "radial-gradient(circle 568px at calc(50% - 594px) 717px, rgba(0,59,226,0.15) 0%, rgba(0,59,226,0) 70%)",
].join(",");

const fadeIn: MotionProps = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.5 },
};

export default function TestimonialsSection() {
  return (
    <section className="relative overflow-hidden bg-[#fafafa] px-4 py-16 xl:pb-[57px] xl:pt-[74px]">
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: glowBackground, backgroundRepeat: "no-repeat" }}
      />

      <div className="relative mx-auto flex max-w-[1204px] flex-col gap-12 xl:gap-[72px]">
        <motion.div
          {...fadeIn}
          className="flex flex-col gap-6 xl:flex-row xl:items-end xl:gap-[43px]"
        >
          <h2 className="font-heading text-3xl font-semibold leading-[1.2] text-black sm:text-[44px] sm:tracking-[-0.44px] xl:w-[577px] xl:shrink-0">
            Discover What Our Community Is Saying
          </h2>
          <p className="font-body text-lg leading-[1.6] text-[#4f4f4f] xl:w-[580px] xl:shrink-0">
            At ByteSpace, our vibrant community of learners and creators is at
            the heart of what we do. Hear directly from those who have
            experienced the transformative journey of learning and creating on
            our platform. Explore testimonials that reflect the diverse
            perspectives of enthusiastic learners and accomplished creators.
          </p>
        </motion.div>

        <motion.div
          {...fadeIn}
          className="flex flex-wrap items-start justify-center gap-6 xl:justify-start xl:gap-[41px]"
        >
          {testimonialsData.map((item) => (
            <TestimonialCard key={item.id} testimonial={item} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
