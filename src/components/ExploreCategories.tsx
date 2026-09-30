import React from "react";
import Image from "next/image";

interface Category {
  id: number;
  title: string;
  imageSrc: string;
}

const categories: Category[] = [
  {
    id: 1,
    title: "Design",
    imageSrc: "/images/categories/category-1.png",
  },
  {
    id: 2,
    title: "Development",
    imageSrc: "/images/categories/category-2.png",
  },
  {
    id: 3,
    title: "IT & Software",
    imageSrc: "/images/categories/category-3.png",
  },
  {
    id: 4,
    title: "Business",
    imageSrc: "/images/categories/category-4.png",
  },
  {
    id: 5,
    title: "Marketing",
    imageSrc: "/images/categories/category-5.png",
  },
  {
    id: 6,
    title: "Photography",
    imageSrc: "/images/categories/category-6.png",
  },
];

export default function ExploreCategories() {
  return (
    <section className="w-full py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        {/* Section Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Explore Diverse Learning Paths at Bytespace
        </h2>

        {/* Section Description */}
        <p className="text-gray-500 max-w-3xl mx-auto text-sm sm:text-base leading-relaxed mb-12">
          At Bytespace, we believe in empowering individuals through knowledge.
          Our diverse range of courses spans various fields, ensuring
          there&apos;s something for everyone. Unleash your potential and
          explore our carefully curated categories.
        </p>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {categories.map((category) => (
            <div
              key={category.id}
              className="flex flex-col items-center justify-center p-6 bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer group"
            >
              {/* Green Circle Container for Logo */}
              <div className="w-10 h-10 sm:w-16 sm:h-16 bg-[#C2F000] rounded-full flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-105">
                <Image
                  src={category.imageSrc}
                  alt={category.title}
                  width={32}
                  height={32}
                  className="w-4 h-4 sm:w-6 sm:h-6 object-contain"
                />
              </div>

              {/* Category Title */}
              <h3 className="text-sm sm:text-base font-semibold text-gray-800 text-center">
                {category.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
