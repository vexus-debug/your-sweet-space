import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  Phone, Clock, MapPin, Star, Shield, Heart, Users, Sparkles,
  Stethoscope, Baby, AlertCircle, ChevronRight, CreditCard,
  Accessibility, ArrowRight, CheckCircle2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";

// Gallery images only — no AI images
import galleryTreatmentRoom from "@/assets/gallery-treatment-room.jpg";
import galleryReception from "@/assets/gallery-reception.jpg";
import galleryWaitingArea from "@/assets/gallery-waiting-area.jpg";
import galleryWhitening1 from "@/assets/gallery-whitening-1.jpg";
import galleryBracesPink from "@/assets/gallery-braces-pink.jpg";
import galleryScaling from "@/assets/gallery-scaling-before-after.jpg";
import galleryCleaning from "@/assets/gallery-cleaning-before-after.webp";
import galleryWhitening2 from "@/assets/gallery-whitening-2.webp";
import galleryProcedure from "@/assets/gallery-procedure.jpg";
import clinicExterior from "@/assets/clinic-exterior.jpg";

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
};

const stagger = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const services = [
  { icon: Shield, title: "General & Preventive", desc: "Check-ups, cleanings, sealants, and fluoride treatments.", image: galleryCleaning },
  { icon: Sparkles, title: "Cosmetic Dentistry", desc: "Whitening, veneers, bonding, and smile makeovers.", image: galleryWhitening1 },
  { icon: Heart, title: "Restorative Care", desc: "Crowns, bridges, dentures, and tooth-colored fillings.", image: galleryScaling },
  { icon: Stethoscope, title: "Surgical & Specialist", desc: "Extractions, root canals, implants, and gum treatment.", image: galleryProcedure },
  { icon: Baby, title: "Pediatric Dentistry", desc: "Gentle, child-friendly care and preventive treatments.", image: galleryBracesPink },
  { icon: AlertCircle, title: "Emergency Care", desc: "24-hour services for toothaches, fractures, and more.", image: galleryTreatmentRoom },
];

const testimonials = [
  { name: "Adaeze O.", text: "The team at Bridge Dental is absolutely wonderful. From check-up to whitening, everything was smooth and painless. Highly recommend!", rating: 5 },
  { name: "Emeka K.", text: "I had a dental emergency at 2am and they were there for me. The care was professional and compassionate. Truly a 24-hour clinic.", rating: 5 },
  { name: "Blessing N.", text: "My children love going to Bridge Dental. The pediatric team is patient and kind. The clinic is modern and spotless.", rating: 5 },
  { name: "Chidi A.", text: "Best dental clinic in Warri! Modern equipment, friendly staff, and very reasonable prices. I've been coming here for years.", rating: 5 },
];

const Index = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <Layout>
      {/* ═══════════════════════════════════════════════════════
          HERO — Cinematic full-bleed with parallax
      ═══════════════════════════════════════════════════════ */}
      <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden">
        <motion.div className="absolute inset-0" style={{ y: heroY }}>
          <img
            src={galleryReception}
            alt="Bridge Dental Clinic reception"
            className="w-full h-[120%] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-foreground/70 via-foreground/50 to-foreground/80" />
        </motion.div>

        <motion.div
          className="container mx-auto px-4 lg:px-8 relative z-10 pt-20"
          style={{ opacity: heroOpacity }}
        >
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-md text-primary-foreground text-xs sm:text-sm font-medium px-4 py-2 rounded-full mb-8 border border-primary-foreground/10">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
                </span>
                Open 24 Hours — Walk-ins Welcome
              </span>
            </motion.div>

            <motion.h1
              className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-[1.1] mb-6"
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            >
              Where Every
              <br />
              <span className="text-gold">Smile</span> Matters
            </motion.h1>

            <motion.p
              className="text-base sm:text-lg text-primary-foreground/75 leading-relaxed mb-10 max-w-xl"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              Premier dental healthcare in Warri-Effurun. Clinical excellence
              meets compassionate care — for you and your whole family.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
            >
              <Button size="lg" className="text-base px-8" asChild>
                <Link to="/booking">
                  Book Appointment <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 text-base"
                asChild
              >
                <a href="tel:+2348160090708">
                  <Phone className="mr-2 h-4 w-4" /> Call Us Now
                </a>
              </Button>
            </motion.div>
          </div>

          {/* Floating stats cards */}
          <motion.div
            className="hidden lg:grid grid-cols-4 gap-4 mt-20 max-w-3xl"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            {[
              { value: "4.7★", label: "Google Rating" },
              { value: "24/7", label: "Always Open" },
              { value: "30+", label: "Services" },
              { value: "5000+", label: "Happy Patients" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-primary-foreground/5 backdrop-blur-md border border-primary-foreground/10 rounded-xl px-5 py-4 text-center"
              >
                <div className="text-xl font-bold font-heading text-primary-foreground">{stat.value}</div>
                <div className="text-xs text-primary-foreground/60 mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/30 flex justify-center pt-2">
            <div className="w-1 h-2 bg-primary-foreground/50 rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          MOBILE STATS — visible on smaller screens
      ═══════════════════════════════════════════════════════ */}
      <section className="lg:hidden gradient-primary py-6">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 gap-4 text-center text-primary-foreground">
            {[
              { value: "4.7★", label: "Google Rating" },
              { value: "24/7", label: "Always Open" },
              { value: "30+", label: "Services" },
              { value: "5000+", label: "Happy Patients" },
            ].map((stat) => (
              <div key={stat.label} className="py-2">
                <div className="text-xl font-bold font-heading">{stat.value}</div>
                <div className="text-xs opacity-70">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          STORY — Who We Are (image + text, asymmetric)
      ═══════════════════════════════════════════════════════ */}
      <section className="py-20 lg:py-32 overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            {/* Image cluster */}
            <motion.div {...fadeUp} className="lg:col-span-5 relative">
              <div className="relative">
                <img
                  src={clinicExterior}
                  alt="Bridge Dental Clinic exterior"
                  className="rounded-2xl shadow-2xl w-full object-cover aspect-[4/5]"
                  loading="lazy"
                />
                {/* Overlapping accent image */}
                <motion.div
                  className="absolute -bottom-6 -right-4 md:-right-8 w-2/5 rounded-xl overflow-hidden shadow-xl border-4 border-background"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                >
                  <img
                    src={galleryWaitingArea}
                    alt="Comfortable waiting area"
                    className="w-full aspect-square object-cover"
                    loading="lazy"
                  />
                </motion.div>
              </div>
            </motion.div>

            {/* Text */}
            <motion.div
              {...fadeUp}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="lg:col-span-7"
            >
              <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-primary mb-4">
                Our Story
              </span>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
                Comprehensive Care in the Heart of{" "}
                <span className="text-primary">Warri‑Effurun</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4 text-base lg:text-lg">
                Situated in the heart of the Warri-Effurun metropolis, Bridge Dental Clinic
                has established itself as the premier destination for dental healthcare.
                Our commitment to quality care and clinical excellence has earned us a
                stellar 4.7-star Google rating.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8 text-base lg:text-lg">
                With round-the-clock availability, wheelchair-accessible facilities,
                and flexible payment options, we make quality dental care accessible
                to everyone in the community.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {[
                  { icon: Clock, text: "Open 24 hours, 7 days a week" },
                  { icon: MapPin, text: "39 Airport Road, Effurun" },
                  { icon: CreditCard, text: "Cards, NFC & payment plans" },
                  { icon: Accessibility, text: "Fully wheelchair accessible" },
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-3">
                    <div className="h-9 w-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <item.icon className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-sm text-foreground">{item.text}</span>
                  </div>
                ))}
              </div>

              <Button variant="outline" asChild>
                <Link to="/about">
                  Learn More <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          SERVICES — Card grid with hover image reveal
      ═══════════════════════════════════════════════════════ */}
      <section className="py-20 lg:py-32 bg-section-alt relative">
        {/* Decorative top edge */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

        <div className="container mx-auto px-4 lg:px-8">
          <motion.div {...fadeUp} className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-primary mb-4">
              What We Offer
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Complete Dental Care Under One Roof
            </h2>
            <p className="text-muted-foreground text-base lg:text-lg">
              From routine check-ups to advanced surgical procedures — comprehensive
              care for the whole family.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                {...stagger}
                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="group relative bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/30 transition-all duration-500 hover:shadow-lg"
              >
                {/* Image top */}
                <div className="h-44 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 h-44 bg-gradient-to-t from-card via-transparent to-transparent" />
                </div>

                <div className="p-6 pt-4 relative">
                  <div className="h-10 w-10 rounded-lg gradient-primary flex items-center justify-center mb-4 -mt-10 relative z-10 shadow-md group-hover:scale-110 transition-transform">
                    <service.icon className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div {...fadeUp} className="text-center mt-12">
            <Button variant="outline" size="lg" asChild>
              <Link to="/services">
                View All Services <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          VISUAL BREAK — Full-bleed image with quote
      ═══════════════════════════════════════════════════════ */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center overflow-hidden">
        <img
          src={galleryTreatmentRoom}
          alt="Advanced dental treatment room"
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-foreground/60" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
          <motion.div {...fadeUp}>
            <p className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-primary-foreground leading-snug max-w-3xl mx-auto italic">
              "We don't just treat teeth — we build lasting relationships
              with every patient who walks through our doors."
            </p>
            <div className="mt-6 h-px w-16 bg-gold mx-auto" />
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          WHY CHOOSE US — Alternating layout
      ═══════════════════════════════════════════════════════ */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div {...fadeUp} className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-primary mb-4">
              Why Bridge Dental
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              The Difference You'll Feel
            </h2>
            <p className="text-muted-foreground text-base lg:text-lg">
              Every detail of your experience is designed with your comfort and
              health in mind.
            </p>
          </motion.div>

          <div className="space-y-16 lg:space-y-24">
            {[
              {
                title: "Round-the-Clock Availability",
                desc: "Dental emergencies don't wait — and neither do we. Our 24/7 clinic means you always have access to expert care, whether it's a routine cleaning or an urgent situation at 3am.",
                image: galleryProcedure,
                points: ["Walk-ins welcome anytime", "Emergency line always active", "Same-day appointments available"],
              },
              {
                title: "Modern Facility & Equipment",
                desc: "Our clinic features state-of-the-art dental technology in a warm, inviting environment. From digital imaging to advanced sterilization — everything is designed for precision and your comfort.",
                image: galleryWaitingArea,
                points: ["Advanced digital X-rays", "Comfortable treatment rooms", "Strict infection control"],
                reverse: true,
              },
              {
                title: "Flexible & Accessible Care",
                desc: "Quality dental care should be within everyone's reach. We offer multiple payment options, wheelchair-accessible facilities, and a welcoming environment for patients of all ages and abilities.",
                image: galleryReception,
                points: ["Cards, NFC & payment plans", "Wheelchair accessible", "Family-friendly environment"],
              },
            ].map((item, i) => (
              <div
                key={item.title}
                className={`grid lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
                  item.reverse ? "lg:[direction:rtl]" : ""
                }`}
              >
                <motion.div
                  {...fadeUp}
                  className={item.reverse ? "lg:[direction:ltr]" : ""}
                >
                  <div className="rounded-2xl overflow-hidden shadow-xl">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full aspect-[3/2] object-cover"
                      loading="lazy"
                    />
                  </div>
                </motion.div>

                <motion.div
                  {...fadeUp}
                  transition={{ duration: 0.7, delay: 0.15 }}
                  className={item.reverse ? "lg:[direction:ltr]" : ""}
                >
                  <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6 text-base">
                    {item.desc}
                  </p>
                  <ul className="space-y-3">
                    {item.points.map((point) => (
                      <li key={point} className="flex items-center gap-3 text-sm text-foreground">
                        <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          BEFORE & AFTER — Results showcase
      ═══════════════════════════════════════════════════════ */}
      <section className="py-20 lg:py-32 bg-section-alt">
        <div className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div {...fadeUp} className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-primary mb-4">
              Real Results
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Transformations That Speak
            </h2>
            <p className="text-muted-foreground text-base lg:text-lg">
              See the results our patients experience — from whitening to scaling
              and everything in between.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { src: galleryScaling, label: "Scaling & Polishing" },
              { src: galleryCleaning, label: "Deep Cleaning" },
              { src: galleryWhitening1, label: "Teeth Whitening" },
              { src: galleryWhitening2, label: "Whitening Results" },
              { src: galleryBracesPink, label: "Orthodontic Braces" },
              { src: galleryProcedure, label: "Precision Care" },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                {...stagger}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group relative rounded-2xl overflow-hidden"
              >
                <img
                  src={item.src}
                  alt={item.label}
                  className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <span className="text-sm font-semibold text-primary-foreground">{item.label}</span>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div {...fadeUp} className="text-center mt-12">
            <Button variant="outline" size="lg" asChild>
              <Link to="/gallery">
                View Full Gallery <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          TESTIMONIALS — Dark section with cards
      ═══════════════════════════════════════════════════════ */}
      <section className="py-20 lg:py-32 bg-section-dark relative overflow-hidden">
        {/* Subtle radial glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div {...fadeUp} className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-primary/70 mb-4">
              Patient Stories
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-section-dark-foreground mb-4">
              Trusted by Thousands
            </h2>
            <p className="text-section-dark-foreground/60 text-base lg:text-lg">
              Real experiences from patients who trust Bridge Dental Clinic with
              their family's oral health.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                {...stagger}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-section-dark-foreground/5 backdrop-blur-sm border border-section-dark-foreground/10 rounded-2xl p-6 hover:border-primary/30 transition-colors duration-300"
              >
                <div className="flex gap-0.5 mb-4">
                  {[...Array(t.rating)].map((_, j) => (
                    <Star key={j} className="h-3.5 w-3.5 text-gold fill-current" />
                  ))}
                </div>
                <p className="text-sm leading-relaxed text-section-dark-foreground/80 mb-6">
                  "{t.text}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-full gradient-primary flex items-center justify-center text-xs font-bold text-primary-foreground">
                    {t.name.charAt(0)}
                  </div>
                  <span className="text-sm font-semibold text-section-dark-foreground">{t.name}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          LOCATION — Map-like section with info
      ═══════════════════════════════════════════════════════ */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <motion.div {...fadeUp}>
              <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-primary mb-4">
                Find Us
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
                Visit Bridge Dental Clinic
              </h2>
              <div className="space-y-5 mb-8">
                {[
                  { icon: MapPin, label: "Address", value: "39 Airport Road, opposite Tivo Supermarket, Effurun, Delta State" },
                  { icon: Phone, label: "Phone", value: "+234 816 009 0708", href: "tel:+2348160090708" },
                  { icon: Clock, label: "Hours", value: "Open 24 hours — Every day of the week" },
                ].map((item) => (
                  <div key={item.label} className="flex gap-4">
                    <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold tracking-wider uppercase text-muted-foreground mb-1">
                        {item.label}
                      </div>
                      {item.href ? (
                        <a href={item.href} className="text-sm text-foreground hover:text-primary transition-colors">
                          {item.value}
                        </a>
                      ) : (
                        <div className="text-sm text-foreground">{item.value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              <Button asChild>
                <Link to="/contact">
                  Get Directions <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>

            <motion.div {...fadeUp} transition={{ delay: 0.15 }}>
              <div className="rounded-2xl overflow-hidden shadow-xl border border-border">
                <img
                  src={clinicExterior}
                  alt="Bridge Dental Clinic building"
                  className="w-full aspect-[4/3] object-cover"
                  loading="lazy"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          FINAL CTA — Gradient with urgency
      ═══════════════════════════════════════════════════════ */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 gradient-primary" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent_70%)]" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
          <motion.div {...fadeUp}>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-primary-foreground mb-4 leading-tight">
              Your Best Smile Starts
              <br />
              With a Single Step
            </h2>
            <p className="text-lg text-primary-foreground/80 max-w-xl mx-auto mb-10">
              Schedule your visit today. Walk-ins are always welcome — we're here
              for you, 24 hours a day, 7 days a week.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-base px-8" asChild>
                <Link to="/booking">
                  Book Your Appointment <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 text-base"
                asChild
              >
                <a href="tel:+2348160090708">
                  <Phone className="mr-2 h-4 w-4" /> +234 816 009 0708
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
