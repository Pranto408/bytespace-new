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
    <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-start justify-between h-full border border-gray-100/50">
      <div className="w-full">
    
        <div className="relative w-16 h-16 rounded-full overflow-hidden mb-6 bg-gray-100">
          <Image
            src={testimonial.avatarSrc}
            alt={testimonial.name}
            fill
            className="object-cover"
          />
        </div>

       
        <h3 className="text-xl font-bold text-gray-900 mb-1">
          {testimonial.name}
        </h3>
        <p className="text-sm text-indigo-500 font-medium mb-6">
          {testimonial.role}
        </p>

       
        <p className="text-gray-600 text-sm leading-relaxed">
          &ldquo;{testimonial.quote}&rdquo;
        </p>
      </div>
    </div>
  );
};
