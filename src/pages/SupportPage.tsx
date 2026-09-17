import { Link } from 'react-router-dom';
import {
  Clock,
  Wrench,
  ShieldCheck,
  FileText,
  Package,
  Phone,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';
import SEO from '@/components/layout/SEO';
import { siteSettings } from '@/data/siteSettings';

export const SupportPage = () => {
  const supportPillars = [
    {
      title: '24/7 Emergency Support',
      desc: 'Round-the-clock technical emergency dispatch for sudden pump failure, water supply interruption, or plant room flooding.',
      icon: Clock,
      action: 'Call Emergency Dispatch',
      href: `tel:${siteSettings.phone.replace(/\s+/g, '')}`
    },
    {
      title: 'Periodic Maintenance Contracts',
      desc: 'Scheduled quarterly and semi-annual electromechanical servicing to inspect bearings, seals, and alignment, preventing unexpected outages.',
      icon: Wrench,
      action: 'Request Maintenance Agreement',
      href: '/request-service?service=Maintenance'
    },
    {
      title: 'Technical Inspection & Diagnostics',
      desc: 'Non-destructive testing with laser shaft alignment tools and thermal imaging to evaluate equipment condition without tearing down pumps.',
      icon: ShieldCheck,
      action: 'Schedule Inspection',
      href: '/request-service?service=Pump%20Inspection'
    },
    {
      title: 'Maintenance Documentation',
      desc: 'Complete auditable handover records, commissioning logs, baseline vibration reports, and service histories for facility managers.',
      icon: FileText,
      action: 'Learn More',
      href: '/knowledge'
    },
    {
      title: 'Genuine Spare Parts Fulfillment',
      desc: 'Dedicated stocking of factory-original replacement seals, bearings, and impellers cross-referenced against your equipment nameplate.',
      icon: Package,
      action: 'Inquire Spare Parts',
      href: '/spare-parts'
    }
  ];

  return (
    <div className="pt-24 pb-16">
      <SEO
        title="Electromechanical Support Beyond Installation | ZAD Egypt"
        description="24/7 emergency pump support, periodic maintenance agreements, diagnostic inspections, and spare parts fulfillment in Egypt."
        canonicalUrl="https://zad-eg.net/support"
      />

      {/* Hero */}
      <section className="bg-primary text-white py-16 mb-16 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-block text-accent font-bold text-xs uppercase tracking-widest bg-white/10 px-3 py-1 rounded-md mb-4">
              LIFECYCLE COMMITMENT
            </div>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight mb-4">
              SUPPORT BEYOND INSTALLATION
            </h1>
            <p className="text-lg text-white/85 leading-relaxed">
              Our engineering partnership does not end when equipment is delivered. ZAD provides
              structured lifecycle support to keep your electromechanical systems operating with
              uncompromising dependability.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 space-y-20">
        {/* Emergency Fast-Action Box */}
        <section className="bg-gradient-to-r from-primary to-tertiary text-white rounded-2xl p-8 md:p-10 border border-white/15 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="flex items-center space-x-2 text-accent font-bold text-xs uppercase tracking-widest mb-1">
              <Clock className="h-4 w-4" />
              <span>URGENT SERVICE HOTLINE</span>
            </div>
            <h3 className="text-2xl font-bold mb-1">Experiencing an Emergency Pump Outage?</h3>
            <p className="text-white/80 text-xs sm:text-sm max-w-xl">
              Our technical dispatch team provides round-the-clock telephone guidance and rapid site
              mobilization across Egyptian governorates.
            </p>
          </div>
          <div className="flex-shrink-0">
            <a
              href={`tel:${siteSettings.phone.replace(/\s+/g, '')}`}
              className="btn-hero text-xs py-3.5 px-6 uppercase font-bold tracking-wider inline-flex items-center space-x-2 shadow-lg"
            >
              <Phone className="h-4 w-4" />
              <span>Call {siteSettings.phone}</span>
            </a>
          </div>
        </section>

        {/* Pillars Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {supportPillars.map((pillar, idx) => (
            <div
              key={idx}
              className="bg-card border border-border/70 rounded-2xl p-7 flex flex-col justify-between hover-lift shadow-sm group hover:border-accent"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-primary transition-colors">
                  <pillar.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-primary mb-2">{pillar.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed mb-6">{pillar.desc}</p>
              </div>

              <div className="pt-4 border-t border-border/40">
                {pillar.href.startsWith('tel:') ? (
                  <a
                    href={pillar.href}
                    className="text-xs font-bold text-primary hover:text-accent uppercase tracking-wider inline-flex items-center space-x-1"
                  >
                    <span>{pillar.action}</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                ) : (
                  <Link
                    to={pillar.href}
                    className="text-xs font-bold text-primary hover:text-accent uppercase tracking-wider inline-flex items-center space-x-1"
                  >
                    <span>{pillar.action}</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                )}
              </div>
            </div>
          ))}
        </section>

        {/* Bottom CTA */}
        <section className="bg-muted/40 p-8 md:p-12 rounded-2xl border border-border/60 text-center max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-primary mb-3">
            Establish a Preventive Maintenance Agreement
          </h3>
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto mb-6">
            Ensure long-term operational peace of mind with tailored inspection intervals and
            priority emergency dispatch.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              to="/request-service?service=Maintenance"
              className="btn-hero text-xs py-3.5 px-8 uppercase font-bold tracking-wider inline-flex items-center space-x-2"
            >
              <span>Request Agreement Proposal</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SupportPage;
