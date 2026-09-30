import Image from "next/image";

export default function PartnersStrip() {
  const partners = [
    { id: 1, name: "Logoipsum", src: "/images/partners/part-1.png" },
    { id: 2, name: "Logoipsum", src: "/images/partners/partner-2.png" },
    { id: 3, name: "Logoipsum", src: "/images/partners/partner-3.png" },
    { id: 4, name: "Logoipsum", src: "/images/partners/partner-4.png" },
    { id: 5, name: "Logoipsum", src: "/images/partners/partner-5.png" },
  ];

  return (
    <section className="bg-gray-100 py-10  mt-5 ml-5 lg:py-20">
      <div className="max-w-6xl mx-auto px-4 flex flex-wrap justify-center items-center gap-8 md:justify-between">
        {partners.map((partner) => (
          <div
            key={partner.id}
            className="flex items-center gap-2 opacity-75 hover:opacity-100"
          >
            {/* Logo Icon */}
            <div className="relative w-8 h-8">
              <Image
                src={partner.src}
                alt={partner.name}
                fill
                className="object-contain"
              />
            </div>

            {/* Logo Text */}
            <span className="text-xl font-extrabold text-gray-600 tracking-tight">
              {partner.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
