import { Heart, Shield, MapPin, Clock, Award, Sparkles, Star, Leaf, Users, ThumbsUp } from "lucide-react";
import { useRef } from "react";
import { useAnimatedCounter } from "@/hooks/use-animated-counter";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import spaRelaxation from "@/assets/gallery/spa-treatment-room-1.jpg";
import facialTreatment from "@/assets/gallery/facial-treatment-cucumbers.jpg";
import bodyMask from "@/assets/gallery/facial-treatment-chromotherapy.jpg";
import premiumPedicure from "@/assets/gallery/spa-refreshments-nails.jpg";
import chromotherapy from "@/assets/gallery/spa-treatment-room-2.jpg";

const AnimatedStatCard = ({ value, suffix, label, delay = 0 }: { value: number; suffix: string; label: string; delay?: number; }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(ref, { threshold: 0.5 });
  const count = useAnimatedCounter({ end: value, duration: 2000, isVisible });
  return (
    <div ref={ref} className="text-center p-10 bg-card/70 backdrop-blur-sm rounded-3xl border border-gold/40 hover:border-gold/60 hover:shadow-gold transition-all duration-500 group" style={{ animationDelay: `${delay}ms` }}>
      <div className="text-5xl md:text-6xl font-bold text-gold mb-4 group-hover:scale-110 transition-transform duration-300">{count}{suffix}</div>
      <div className="text-foreground/80 font-medium">{label}</div>
    </div>
  );
};

const FeatureCard = ({ icon: Icon, title, description, delay = 0 }: { icon: any; title: string; description: string; delay?: number; }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(ref, { threshold: 0.3 });
  return (
    <div ref={ref} className={`flex items-start space-x-5 p-8 rounded-2xl bg-card border border-border/70 hover:border-gold/50 transition-all duration-300 hover:shadow-elegant ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transition: `all 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${delay}ms` }}>
      <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center flex-shrink-0"><Icon className="w-6 h-6 text-gold" /></div>
      <div><h4 className="font-semibold text-foreground mb-2">{title}</h4><p className="text-sm text-muted-foreground leading-relaxed">{description}</p></div>
    </div>
  );
};

const AboutSection = () => {
  return (
    <section id="about" className="relative overflow-hidden bg-background">
      <div className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-soft/15 via-background to-gold-light/20" />
        <div className="absolute top-20 right-20 w-64 h-64 bg-gold/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-48 h-48 bg-primary/20 rounded-full blur-3xl" />
        <div className="relative container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/20 mb-6"><Star className="w-4 h-4 text-gold fill-gold" /><span className="text-sm font-medium text-foreground">Rated 4.9★ - Google Reviews</span></div>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">Abuja's Sanctuary of Calm, Beauty & Complete Well-Being</h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">An escape from stress, from noise, from routine... into a world where your body, mind, and spirit are renewed</p>
        </div>
      </div>

      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10"><Sparkles className="w-4 h-4 text-gold" /><span className="text-xs font-medium text-foreground">Our Story</span></div>
                <h2 className="text-3xl md:text-5xl font-bold text-foreground">World-Class Spa and Health Club, Day or Night</h2>
                <p className="text-muted-foreground leading-relaxed">Faridaz Spa is Abuja's sanctuary of calm, beauty, and complete well-being. Located at the heart of the city, we offer a tranquil escape from stress, noise, and routine into a world where your body, mind, and spirit are renewed.</p>
                <p className="text-muted-foreground leading-relaxed">With a stellar 4.9-star Google rating, we've built our reputation on delivering unforgettable experiences. Our certified professionals combine deeply therapeutic treatments with scientifically advanced techniques in a warm, serene atmosphere thoughtfully curated to help you unwind.</p>
                <p className="text-muted-foreground leading-relaxed">From our luxurious organic scrub to therapeutic massages, Hydrafacials, and comprehensive body treatments, every service is designed with care. Whether it's your first visit or you come every time you're in town, we're here to provide the ultimate self-care experience.</p>
                <div className="flex flex-wrap items-center gap-4 pt-4">
                  <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-gold"></div><span className="text-sm text-foreground">100% Organic Products</span></div>
                  <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-gold"></div><span className="text-sm text-foreground">Open 24/7</span></div>
                  <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-gold"></div><span className="text-sm text-foreground">World-Class Facilities</span></div>
                </div>
              </div>
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-elegant aspect-[4/5]"><img src={spaRelaxation} alt="Serene spa relaxation room at Faridaz Spa" className="w-full h-full object-cover" /></div>
                <div className="absolute -z-10 -bottom-4 -right-4 w-full h-full rounded-2xl bg-gradient-to-br from-primary/20 to-gold/20"></div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-24">
              <div className="relative rounded-xl overflow-hidden shadow-soft aspect-[4/3] group"><img src={chromotherapy} alt="Sauna and chromotherapy wellness room" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" /><div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4"><span className="text-white text-sm font-medium">Sauna & Chromotherapy</span></div></div>
              <div className="relative rounded-xl overflow-hidden shadow-soft aspect-[4/3] group"><img src={bodyMask} alt="Luxury body treatments with organic products" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" /><div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4"><span className="text-white text-sm font-medium">Organic Body Scrub</span></div></div>
              <div className="relative rounded-xl overflow-hidden shadow-soft aspect-[4/3] group"><img src={premiumPedicure} alt="Premium pedicure and manicure services" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" /><div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4"><span className="text-white text-sm font-medium">Jacuzzi & Nail Services</span></div></div>
            </div>

            <div className="mb-24">
              <div className="text-center mb-12"><h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Trusted by Wellness Seekers Across Abuja</h3><p className="text-muted-foreground max-w-2xl mx-auto">Our commitment to organic treatments and world-class service speaks for itself</p></div>
              <div className="grid md:grid-cols-3 gap-8">
                <AnimatedStatCard value={4.9} suffix="★" label="Rating (100+ Reviews)" delay={0} />
                <AnimatedStatCard value={24} suffix="/7" label="Always Open" delay={200} />
                <AnimatedStatCard value={30} suffix="+" label="Premium Services" delay={400} />
              </div>
            </div>

            <div className="mb-24">
              <div className="text-center mb-12"><h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">The Faridaz Difference</h3><p className="text-muted-foreground max-w-2xl mx-auto">What makes us a premier wellness destination in Abuja</p></div>
              <div className="grid md:grid-cols-2 gap-6">
                <FeatureCard icon={Clock} title="24/7 Availability" description="Open around the clock, every day of the year. Whether you need relaxation at dawn or midnight, we're here to provide world-class spa and health club services at a time that works for your schedule." delay={0} />
                <FeatureCard icon={Leaf} title="100% Organic Products" description="We use purely natural and organic products in all our treatments. From our luxurious organic scrub to herbal body treatments, every product is carefully selected for its natural healing properties and effectiveness." delay={100} />
                <FeatureCard icon={Award} title="World-Standard Facilities" description="Experience luxury with our Jacuzzi bath, sauna steaming area, modern gender-neutral restrooms, and even outdoor service options. Our clean, comfortable environment is designed for your ultimate relaxation." delay={200} />
                <FeatureCard icon={Shield} title="Professional Excellence" description="Our staff are consistently praised for their professionalism, politeness, and expertise. Experience the 'natural touch from the goddess of massage' and treatments that deliver real, stress-relieving results." delay={300} />
                <FeatureCard icon={Heart} title="Complete Wellness Menu" description="From relaxing and deep tissue massages to hot stone therapy, Hydrafacials, derma planning, acne treatments, body scrubs, full body waxing, paraffin manicures, hair styling, and professional makeup — we offer everything you need." delay={400} />
                <FeatureCard icon={MapPin} title="Prime Locations in Garki & Wuse" description="Conveniently located in the heart of Abuja. Find us at Mall of Dubai, Garki or Lakota Street, Wuse. Easy access, making your wellness journey effortless." delay={500} />
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary-soft/10 to-gold-light/10 rounded-3xl p-12 md:p-16">
              <div className="max-w-4xl mx-auto">
                <div className="flex items-start gap-8">
                  <div className="hidden md:block flex-shrink-0"><div className="w-32 h-32 bg-gold/10 rounded-full flex items-center justify-center"><Sparkles className="w-16 h-16 text-gold" /></div></div>
                  <div className="flex-1">
                    <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Our Philosophy: Beauty from Within</h3>
                    <blockquote className="text-xl md:text-2xl font-medium text-foreground italic mb-6">"An escape into a world where your body, mind, and spirit are renewed."</blockquote>
                    <p className="text-muted-foreground leading-relaxed mb-4">At Faridaz Spa, we believe beauty is more than appearance — it is how you feel inside. Every treatment, every touch, and every detail in our space is designed to soothe, restore, and elevate your entire being.</p>
                    <p className="text-muted-foreground leading-relaxed mb-4">With a 4.9-star Google rating and glowing reviews from satisfied clients, we're recognized for our professionalism, top-tier services, and deeply relaxing environment. Our certified professionals deliver world-class treatments with an unmatched level of care.</p>
                    <p className="text-muted-foreground leading-relaxed">From deeply therapeutic massages to scientifically advanced skincare, health & wellness rituals, and complete beauty care — we offer a comprehensive range of premium services that restore your body, mind, and spirit.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;