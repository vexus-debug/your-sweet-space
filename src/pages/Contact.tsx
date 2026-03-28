import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/FooterRevamped";
import FloatingBookButton from "@/components/FloatingBookButton";

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us - Faridaz Spa Abuja</title>
        <meta name="description" content="Get in touch with Faridaz Spa. Visit us in Garki or Wuse, Abuja or call +2347068121733 for appointments. 4.9-star rated spa with certified professionals offering world-class treatments." />
      </Helmet>
      
      <div className="min-h-screen">
        <Header />
        <main className="pt-16">
          <ContactSection />
        </main>
        <Footer />
        <FloatingBookButton />
      </div>
    </>
  );
};

export default Contact;