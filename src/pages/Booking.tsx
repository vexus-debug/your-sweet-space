import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import BookingSection from "@/components/BookingSection";
import Footer from "@/components/FooterRevamped";

const Booking = () => {
  return (
    <>
      <Helmet>
        <title>Book Appointment - Faridaz Spa Abuja</title>
        <meta name="description" content="Book your appointment at Faridaz Spa in Garki & Wuse, Abuja. Certified professionals offering therapeutic massages, advanced facials, and wellness services. Easy online booking via WhatsApp." />
      </Helmet>
      
      <div className="min-h-screen">
        <Header />
        <main className="pt-16">
          <BookingSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Booking;