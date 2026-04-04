import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Award, Clock, Users, Heart, MapPin, CreditCard, Accessibility,
  Shield, Sparkles, CheckCircle2, ArrowRight, Star, Phone, Eye,
  Target, Zap, ThumbsUp
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import galleryTreatmentRoom from "@/assets/gallery-treatment-room.jpg";
import galleryReception from "@/assets/gallery-reception.jpg";
import galleryWaitingArea from "@/assets/gallery-waiting-area.jpg";
import galleryWhitening1 from "@/assets/gallery-whitening-1.jpg";

/* ─── Animated counter ─── */
const useCounter = (end: number, duration = 2000) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = end / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= end) { setCount(end); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [inView, end, duration]);
  return { count, ref };
};

/* ─── Motion presets ─── */
const fadeUp = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
};

const staggerContainer = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.12 } },
  viewport: { once: true },
};

const staggerItem = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
};

const About = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const patients = useCounter(5000, 2500);
  const years = useCounter(10, 1500);
  const rating = useCounter(4, 1200);
  const procedures = useCounter(15000, 2800);

  return (
    <Layout>
      {/* ══════ HERO ══════ */}
      <section ref={heroRef} className="relative min-h-[85vh] flex items-center overflow-hidden">
        <motion.div className="absolute inset-0" style={{ scale: heroScale }}>
          <img
            src={galleryReception}
            alt="Bridge Dental Clinic interior"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/60 to-foreground/30" />
        </motion.div>

        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-20 w-96 h-96 rounded-full border border-primary-foreground/10 animate-float" />
          <div className="absolute bottom-20 left-16 w-64 h-64 rounded-full border border-primary-foreground/5 animate-float-delayed" />
        </div>

        <motion.div style={{ opacity: heroOpacity }} className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-dark text-primary-foreground/90 text-sm font-medium mb-6"
            >
              <Award className="w-4 h-4 text-primary" />
              4.7★ Rated — Trusted Dental Care in Warri
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6"
            >
              Where Your Smile{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Meets Excellence
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed mb-10 max-w-2xl"
            >
              For over a decade, Bridge Dental Clinic has been the heartbeat of dental healthcare
              in the Warri-Effurun metropolis — combining clinical precision with genuine compassion,
              24 hours a day, 7 days a week.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="flex flex-wrap gap-4"
            >
              <Button size="lg" className="gradient-primary text-primary-foreground rounded-full px-8 shadow-premium" asChild>
                <Link to="/booking">
                  Book an Appointment <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-8 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10" asChild>
                <a href="tel:+2348160090708">
                  <Phone className="mr-2 w-4 h-4" /> Call Us Now
                </a>
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* ══════ STATS BAR ══════ */}
      <section className="relative -mt-16 z-20 pb-8">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            {...fadeUp}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 bg-card rounded-2xl shadow-elevated p-6 md:p-10 border border-border"
          >
            {[
              { ref: patients.ref, count: patients.count, suffix: "+", label: "Happy Patients", icon: Users },
              { ref: years.ref, count: years.count, suffix: "+", label: "Years of Service", icon: Clock },
              { ref: rating.ref, count: rating.count, suffix: ".7★", label: "Google Rating", icon: Star },
              { ref: procedures.ref, count: procedures.count, suffix: "+", label: "Procedures Done", icon: Shield },
            ].map((stat) => (
              <div key={stat.label} ref={stat.ref} className="text-center">
                <stat.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                <div className="font-heading text-3xl md:text-4xl font-bold text-foreground">
                  {stat.count}{stat.suffix}
                </div>
                <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══════ OUR STORY ══════ */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div {...fadeUp} className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-premium">
                <img src={galleryReception} alt="Bridge Dental Clinic reception" className="w-full aspect-[4/3] object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
              </div>
              {/* Floating card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="absolute -bottom-6 -right-4 md:right-8 bg-card rounded-xl shadow-elevated p-4 md:p-5 border border-border"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center">
                    <Clock className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-heading font-bold text-foreground">Open 24/7</p>
                    <p className="text-xs text-muted-foreground">Always here for you</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
            >
              <span className="text-sm font-semibold tracking-widest uppercase text-primary">Our Story</span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mt-2 mb-6 text-foreground">
                A Legacy of Trusted{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Dental Care</span>
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Situated in the heart of the Warri-Effurun metropolis, Bridge Dental Clinic has established
                  itself as a premier destination for dental healthcare. Located at <strong className="text-foreground">39 Airport Road,
                  opposite Tivo Supermarket, Effurun, Delta State</strong>, the clinic has earned a remarkable rating
                  of 4.7 stars — a testament to unwavering commitment to quality care and patient satisfaction.
                </p>
                <p>
                  What began as a vision to bring world-class dental care to the Niger Delta region has grown
                  into a thriving practice serving thousands of families. Every treatment room, every piece of
                  equipment, and every protocol has been designed with one purpose: <em className="text-foreground">your comfort and your smile.</em>
                </p>
                <p>
                  We believe that dental emergencies don't wait — and neither should you. That's why we operate
                  <strong className="text-foreground"> around the clock, 24 hours a day, 7 days a week</strong>,
                  ensuring no dental need goes unattended and no patient is ever turned away.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════ MISSION & VISION ══════ */}
      <section className="py-20 lg:py-28 bg-section-alt relative overflow-hidden">
        <div className="absolute inset-0 texture-dots" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div {...fadeUp} className="text-center mb-16">
            <span className="text-sm font-semibold tracking-widest uppercase text-primary">What Drives Us</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mt-2 text-foreground">
              Our Mission & Vision
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="bg-card rounded-2xl p-8 md:p-10 border border-border shadow-premium relative overflow-hidden group"
            >
              <div className="absolute top-0 left-0 w-full h-1 gradient-primary" />
              <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To provide accessible, affordable, and exceptional dental healthcare to every individual
                in the Warri-Effurun metropolis and beyond. We are committed to combining advanced
                clinical techniques with heartfelt compassion — making every visit comfortable, every
                treatment effective, and every smile lasting.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="bg-card rounded-2xl p-8 md:p-10 border border-border shadow-premium relative overflow-hidden group"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent to-primary" />
              <div className="w-16 h-16 rounded-2xl bg-accent flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-accent-foreground" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To be the most trusted and innovative dental practice in the Niger Delta, setting
                the standard for clinical excellence, patient experience, and community impact.
                We envision a future where quality dental care is a right — not a privilege — and
                every smile in our community shines with confidence.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════ CORE VALUES ══════ */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-16">
            <span className="text-sm font-semibold tracking-widest uppercase text-primary">Our Values</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mt-2 text-foreground">
              What We Stand For
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              These aren't just words on a wall. They're the principles that shape every interaction,
              every treatment, and every decision at Bridge Dental Clinic.
            </p>
          </motion.div>

          <motion.div {...staggerContainer} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Heart, title: "Compassion First", desc: "Every patient is family. We listen, we care, and we treat with genuine empathy and kindness — because healing starts with connection.", color: "from-primary to-primary/70" },
              { icon: Award, title: "Clinical Excellence", desc: "We pursue the highest standards in modern dentistry — continuous training, advanced equipment, and evidence-based protocols.", color: "from-accent to-accent/70" },
              { icon: Users, title: "Radical Inclusivity", desc: "Wheelchair access, flexible payments, multilingual staff. Everyone deserves quality dental care regardless of background.", color: "from-primary to-accent" },
              { icon: Clock, title: "24/7 Reliability", desc: "Dental emergencies don't follow office hours. Neither do we. Round-the-clock care means we're always here when you need us.", color: "from-accent to-primary" },
            ].map((v, i) => (
              <motion.div
                key={v.title}
                variants={staggerItem}
                className="bg-card rounded-2xl p-7 border border-border hover:shadow-premium transition-all duration-500 group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-primary/5 -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700" />
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${v.color} flex items-center justify-center mb-5`}>
                  <v.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="font-heading text-lg font-bold text-foreground mb-2">{v.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══════ WHY CHOOSE US ══════ */}
      <section className="py-20 lg:py-28 bg-section-dark relative overflow-hidden">
        <div className="absolute inset-0 texture-lines" />
        <div className="absolute inset-0" style={{ background: "var(--gradient-radial)" }} />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div {...fadeUp}>
              <span className="text-sm font-semibold tracking-widest uppercase text-primary">Why Bridge Dental</span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mt-2 mb-6 text-section-dark-foreground">
                More Than a Clinic.{" "}
                <span className="text-primary">A Promise.</span>
              </h2>
              <p className="text-section-dark-foreground/70 leading-relaxed mb-8">
                Choosing a dental clinic is a deeply personal decision. Here's why thousands of
                families across the Warri-Effurun metropolis trust us with their most precious asset — their smile.
              </p>

              <div className="space-y-5">
                {[
                  { title: "State-of-the-Art Equipment", desc: "Modern digital X-rays, advanced sterilization, and cutting-edge treatment technology." },
                  { title: "Experienced Specialists", desc: "A team of highly qualified dental professionals with years of specialized training." },
                  { title: "Patient-Centered Approach", desc: "Personalized treatment plans, honest consultations, and transparent pricing." },
                  { title: "Emergency Ready — Always", desc: "24/7 emergency dental services. Walk in anytime, day or night, for urgent care." },
                  { title: "Affordable & Flexible", desc: "Competitive pricing with multiple payment options including cards, NFC, and payment plans." },
                ].map((item, i) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="flex gap-4 group"
                  >
                    <div className="flex-shrink-0 mt-1">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-heading font-semibold text-section-dark-foreground group-hover:text-primary transition-colors">{item.title}</h4>
                      <p className="text-sm text-section-dark-foreground/60 mt-0.5">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden shadow-glow">
                <img src={galleryTreatmentRoom} alt="Modern treatment room" className="w-full aspect-[4/3] object-cover" loading="lazy" />
              </div>
              <div className="absolute -bottom-4 -left-4 md:left-8 bg-card rounded-xl shadow-elevated p-5 border border-border">
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">
                    {[0, 1, 2, 3].map((i) => (
                      <div key={i} className="w-8 h-8 rounded-full gradient-primary border-2 border-card flex items-center justify-center">
                        <Star className="w-3 h-3 text-primary-foreground" />
                      </div>
                    ))}
                  </div>
                  <div>
                    <p className="font-heading font-bold text-sm text-foreground">5,000+ Patients</p>
                    <p className="text-xs text-muted-foreground">Trust Bridge Dental</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════ FACILITY SHOWCASE ══════ */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-16">
            <span className="text-sm font-semibold tracking-widest uppercase text-primary">Our Facility</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mt-2 text-foreground">
              Designed for Your Comfort
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Every corner of Bridge Dental Clinic is thoughtfully designed to put you at ease
              — from the welcoming reception to the state-of-the-art treatment rooms.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { img: galleryReception, title: "Welcoming Reception", desc: "A warm, modern space designed to ease any anxiety the moment you walk in." },
              { img: galleryTreatmentRoom, title: "Advanced Treatment Rooms", desc: "Equipped with the latest dental technology for precise, comfortable procedures." },
              { img: galleryWaitingArea, title: "Comfortable Waiting Area", desc: "Relax in our spacious waiting area with complimentary amenities while you wait." },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="group rounded-2xl overflow-hidden bg-card border border-border shadow-sm hover:shadow-premium transition-all duration-500"
              >
                <div className="overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-lg font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ ACCESSIBILITY & CONVENIENCE ══════ */}
      <section className="py-20 lg:py-28 bg-section-alt">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-16">
            <span className="text-sm font-semibold tracking-widest uppercase text-primary">Accessibility</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mt-2 text-foreground">
              Built for Everyone
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              We believe exceptional dental care should be accessible to all — regardless of ability,
              schedule, or budget. Here's how we make it happen.
            </p>
          </motion.div>

          <motion.div {...staggerContainer} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { icon: MapPin, title: "Prime Location", desc: "39 Airport Road, Effurun — centrally located and easily accessible from Warri, Effurun, and all surrounding communities." },
              { icon: CreditCard, title: "Flexible Payments", desc: "Credit & debit cards, NFC mobile payments (Apple Pay, Google Pay), bank transfers, and structured payment plans for every budget." },
              { icon: Accessibility, title: "Full Wheelchair Access", desc: "Wheelchair-friendly entrances, treatment rooms, and restrooms. Every patient deserves dignified, barrier-free care." },
              { icon: Clock, title: "24/7 Availability", desc: "Round-the-clock service means you never have to wait or worry. Walk in anytime — our doors are always open for you." },
              { icon: Shield, title: "Hygiene & Safety", desc: "Hospital-grade sterilization, disposable instruments where possible, and strict infection control protocols for your peace of mind." },
              { icon: ThumbsUp, title: "Anxiety-Free Experience", desc: "Gentle techniques, calming environments, and a patient-first approach designed to eliminate dental anxiety for all ages." },
            ].map((f, i) => (
              <motion.div
                key={f.title}
                variants={staggerItem}
                className="flex gap-4 bg-card rounded-xl p-6 border border-border hover:shadow-premium transition-all duration-500"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <f.icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-foreground mb-1">{f.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══════ ACCEPTED HMOs ══════ */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-16">
            <span className="text-sm font-semibold tracking-widest uppercase text-primary">Insurance Partners</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mt-2 text-foreground">
              Accepted <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">HMO Plans</span>
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              We work with top health maintenance organizations across Nigeria to ensure you can access quality dental care through your health plan.
            </p>
          </motion.div>

          <motion.div {...staggerContainer} className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {[
              "Leadway HMO",
              "Reliance HMO",
              "Novoh Health HMO",
              "Avon HMO",
              "Bastion HMO",
              "Sterling HMO",
              "Regenix HMO",
              "Synergy HMO",
              "Life Action HMO",
              "Serene HMO",
              "Wellness HMO",
            ].map((hmo) => (
              <motion.div
                key={hmo}
                variants={staggerItem}
                className="group bg-card rounded-xl p-5 border border-border text-center hover:shadow-premium hover:border-primary/20 transition-all duration-500"
              >
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                  <Shield className="w-5 h-5 text-primary" />
                </div>
                <span className="text-sm font-semibold text-foreground">{hmo}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══════ PATIENT PROMISE ══════ */}
      <section className="py-20 lg:py-28 relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            {...fadeUp}
            className="relative rounded-3xl gradient-primary p-10 md:p-16 text-center overflow-hidden"
          >
            <div className="absolute inset-0 texture-noise" />
            <div className="absolute top-10 right-10 w-64 h-64 rounded-full border border-primary-foreground/10 animate-float" />
            <div className="absolute bottom-10 left-10 w-40 h-40 rounded-full border border-primary-foreground/5 animate-float-delayed" />

            <div className="relative z-10 max-w-3xl mx-auto">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="w-20 h-20 rounded-full bg-primary-foreground/10 flex items-center justify-center mx-auto mb-8"
              >
                <Sparkles className="w-10 h-10 text-primary-foreground" />
              </motion.div>

              <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
                Our Promise to You
              </h2>
              <p className="text-primary-foreground/85 text-lg leading-relaxed mb-8">
                At Bridge Dental Clinic, we promise to treat you like family. Every consultation will be honest,
                every treatment will prioritize your comfort, and every result will exceed your expectations.
                Your smile is our greatest achievement — and we will never stop working to earn your trust.
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" className="bg-primary-foreground text-foreground hover:bg-primary-foreground/90 rounded-full px-8 font-semibold" asChild>
                  <Link to="/booking">
                    Start Your Journey <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="rounded-full px-8 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10" asChild>
                  <Link to="/contact">
                    Contact Us
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
