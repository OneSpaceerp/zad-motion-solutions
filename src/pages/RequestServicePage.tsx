import { Phone, Mail, MapPin, Clock, ShieldCheck } from 'lucide-react';
import SEO from '@/components/layout/SEO';
import RequestServiceForm from '@/components/forms/RequestServiceForm';
import { siteSettings } from '@/data/siteSettings';

export const RequestServicePage = () => {
  return (
    <div className="pt-24 pb-16">
      <SEO
        title="Request Pump Service & Commissioning | ZAD Egypt"
        description="Submit your pump service, commissioning, inspection, or emergency repair request to ZAD Electromechanical Services in Egypt."
        canonicalUrl="https://zad-eg.net/request-service"
      />

      {/* Hero */}
      <section className="bg-primary text-white py-16 mb-16 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-block text-accent font-bold text-xs uppercase tracking-widest bg-white/10 px-3 py-1 rounded-md mb-4">
              SERVICE & QUOTATION INTAKE
            </div>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight mb-4">
              TELL US WHAT YOUR SYSTEM NEEDS
            </h1>
            <p className="text-lg text-white/85 leading-relaxed">
              Submit your equipment details, required service scope, and technical photos. Our
              engineering team will review the information provided and contact you promptly.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-6xl mx-auto">
          {/* Main Form (8 Cols) */}
          <div className="lg:col-span-8">
            <RequestServiceForm />
          </div>

          {/* Side Information Panel (4 Cols) */}
          <div className="lg:col-span-4 space-y-6">
            {/* Direct Contact Card */}
            <div className="bg-card border border-border/70 rounded-2xl p-6 shadow-sm space-y-4">
              <h3 className="text-lg font-bold text-primary border-b border-border/50 pb-3">
                Need Immediate Assistance?
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                For active equipment breakdowns or emergency service dispatch, you can contact our
                operations desk directly:
              </p>

              <div className="space-y-3 pt-1 text-xs">
                <div className="flex items-center space-x-3 bg-muted/50 p-3 rounded-xl border border-border/40">
                  <Phone className="h-4 w-4 text-accent flex-shrink-0" />
                  <div>
                    <span className="text-muted-foreground block text-[11px]">Direct Phone</span>
                    <a
                      href={`tel:${siteSettings.phone.replace(/\s+/g, '')}`}
                      className="font-bold text-primary hover:text-accent"
                    >
                      {siteSettings.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-3 bg-muted/50 p-3 rounded-xl border border-border/40">
                  <Mail className="h-4 w-4 text-accent flex-shrink-0" />
                  <div>
                    <span className="text-muted-foreground block text-[11px]">Engineering Email</span>
                    <a
                      href={`mailto:${siteSettings.email}`}
                      className="font-bold text-primary hover:text-accent"
                    >
                      {siteSettings.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3 bg-muted/50 p-3 rounded-xl border border-border/40">
                  <MapPin className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-muted-foreground block text-[11px]">Operations Facility</span>
                    <span className="font-semibold text-foreground/85">
                      {siteSettings.headquarters.fullAddress}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quality Assurance Card */}
            <div className="bg-muted/40 border border-border/60 rounded-2xl p-6 space-y-3">
              <div className="flex items-center space-x-2 text-primary font-bold text-sm">
                <ShieldCheck className="h-5 w-5 text-accent" />
                <span>What Happens Next?</span>
              </div>
              <ul className="space-y-2 text-xs text-muted-foreground leading-relaxed">
                <li className="flex items-start space-x-2">
                  <span className="text-accent font-bold">1.</span>
                  <span>Your request is logged with a unique tracking code.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-accent font-bold">2.</span>
                  <span>A technical engineer reviews your nameplate and symptoms.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-accent font-bold">3.</span>
                  <span>We contact you with a scope assessment or site dispatch schedule.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestServicePage;
