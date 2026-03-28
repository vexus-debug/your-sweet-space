import Layout from "@/components/Layout";

const Terms = () => {
  return (
    <Layout>
      <section className="py-24 gradient-primary text-primary-foreground text-center">
        <div className="container mx-auto px-4">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">Terms of Service</h1>
          <p className="text-lg opacity-90">Last updated: March 2026</p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl prose prose-slate">
          <h2 className="font-heading text-2xl font-bold text-foreground">1. Acceptance of Terms</h2>
          <p className="text-muted-foreground leading-relaxed">By accessing and using the Bridge Dental Clinic website and services, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, please refrain from using our services.</p>

          <h2 className="font-heading text-2xl font-bold text-foreground mt-8">2. Dental Services</h2>
          <p className="text-muted-foreground leading-relaxed">Bridge Dental Clinic provides dental healthcare services including but not limited to general dentistry, cosmetic dentistry, restorative care, surgical procedures, pediatric dentistry, and emergency dental care. All treatments are performed by qualified dental professionals in accordance with Nigerian healthcare standards.</p>

          <h2 className="font-heading text-2xl font-bold text-foreground mt-8">3. Appointments</h2>
          <p className="text-muted-foreground leading-relaxed">Online appointment requests are subject to confirmation by our team. While we strive to accommodate your preferred date and time, availability may vary. We kindly request at least 24 hours' notice for appointment cancellations. Walk-in patients are welcome 24/7, though appointments are prioritized.</p>

          <h2 className="font-heading text-2xl font-bold text-foreground mt-8">4. Payment Terms</h2>
          <p className="text-muted-foreground leading-relaxed">Payment is expected at the time of service unless a payment plan has been arranged in advance. We accept credit cards, debit cards, and NFC mobile payments. Payment plans may be available for extensive treatment plans — please discuss options with our team before commencing treatment.</p>

          <h2 className="font-heading text-2xl font-bold text-foreground mt-8">5. Patient Responsibilities</h2>
          <p className="text-muted-foreground leading-relaxed">Patients are responsible for providing accurate medical history and information, following post-treatment care instructions, attending scheduled appointments or providing timely notice of cancellation, and settling payment obligations in a timely manner.</p>

          <h2 className="font-heading text-2xl font-bold text-foreground mt-8">6. Limitation of Liability</h2>
          <p className="text-muted-foreground leading-relaxed">While we strive for the highest standards of care, dental procedures carry inherent risks. Our team will explain all risks and alternatives before proceeding with treatment. Bridge Dental Clinic shall not be liable for outcomes beyond our reasonable control when appropriate standards of care have been followed.</p>

          <h2 className="font-heading text-2xl font-bold text-foreground mt-8">7. Website Use</h2>
          <p className="text-muted-foreground leading-relaxed">The content on this website is provided for informational purposes only and does not constitute medical advice. Always consult with a qualified dental professional for diagnosis and treatment recommendations specific to your needs.</p>

          <h2 className="font-heading text-2xl font-bold text-foreground mt-8">8. Contact</h2>
          <p className="text-muted-foreground leading-relaxed">For questions about these terms, contact us at:<br />
          Bridge Dental Clinic<br />
          39 Airport Road, Effurun 332011, Delta State, Nigeria<br />
          Phone: +234 816 009 0708<br />
          Email: info@bridgedentalclinic.ng</p>
        </div>
      </section>
    </Layout>
  );
};

export default Terms;
