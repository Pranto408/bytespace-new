
import CourseCard from "@/components/CourseCard";
import ExploreCategories from "@/components/ExploreCategories";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import PartnersStrip from "@/components/PartnersStrip";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <PartnersStrip />
      <ExploreCategories/>
    
    </div>
  );
}
