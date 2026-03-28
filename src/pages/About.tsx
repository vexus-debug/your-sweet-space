import { motion } from "framer-motion";
import { Award, Clock, Users, Heart, MapPin, CreditCard, Accessibility } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import dentistPortrait from "@/assets/dentist-portrait.jpg";
import clinicExterior from "@/assets/clinic-exterior.jpg";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const About = () => {
  return (
    <Layout>
      {/* Hero Banner */}
      <section className="relative py-24 gradient-primary text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-72 h-72 rounded-full border-2 border-primary-foreground" />
          <div className="absolute bottom-10 left-10 w-48 h-48 rounded-full border-2 border-primary-foreground" />
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
          <motion.div {...fadeUp}>
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">About Bridge Dental Clinic</h1>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              Committed to delivering exceptional dental healthcare with compassion, innovation, and excellence since our founding.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeUp}>
              <img src={clinicExterior} alt="Bridge Dental Clinic" className="rounded-2xl shadow-xl w-full object-cover aspect-video" loading="lazy" />
            </motion.div>
            <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.2 }}>
              <SectionHeading subtitle="Our Story" title="A Legacy of Trusted Dental Care" center={false} />
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Situated in the heart of the Warri-Effurun metropolis, Bridge Dental Clinic has established itself as a premier destination for dental healthcare. Located at 39 Airport Road, opposite Tivo Supermarket, Effurun, Delta State, the clinic has earned a high rating of 4.7 stars — a testament to its commitment to quality care, clinical excellence, and patient satisfaction.
                </p>
                <p>
                  Our clinic's strategic location on Airport Road makes it easily accessible for residents of Warri, Effurun, and surrounding areas. The facility is designed with inclusivity in mind, featuring wheelchair accessible restrooms to ensure comfort and convenience for all patients.
                </p>
                <p>
                  We believe that everyone deserves access to quality dental care. That's why we operate around the clock, 24 hours a day, 7 days a week, ensuring that no dental emergency goes unattended and no patient is turned away.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 lg:py-28 bg-section-alt">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading subtitle="Our Values" title="What Drives Us Every Day" description="Core principles that guide every interaction, treatment, and decision at Bridge Dental Clinic." />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Heart, title: "Compassion", desc: "We treat every patient with genuine care, empathy, and respect." },
              { icon: Award, title: "Excellence", desc: "We pursue the highest standards in clinical practice and patient outcomes." },
              { icon: Users, title: "Inclusivity", desc: "Our facility welcomes everyone, with wheelchair access and flexible payment options." },
              { icon: Clock, title: "Reliability", desc: "24/7 availability means we're always here when you need us most." },
            ].map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-card rounded-xl p-8 text-center border border-border"
              >
                <div className="h-14 w-14 rounded-full gradient-primary flex items-center justify-center mx-auto mb-5">
                  <v.icon className="h-7 w-7 text-primary-foreground" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-foreground mb-2">{v.title}</h3>
                <p className="text-sm text-muted-foreground">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading subtitle="Our Team" title="Meet Our Dental Professionals" description="A dedicated team of skilled practitioners committed to your oral health and comfort." />
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { name: "Dr. Emmanuel Okonkwo", role: "Lead Dental Surgeon", img: dentistPortrait },
              { name: "Dr. Amara Nwosu", role: "Cosmetic Dentistry Specialist", img: dentistPortrait },
              { name: "Dr. Chukwuma Eze", role: "Pediatric Dentist", img: dentistPortrait },
            ].map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="text-center group"
              >
                <div className="overflow-hidden rounded-xl mb-4">
                  <img src={member.img} alt={member.name} className="w-full aspect-[3/4] object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-foreground">{member.name}</h3>
                <p className="text-sm text-muted-foreground">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-20 lg:py-28 bg-section-alt">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading subtitle="Our Facilities" title="Modern & Accessible" />
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { icon: MapPin, title: "Prime Location", desc: "39 Airport Road, Effurun — easily accessible from Warri, Effurun, and surrounding areas." },
              { icon: CreditCard, title: "Flexible Payments", desc: "Credit cards, debit cards, NFC mobile payments (Apple Pay, Google Pay), and structured payment plans." },
              { icon: Accessibility, title: "Wheelchair Accessible", desc: "Fully accessible facility with wheelchair-friendly restrooms and entrances for all patients." },
            ].map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex flex-col items-center text-center"
              >
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <f.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-foreground mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
