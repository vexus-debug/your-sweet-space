import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import AboutSection from "@/components/AboutSection";
import StorySection from "@/components/StorySection";
import WhyChooseUs from "@/components/WhyChooseUs";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/FooterRevamped";
import FloatingBookButton from "@/components/FloatingBookButton";

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us - Faridaz Spa | Luxury Spa & Wellness Center in Garki, Abuja</title>
        <meta name="description" content="Faridaz Spa - Abuja's sanctuary of calm, beauty, and complete well-being. Certified professionals, 4.9-star rated spa offering therapeutic massages, advanced facials, wellness rituals, and beauty services. Located in Garki with home service options available." />
      </Helmet>
      
      <div className="min-h-screen">
        <Header />
        <main className="pt-16">
          <AboutSection />
          <StorySection />
          <WhyChooseUs />
          <TestimonialsSection />
        </main>
        <Footer />
        <FloatingBookButton />
      </div>
    </>
  );
};

export default About;