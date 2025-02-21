import FAQSection from "@/components/home/FAQSection";
import HeroSection from "@/components/home/HeroSection";
import PopularItem from "@/components/home/PopularItem";
import TestimonialsSection from "@/components/home/TestimonialsSection";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <PopularItem />
      <TestimonialsSection />
      <FAQSection />
    </div>
  );
};

export default HomePage;
