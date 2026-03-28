import { memo } from "react";
import { useNavigate } from "react-router-dom";
import { Sparkles, MapPin, Shield, Leaf, Clock, Star, Calendar, ArrowRight, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhyChooseUs = memo(() => {
  const navigate = useNavigate();
  const features = [
    { icon: Shield, title: "Premium Quality Products", description: "We use only the highest quality, FDA-approved products for all our Botox and filler treatments, ensuring safe and effective results.", color: "primary" },
    { icon: Users, title: "Certified Professional", description: "Our treatments are administered by certified aesthetic professionals with extensive training in the latest techniques and procedures.", color: "gold" },
    { icon: MapPin, title: "Mobile Spa Convenience", description: "Enjoy premium aesthetic treatments in the comfort of your own space. Our mobile spa brings world-class services directly to you.", color: "primary" },
    { icon: Star, title: "Personalized Treatments", description: "Every face is unique. We provide customized treatment plans tailored to your specific goals and facial anatomy for natural-looking results.", color: "gold" }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-background via-primary/10 to-background relative overflow-hidden">
      <div className="absolute top-20 right-10 w-96 h-96 bg-gold/15 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/15 rounded-full blur-3xl" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/15 border border-primary/30 shadow-soft mb-6"><Sparkles className="w-4 h-4 text-primary" /><span className="text-sm font-medium">Why Choose Us</span></div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight"><span className="bg-gradient-to-r from-primary-deep via-primary to-accent-green bg-clip-text text-transparent" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>Beyond Aesthetics</span><br /><span className="text-foreground">A Complete Transformation</span></h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">From Botox and fillers to PDO thread lifts and massage therapy, Janna Aesthetics offers comprehensive aesthetic solutions for your beauty goals.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              const colorClass = feature.color === 'gold' ? 'text-gold bg-gold/10' : 'text-primary bg-primary/10';
              return (
                <div key={index} className="group card-elegant p-8 hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
                  <div className={`w-16 h-16 ${colorClass} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}><Icon className="w-8 h-8" /></div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
          <div className="card-elegant p-8 md:p-10 bg-gradient-to-br from-primary/15 via-background to-gold/15 border-2 border-primary/40 shadow-elegant">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/20"><MapPin className="w-4 h-4 text-gold" /><span className="text-sm font-medium">Contact Us</span></div>
                <div><h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Book Your Transformation</h3><p className="text-lg text-muted-foreground leading-relaxed mb-3">📍 Mobile Spa Services — We come to you!</p><p className="text-lg text-muted-foreground leading-relaxed mb-4">📱 Full clinic services expanding soon</p><p className="text-base text-muted-foreground">📞 +234 802 293 6328 | 📸 @Jannaaesthetics.ng</p></div>
              </div>
              <div className="flex flex-col gap-4">
                <Button onClick={() => navigate('/booking')} size="lg" className="group w-full"><Calendar className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />Book Your Treatment<ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" /></Button>
                <Button onClick={() => navigate('/contact')} variant="outline" size="lg" className="group w-full">Contact Us<MapPin className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" /></Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});
WhyChooseUs.displayName = "WhyChooseUs";
export default WhyChooseUs;