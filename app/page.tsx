import HeroSection from "@/components/sections/hero-section";
import AboutSection from "@/components/sections/about-section";
import TrackRecordSection from "@/components/sections/track-record-section";
import ServicesSection from "@/components/sections/services-section";
import ContactSection from "@/components/sections/contact-section";
import TestimonialsSection from "@/components/sections/testimonials-section";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <HeroSection />
      <AboutSection />
      <TrackRecordSection />
      <TestimonialsSection />
      <ServicesSection />
      <ContactSection />
    </div>
  );
}