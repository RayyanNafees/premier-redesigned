import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProductCarousel from "@/components/ProductCarousel";
import AboutSection from "@/components/AboutSection";
import ProductsSection from "@/components/ProductsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <HeroSection />
    <ProductCarousel />
    <AboutSection />
    <ProductsSection />
    <ContactSection />
    <Footer />
  </div>
);

export default Index;
