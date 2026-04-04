import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, User, Phone, Mail, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Layout from "@/components/Layout";
import { toast } from "sonner";

const services = [
  "General Check-up & Cleaning",
  "Teeth Whitening",
  "Dental Filling",
  "Root Canal Treatment",
  "Dental Crown or Bridge",
  "Tooth Extraction",
  "Dental Implant Consultation",
  "Cosmetic Consultation",
  "Pediatric Dental Visit",
  "Emergency Dental Care",
  "Other",
];

const Booking = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    toast.success("Appointment request submitted! We'll contact you shortly to confirm.");
  };

  return (
    <Layout>
      <section className="relative py-24 gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">Book an Appointment</h1>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              Schedule your visit online. We'll confirm your appointment within a few hours. Walk-ins are also welcome 24/7.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
          {submitted ? (
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-16">
              <div className="h-20 w-20 rounded-full gradient-primary flex items-center justify-center mx-auto mb-6">
                <Calendar className="h-10 w-10 text-primary-foreground" />
              </div>
              <h2 className="font-heading text-3xl font-bold text-foreground mb-4">Thank You!</h2>
              <p className="text-muted-foreground mb-2">Your appointment request has been submitted successfully.</p>
              <p className="text-muted-foreground">Our team will contact you shortly on the phone number provided to confirm your appointment date and time.</p>
              <Button className="mt-8" onClick={() => setSubmitted(false)}>Book Another Appointment</Button>
            </motion.div>
          ) : (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <div className="bg-card rounded-2xl shadow-sm border border-border p-8 md:p-12">
                <h2 className="font-heading text-2xl font-bold text-foreground mb-2">Request an Appointment</h2>
                <p className="text-sm text-muted-foreground mb-8">Fill in your details and preferred time. We'll reach out to confirm.</p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground flex items-center gap-2"><User className="h-4 w-4 text-primary" /> Full Name</label>
                      <Input required placeholder="Your full name" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground flex items-center gap-2"><Phone className="h-4 w-4 text-primary" /> Phone Number</label>
                      <Input required type="tel" placeholder="+234 XXX XXX XXXX" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground flex items-center gap-2"><Mail className="h-4 w-4 text-primary" /> Email Address</label>
                    <Input type="email" placeholder="your@email.com (optional)" />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground flex items-center gap-2"><Calendar className="h-4 w-4 text-primary" /> Preferred Date</label>
                      <Input required type="date" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground flex items-center gap-2"><Clock className="h-4 w-4 text-primary" /> Preferred Time</label>
                      <Input required type="time" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Service Needed</label>
                    <Select required>
                      <SelectTrigger><SelectValue placeholder="Select a service" /></SelectTrigger>
                      <SelectContent>
                        {services.map((s) => (
                          <SelectItem key={s} value={s}>{s}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground flex items-center gap-2"><MessageSquare className="h-4 w-4 text-primary" /> Additional Notes</label>
                    <Textarea placeholder="Any specific concerns or requests..." rows={4} />
                  </div>

                  <Button type="submit" size="lg" className="w-full">Submit Appointment Request</Button>

                  <p className="text-xs text-center text-muted-foreground">
                    For emergencies, please call us directly at <a href="tel:+2348160090708" className="text-primary font-medium">+234 816 009 0708</a>. We're available 24/7.
                  </p>
                </form>
              </div>
            </motion.div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Booking;
