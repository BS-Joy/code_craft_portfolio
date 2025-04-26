import Navbar from "@/components/navbar";
import HeroSection from "@/components/hero-section";
import ServicesSection from "@/components/services-section";
import ProjectsSection from "@/components/projects-section";
import ContactSection from "@/components/contact-section";
import QuoteSection from "@/components/quote-section";
import TestimonialsSection from "@/components/testimonials-section";
import Footer from "@/components/footer";
import TeamSection from "@/components/team-section";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950">
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <ProjectsSection />
        <TeamSection />
        <TestimonialsSection />
        {/* <QuoteSection /> */}
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
