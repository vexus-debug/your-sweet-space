import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    { name: "Vera Uhlara", service: "Nail Services", rating: 5, text: "I recently had the pleasure of visiting Faridaz Spa... a true hidden gem... The natural treatments and professional care are exceptional... I felt completely renewed and my skin has never looked better... The attention to detail was outstanding.", image: "V.U." },
    { name: "Emmanuel Obi", service: "Spa Treatment", rating: 5, text: "We had a great spa treatment... their service is strictly professional, Top notch customer service... The attention to detail and quality of service exceeded all my expectations.", image: "E.O." },
    { name: "Karen Chilotam", service: "Spa Treatment", rating: 5, text: "Had the most relaxing time at the spa today! The service was top-notch... The atmosphere is so calming and the staff really knows how to make you feel special.", image: "K.C." },
    { name: "Oseni Ifedolapo", service: "Spa Services", rating: 5, text: "This has to be the best spa in Abuja... She is so warm and sweet and patient too while being extremely professional. The level of care and expertise here is truly remarkable.", image: "O.I." },
    { name: "Raregem Jay", service: "Massage Therapy", rating: 5, text: "I had a wonderful experience at Faridaz Spa today. The massage I had was so therapeutic. I left feeling completely rejuvenated and stress-free.", image: "R.J." },
    { name: "Q Queen Chinweuba", service: "Spa Experience", rating: 5, text: "I must say that my expectations were surpassed. The ambiance is awesome and very welcoming... Every detail is carefully thought out to ensure a luxurious experience.", image: "Q.C." },
    { name: "Jessica Dennis", service: "Beauty Services", rating: 5, text: "They came though for me. She's actually well trained and good in the business... I rate extremely good... The skill and professionalism displayed here is exceptional.", image: "J.D." }
  ];

  return (
    <section className="section-pink py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">What Our Clients Say</h2>
            <p className="text-xl text-elegant max-w-3xl mx-auto leading-relaxed">Don&apos;t just take our word for it. Hear from the amazing clients who have experienced the Faridaz Spa difference and transformed their wellness journey.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="card-elegant p-6 relative">
                <div className="absolute top-4 right-4"><Quote className="w-8 h-8 text-gold/20" /></div>
                <div className="flex items-center space-x-1 mb-4">{[...Array(testimonial.rating)].map((_, i) => (<Star key={i} className="w-5 h-5 fill-gold text-gold" />))}</div>
                <p className="text-elegant leading-relaxed mb-6 text-sm">"{testimonial.text}"</p>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-gold rounded-full flex items-center justify-center text-white font-bold">{testimonial.image}</div>
                  <div><h4 className="font-semibold text-foreground">{testimonial.name}</h4><p className="text-sm text-muted-foreground">{testimonial.service}</p></div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <div className="section-gold rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Join Our Happy Clients</h3>
              <p className="text-elegant mb-6 max-w-2xl mx-auto">Experience the same exceptional service and stunning results that have made our clients so happy. Your beauty transformation awaits!</p>
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-6">
                <button onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })} className="btn-hero">Book Your Treatment</button>
                <a href="https://wa.me/2347068121733" target="_blank" rel="noopener noreferrer" className="btn-outline-gold">Chat on WhatsApp</a>
              </div>
              <div className="flex items-center justify-center space-x-8 text-sm text-elegant">
                <div className="flex items-center space-x-2"><Star className="w-4 h-4 text-gold fill-gold" /><span>5-Star Reviews</span></div>
                <div className="flex items-center space-x-2"><div className="w-2 h-2 bg-gold rounded-full"></div><span>1000+ Happy Clients</span></div>
                <div className="flex items-center space-x-2"><div className="w-2 h-2 bg-primary rounded-full"></div><span>Professional Service</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;