import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, CreditCard, MessageSquare, Instagram, Facebook, MapPinned } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Layout from "@/components/Layout";
import { toast } from "sonner";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! We'll get back to you soon.");
  };

  return (
    <Layout>
      <section className="relative py-24 gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              Have questions or need to reach us? We're here to help 24 hours a day, 7 days a week.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div {...fadeUp}>
              <h2 className="font-heading text-3xl font-bold text-foreground mb-6">Get in Touch</h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Whether you have a question about our services, need to schedule an appointment, or want to discuss a dental concern, our friendly team is ready to assist you.
              </p>

              <div className="space-y-6">
                {[
                  { icon: MapPin, label: "Visit Us", value: "39 Airport Road, opposite Tivo Supermarket, Warri, Effurun 332011, Delta State, Nigeria" },
                  { icon: Phone, label: "Call Us", value: "+234 816 009 0708 / +234 907 374 5258", href: "tel:+2348160090708" },
                  { icon: Mail, label: "Email Us", value: "bridgedentalclinic1@gmail.com" },
                  { icon: Clock, label: "Opening Hours", value: "Open 24 Hours — Every day of the week" },
                  { icon: CreditCard, label: "Payment Methods", value: "Credit Cards, Debit Cards, NFC Mobile Payments (Apple Pay, Google Pay), Payment Plans" },
                ].map((item) => (
                  <div key={item.label} className="flex gap-4">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-foreground">{item.label}</h4>
                      {item.href ? (
                        <a href={item.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">{item.value}</a>
                      ) : (
                        <p className="text-sm text-muted-foreground">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div className="mt-8">
                <h4 className="text-sm font-semibold text-foreground mb-3">Follow Us</h4>
                <div className="flex items-center gap-3">
                  <a href="https://instagram.com/warri_dentist" target="_blank" rel="noopener noreferrer" className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary hover:bg-primary/20 transition-colors" aria-label="Instagram">
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a href="https://facebook.com/BridgeDentalClinic" target="_blank" rel="noopener noreferrer" className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary hover:bg-primary/20 transition-colors" aria-label="Facebook">
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a href="https://maps.google.com/?q=Bridge+Dental+Clinic+Warri" target="_blank" rel="noopener noreferrer" className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary hover:bg-primary/20 transition-colors" aria-label="Google My Business">
                    <MapPinned className="h-5 w-5" />
                  </a>
                </div>
              </div>
              {/* Map */}
              <div className="mt-10 rounded-xl overflow-hidden border border-border">
                <iframe
                  title="Bridge Dental Clinic Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.5!2d5.7875!3d5.5575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1041ae1a15957c43%3A0x8d3ee4d97bc4e3c5!2sBRIDGE%20DENTAL%20CLINIC%20WARRI!5e0!3m2!1sen!2sng!4v1"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.2 }}>
              <div className="bg-card rounded-2xl border border-border p-8 md:p-10 shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <MessageSquare className="h-6 w-6 text-primary" />
                  <h3 className="font-heading text-2xl font-bold text-foreground">Send a Message</h3>
                </div>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Full Name</label>
                      <Input required placeholder="Your name" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Phone</label>
                      <Input required type="tel" placeholder="+234 XXX XXX XXXX" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Email</label>
                    <Input type="email" placeholder="your@email.com" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Subject</label>
                    <Input required placeholder="How can we help?" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Message</label>
                    <Textarea required placeholder="Tell us more..." rows={5} />
                  </div>
                  <Button type="submit" size="lg" className="w-full">Send Message</Button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
