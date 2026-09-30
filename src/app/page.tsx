
import CourseCard from "@/components/CourseCard";
import ExploreCategories from "@/components/ExploreCategories";
import Footer from "@/components/Footer";
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
      <ExploreCategories />
      <TestimonialsSection />
      <Footer/>
    </div>
  );
}
