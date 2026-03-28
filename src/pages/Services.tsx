import { motion } from "framer-motion";
import { Shield, Sparkles, Heart, Stethoscope, Baby, AlertCircle, Check } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const serviceCategories = [
  {
    icon: Shield,
    title: "General & Preventive Dentistry",
    description: "Maintaining your oral health starts with prevention. Our general dentistry services focus on early detection and treatment to keep your teeth and gums in optimal condition.",
    items: ["Routine Dental Check-ups & Cleanings", "Dental Sealants", "Fluoride Treatment", "Oral Hygiene Education", "Comprehensive Oral Examinations", "Professional Scaling & Polishing"],
  },
  {
    icon: Heart,
    title: "Restorative Dentistry",
    description: "When teeth are damaged or missing, our restorative treatments bring back both function and beauty. We use the latest materials and techniques for long-lasting results.",
    items: ["Tooth-Colored Fillings (Composite Resin)", "Dental Crowns (Caps)", "Dental Bridges", "Full & Partial Dentures", "Inlays & Onlays", "Post & Core Restorations"],
  },
  {
    icon: Sparkles,
    title: "Cosmetic Dentistry",
    description: "Transform your smile with our range of cosmetic treatments. From subtle whitening to complete smile makeovers, we help you achieve the smile you've always wanted.",
    items: ["Professional Teeth Whitening", "Porcelain Veneers", "Dental Bonding", "Smile Makeovers", "Tooth Reshaping & Contouring", "Gum Contouring"],
  },
  {
    icon: Stethoscope,
    title: "Surgical & Specialist Dentistry",
    description: "Our skilled surgical team handles complex procedures with precision and care, from straightforward extractions to advanced implant placements.",
    items: ["Simple & Surgical Extractions", "Wisdom Teeth Removal", "Root Canal Treatment (Endodontics)", "Gum Disease Treatment (Periodontics)", "Dental Implants", "Scaling & Root Planing"],
  },
  {
    icon: Baby,
    title: "Pediatric Dentistry",
    description: "We create a warm, child-friendly environment where little ones feel safe and comfortable. Early dental care sets the foundation for a lifetime of healthy smiles.",
    items: ["Children's Check-ups", "Topical Fluoride Applications", "Dental Sealants for Kids", "Space Maintainers", "Habit Counseling", "Early Orthodontic Assessment"],
  },
  {
    icon: AlertCircle,
    title: "Emergency Dental Care",
    description: "Dental emergencies don't wait, and neither do we. With 24-hour availability, our team is always ready to provide urgent care when you need it most.",
    items: ["Severe Toothaches & Abscesses", "Knocked-Out (Avulsed) Teeth", "Fractured, Chipped, or Broken Teeth", "Lost Fillings or Crowns", "Dental Trauma Management", "Emergency Pain Relief"],
  },
];

const Services = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-24 gradient-primary text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-96 h-96 rounded-full border border-primary-foreground" />
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
          <motion.div {...fadeUp}>
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">Our Dental Services</h1>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              Comprehensive dental care from preventive check-ups to advanced surgical procedures — all under one roof, available 24/7.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="space-y-20">
            {serviceCategories.map((cat, i) => (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`grid lg:grid-cols-2 gap-12 items-start ${i % 2 === 1 ? "lg:direction-rtl" : ""}`}
              >
                <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="h-12 w-12 rounded-lg gradient-primary flex items-center justify-center">
                      <cat.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">{cat.title}</h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-6">{cat.description}</p>
                  <Button asChild>
                    <Link to="/booking">Book This Service</Link>
                  </Button>
                </div>
                <div className={`bg-section-alt rounded-xl p-8 ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                  <h4 className="font-heading font-semibold text-foreground mb-4">What's Included</h4>
                  <ul className="space-y-3">
                    {cat.items.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <Check className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 gradient-primary text-primary-foreground text-center">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Not Sure Which Service You Need?</h2>
          <p className="text-lg opacity-90 max-w-xl mx-auto mb-8">
            Book a comprehensive consultation and our experienced team will recommend the best treatment plan for you.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/booking">Schedule a Consultation</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
