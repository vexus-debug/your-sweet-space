import { useRef, memo } from "react";
import { useNavigate } from "react-router-dom";
import { Sparkles, Award, Shield, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAnimatedCounter } from "@/hooks/use-animated-counter";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import salonInterior from "@/assets/gallery/spa-treatment-room-1.jpg";
import facialTreatment from "@/assets/gallery/facial-treatment-cucumbers.jpg";

const StatCard = memo(({ value, suffix, label }: { value: number; suffix: string; label: string; }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(ref, { threshold: 0.5 });
  const count = useAnimatedCounter({ end: value, duration: 2000, isVisible });
  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-gold bg-clip-text text-transparent mb-2">{count}{suffix}</div>
      <div className="text-sm text-muted-foreground font-medium">{label}</div>
    </div>
  );
});
StatCard.displayName = "StatCard";

const AboutPreview = memo(() => {
  const navigate = useNavigate();
  return (
    <section className="py-20 bg-gradient-to-b from-accent-green/5 via-background to-primary/5 relative overflow-hidden">
      <div className="absolute top-20 right-10 w-64 h-64 bg-accent-green/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-48 h-48 bg-primary/10 rounded-full blur-3xl" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="relative rounded-2xl overflow-hidden shadow-elegant aspect-[3/4]"><img src={facialTreatment} alt="Luxury facial treatment" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="relative rounded-2xl overflow-hidden shadow-elegant aspect-[3/4] mt-8"><img src={salonInterior} alt="Faridaz Spa serene interior" className="w-full h-full object-cover" loading="lazy" /></div>
              </div>
              <div className="absolute -z-10 -bottom-4 -right-4 w-full h-full rounded-2xl bg-gradient-to-br from-primary/10 to-gold/10" />
            </div>
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/20"><Sparkles className="w-4 h-4 text-gold" /><span className="text-sm font-medium">4.9★ Google Rating • Women-Owned</span></div>
              <h2 className="text-3xl md:text-5xl font-bold text-foreground leading-tight">Your Sanctuary of Traditional Spa and Health Club</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">Faridaz Spa is Abuja's sanctuary of calm, beauty, and complete well-being. Our certified professional therapists deliver world-class treatments combining deeply therapeutic massages, scientifically advanced skincare, and comprehensive wellness rituals in a warm, serene atmosphere — creating a haven where your body, mind, and spirit are renewed.</p>
              <div className="space-y-4 py-8">
                <h3 className="text-xl font-semibold text-foreground">Trusted by Our Community</h3>
                <div className="grid grid-cols-3 gap-6">
                  <StatCard value={4.9} suffix="★" label="Google Rating" />
                  <StatCard value={50} suffix="+" label="Traditional Services" />
                  <StatCard value={1000} suffix="+" label="Happy Clients" />
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4 pt-4">
                <div className="flex items-center gap-2"><div className="w-10 h-10 bg-gold/10 rounded-lg flex items-center justify-center"><Award className="w-5 h-5 text-gold" /></div><div className="text-sm"><div className="font-semibold">Certified</div><div className="text-xs text-muted-foreground">Professionals</div></div></div>
                <div className="flex items-center gap-2"><div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center"><Shield className="w-5 h-5 text-primary" /></div><div className="text-sm"><div className="font-semibold">5-Star</div><div className="text-xs text-muted-foreground">Reputation</div></div></div>
                <div className="flex items-center gap-2"><div className="w-10 h-10 bg-gold/10 rounded-lg flex items-center justify-center"><Clock className="w-5 h-5 text-gold" /></div><div className="text-sm"><div className="font-semibold">Flexible Hours</div><div className="text-xs text-muted-foreground">For Your Comfort</div></div></div>
              </div>
              <Button onClick={() => navigate('/about')} className="btn-hero group mt-4">Discover Our Story<ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" /></Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});
AboutPreview.displayName = "AboutPreview";
export default AboutPreview;