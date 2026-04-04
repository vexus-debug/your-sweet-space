import Layout from "@/components/Layout";

const Privacy = () => {
  return (
    <Layout>
      <section className="py-24 gradient-primary text-primary-foreground text-center">
        <div className="container mx-auto px-4">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-lg opacity-90">Last updated: March 2026</p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl prose prose-slate">
          <h2 className="font-heading text-2xl font-bold text-foreground">1. Information We Collect</h2>
          <p className="text-muted-foreground leading-relaxed">We collect personal information you provide when booking appointments or contacting us, including your name, phone number, email address, and dental health information necessary for treatment. We may also collect information automatically through cookies and usage analytics on our website.</p>

          <h2 className="font-heading text-2xl font-bold text-foreground mt-8">2. How We Use Your Information</h2>
          <p className="text-muted-foreground leading-relaxed">Your information is used to schedule and manage appointments, provide dental care services, communicate with you about your treatment, send appointment reminders, process payments, and improve our services. We will never sell your personal information to third parties.</p>

          <h2 className="font-heading text-2xl font-bold text-foreground mt-8">3. Data Protection</h2>
          <p className="text-muted-foreground leading-relaxed">We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. Your medical records are kept strictly confidential in accordance with Nigerian healthcare regulations and the Nigeria Data Protection Regulation (NDPR).</p>

          <h2 className="font-heading text-2xl font-bold text-foreground mt-8">4. Patient Rights</h2>
          <p className="text-muted-foreground leading-relaxed">You have the right to access, correct, or request deletion of your personal data. You may also withdraw consent for data processing at any time. To exercise these rights, please contact us at info@bridgedentalclinic.ng or call +234 816 009 0708.</p>

          <h2 className="font-heading text-2xl font-bold text-foreground mt-8">5. Cookies</h2>
          <p className="text-muted-foreground leading-relaxed">Our website uses cookies to enhance your browsing experience and analyze website traffic. You can control cookie preferences through your browser settings. Essential cookies required for website functionality cannot be disabled.</p>

          <h2 className="font-heading text-2xl font-bold text-foreground mt-8">6. Third-Party Services</h2>
          <p className="text-muted-foreground leading-relaxed">We may use third-party services for payment processing, appointment scheduling, and analytics. These providers are contractually obligated to protect your data and use it only for the specified purposes.</p>

          <h2 className="font-heading text-2xl font-bold text-foreground mt-8">7. Contact</h2>
          <p className="text-muted-foreground leading-relaxed">For questions about this privacy policy, contact us at:<br />
          Bridge Dental Clinic<br />
          39 Airport Road, Effurun 332011, Delta State, Nigeria<br />
          Phone: +234 816 009 0708<br />
          Email: info@bridgedentalclinic.ng</p>
        </div>
      </section>
    </Layout>
  );
};

export default Privacy;
