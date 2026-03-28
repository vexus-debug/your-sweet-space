import { 
  Sparkles, Heart, Scissors, Star, Waves, Droplet, Zap, Bath, Palette, Gift, ShoppingBag
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import servicesImage from "@/assets/gallery/chromotherapy-led-treatment.jpg";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { servicesData, Service } from "@/data/servicesData";

const ServicesSection = () => {
  const navigate = useNavigate();
  const getIcon = (iconName: string) => {
    const icons: { [key: string]: JSX.Element } = {
      Sparkles: <Sparkles className="w-6 h-6" />, Heart: <Heart className="w-6 h-6" />, Scissors: <Scissors className="w-6 h-6" />,
      Waves: <Waves className="w-6 h-6" />, Droplet: <Droplet className="w-6 h-6" />, Zap: <Zap className="w-6 h-6" />,
      Star: <Star className="w-6 h-6" />, Bath: <Bath className="w-6 h-6" />, Palette: <Palette className="w-6 h-6" />,
      Gift: <Gift className="w-6 h-6" />, ShoppingBag: <ShoppingBag className="w-6 h-6" />
    };
    return icons[iconName] || <Sparkles className="w-6 h-6" />;
  };

  return (
    <section id="services" className="py-16 bg-gradient-to-b from-background to-secondary/40 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-primary/15 rounded-full shadow-soft">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-primary">World-Class Spa and Health Club • Available 24/7</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-primary-deep via-primary to-accent-green bg-clip-text text-transparent" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>Luxury Services, Day & Night</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">From therapeutic massages and organic facials to Jacuzzi baths and organic scrubs, experience world-standard treatments with 100% organic products, any time of day.</p>
          </div>

          <div className="mb-16 animate-fade-in">
            <div className="relative rounded-2xl overflow-hidden shadow-lg group">
              <img src={servicesImage} alt="Faridaz Spa world-class wellness treatments and luxury services" loading="lazy" className="w-full h-56 md:h-72 object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">World-Class Spa and Health Club, 24/7</h3>
                <p className="text-white/90 text-sm md:text-base">100% organic products • Jacuzzi • Sauna • Professional therapists</p>
              </div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto animate-fade-in">
            <Accordion type="single" collapsible className="space-y-3">
              {servicesData.map((category, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="bg-card border border-border/80 rounded-xl overflow-hidden hover:border-primary/50 hover:shadow-elegant transition-all duration-200">
                  <AccordionTrigger className="px-5 py-4 hover:no-underline group">
                    <div className="flex items-center gap-3 w-full">
                      <div className="w-10 h-10 bg-gradient-to-br from-primary to-gold rounded-lg flex items-center justify-center text-white group-hover:scale-105 transition-transform duration-200">{getIcon(category.iconName)}</div>
                      <div className="flex-1 text-left">
                        <h3 className="text-base font-bold text-foreground group-hover:text-primary transition-colors">{category.category}</h3>
                        <p className="text-xs text-muted-foreground">{category.services.length} services</p>
                      </div>
                      {category.badge && (<span className={category.badge === "Featured" ? "badge-featured" : "badge-popular"}><Star className="w-3 h-3" />{category.badge}</span>)}
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-5 pb-5">
                    <div className="space-y-2 pt-2">
                      {category.services.map((service, serviceIndex) => (
                        <div key={serviceIndex} className="flex items-start justify-between gap-3 p-2 rounded-lg hover:bg-secondary/30 transition-colors duration-200 group/item">
                          <div className="flex flex-col gap-1 flex-1">
                            <div className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-gradient-to-r from-gold to-primary rounded-full mt-1.5 group-hover/item:scale-150 transition-transform duration-200"></div>
                              <span className="text-sm text-foreground/80 leading-relaxed group-hover/item:text-primary transition-colors">{service.name}</span>
                            </div>
                            {(service.duration || service.note) && (
                              <div className="ml-3.5 flex flex-wrap gap-2 text-xs text-muted-foreground">
                                {service.duration && (<span className="inline-flex items-center gap-1 px-2 py-0.5 bg-primary/5 rounded-full">⏱️ {service.duration}</span>)}
                                {service.note && (<span className="inline-flex items-center gap-1 px-2 py-0.5 bg-gold/10 rounded-full text-gold">📍 {service.note}</span>)}
                              </div>
                            )}
                          </div>
                          <span className="text-sm font-semibold text-gold whitespace-nowrap">{service.price}</span>
                        </div>
                      ))}
                    </div>
                    <button onClick={() => navigate('/booking')} className="mt-4 w-full flex items-center justify-center gap-2 text-sm font-medium text-gold hover:text-primary transition-colors duration-200 group/book">
                      <Sparkles className="w-4 h-4 group-hover/book:rotate-12 transition-transform duration-200" />
                      <span>Book any of these treatments</span>
                      <span className="group-hover/book:translate-x-1 transition-transform duration-200">→</span>
                    </button>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div className="mt-16 text-center animate-fade-in">
            <div className="bg-gradient-to-br from-primary/5 to-gold/5 rounded-2xl p-8 md:p-12 border border-primary/10">
              <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 bg-primary/10 rounded-full"><Sparkles className="w-4 h-4 text-primary" /><span className="text-xs font-semibold text-primary">Limited Slots Available</span></div>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4"><span className="bg-gradient-to-r from-primary to-gold bg-clip-text text-transparent">Ready for Your Spa and Health Club Journey?</span></h3>
              <p className="text-base md:text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">Book your appointment today and discover why Faridaz Spa is Abuja's premier destination for luxury wellness treatments.</p>
              <div className="mb-6 p-4 bg-gold/5 border border-gold/20 rounded-xl"><p className="text-sm text-muted-foreground">💡 <strong className="text-foreground">Note:</strong> Extra time attracts extra charges.</p></div>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <button onClick={() => navigate('/booking')} className="btn-hero group"><span className="flex items-center gap-2">Book Your Session<Sparkles className="w-4 h-4 group-hover:rotate-12 transition-transform" /></span></button>
                <a href="https://wa.me/2347068121733" target="_blank" rel="noopener noreferrer" className="btn-outline-gold group"><span className="flex items-center gap-2">WhatsApp Us<span className="group-hover:translate-x-1 transition-transform duration-200">→</span></span></a>
              </div>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-xs md:text-sm text-muted-foreground">
                <div className="flex items-center gap-2"><Star className="w-4 h-4 text-gold fill-gold" /><span>5-Star Rated</span></div>
                <div className="flex items-center gap-2"><Heart className="w-4 h-4 text-primary fill-primary" /><span>1000+ Happy Clients</span></div>
                <div className="flex items-center gap-2"><Sparkles className="w-4 h-4 text-gold" /><span>Premium Products</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;