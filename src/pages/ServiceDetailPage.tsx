import { useParams, Link, Navigate } from 'react-router-dom';
import {
  CheckCircle2,
  ArrowRight,
  Shield,
  HelpCircle,
  Phone,
  Settings,
  Wrench,
  Gauge,
  Clock,
  ChevronRight
} from 'lucide-react';
import SEO from '@/components/layout/SEO';
import { servicesData } from '@/data/servicesData';
import { siteSettings } from '@/data/siteSettings';
import heroImage from '@/assets/hero-image.jpg';

export const ServiceDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();

  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  return (
    <div className="pt-24 pb-16">
      <SEO
        title={service.seo_title}
        description={service.seo_description}
        canonicalUrl={`https://zad-eg.net/services/${service.slug}`}
        schema={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: service.title,
          provider: {
            '@type': 'Organization',
            name: siteSettings.companyName
          },
          description: service.short_description,
          areaServed: 'Egypt'
        }}
      />

      {/* Hero Section */}
      <section className="bg-primary text-white py-16 mb-16 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          {/* Breadcrumb */}
          <div className="flex items-center space-x-2 text-xs text-white/70 mb-4 font-semibold">
            <Link to="/" className="hover:text-accent">
              Home
            </Link>
            <span>/</span>
            <Link to="/services" className="hover:text-accent">
              Services
            </Link>
            <span>/</span>
            <span className="text-accent">{service.title}</span>
          </div>

          <div className="max-w-4xl">
            <div className="inline-block text-accent font-bold text-xs uppercase tracking-widest bg-white/10 px-3 py-1 rounded-md mb-4">
              ZAD ELECTROMECHANICAL SERVICES
            </div>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight mb-4 leading-tight">
              {service.title}
            </h1>
            <p className="text-lg sm:text-xl text-white/85 leading-relaxed mb-8">
              {service.short_description}
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                to={`/request-service?service=${encodeURIComponent(service.title)}`}
                className="btn-hero text-xs py-3.5 px-6 uppercase font-bold tracking-wider inline-flex items-center space-x-2"
              >
                <span>Request This Service</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={`tel:${siteSettings.phone.replace(/\s+/g, '')}`}
                className="btn-hero-outline text-xs py-3.5 px-6 uppercase font-bold tracking-wider inline-flex items-center space-x-2"
              >
                <Phone className="h-4 w-4" />
                <span>Call {siteSettings.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 space-y-16">
        {/* Overview & Image Grid */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-block text-accent font-bold text-xs uppercase tracking-widest bg-accent/10 px-3 py-1 rounded-md">
              SERVICE OVERVIEW
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-primary tracking-tight">
              Engineering Expertise & Field Procedures
            </h2>
            <p className="text-base text-foreground/80 leading-relaxed">{service.content}</p>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-2xl overflow-hidden shadow-xl border border-border/70 group">
              <img
                src={service.heroImage || heroImage}
                alt={service.title}
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>
        </section>

        {/* Scope of Activities & Benefits */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Scope */}
          <div className="bg-card border border-border/70 p-8 rounded-2xl shadow-sm">
            <h3 className="text-xl font-bold text-primary mb-6 flex items-center space-x-2">
              <Settings className="h-5 w-5 text-accent" />
              <span>Service Activities & Scope</span>
            </h3>
            <ul className="space-y-3">
              {service.activities.map((activity, idx) => (
                <li key={idx} className="flex items-start space-x-3 text-sm text-foreground/80">
                  <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                  <span>{activity}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Benefits */}
          <div className="bg-card border border-border/70 p-8 rounded-2xl shadow-sm">
            <h3 className="text-xl font-bold text-primary mb-6 flex items-center space-x-2">
              <Shield className="h-5 w-5 text-accent" />
              <span>Operational Benefits</span>
            </h3>
            <ul className="space-y-3">
              {service.benefits.map((benefit, idx) => (
                <li key={idx} className="flex items-start space-x-3 text-sm text-foreground/80">
                  <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Applications */}
        <section className="bg-muted/40 p-8 md:p-12 rounded-2xl border border-border/60">
          <h3 className="text-2xl font-bold text-primary mb-6">Target System Applications</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {service.applications.map((app, idx) => (
              <div
                key={idx}
                className="bg-card p-4 rounded-xl border border-border/50 text-xs font-semibold text-foreground/90 flex items-center space-x-2"
              >
                <div className="w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                <span>{app}</span>
              </div>
            ))}
          </div>
        </section>

        {/* FAQs */}
        {service.faqs && service.faqs.length > 0 && (
          <section className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-primary mb-2">Frequently Asked Questions</h3>
              <p className="text-xs text-muted-foreground">
                Technical inquiries regarding {service.title.toLowerCase()}
              </p>
            </div>

            <div className="space-y-4">
              {service.faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="bg-card border border-border/70 p-6 rounded-xl shadow-sm"
                >
                  <h4 className="text-sm font-bold text-primary mb-2 flex items-start space-x-2">
                    <HelpCircle className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                    <span>{faq.question}</span>
                  </h4>
                  <p className="text-xs text-muted-foreground leading-relaxed pl-6">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Action CTA Box */}
        <section className="bg-primary text-white p-8 md:p-12 rounded-2xl text-center max-w-4xl mx-auto shadow-xl">
          <h3 className="text-2xl sm:text-3xl font-extrabold mb-3">
            Ready to Schedule {service.title}?
          </h3>
          <p className="text-sm text-white/80 max-w-xl mx-auto mb-8">
            Tell us about your equipment, site location, and technical requirements. Our engineering
            specialists will review and contact you.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to={`/request-service?service=${encodeURIComponent(service.title)}`}
              className="btn-hero text-xs py-3.5 px-8 uppercase font-bold tracking-wider inline-flex items-center justify-center space-x-2"
            >
              <span>Submit Request</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/services"
              className="btn-hero-outline text-xs py-3.5 px-8 uppercase font-bold tracking-wider"
            >
              <span>Back to All Services</span>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ServiceDetailPage;
