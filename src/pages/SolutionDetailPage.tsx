import { useParams, Link, Navigate } from 'react-router-dom';
import {
  CheckCircle2,
  ArrowRight,
  Shield,
  Phone,
  Settings,
  Activity,
  Gauge,
  Layers,
  ChevronRight
} from 'lucide-react';
import SEO from '@/components/layout/SEO';
import { solutionsData } from '@/data/solutionsData';
import { siteSettings } from '@/data/siteSettings';
import heroImage from '@/assets/hero-image.jpg';

export const SolutionDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();

  const solution = solutionsData.find((s) => s.slug === slug);

  if (!solution) {
    return <Navigate to="/solutions" replace />;
  }

  return (
    <div className="pt-24 pb-16">
      <SEO
        title={solution.seo_title}
        description={solution.seo_description}
        canonicalUrl={`https://zad-eg.net/solutions/${solution.slug}`}
      />

      {/* Hero */}
      <section className="bg-primary text-white py-16 mb-16 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex items-center space-x-2 text-xs text-white/70 mb-4 font-semibold">
            <Link to="/" className="hover:text-accent">
              Home
            </Link>
            <span>/</span>
            <Link to="/solutions" className="hover:text-accent">
              Solutions
            </Link>
            <span>/</span>
            <span className="text-accent">{solution.title}</span>
          </div>

          <div className="max-w-4xl">
            <div className="inline-block text-accent font-bold text-xs uppercase tracking-widest bg-white/10 px-3 py-1 rounded-md mb-4">
              PUMP SYSTEM SPECIALIZATION
            </div>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight mb-4">
              {solution.title}
            </h1>
            <p className="text-lg sm:text-xl text-white/85 leading-relaxed mb-8">
              {solution.short_description}
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                to={`/request-service?service=${encodeURIComponent(solution.title)}`}
                className="btn-hero text-xs py-3.5 px-6 uppercase font-bold tracking-wider inline-flex items-center space-x-2"
              >
                <span>Request Solution Consultation</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/contact"
                className="btn-hero-outline text-xs py-3.5 px-6 uppercase font-bold tracking-wider"
              >
                <span>Contact Engineering</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 space-y-16">
        {/* Overview & Visual */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-block text-accent font-bold text-xs uppercase tracking-widest bg-accent/10 px-3 py-1 rounded-md">
              SYSTEM OVERVIEW
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-primary tracking-tight">
              Application Context & Engineering Delivery
            </h2>
            <p className="text-base text-foreground/80 leading-relaxed">{solution.content}</p>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-2xl overflow-hidden shadow-xl border border-border/70 group">
              <img
                src={solution.heroImage || heroImage}
                alt={solution.title}
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>
        </section>

        {/* Scope of Work & Diagnostic Approach */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-card border border-border/70 p-8 rounded-2xl shadow-sm">
            <h3 className="text-xl font-bold text-primary mb-6 flex items-center space-x-2">
              <Settings className="h-5 w-5 text-accent" />
              <span>Typical Scope of Work</span>
            </h3>
            <ul className="space-y-3">
              {solution.scopeOfWork.map((item, idx) => (
                <li key={idx} className="flex items-start space-x-3 text-sm text-foreground/80">
                  <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-card border border-border/70 p-8 rounded-2xl shadow-sm">
            <h3 className="text-xl font-bold text-primary mb-6 flex items-center space-x-2">
              <Activity className="h-5 w-5 text-accent" />
              <span>Diagnostic & Testing Approach</span>
            </h3>
            <ul className="space-y-3">
              {solution.diagnosticApproach.map((item, idx) => (
                <li key={idx} className="flex items-start space-x-3 text-sm text-foreground/80">
                  <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Typical Applications & Key Features */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-muted/40 p-8 rounded-2xl border border-border/60">
            <h3 className="text-xl font-bold text-primary mb-4 flex items-center space-x-2">
              <Layers className="h-5 w-5 text-accent" />
              <span>Typical Target Applications</span>
            </h3>
            <ul className="space-y-2.5">
              {solution.typicalApplications.map((app, idx) => (
                <li key={idx} className="flex items-start space-x-2 text-xs font-semibold text-foreground/90">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 flex-shrink-0" />
                  <span>{app}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-muted/40 p-8 rounded-2xl border border-border/60">
            <h3 className="text-xl font-bold text-primary mb-4 flex items-center space-x-2">
              <Shield className="h-5 w-5 text-accent" />
              <span>Key Technical Highlights</span>
            </h3>
            <ul className="space-y-2.5">
              {solution.keyFeatures.map((feat, idx) => (
                <li key={idx} className="flex items-start space-x-2 text-xs font-semibold text-foreground/90">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="bg-primary text-white p-8 md:p-12 rounded-2xl text-center max-w-4xl mx-auto shadow-xl">
          <h3 className="text-2xl sm:text-3xl font-extrabold mb-3">
            Inquire About {solution.title}
          </h3>
          <p className="text-sm text-white/80 max-w-xl mx-auto mb-8">
            Tell us about your facility requirements. Our engineering team can configure, assemble,
            or maintain your pumping system with precision.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to={`/request-service?service=${encodeURIComponent(solution.title)}`}
              className="btn-hero text-xs py-3.5 px-8 uppercase font-bold tracking-wider inline-flex items-center justify-center space-x-2"
            >
              <span>Request Service / Quote</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/solutions"
              className="btn-hero-outline text-xs py-3.5 px-8 uppercase font-bold tracking-wider"
            >
              <span>View All Solutions</span>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SolutionDetailPage;
