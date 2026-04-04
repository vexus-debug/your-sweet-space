import { Link } from "react-router-dom";
import { motion, useScroll, useTransform, useInView, useMotionValue, useSpring } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import {
  Phone, Clock, MapPin, Star, Shield, Heart, Users, Sparkles,
  Stethoscope, Baby, AlertCircle, ChevronRight, CreditCard,
  Accessibility, ArrowRight, CheckCircle2, Quote, Play, Award
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";

import galleryTreatmentRoom from "@/assets/gallery-treatment-room.jpg";
import galleryReception from "@/assets/gallery-reception.jpg";
import galleryWaitingArea from "@/assets/gallery-waiting-area.jpg";
import galleryWhitening1 from "@/assets/gallery-whitening-1.jpg";
import galleryBracesPink from "@/assets/gallery-braces-pink.jpg";
import galleryScaling from "@/assets/gallery-scaling-before-after.jpg";
import galleryCleaning from "@/assets/gallery-cleaning-before-after.webp";
import galleryWhitening2 from "@/assets/gallery-whitening-2.webp";
import galleryBracesMetal from "@/assets/gallery-braces-metal.jpg";
import galleryWhitening3 from "@/assets/gallery-whitening-3.webp";

/* ─── Animated counter hook ─── */
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
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
};

const fadeScale = {
  initial: { opacity: 0, scale: 0.92 },
  whileInView: { opacity: 1, scale: 1 },
  viewport: { once: true },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
};

const slideInLeft = {
  initial: { opacity: 0, x: -80 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
};

const slideInRight = {
  initial: { opacity: 0, x: 80 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
};

const services = [
  { icon: Shield, title: "General & Preventive", desc: "Check-ups, cleanings, sealants, and fluoride treatments to keep your smile healthy.", image: galleryCleaning, accent: "from-primary/80 to-accent/80" },
  { icon: Sparkles, title: "Cosmetic Dentistry", desc: "Whitening, veneers, bonding, and complete smile makeovers that transform.", image: galleryWhitening1, accent: "from-gold/80 to-primary/80" },
  { icon: Heart, title: "Restorative Care", desc: "Crowns, bridges, dentures, and tooth-colored fillings for full restoration.", image: galleryScaling, accent: "from-accent/80 to-primary/80" },
  { icon: Stethoscope, title: "Surgical & Specialist", desc: "Extractions, root canals, implants, orthodontic braces, aligners/Invisalign, and advanced gum treatment.", image: galleryBracesMetal, accent: "from-primary/80 to-accent/80" },
  { icon: Baby, title: "Pediatric Dentistry", desc: "Gentle, child-friendly care and preventive treatments for little smiles.", image: galleryBracesPink, accent: "from-gold/80 to-accent/80" },
  { icon: AlertCircle, title: "Emergency Care", desc: "24-hour emergency services for toothaches, fractures, and urgent needs.", image: galleryTreatmentRoom, accent: "from-destructive/60 to-primary/80" },
];

const testimonials = [
  { name: "Adaeze O.", text: "The team at Bridge Dental is absolutely wonderful. From check-up to whitening, everything was smooth and painless. Highly recommend!", rating: 5, service: "Teeth Whitening" },
  { name: "Emeka K.", text: "I had a dental emergency at 2am and they were there for me. The care was professional and compassionate. Truly a 24-hour clinic.", rating: 5, service: "Emergency Care" },
  { name: "Blessing N.", text: "My children love going to Bridge Dental. The pediatric team is patient and kind. The clinic is modern and spotless.", rating: 5, service: "Pediatric Care" },
  { name: "Chidi A.", text: "Best dental clinic in Warri! Modern equipment, friendly staff, and very reasonable prices. I've been coming here for years.", rating: 5, service: "General Dentistry" },
];

const Index = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  const ratingCounter = useCounter(47, 1500);
  const patientsCounter = useCounter(5000, 2000);
  const servicesCounter = useCounter(30, 1200);

  return (
    <Layout>
      {/* ═════════════════════════════════════════════════════
          HERO — Cinematic parallax with layered depth
      ═════════════════════════════════════════════════════ */}
      <section ref={heroRef} className="relative min-h-[100svh] flex items-center overflow-hidden -mt-20">
        {/* Parallax background with scale */}
        <motion.div className="absolute inset-0" style={{ y: heroY, scale: heroScale }}>
          <img
            src={galleryReception}
            alt="Bridge Dental Clinic reception"
            className="w-full h-[130%] object-cover"
          />
        </motion.div>

        {/* Multi-layer gradient overlay for cinematic depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/80 via-foreground/40 to-foreground/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/60 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_80%,hsl(210_72%_42%_/_0.2),transparent_60%)]" />

        {/* Floating decorative orbs */}
        <div className="absolute top-1/4 right-[10%] w-64 h-64 bg-primary/10 rounded-full blur-[100px] animate-float" />
        <div className="absolute bottom-1/3 right-[30%] w-40 h-40 bg-gold/10 rounded-full blur-[80px] animate-float-delayed" />

        <motion.div
          className="container mx-auto px-4 lg:px-8 relative z-10 pt-32 pb-20"
          style={{ opacity: heroOpacity }}
        >
          <div className="max-w-3xl">
            {/* Status badge with shimmer */}
            <motion.div
              initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="inline-flex items-center gap-2.5 glass-dark text-primary-foreground text-xs sm:text-sm font-medium px-5 py-2.5 rounded-full mb-8 shimmer">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
                </span>
                Open 24 Hours — Walk-ins Welcome
              </span>
            </motion.div>

            <motion.h1
              className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-primary-foreground leading-[1.05] mb-6"
              initial={{ opacity: 0, y: 80, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            >
              Where Every
              <br />
              <span className="relative inline-block">
                <span className="text-gold">Smile</span>
                {/* Decorative underline */}
                <motion.span
                  className="absolute -bottom-2 left-0 h-[3px] bg-gradient-to-r from-gold to-gold/0 rounded-full"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1.2, delay: 1, ease: [0.22, 1, 0.36, 1] }}
                />
              </span>{" "}
              Matters
            </motion.h1>

            <motion.p
              className="text-base sm:text-lg lg:text-xl text-primary-foreground/70 leading-relaxed mb-12 max-w-xl"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              Premier dental healthcare in Warri-Effurun. Clinical excellence
              meets compassionate care — for you and your whole family.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <Button size="lg" className="text-base px-8 shadow-premium group" asChild>
                <Link to="/booking">
                  Book Appointment
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="secondary"
                className="text-base shadow-elevated"
                asChild
              >
                <a href="tel:+2348160090708">
                  <Phone className="mr-2 h-4 w-4" /> Call Us Now
                </a>
              </Button>
            </motion.div>
          </div>

          {/* Stats bar — glass morphism with animated counters */}
          <motion.div
            className="hidden lg:flex gap-1 mt-24 max-w-4xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            {[
              { value: "4.7★", label: "Google Rating", icon: Star },
              { value: "24/7", label: "Always Open", icon: Clock },
              { value: "30+", label: "Services", icon: Award },
              { value: "5000+", label: "Happy Patients", icon: Users },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                className="flex-1 glass-dark rounded-2xl px-6 py-5 text-center group hover:bg-primary-foreground/10 transition-all duration-500"
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <stat.icon className="h-4 w-4 text-gold mx-auto mb-2 group-hover:scale-110 transition-transform" />
                <div className="text-2xl font-bold font-heading text-primary-foreground number-display">{stat.value}</div>
                <div className="text-[11px] text-primary-foreground/50 mt-1 tracking-wider uppercase">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll indicator with pulse ring */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
          animate={{ y: [0, 12, 0] }}
          transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
        >
          <div className="relative">
            <div className="absolute inset-0 rounded-full border border-primary-foreground/10 animate-ping" style={{ animationDuration: "3s" }} />
            <div className="w-7 h-11 rounded-full border-2 border-primary-foreground/25 flex justify-center pt-2">
              <motion.div
                className="w-1 h-2.5 bg-primary-foreground/60 rounded-full"
                animate={{ y: [0, 6, 0], opacity: [1, 0.3, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
              />
            </div>
          </div>
        </motion.div>
      </section>

      {/* ═════════════════════════════════════════════════════
          MOBILE STATS — Gradient bar with glass cards
      ═════════════════════════════════════════════════════ */}
      <section className="lg:hidden relative gradient-primary py-8 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.1),transparent_70%)]" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 gap-3 text-center text-primary-foreground">
            {[
              { value: "4.7★", label: "Google Rating", icon: Star },
              { value: "24/7", label: "Always Open", icon: Clock },
              { value: "30+", label: "Services", icon: Award },
              { value: "5000+", label: "Happy Patients", icon: Users },
            ].map((stat) => (
              <div key={stat.label} className="glass-dark rounded-xl py-4 px-3">
                <stat.icon className="h-3.5 w-3.5 text-gold mx-auto mb-1.5" />
                <div className="text-lg font-bold font-heading">{stat.value}</div>
                <div className="text-[10px] opacity-60 tracking-wider uppercase">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═════════════════════════════════════════════════════
          TRUST MARQUEE — Infinite scrolling social proof
      ═════════════════════════════════════════════════════ */}
      <section className="py-6 border-b border-border/50 overflow-hidden bg-background">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...Array(2)].map((_, set) => (
            <div key={set} className="flex items-center gap-12 px-6">
              {[
                "✦ 24/7 Emergency Care",
                "✦ 4.7★ Google Rating",
                "✦ Modern Equipment",
                "✦ Family Friendly",
                "✦ Wheelchair Accessible",
                "✦ All Payment Methods",
                "✦ 5000+ Happy Patients",
                "✦ Walk-ins Welcome",
              ].map((item) => (
                <span key={`${set}-${item}`} className="text-xs font-medium text-muted-foreground tracking-wider uppercase">
                  {item}
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* ═════════════════════════════════════════════════════
          STORY — Layered asymmetric editorial layout
      ═════════════════════════════════════════════════════ */}
      <section className="py-24 lg:py-40 overflow-hidden relative texture-dots">
        {/* Background accent */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/[0.03] to-transparent pointer-events-none" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-20 items-center">
            {/* Image composition — overlapping with decorative frame */}
            <motion.div {...slideInLeft} className="lg:col-span-5 relative">
              <div className="relative">
                {/* Decorative frame behind image */}
                <div className="absolute -inset-4 rounded-3xl border border-primary/10 -z-10" />
                <div className="absolute -inset-8 rounded-3xl border border-primary/5 -z-10 hidden lg:block" />

                <motion.img
                  src={galleryTreatmentRoom}
                  alt="Bridge Dental Clinic treatment room"
                  className="rounded-2xl shadow-elevated w-full object-cover aspect-[4/5]"
                  loading="lazy"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.6 }}
                />

                {/* Floating overlapping accent card */}
                <motion.div
                  className="absolute -bottom-8 -right-4 md:-right-10 w-2/5 rounded-xl overflow-hidden shadow-premium border-4 border-background animate-float-delayed"
                  {...fadeScale}
                  transition={{ delay: 0.4, duration: 0.7 }}
                >
                  <img
                    src={galleryWaitingArea}
                    alt="Comfortable waiting area"
                    className="w-full aspect-square object-cover"
                    loading="lazy"
                  />
                </motion.div>

                {/* Floating badge */}
                <motion.div
                  className="absolute -top-4 -left-4 md:-left-6 glass rounded-2xl px-4 py-3 shadow-premium animate-float"
                  initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                >
                  <div className="flex items-center gap-2">
                    <div className="flex -space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-3 w-3 text-gold fill-current" />
                      ))}
                    </div>
                    <span className="text-xs font-bold text-foreground">4.7</span>
                  </div>
                  <div className="text-[10px] text-muted-foreground mt-1">Google Reviews</div>
                </motion.div>
              </div>
            </motion.div>

            {/* Text content with rich typography */}
            <motion.div
              {...slideInRight}
              className="lg:col-span-7"
            >
              {/* Decorative line + label */}
              <div className="flex items-center gap-4 mb-6">
                <div className="h-px w-12 bg-gradient-to-r from-primary to-primary/0" />
                <span className="text-xs font-bold tracking-[0.25em] uppercase text-primary">
                  Our Story
                </span>
              </div>

              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-[1.1] mb-6">
                Comprehensive Care in the Heart of{" "}
                <span className="relative inline-block">
                  <span className="text-primary">Warri‑Effurun</span>
                  <span className="absolute -bottom-1 left-0 w-full h-2 bg-primary/10 rounded-full -z-10" />
                </span>
              </h2>

              <div className="space-y-4 mb-10">
                <p className="text-muted-foreground leading-relaxed text-base lg:text-lg">
                  Situated in the heart of the Warri-Effurun metropolis, Bridge Dental Clinic
                  has established itself as the premier destination for dental healthcare.
                  Our commitment to quality care and clinical excellence has earned us a
                  stellar 4.7-star Google rating.
                </p>
                <p className="text-muted-foreground leading-relaxed text-base lg:text-lg">
                  With round-the-clock availability, wheelchair-accessible facilities,
                  and flexible payment options, we make quality dental care accessible
                  to everyone in the community.
                </p>
              </div>

              {/* Feature grid with hover effects */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
                {[
                  { icon: Clock, text: "Open 24 hours, 7 days a week", color: "bg-primary/10 text-primary" },
                  { icon: MapPin, text: "39 Airport Road, Effurun", color: "bg-accent/10 text-accent" },
                  { icon: CreditCard, text: "Cards, NFC & payment plans", color: "bg-gold/10 text-gold" },
                  { icon: Accessibility, text: "Fully wheelchair accessible", color: "bg-primary/10 text-primary" },
                ].map((item) => (
                  <motion.div
                    key={item.text}
                    className="flex items-center gap-3 p-3 rounded-xl hover:bg-muted/50 transition-colors group cursor-default"
                    whileHover={{ x: 4 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <div className={`h-10 w-10 rounded-xl ${item.color} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}>
                      <item.icon className="h-4 w-4" />
                    </div>
                    <span className="text-sm font-medium text-foreground">{item.text}</span>
                  </motion.div>
                ))}
              </div>

              <Button variant="outline" size="lg" className="group" asChild>
                <Link to="/about">
                  Discover Our Story
                  <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═════════════════════════════════════════════════════
          SERVICES — Immersive card grid with layered depth
      ═════════════════════════════════════════════════════ */}
      <section className="py-24 lg:py-40 bg-section-dark relative overflow-hidden texture-noise">
        {/* Atmospheric lighting effects */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        <div className="absolute top-[10%] -left-40 w-[600px] h-[600px] bg-primary/[0.07] rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] -right-40 w-[500px] h-[500px] bg-accent/[0.05] rounded-full blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold/[0.02] rounded-full blur-[150px]" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div {...fadeUp} className="text-center max-w-3xl mx-auto mb-20">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary/50" />
              <span className="text-xs font-bold tracking-[0.3em] uppercase text-primary/70">
                What We Offer
              </span>
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary/50" />
            </div>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-section-dark-foreground mb-5 leading-[1.1]">
              Complete Dental Care
              <br />
              <span className="text-gold-light">Under One Roof</span>
            </h2>
            <p className="text-section-dark-foreground/50 text-base lg:text-lg max-w-xl mx-auto">
              From routine check-ups to advanced surgical procedures — comprehensive
              care for the whole family.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="group relative rounded-2xl overflow-hidden cursor-pointer"
              >
                {/* Image with zoom */}
                <div className="relative h-80 sm:h-96">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[800ms] ease-out"
                    loading="lazy"
                  />
                  {/* Multi-layer gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-t ${service.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-multiply`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/30 to-transparent opacity-85 group-hover:opacity-95 transition-opacity duration-500" />
                </div>

                {/* Content with reveal animation */}
                <div className="absolute bottom-0 left-0 right-0 p-7">
                  {/* Service number */}
                  <div className="absolute top-4 right-5 text-primary-foreground/10 font-heading text-6xl font-bold">
                    0{i + 1}
                  </div>

                  <motion.div
                    className="h-12 w-12 rounded-xl gradient-primary flex items-center justify-center mb-5 shadow-glow border border-primary-foreground/10
                      group-hover:scale-110 group-hover:shadow-[0_0_30px_-5px_hsl(210_72%_42%_/_0.5)] transition-all duration-500"
                  >
                    <service.icon className="h-5 w-5 text-primary-foreground" />
                  </motion.div>

                  <h3 className="font-heading text-xl font-semibold text-primary-foreground mb-2 group-hover:text-gold transition-colors duration-400">
                    {service.title}
                  </h3>

                  <p className="text-sm text-primary-foreground/60 leading-relaxed max-h-0 overflow-hidden group-hover:max-h-20 transition-all duration-500 ease-out">
                    {service.desc}
                  </p>

                  {/* Arrow indicator */}
                  <div className="mt-4 flex items-center gap-2 text-xs font-medium text-primary-foreground/40 group-hover:text-gold transition-colors">
                    <span className="opacity-0 group-hover:opacity-100 translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300">
                      Learn more
                    </span>
                    <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 translate-x-[-10px] group-hover:translate-x-0 transition-all duration-400 delay-75" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div {...fadeUp} className="text-center mt-16">
            <Button size="lg" variant="secondary" className="text-base shadow-elevated group" asChild>
              <Link to="/services">
                View All Services
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* ═════════════════════════════════════════════════════
          QUOTE — Cinematic parallax interlude with texture
      ═════════════════════════════════════════════════════ */}
      <section className="relative h-[60vh] min-h-[450px] flex items-center overflow-hidden">
        <motion.img
          src={galleryTreatmentRoom}
          alt="Advanced dental treatment room"
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
          initial={{ scale: 1.1 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/70 via-foreground/60 to-foreground/80" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,hsl(213_32%_14%_/_0.4)_100%)]" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
          <motion.div {...fadeScale}>
            <Quote className="h-10 w-10 text-gold/40 mx-auto mb-6 rotate-180" />
            <p className="font-heading text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium text-primary-foreground leading-snug max-w-3xl mx-auto italic">
              We don't just treat teeth — we build lasting relationships
              with every patient who walks through our doors.
            </p>
            <motion.div
              className="mt-8 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent mx-auto"
              initial={{ width: 0 }}
              whileInView={{ width: 120 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
            />
            <p className="text-primary-foreground/40 text-sm mt-6 tracking-wider uppercase">Bridge Dental Clinic Team</p>
          </motion.div>
        </div>
      </section>

      {/* ═════════════════════════════════════════════════════
          WHY CHOOSE US — Immersive alternating editorial
      ═════════════════════════════════════════════════════ */}
      <section className="py-24 lg:py-40 relative overflow-hidden">
        {/* Subtle background texture */}
        <div className="absolute inset-0 texture-lines" />
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-border to-transparent" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div {...fadeUp} className="text-center max-w-3xl mx-auto mb-20">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary/40" />
              <span className="text-xs font-bold tracking-[0.3em] uppercase text-primary">
                Why Bridge Dental
              </span>
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary/40" />
            </div>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-5 leading-[1.1]">
              The Difference
              <br />
              <span className="text-primary">You'll Feel</span>
            </h2>
            <p className="text-muted-foreground text-base lg:text-lg max-w-xl mx-auto">
              Every detail of your experience is designed with your comfort and
              health in mind.
            </p>
          </motion.div>

          <div className="space-y-24 lg:space-y-40">
            {[
              {
                title: "Round-the-Clock Availability",
                desc: "Dental emergencies don't wait — and neither do we. Our 24/7 clinic means you always have access to expert care, whether it's a routine cleaning or an urgent situation at 3am.",
                image: galleryWhitening3,
                points: ["Walk-ins welcome anytime", "Emergency line always active", "Same-day appointments available"],
                number: "01",
              },
              {
                title: "Modern Facility & Equipment",
                desc: "Our clinic features state-of-the-art dental technology in a warm, inviting environment. From digital imaging to advanced sterilization — everything is designed for precision and your comfort.",
                image: galleryWaitingArea,
                points: ["Advanced digital X-rays", "Comfortable treatment rooms", "Strict infection control"],
                reverse: true,
                number: "02",
              },
              {
                title: "Flexible & Accessible Care",
                desc: "Quality dental care should be within everyone's reach. We offer multiple payment options, wheelchair-accessible facilities, and a welcoming environment for patients of all ages and abilities.",
                image: galleryReception,
                points: ["Cards, NFC & payment plans", "Wheelchair accessible", "Family-friendly environment"],
                number: "03",
              },
            ].map((item, i) => (
              <div
                key={item.title}
                className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
                  item.reverse ? "lg:[direction:rtl]" : ""
                }`}
              >
                {/* Image with decorative frame and floating elements */}
                <motion.div
                  {...(item.reverse ? slideInRight : slideInLeft)}
                  className={item.reverse ? "lg:[direction:ltr]" : ""}
                >
                  <div className="relative group">
                    {/* Number watermark */}
                    <span className="absolute -top-8 -left-4 font-heading text-[120px] lg:text-[160px] font-bold text-primary/[0.04] leading-none select-none pointer-events-none z-0">
                      {item.number}
                    </span>

                    <div className="rounded-2xl overflow-hidden shadow-elevated relative">
                      <motion.img
                        src={item.image}
                        alt={item.title}
                        className="w-full aspect-[3/2] object-cover"
                        loading="lazy"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                      />
                      {/* Subtle color overlay on hover */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>

                    {/* Decorative corner accent */}
                    <div className="absolute -bottom-3 -right-3 w-16 h-16 border-b-2 border-r-2 border-primary/20 rounded-br-2xl" />
                    <div className="absolute -top-3 -left-3 w-16 h-16 border-t-2 border-l-2 border-primary/20 rounded-tl-2xl" />
                  </div>
                </motion.div>

                {/* Text with rich formatting */}
                <motion.div
                  {...(item.reverse ? slideInLeft : slideInRight)}
                  className={item.reverse ? "lg:[direction:ltr]" : ""}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-4xl font-heading font-bold text-primary/15">{item.number}</span>
                    <div className="h-px flex-1 bg-gradient-to-r from-primary/20 to-transparent" />
                  </div>

                  <h3 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-5 leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-8 text-base lg:text-lg">
                    {item.desc}
                  </p>

                  <ul className="space-y-4">
                    {item.points.map((point, j) => (
                      <motion.li
                        key={point}
                        className="flex items-center gap-4 text-sm text-foreground group/item"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: j * 0.1 + 0.3 }}
                      >
                        <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover/item:bg-primary group-hover/item:text-primary-foreground transition-colors duration-300">
                          <CheckCircle2 className="h-4 w-4 text-primary group-hover/item:text-primary-foreground transition-colors" />
                        </div>
                        <span className="font-medium">{point}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═════════════════════════════════════════════════════
          RESULTS — Masonry-style showcase with hover reveals
      ═════════════════════════════════════════════════════ */}
      <section className="py-24 lg:py-40 bg-section-alt relative overflow-hidden texture-dots">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div {...fadeUp} className="text-center max-w-3xl mx-auto mb-20">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary/40" />
              <span className="text-xs font-bold tracking-[0.3em] uppercase text-primary">
                Real Results
              </span>
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary/40" />
            </div>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-5 leading-[1.1]">
              Transformations That
              <br />
              <span className="text-gold italic">Speak for Themselves</span>
            </h2>
            <p className="text-muted-foreground text-base lg:text-lg max-w-xl mx-auto">
              See the results our patients experience — from whitening to scaling
              and everything in between.
            </p>
          </motion.div>

          {/* Bento-style grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4">
            {[
              { src: galleryScaling, label: "Scaling & Polishing", span: "lg:col-span-2 lg:row-span-2" },
              { src: galleryCleaning, label: "Deep Cleaning", span: "" },
              { src: galleryWhitening1, label: "Teeth Whitening", span: "" },
              { src: galleryWhitening2, label: "Whitening Results", span: "" },
              { src: galleryBracesPink, label: "Orthodontic Braces", span: "" },
              { src: galleryBracesMetal, label: "Precision Care", span: "col-span-2" },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                className={`group relative rounded-2xl overflow-hidden cursor-pointer ${item.span}`}
              >
                <img
                  src={item.src}
                  alt={item.label}
                  className="w-full h-full min-h-[180px] lg:min-h-[220px] object-cover group-hover:scale-110 transition-transform duration-[800ms] ease-out"
                  loading="lazy"
                />
                {/* Gradient reveal */}
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

                {/* Label reveal */}
                <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-400">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-primary-foreground">{item.label}</span>
                    <div className="h-8 w-8 rounded-full glass-dark flex items-center justify-center">
                      <ArrowRight className="h-3.5 w-3.5 text-primary-foreground" />
                    </div>
                  </div>
                </div>

                {/* Corner accent */}
                <div className="absolute top-4 left-4 h-6 w-6 border-t-2 border-l-2 border-primary-foreground/0 group-hover:border-primary-foreground/30 transition-colors duration-300 rounded-tl-md" />
              </motion.div>
            ))}
          </div>

          <motion.div {...fadeUp} className="text-center mt-14">
            <Button variant="outline" size="lg" className="group" asChild>
              <Link to="/gallery">
                View Full Gallery
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* ═════════════════════════════════════════════════════
          ACCEPTED HMOs — Trusted insurance partners
      ═════════════════════════════════════════════════════ */}
      <section className="py-24 lg:py-36 bg-section-alt relative overflow-hidden texture-dots">
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div {...fadeUp} className="text-center max-w-3xl mx-auto mb-16">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary/40" />
              <span className="text-xs font-bold tracking-[0.3em] uppercase text-primary">
                Insurance Partners
              </span>
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary/40" />
            </div>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-5 leading-[1.1]">
              Accepted <span className="text-primary">HMO Plans</span>
            </h2>
            <p className="text-muted-foreground text-base lg:text-lg max-w-xl mx-auto">
              We partner with leading health maintenance organizations to make quality dental care accessible and affordable.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
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
            ].map((hmo, i) => (
              <motion.div
                key={hmo}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="group bg-card rounded-xl p-5 border border-border text-center hover:shadow-premium hover:border-primary/20 transition-all duration-500"
              >
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                  <Shield className="w-5 h-5 text-primary" />
                </div>
                <span className="text-sm font-semibold text-foreground">{hmo}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═════════════════════════════════════════════════════
          TESTIMONIALS — Premium dark section with depth
      ═════════════════════════════════════════════════════ */}
      <section className="py-24 lg:py-40 bg-section-dark relative overflow-hidden texture-noise">
        {/* Atmospheric lights */}
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/[0.06] rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-gold/[0.04] rounded-full blur-[120px]" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div {...fadeUp} className="text-center max-w-3xl mx-auto mb-20">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary/40" />
              <span className="text-xs font-bold tracking-[0.3em] uppercase text-primary/60">
                Patient Stories
              </span>
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary/40" />
            </div>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-section-dark-foreground mb-5 leading-[1.1]">
              Trusted by{" "}
              <span className="text-gold-light italic">Thousands</span>
            </h2>
            <p className="text-section-dark-foreground/45 text-base lg:text-lg max-w-xl mx-auto">
              Real experiences from patients who trust Bridge Dental Clinic with
              their family's oral health.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className="group relative"
              >
                <div className="glass-dark rounded-2xl p-6 lg:p-7 h-full hover:border-primary/20 transition-all duration-500 hover:shadow-[0_0_40px_-10px_hsl(210_72%_42%_/_0.15)] relative overflow-hidden">
                  {/* Background glow on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative z-10">
                    {/* Service tag */}
                    <span className="inline-block text-[10px] font-medium tracking-wider uppercase text-primary/60 bg-primary/10 px-3 py-1 rounded-full mb-4">
                      {t.service}
                    </span>

                    <div className="flex gap-0.5 mb-4">
                      {[...Array(t.rating)].map((_, j) => (
                        <Star key={j} className="h-3.5 w-3.5 text-gold fill-current" />
                      ))}
                    </div>

                    <Quote className="h-5 w-5 text-primary/20 mb-3 rotate-180" />

                    <p className="text-sm leading-relaxed text-section-dark-foreground/70 mb-6">
                      {t.text}
                    </p>

                    <div className="flex items-center gap-3 pt-4 border-t border-section-dark-foreground/5">
                      <div className="h-9 w-9 rounded-full gradient-primary flex items-center justify-center text-xs font-bold text-primary-foreground shadow-glow">
                        {t.name.charAt(0)}
                      </div>
                      <div>
                        <span className="text-sm font-semibold text-section-dark-foreground block">{t.name}</span>
                        <span className="text-[11px] text-section-dark-foreground/40">Verified Patient</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═════════════════════════════════════════════════════
          LOCATION — Sophisticated split layout
      ═════════════════════════════════════════════════════ */}
      <section className="py-24 lg:py-40 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-primary/[0.02] to-transparent pointer-events-none" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div {...slideInLeft}>
              <div className="flex items-center gap-4 mb-6">
                <div className="h-px w-12 bg-gradient-to-r from-primary to-primary/0" />
                <span className="text-xs font-bold tracking-[0.25em] uppercase text-primary">
                  Find Us
                </span>
              </div>

              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-8 leading-tight">
                Visit Bridge
                <br />
                <span className="text-primary">Dental Clinic</span>
              </h2>

              <div className="space-y-5 mb-10">
                {[
                  { icon: MapPin, label: "Address", value: "39 Airport Road, opposite Tivo Supermarket, Effurun, Delta State", color: "bg-primary/10 text-primary" },
                  { icon: Phone, label: "Phone", value: "+234 816 009 0708", href: "tel:+2348160090708", color: "bg-accent/10 text-accent" },
                  { icon: Clock, label: "Hours", value: "Open 24 hours — Every day of the week", color: "bg-gold/10 text-gold" },
                ].map((item) => (
                  <motion.div
                    key={item.label}
                    className="flex gap-4 p-4 rounded-xl hover:bg-muted/50 transition-colors group"
                    whileHover={{ x: 4 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <div className={`h-11 w-11 rounded-xl ${item.color} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}>
                      <item.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-[11px] font-bold tracking-wider uppercase text-muted-foreground mb-1">
                        {item.label}
                      </div>
                      {item.href ? (
                        <a href={item.href} className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                          {item.value}
                        </a>
                      ) : (
                        <div className="text-sm font-medium text-foreground">{item.value}</div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              <Button size="lg" className="group shadow-premium" asChild>
                <Link to="/contact">
                  Get Directions
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </motion.div>

            <motion.div {...slideInRight}>
              <div className="relative group">
                {/* Decorative frame */}
                <div className="absolute -inset-3 rounded-3xl border border-primary/10 -z-10" />
                <div className="absolute -inset-6 rounded-3xl border border-primary/5 -z-10 hidden lg:block" />

                <div className="rounded-2xl overflow-hidden shadow-elevated">
                  <motion.img
                    src={galleryReception}
                    alt="Bridge Dental Clinic reception"
                    className="w-full aspect-[4/3] object-cover"
                    loading="lazy"
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.6 }}
                  />
                </div>

                {/* Floating info card */}
                <motion.div
                  className="absolute -bottom-6 -left-4 md:-left-8 glass rounded-2xl p-5 shadow-premium max-w-[200px] animate-float"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                >
                  <MapPin className="h-5 w-5 text-primary mb-2" />
                  <p className="text-xs font-semibold text-foreground leading-relaxed">39 Airport Road, Effurun</p>
                  <p className="text-[10px] text-muted-foreground mt-1">Opposite Tivo Supermarket</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═════════════════════════════════════════════════════
          FINAL CTA — Premium gradient with depth and texture
      ═════════════════════════════════════════════════════ */}
      <section className="relative py-28 lg:py-40 overflow-hidden">
        <div className="absolute inset-0 gradient-warm" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,rgba(255,255,255,0.12),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_80%,hsl(195_80%_40%_/_0.2),transparent_60%)]" />
        <div className="absolute inset-0 texture-noise" />

        {/* Floating decorative elements */}
        <div className="absolute top-10 left-10 w-32 h-32 border border-primary-foreground/5 rounded-full" />
        <div className="absolute bottom-10 right-10 w-48 h-48 border border-primary-foreground/5 rounded-full" />
        <div className="absolute top-1/2 right-[15%] w-20 h-20 border border-primary-foreground/5 rounded-full" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
          <motion.div {...fadeScale}>
            <motion.div
              className="inline-flex items-center gap-2 glass-dark text-primary-foreground text-xs font-medium px-5 py-2 rounded-full mb-8"
              animate={{ y: [0, -4, 0] }}
              transition={{ repeat: Infinity, duration: 3 }}
            >
              <Clock className="h-3.5 w-3.5 text-gold" />
              We're Open Right Now
            </motion.div>

            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-5 leading-[1.1]">
              Your Best Smile Starts
              <br />
              <span className="italic">With a Single Step</span>
            </h2>
            <p className="text-lg lg:text-xl text-primary-foreground/70 max-w-xl mx-auto mb-12">
              Schedule your visit today. Walk-ins are always welcome — we're here
              for you, 24 hours a day, 7 days a week.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-base px-10 shadow-elevated group" asChild>
                <Link to="/booking">
                  Book Your Appointment
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="secondary"
                className="text-base shadow-elevated"
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
