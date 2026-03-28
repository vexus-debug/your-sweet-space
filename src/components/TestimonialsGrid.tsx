import { Star, Quote } from "lucide-react";
import { memo } from "react";

const TestimonialsGrid = memo(() => {
  const testimonials = [
    { name: "Amaka O.", service: "Lip Fillers", rating: 5, text: "I was nervous about getting lip fillers for the first time, but the experience at Janna Aesthetics was amazing. The results are so natural and exactly what I wanted!", featured: true },
    { name: "Chioma N.", service: "Botox Treatment", rating: 5, text: "Professional service and incredible results. My forehead lines are gone and I still look like myself, just refreshed!", featured: false },
    { name: "Sarah M.", service: "PDO Thread Lift", rating: 5, text: "The Fox Eye Lift gave me that lifted look I wanted without surgery. Highly recommend Janna Aesthetics!", featured: false },
    { name: "Blessing A.", service: "Dermal Fillers", rating: 5, text: "The mobile spa service is so convenient. She came to my home and the cheek filler results are stunning. Very professional and skilled.", featured: true },
    { name: "Funke T.", service: "Massage Therapy", rating: 5, text: "The signature massage was absolutely divine. Two hours of pure relaxation. Will definitely be booking again!", featured: false },
    { name: "Adaeze K.", service: "Russian Lips", rating: 5, text: "Got the Russian lips treatment and I am obsessed! Perfect shape and volume. Thank you Janna Aesthetics!", featured: false }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-background via-secondary/20 to-background relative overflow-hidden">
      <div className="absolute top-10 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/10 border border-primary/20 mb-6"><Star className="w-4 h-4 text-primary fill-primary" /><span className="text-sm font-medium">Client Testimonials</span></div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6"><span className="bg-gradient-to-r from-primary via-primary-deep to-gold bg-clip-text text-transparent">Loved By Our Clients</span></h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">Don't just take our word for it. Hear from the amazing clients who have experienced the Janna Aesthetics difference.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-auto">
            {testimonials.map((testimonial, index) => {
              const gridClass = testimonial.featured ? "md:col-span-2 lg:col-span-1 lg:row-span-2" : "";
              return (
                <div key={index} className={`card-elegant p-6 md:p-8 relative group hover:shadow-xl transition-all duration-500 hover:-translate-y-1 ${gridClass}`}>
                  <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity"><Quote className="w-16 h-16 text-primary" /></div>
                  <div className="flex gap-1 mb-4">{[...Array(testimonial.rating)].map((_, i) => (<Star key={i} className="w-5 h-5 text-gold fill-gold" />))}</div>
                  <p className={`text-muted-foreground leading-relaxed mb-6 relative z-10 ${testimonial.featured ? 'text-lg' : 'text-base'}`}>"{testimonial.text}"</p>
                  <div className="flex items-center gap-4 pt-4 border-t border-border/50">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-gold flex items-center justify-center text-white font-bold flex-shrink-0">{testimonial.name.split(' ').map(n => n[0]).join('')}</div>
                    <div><div className="font-semibold text-foreground">{testimonial.name}</div><div className="text-sm text-muted-foreground">{testimonial.service}</div></div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="text-center mt-12">
            <div className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl bg-gradient-to-r from-primary/10 via-gold/10 to-primary/10 border border-primary/20"><Star className="w-6 h-6 text-gold fill-gold" /><div className="text-left"><div className="text-2xl font-bold text-foreground">Premium Quality</div><div className="text-sm text-muted-foreground">Trusted by clients across Nigeria</div></div></div>
          </div>
        </div>
      </div>
    </section>
  );
});
TestimonialsGrid.displayName = "TestimonialsGrid";
export default TestimonialsGrid;