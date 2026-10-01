
import CoursesSection from "@/components/CoursesSection";
import CtaSection from "@/components/CtaSection";
import ExploreCategories from "@/components/ExploreCategories";
import Footer from "@/components/Footer";
import GrowthSection from "@/components/GrowthSection";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import PartnersStrip from "@/components/PartnersStrip";
import TestimonialsSection from "@/components/TestimonialsSection";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <PartnersStrip />
      <CoursesSection/>
      <ExploreCategories />
      <GrowthSection />
      <CtaSection />
      <TestimonialsSection />
      <Footer/>
    </div>
  );
}
