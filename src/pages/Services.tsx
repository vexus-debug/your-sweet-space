import { useState, useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import {
  Shield, Sparkles, Heart, Stethoscope, Baby, AlertCircle, Check,
  ArrowRight, Phone, Clock, Star, ChevronDown, ShoppingCart, X,
  MessageCircle, Zap, Award, Users, CheckCircle2, Smile, Eye
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { toast } from "sonner";

/* ─── Animation presets ─── */
const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
};

const staggerItem = {
  initial: { opacity: 0, y: 25 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
};

/* ─── Service data ─── */
interface SubService {
  name: string;
  description: string;
  duration: string;
  popular?: boolean;
}

interface ServiceCategory {
  icon: any;
  title: string;
  tagline: string;
  description: string;
  color: string;
  items: SubService[];
}

const serviceCategories: ServiceCategory[] = [
  {
    icon: Shield,
    title: "General & Preventive",
    tagline: "Prevention is the Best Cure",
    description: "Maintaining your oral health starts with prevention. Our general dentistry services focus on early detection and treatment.",
    color: "from-primary to-primary/70",
    items: [
      { name: "Routine Dental Check-up", description: "Comprehensive oral exam with digital X-rays", duration: "30 min" },
      { name: "Professional Cleaning & Polishing", description: "Deep cleaning to remove plaque and tartar buildup", duration: "45 min", popular: true },
      { name: "Dental Sealants", description: "Protective coating to prevent decay on molars", duration: "20 min" },
      { name: "Fluoride Treatment", description: "Strengthen tooth enamel against cavities", duration: "15 min" },
      { name: "Oral Hygiene Education", description: "Personalized guidance for home care routines", duration: "20 min" },
      { name: "Comprehensive Oral Examination", description: "Full assessment including cancer screening", duration: "45 min" },
    ],
  },
  {
    icon: Heart,
    title: "Restorative Dentistry",
    tagline: "Rebuild. Restore. Renew.",
    description: "When teeth are damaged or missing, our restorative treatments bring back both function and beauty with lasting results.",
    color: "from-accent to-accent/70",
    items: [
      { name: "Tooth-Colored Fillings", description: "Natural-looking composite resin restorations", duration: "30 min", popular: true },
      { name: "Dental Crowns", description: "Custom-made caps to protect damaged teeth", duration: "60 min" },
      { name: "Dental Bridges", description: "Fixed prosthetics to replace missing teeth", duration: "90 min" },
      { name: "Full & Partial Dentures", description: "Removable solutions for multiple missing teeth", duration: "Multiple visits" },
      { name: "Inlays & Onlays", description: "Precision restorations for moderate decay", duration: "60 min" },
      { name: "Post & Core Restorations", description: "Foundation rebuilding for severely damaged teeth", duration: "45 min" },
    ],
  },
  {
    icon: Sparkles,
    title: "Cosmetic Dentistry",
    tagline: "Smile with Confidence",
    description: "Transform your smile with our range of cosmetic treatments — from subtle whitening to complete smile makeovers.",
    color: "from-[hsl(var(--gold))] to-[hsl(var(--gold-light))]",
    items: [
      { name: "Professional Teeth Whitening", description: "Up to 8 shades brighter in a single visit", duration: "60 min", popular: true },
      { name: "Porcelain Veneers", description: "Ultra-thin shells for a flawless smile", duration: "2 visits" },
      { name: "Dental Bonding", description: "Quick fix for chips, gaps, and discoloration", duration: "30 min" },
      { name: "Complete Smile Makeover", description: "Customized multi-treatment transformation plan", duration: "Consultation" },
      { name: "Tooth Reshaping & Contouring", description: "Subtle adjustments for a harmonious smile", duration: "30 min" },
      { name: "Gum Contouring", description: "Sculpting the gum line for better aesthetics", duration: "45 min" },
    ],
  },
  {
    icon: Stethoscope,
    title: "Surgical & Specialist",
    tagline: "Precision. Expertise. Care.",
    description: "Our skilled surgical team handles complex procedures with precision, from straightforward extractions to advanced implants, orthodontics, and clear aligners.",
    color: "from-primary to-accent",
    items: [
      { name: "Simple Tooth Extraction", description: "Safe and gentle removal of damaged teeth", duration: "30 min" },
      { name: "Wisdom Teeth Removal", description: "Surgical extraction of impacted wisdom teeth", duration: "60 min", popular: true },
      { name: "Root Canal Treatment", description: "Save infected teeth with endodontic therapy", duration: "90 min" },
      { name: "Gum Disease Treatment", description: "Periodontal therapy for healthier gums", duration: "60 min" },
      { name: "Dental Implants", description: "Permanent titanium tooth root replacements", duration: "Multiple visits", popular: true },
      { name: "Scaling & Root Planing", description: "Deep cleaning below the gum line", duration: "60 min" },
      { name: "Orthodontic Braces", description: "Traditional and modern braces for teeth alignment and bite correction", duration: "Multiple visits", popular: true },
      { name: "Aligners / Invisalign", description: "Clear, removable aligners for discreet teeth straightening", duration: "Multiple visits" },
    ],
  },
  {
    icon: Baby,
    title: "Pediatric Dentistry",
    tagline: "Little Teeth, Big Smiles",
    description: "We create a warm, child-friendly environment where little ones feel safe. Early dental care sets the foundation for life.",
    color: "from-[hsl(280,60%,55%)] to-[hsl(300,50%,60%)]",
    items: [
      { name: "Children's Check-up", description: "Gentle examination tailored for kids", duration: "25 min", popular: true },
      { name: "Topical Fluoride Application", description: "Extra protection for developing teeth", duration: "15 min" },
      { name: "Dental Sealants for Kids", description: "Shield molars from cavities early on", duration: "20 min" },
      { name: "Space Maintainers", description: "Preserve space for incoming permanent teeth", duration: "30 min" },
      { name: "Habit Counseling", description: "Help with thumb-sucking and pacifier habits", duration: "20 min" },
      { name: "Early Orthodontic Assessment", description: "Evaluate alignment for future treatment", duration: "30 min" },
    ],
  },
  {
    icon: AlertCircle,
    title: "Emergency Dental Care",
    tagline: "24/7 — Always Ready",
    description: "Dental emergencies don't wait, and neither do we. Our team is always ready to provide urgent care when you need it most.",
    color: "from-destructive to-destructive/70",
    items: [
      { name: "Severe Toothache Relief", description: "Immediate pain management and diagnosis", duration: "30 min", popular: true },
      { name: "Knocked-Out Tooth", description: "Emergency reimplantation within golden hour", duration: "45 min" },
      { name: "Fractured or Broken Tooth", description: "Stabilization and emergency repair", duration: "45 min" },
      { name: "Lost Filling or Crown", description: "Temporary or permanent replacement", duration: "30 min" },
      { name: "Dental Trauma Management", description: "Comprehensive trauma assessment and care", duration: "60 min" },
      { name: "Emergency Abscess Drainage", description: "Urgent infection control and pain relief", duration: "45 min" },
    ],
  },
];

/* ─── Why Choose Us data ─── */
const whyChooseUs = [
  { icon: Clock, title: "Open 24/7", desc: "Emergency care anytime, day or night" },
  { icon: Award, title: "10+ Years Experience", desc: "A decade of trusted dental excellence" },
  { icon: Users, title: "5,000+ Happy Patients", desc: "Join our growing family of smiles" },
  { icon: Zap, title: "Modern Equipment", desc: "State-of-the-art digital dental tech" },
  { icon: Shield, title: "Sterilization Guarantee", desc: "Strict infection control protocols" },
  { icon: Heart, title: "Compassionate Team", desc: "We truly care about your comfort" },
];

/* ─── Process Steps ─── */
const processSteps = [
  { step: "01", title: "Choose Services", desc: "Browse and select one or more services you need" },
  { step: "02", title: "Send via WhatsApp", desc: "Your selections are sent directly to our team" },
  { step: "03", title: "We Confirm", desc: "Our staff confirms your appointment time slot" },
  { step: "04", title: "Visit & Smile", desc: "Come in, relax, and let us take care of you" },
];

/* ─── Component ─── */
const Services = () => {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [expandedCategory, setExpandedCategory] = useState<number | null>(null);
  const cartRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  const toggleService = (serviceName: string) => {
    setSelectedServices((prev) =>
      prev.includes(serviceName) ? prev.filter((s) => s !== serviceName) : [...prev, serviceName]
    );
  };

  const removeService = (serviceName: string) => {
    setSelectedServices((prev) => prev.filter((s) => s !== serviceName));
  };

  const bookViaWhatsApp = () => {
    if (selectedServices.length === 0) {
      toast.error("Please select at least one service to book.");
      return;
    }
    const serviceList = selectedServices.map((s, i) => `${i + 1}. ${s}`).join("%0A");
    const message = `Hello Bridge Dental Clinic! 👋%0A%0AI'd like to book the following service(s):%0A%0A${serviceList}%0A%0APlease let me know available appointment times. Thank you!`;
    window.open(`https://wa.me/2348160090708?text=${message}`, "_blank");
  };

  const toggleCategory = (index: number) => {
    setExpandedCategory(expandedCategory === index ? null : index);
  };

  return (
    <Layout>
      {/* ══════ HERO ══════ */}
      <section ref={heroRef} className="relative min-h-[75vh] flex items-center overflow-hidden">
        <motion.div className="absolute inset-0" style={{ scale: heroScale }}>
          <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--section-dark))] via-[hsl(210,35%,18%)] to-[hsl(174,62%,20%)]" />
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }} />
        </motion.div>

        {/* Floating orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-primary/10 blur-[120px] animate-float" />
          <div className="absolute bottom-1/4 left-1/6 w-[350px] h-[350px] rounded-full bg-accent/10 blur-[100px] animate-float-delayed" />
        </div>

        <motion.div style={{ opacity: heroOpacity }} className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-dark text-primary-foreground/90 text-sm font-medium mb-6"
            >
              <Sparkles className="w-4 h-4 text-[hsl(var(--gold))]" />
              Comprehensive Care — Select & Book Instantly
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6"
            >
              Our Dental{" "}
              <span className="bg-gradient-to-r from-primary to-[hsl(var(--gold))] bg-clip-text text-transparent">
                Services
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-lg md:text-xl text-primary-foreground/75 leading-relaxed mb-10 max-w-2xl"
            >
              From routine cleanings to advanced surgical care — browse our full range of services,
              select what you need, and book via WhatsApp in seconds.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="flex flex-wrap gap-4"
            >
              <Button
                size="lg"
                className="gradient-primary text-primary-foreground rounded-full px-8 shadow-premium"
                onClick={() => document.getElementById("services-section")?.scrollIntoView({ behavior: "smooth" })}
              >
                Explore Services <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full px-8 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10"
                asChild
              >
                <a href="tel:+2348160090708">
                  <Phone className="mr-2 w-4 h-4" /> Call 24/7
                </a>
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* ══════ HOW IT WORKS ══════ */}
      <section className="relative -mt-12 z-20 pb-8">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div {...fadeUp} className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5">
            {processSteps.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-card rounded-2xl shadow-elevated border border-border p-5 md:p-6 text-center group hover:shadow-premium transition-shadow duration-300"
              >
                <div className="text-3xl md:text-4xl font-heading font-bold bg-gradient-to-br from-primary to-accent bg-clip-text text-transparent mb-2">
                  {step.step}
                </div>
                <h3 className="font-heading font-semibold text-foreground text-sm md:text-base mb-1">{step.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══════ SERVICES SECTION ══════ */}
      <section id="services-section" className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading
            subtitle="Our Services"
            title="Select the Services You Need"
            description="Tap any service to add it to your booking cart. You can select multiple services across different categories."
          />

          <div className="space-y-5 mt-8">
            {serviceCategories.map((cat, catIndex) => {
              const isExpanded = expandedCategory === catIndex;
              const selectedInCategory = cat.items.filter((item) =>
                selectedServices.includes(item.name)
              ).length;

              return (
                <motion.div
                  key={cat.title}
                  {...staggerItem}
                  transition={{ duration: 0.5, delay: catIndex * 0.08 }}
                  className="rounded-2xl border border-border bg-card overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  {/* Category Header */}
                  <button
                    onClick={() => toggleCategory(catIndex)}
                    className="w-full flex items-center gap-4 p-5 md:p-6 text-left group"
                  >
                    <div className={`h-12 w-12 md:h-14 md:w-14 rounded-xl bg-gradient-to-br ${cat.color} flex items-center justify-center shrink-0 shadow-lg group-hover:scale-105 transition-transform duration-300`}>
                      <cat.icon className="h-6 w-6 md:h-7 md:w-7 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <h2 className="font-heading text-lg md:text-xl font-bold text-foreground">{cat.title}</h2>
                        {selectedInCategory > 0 && (
                          <span className="px-2.5 py-0.5 rounded-full bg-primary/10 text-primary text-xs font-semibold">
                            {selectedInCategory} selected
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground mt-0.5 hidden sm:block">{cat.tagline}</p>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      <span className="text-xs text-muted-foreground hidden md:block">{cat.items.length} services</span>
                      <ChevronDown
                        className={`h-5 w-5 text-muted-foreground transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`}
                      />
                    </div>
                  </button>

                  {/* Expanded Sub-services */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 md:px-6 pb-5 md:pb-6 border-t border-border pt-4">
                          <p className="text-sm text-muted-foreground mb-4">{cat.description}</p>
                          <div className="grid sm:grid-cols-2 gap-3">
                            {cat.items.map((item) => {
                              const isSelected = selectedServices.includes(item.name);
                              return (
                                <motion.button
                                  key={item.name}
                                  onClick={() => toggleService(item.name)}
                                  whileTap={{ scale: 0.98 }}
                                  className={`relative text-left p-4 rounded-xl border-2 transition-all duration-200 group/item ${
                                    isSelected
                                      ? "border-primary bg-primary/5 shadow-md"
                                      : "border-border hover:border-primary/30 hover:bg-muted/50"
                                  }`}
                                >
                                  {item.popular && (
                                    <span className="absolute -top-2 right-3 px-2 py-0.5 bg-[hsl(var(--gold))] text-white text-[10px] font-bold uppercase tracking-wider rounded-full">
                                      Popular
                                    </span>
                                  )}

                                  <div className="flex items-start gap-3">
                                    <div
                                      className={`mt-0.5 h-5 w-5 rounded-md border-2 flex items-center justify-center shrink-0 transition-all duration-200 ${
                                        isSelected
                                          ? "bg-primary border-primary"
                                          : "border-muted-foreground/30 group-hover/item:border-primary/50"
                                      }`}
                                    >
                                      {isSelected && <Check className="h-3 w-3 text-primary-foreground" />}
                                    </div>
                                    <div className="flex-1 min-w-0">
                                      <h4 className="font-semibold text-sm text-foreground leading-tight">{item.name}</h4>
                                      <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{item.description}</p>
                                      <div className="flex items-center gap-1.5 mt-2">
                                        <Clock className="h-3 w-3 text-primary" />
                                        <span className="text-xs text-muted-foreground">{item.duration}</span>
                                      </div>
                                    </div>
                                  </div>
                                </motion.button>
                              );
                            })}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════ WHY CHOOSE US ══════ */}
      <section className="py-16 lg:py-24 bg-section-alt relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }} />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <SectionHeading
            subtitle="Why Bridge Dental"
            title="Why Thousands Trust Us with Their Smiles"
            description="We go beyond treatment — we build lasting relationships through exceptional dental care."
          />

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mt-8">
            {whyChooseUs.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-card rounded-2xl p-5 md:p-7 border border-border text-center group hover:shadow-premium hover:-translate-y-1 transition-all duration-300"
              >
                <div className="h-12 w-12 md:h-14 md:w-14 rounded-xl gradient-primary flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="h-6 w-6 md:h-7 md:w-7 text-primary-foreground" />
                </div>
                <h3 className="font-heading font-bold text-foreground text-sm md:text-base mb-1">{item.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ TESTIMONIALS STRIP ══════ */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading
            subtitle="Patient Stories"
            title="What Our Patients Say"
          />
          <div className="grid md:grid-cols-3 gap-5 mt-8">
            {[
              { name: "Chioma A.", text: "Bridge Dental saved my tooth at 2 AM! The 24/7 service is not a joke. Truly exceptional emergency care.", rating: 5 },
              { name: "Emeka O.", text: "I got veneers and a whitening package together. The results are incredible — my smile has never looked better.", rating: 5 },
              { name: "Funke B.", text: "My kids actually enjoy going to the dentist now! The pediatric team is so gentle and patient with them.", rating: 5 },
            ].map((review, i) => (
              <motion.div
                key={review.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="bg-card rounded-2xl p-6 md:p-8 border border-border relative group hover:shadow-elevated transition-shadow duration-300"
              >
                <div className="absolute top-5 right-6 font-heading text-5xl text-primary/10 leading-none">"</div>
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: review.rating }).map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-[hsl(var(--gold))] text-[hsl(var(--gold))]" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{review.text}</p>
                <div className="flex items-center gap-3">
                  <div className="h-9 w-9 rounded-full gradient-primary flex items-center justify-center text-primary-foreground font-bold text-sm">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">{review.name}</p>
                    <p className="text-xs text-muted-foreground">Verified Patient</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ FAQ ══════ */}
      <section className="py-16 lg:py-24 bg-section-alt">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
          <SectionHeading
            subtitle="FAQ"
            title="Common Questions"
            description="Quick answers to what patients ask most about our services."
          />
          <div className="space-y-3 mt-8">
            {[
              { q: "Can I book multiple services at once?", a: "Absolutely! Select as many services as you like from different categories and book them all in a single WhatsApp message." },
              { q: "Is the clinic really open 24/7?", a: "Yes. Bridge Dental Clinic operates around the clock, 365 days a year. Emergency care is always available." },
              { q: "How do I pay for services?", a: "We accept cash, bank transfers, and POS payments. Payment plans can be discussed for major procedures." },
              { q: "Do you treat children?", a: "Yes! Our pediatric dentistry team is specially trained to handle children of all ages in a comfortable, fun environment." },
              { q: "What if I need an emergency at night?", a: "Call or WhatsApp us at 0816 009 0708 anytime. Our emergency team is always on standby." },
            ].map((faq, i) => (
              <FAQItem key={i} question={faq.q} answer={faq.a} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ══════ FINAL CTA ══════ */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--section-dark))] via-[hsl(210,35%,16%)] to-[hsl(174,62%,22%)]" />
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "30px 30px",
        }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/8 blur-[150px]" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
          <motion.div {...fadeUp}>
            <Smile className="w-12 h-12 text-[hsl(var(--gold))] mx-auto mb-6" />
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
              Your Smile Deserves the Best
            </h2>
            <p className="text-lg text-primary-foreground/70 max-w-xl mx-auto mb-10">
              Don't wait — select your services above and book your appointment via WhatsApp today. We're just a message away.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                size="lg"
                className="bg-[hsl(var(--gold))] hover:bg-[hsl(var(--gold-light))] text-white rounded-full px-8 shadow-premium"
                onClick={() => document.getElementById("services-section")?.scrollIntoView({ behavior: "smooth" })}
              >
                <Eye className="mr-2 w-4 h-4" /> Browse Services
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full px-8 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10"
                asChild
              >
                <a href="tel:+2348160090708">
                  <Phone className="mr-2 w-4 h-4" /> Call Now
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════ FLOATING CART ══════ */}
      <AnimatePresence>
        {selectedServices.length > 0 && (
          <motion.div
            ref={cartRef}
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-5"
          >
            <div className="max-w-2xl mx-auto bg-card/95 backdrop-blur-xl rounded-2xl shadow-elevated border border-border p-4 md:p-5">
              {/* Selected items */}
              <div className="flex flex-wrap gap-2 mb-3 max-h-24 overflow-y-auto">
                {selectedServices.map((service) => (
                  <span
                    key={service}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-medium"
                  >
                    {service}
                    <button onClick={() => removeService(service)} className="hover:text-destructive transition-colors">
                      <X className="h-3 w-3" />
                    </button>
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-3">
                <div className="flex-1">
                  <p className="text-sm font-semibold text-foreground">
                    {selectedServices.length} service{selectedServices.length > 1 ? "s" : ""} selected
                  </p>
                  <p className="text-xs text-muted-foreground">Book all via WhatsApp</p>
                </div>
                <Button
                  onClick={bookViaWhatsApp}
                  className="bg-[#25D366] hover:bg-[#20BD5A] text-white rounded-full px-6 shadow-lg"
                >
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Book on WhatsApp
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </Layout>
  );
};

/* ─── FAQ Accordion Item ─── */
const FAQItem = ({ question, answer, index }: { question: string; answer: string; index: number }) => {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      className="bg-card rounded-xl border border-border overflow-hidden"
    >
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between p-5 text-left">
        <span className="font-semibold text-sm text-foreground pr-4">{question}</span>
        <ChevronDown className={`h-4 w-4 text-muted-foreground shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Services;
