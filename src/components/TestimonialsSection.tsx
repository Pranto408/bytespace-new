import React from "react";
import { TestimonialCard, Testimonial } from "./TestimonialCard";

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

export default function TestimonialsSection() {
  return (
    <section className="relative w-full py-20 px-6 sm:px-10 lg:px-16 overflow-hidden bg-[#f3f7fe]">
      <div
        className="absolute -top-20 -right-20 w-[600px] h-[600px] rounded-full pointer-events-none opacity-80 blur-[100px]"
        style={{
          background:
            "radial-gradient(circle, rgba(217,249,120,0.85) 0%, rgba(228,250,150,0.4) 50%, rgba(255,255,255,0) 75%)",
        }}
      />

      <div
        className="absolute -bottom-20 -left-20 w-[500px] h-[500px] rounded-full pointer-events-none opacity-70 blur-[90px]"
        style={{
          background:
            "radial-gradient(circle, rgba(219,234,254,0.9) 0%, rgba(239,246,255,0.4) 60%, rgba(255,255,255,0) 80%)",
        }}
      />

      <div className="relative w-21/24 z-10  mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-[40px] font-bold text-[#0D0E12] tracking-tight leading-[1.2]">
            Discover What Our <br className="hidden sm:inline" />
            Community Is Saying
          </h2>
          <p className="text-[#64748B] text-sm sm:text-base leading-relaxed lg:pl-6 pt-1">
            At ByteSpace, our vibrant community of learners and creators is at
            the heart of what we do. Hear directly from those who have
            experienced the transformative journey of learning and creating on
            our platform. Explore testimonials that reflect the diverse
            perspectives of enthusiastic learners and accomplished creators.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center">
          {testimonialsData.map((item) => (
            <TestimonialCard key={item.id} testimonial={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
