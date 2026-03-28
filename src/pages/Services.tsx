import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import ServicesSection from "@/components/ServicesSection";
import Footer from "@/components/FooterRevamped";
import FloatingBookButton from "@/components/FloatingBookButton";

const Services = () => {
  return (
    <>
      <Helmet>
        <title>Our Services - Faridaz Spa | Luxury Spa & Wellness Treatments in Abuja</title>
        <meta name="description" content="Explore world-class spa services at Faridaz Spa in Abuja. Body & massage therapies, advanced facials & skincare, health & wellness rituals, salon & beauty care. Premium treatments by certified professionals. 4.9★ rated." />
      </Helmet>
      
      <div className="min-h-screen">
        <Header />
        <main className="pt-16">
          <ServicesSection />
        </main>
        <Footer />
        <FloatingBookButton />
      </div>
    </>
  );
};

export default Services;