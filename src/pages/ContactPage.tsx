import { Phone, Mail, MapPin, Clock, Building2, Shield } from 'lucide-react';
import SEO from '@/components/layout/SEO';
import ContactForm from '@/components/forms/ContactForm';
import { siteSettings } from '@/data/siteSettings';

export const ContactPage = () => {
  return (
    <div className="pt-24 pb-16">
      <SEO
        title="Contact ZAD Electromechanical Services | 6th of October City, Egypt"
        description="Get in touch with ZAD Electromechanical Services in 6th of October City, Egypt. Phone: +20 2 3865 4079. Email: support@zad-eg.net."
        canonicalUrl="https://zad-eg.net/contact"
      />

      {/* Hero */}
      <section className="bg-primary text-white py-16 mb-16 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-block text-accent font-bold text-xs uppercase tracking-widest bg-white/10 px-3 py-1 rounded-md mb-4">
              COMMUNICATION & INQUIRIES
            </div>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight mb-4">
              LET'S KEEP YOUR SYSTEM RUNNING
            </h1>
            <p className="text-lg text-white/85 leading-relaxed">
              Contact our engineering and technical support teams regarding pump assembly,
              commissioning, on-site diagnostics, maintenance contracts, or genuine spare parts.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto items-start">
          {/* Left Column: Official Contact Information (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-card border border-border/70 rounded-2xl p-6 md:p-8 shadow-sm space-y-6">
              <div className="border-b border-border/60 pb-4">
                <div className="inline-block text-accent font-bold text-xs uppercase tracking-widest mb-1">
                  OFFICE & FACILITY
                </div>
                <h3 className="text-2xl font-bold text-primary">Direct Contact</h3>
              </div>

              <div className="space-y-4 text-xs">
                {/* Phone */}
                <div className="flex items-start space-x-3 bg-muted/40 p-4 rounded-xl border border-border/50">
                  <Phone className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-muted-foreground block text-[11px] font-semibold">
                      Telephone Hotline
                    </span>
                    <a
                      href={`tel:${siteSettings.phone.replace(/\s+/g, '')}`}
                      className="text-base font-bold text-primary hover:text-accent transition-colors"
                    >
                      {siteSettings.phone}
                    </a>
                    <span className="text-[10px] text-muted-foreground block mt-0.5">
                      Available 24/7 for emergency service
                    </span>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-3 bg-muted/40 p-4 rounded-xl border border-border/50">
                  <Mail className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-muted-foreground block text-[11px] font-semibold">
                      Support & Inquiries Email
                    </span>
                    <a
                      href={`mailto:${siteSettings.email}`}
                      className="text-base font-bold text-primary hover:text-accent transition-colors"
                    >
                      {siteSettings.email}
                    </a>
                    <span className="text-[10px] text-muted-foreground block mt-0.5">
                      Engineering responses within standard hours
                    </span>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start space-x-3 bg-muted/40 p-4 rounded-xl border border-border/50">
                  <MapPin className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-muted-foreground block text-[11px] font-semibold">
                      Corporate & Assembly Facility
                    </span>
                    <p className="text-sm font-semibold text-foreground/90 leading-snug">
                      {siteSettings.headquarters.unit}
                      <br />
                      {siteSettings.headquarters.complex}
                      <br />
                      {siteSettings.headquarters.city}, {siteSettings.headquarters.country}
                    </p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start space-x-3 bg-muted/40 p-4 rounded-xl border border-border/50">
                  <Clock className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-muted-foreground block text-[11px] font-semibold">
                      Office Operating Hours
                    </span>
                    <p className="text-xs font-semibold text-foreground/80">
                      {siteSettings.officeHours}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Corporate Entity Notice */}
            <div className="bg-primary/5 border border-primary/20 rounded-xl p-5 text-xs text-muted-foreground space-y-1">
              <div className="font-bold text-primary text-sm">{siteSettings.companyName}</div>
              <div>{siteSettings.legalEntity}</div>
              <div>Operating across Cairo, Giza, Alexandria, Port Said, and Aswan.</div>
            </div>
          </div>

          {/* Right Column: Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
