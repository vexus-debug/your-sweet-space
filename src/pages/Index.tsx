import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import StorySection from "@/components/StorySection";
import ServicesPreview from "@/components/ServicesPreview";
import ProductsPreview from "@/components/ProductsPreview";
import WhyChooseUs from "@/components/WhyChooseUs";
import TestimonialsGrid from "@/components/TestimonialsGrid";
import GalleryTeaser from "@/components/GalleryTeaser";
import ContactBanner from "@/components/ContactBanner";
import Footer from "@/components/FooterRevamped";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <StorySection />
        <ServicesPreview />
        <ProductsPreview />
        <WhyChooseUs />
        <TestimonialsGrid />
        <GalleryTeaser />
        <ContactBanner />
      </main>
      <Footer />
    </div>
  );
};

export default Index;