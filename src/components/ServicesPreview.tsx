import { useNavigate } from "react-router-dom";
import { Star, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { memo } from "react";
import { servicesData, iconMap } from "@/data/servicesData";

const ServiceCard = memo(({ icon: Icon, title, startingPrice, highlights, badge }: { icon: any; title: string; startingPrice: string; highlights: string[]; badge?: string; }) => {
  const navigate = useNavigate();
  return (
    <div className="card-service group cursor-pointer relative" onClick={() => navigate('/services')}>
      {badge && (<div className="absolute top-4 right-4 z-10"><span className="badge-popular text-xs"><Star className="w-3 h-3" />{badge}</span></div>)}
      <div className="relative z-10">
        <div className="w-14 h-14 bg-gradient-to-br from-primary to-gold rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
          <Icon className="w-7 h-7 text-white" />
        </div>
        <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{title}</h3>
        <div className="text-sm text-gold font-semibold mb-4">From {startingPrice}</div>
        <ul className="space-y-2 mb-4">
          {highlights.map((highlight, index) => (<li key={index} className="flex items-start gap-2 text-sm text-muted-foreground"><Sparkles className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" /><span>{highlight}</span></li>))}
        </ul>
        <div className="flex items-center text-primary text-sm font-medium group-hover:gap-2 gap-1 transition-all">View Services<ArrowRight className="w-4 h-4" /></div>
      </div>
    </div>
  );
});
ServiceCard.displayName = "ServiceCard";

const ServicesPreview = memo(() => {
  const navigate = useNavigate();
  const displayedCategories = ["Botox Treatments", "Dermal Fillers", "PDO Thread Lift", "Non-Surgical Nose Jobs", "Massage Therapy"];
  const services = servicesData.filter(category => displayedCategories.includes(category.category)).map(category => {
    const Icon = iconMap[category.iconName as keyof typeof iconMap];
    const topServices = category.services.slice(0, 3);
    return { icon: Icon, title: category.category, startingPrice: category.services[0].price, highlights: topServices.map(service => service.name), badge: category.badge };
  });

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      <div className="absolute inset-0 opacity-5"><div className="absolute top-10 left-10 w-72 h-72 bg-primary rounded-full blur-3xl" /><div className="absolute bottom-20 right-10 w-96 h-96 bg-gold rounded-full blur-3xl" /></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/20 mb-4"><Sparkles className="w-4 h-4 text-gold" /><span className="text-sm font-medium">Premium Aesthetic Services</span></div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6"><span className="bg-gradient-to-r from-primary-deep via-primary to-gold bg-clip-text text-transparent">Our Signature Treatments</span></h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">From expertly administered Botox and dermal fillers to transformative PDO thread lifts and relaxing massage therapy, every treatment is designed to enhance your natural beauty.</p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-4 italic">Each visit to Janna Aesthetics is a step towards your most confident, radiant self.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">{services.map((service, index) => (<ServiceCard key={index} {...service} />))}</div>
          <div className="text-center"><Button onClick={() => navigate('/services')} className="btn-hero group">Explore All Services<ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" /></Button></div>
        </div>
      </div>
    </section>
  );
});
ServicesPreview.displayName = "ServicesPreview";

export default ServicesPreview;