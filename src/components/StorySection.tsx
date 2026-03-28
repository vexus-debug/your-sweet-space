import { memo } from "react";
import { Sparkles, Heart, Users, Award } from "lucide-react";
import massageImg from "@/assets/gallery/facial-treatment-ring-light.jpg";
import facialImg from "@/assets/gallery/facial-steamer-treatment.jpg";
import pedicureImg from "@/assets/gallery/pedicure-service.jpg";

const StorySection = memo(() => {
  return (
    <section className="py-24 bg-gradient-to-b from-background via-secondary/10 to-background relative overflow-hidden">
      <div className="absolute top-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gold/10 border border-gold/20">
                <Sparkles className="w-4 h-4 text-gold" />
                <span className="text-sm font-medium">Our Story</span>
              </div>

              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight mb-6">
                  A New Standard in <span className="bg-gradient-to-r from-primary via-primary-deep to-gold bg-clip-text text-transparent">Aesthetic Excellence</span>
                </h2>
                
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Welcome to Janna Aesthetics, where we believe in enhancing your natural beauty with precision and care. As a mobile spa, we bring premium aesthetic treatments directly to you, ensuring comfort and convenience without compromising on quality.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  From expertly administered Botox and dermal fillers to transformative PDO thread lifts and relaxing massage therapy, our certified professionals deliver world-class treatments tailored to your unique needs.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  Our full clinic is coming soon, but for now, we're proud to offer the same premium services through our mobile spa operations. Every treatment is performed with the highest standards of safety and professionalism.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-3 sm:gap-6 pt-6">
                <div className="text-center">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-2 sm:mb-3">
                    <Award className="w-5 h-5 sm:w-7 sm:h-7 text-primary" />
                  </div>
                  <div className="text-xl sm:text-3xl font-bold text-foreground mb-1">Premium</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">Products</div>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gold/10 rounded-2xl flex items-center justify-center mx-auto mb-2 sm:mb-3">
                    <Users className="w-5 h-5 sm:w-7 sm:h-7 text-gold" />
                  </div>
                  <div className="text-xl sm:text-3xl font-bold text-foreground mb-1">Certified</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">Professional</div>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-2 sm:mb-3">
                    <Heart className="w-5 h-5 sm:w-7 sm:h-7 text-primary" />
                  </div>
                  <div className="text-xl sm:text-3xl font-bold text-foreground mb-1">Mobile</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">Service</div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 h-[600px]">
              <div className="row-span-2 relative rounded-3xl overflow-hidden shadow-elegant group">
                <img src={massageImg} alt="Professional aesthetic treatment at Janna Aesthetics" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent"></div>
              </div>
              <div className="relative rounded-3xl overflow-hidden shadow-elegant group">
                <img src={facialImg} alt="Relaxing facial treatment at Janna Aesthetics" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-gold/20 to-transparent"></div>
              </div>
              <div className="relative rounded-3xl overflow-hidden shadow-elegant group">
                <img src={pedicureImg} alt="Premium service at Janna Aesthetics" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

StorySection.displayName = "StorySection";

export default StorySection;