import React from "react";
import Image from "next/image";

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  quote: string;
  avatarSrc: string;
}

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
  testimonial,
}) => {
  return (
    <div className="flex w-full max-w-[374px] flex-col items-start gap-6 rounded-3xl bg-white p-6">
      <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-full bg-shuttle-100">
        <Image
          src={testimonial.avatarSrc}
          alt={testimonial.name}
          fill
          sizes="80px"
          className="object-cover"
        />
      </div>

      <div>
        <h3 className="font-heading text-xl font-semibold leading-7 tracking-[-0.2px] text-black">
          {testimonial.name}
        </h3>
        <p className="font-body text-lg leading-[1.6] text-primary">
          {testimonial.role}
        </p>
      </div>

      <p className="font-body text-lg leading-[1.6] text-[#4f4f4f]">
        &quot;{testimonial.quote}&quot;
      </p>
    </div>
  );
};
