import { Link } from 'react-router-dom';
import {
  Settings,
  Wrench,
  Shield,
  Zap,
  Gauge,
  ThermometerSun,
  Package,
  Clock,
  ArrowRight,
  CheckCircle2,
  ChevronRight
} from 'lucide-react';
import SEO from '@/components/layout/SEO';
import { servicesData } from '@/data/servicesData';

export const ServicesPage = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Settings':
        return <Settings className="h-6 w-6" />;
      case 'Wrench':
        return <Wrench className="h-6 w-6" />;
      case 'Shield':
        return <Shield className="h-6 w-6" />;
      case 'Zap':
        return <Zap className="h-6 w-6" />;
      case 'Gauge':
        return <Gauge className="h-6 w-6" />;
      case 'ThermometerSun':
        return <ThermometerSun className="h-6 w-6" />;
      case 'Package':
        return <Package className="h-6 w-6" />;
      case 'Clock':
        return <Clock className="h-6 w-6" />;
      default:
        return <Settings className="h-6 w-6" />;
    }
  };

  return (
    <div className="pt-24 pb-16">
      <SEO
        title="Complete Pump Services | ZAD Electromechanical Services Egypt"
        description="Comprehensive pump engineering services in Egypt: commissioning, preventive maintenance, laser diagnostics, local assembly, emergency repairs, and genuine spare parts."
        canonicalUrl="https://zad-eg.net/services"
      />

      {/* Hero */}
      <section className="bg-primary text-white py-16 mb-16 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-block text-accent font-bold text-xs uppercase tracking-widest bg-white/10 px-3 py-1 rounded-md mb-4">
              ELECTROMECHANICAL CAPABILITIES
            </div>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight mb-4">
              COMPLETE PUMP SERVICES. ONE ENGINEERING PARTNER.
            </h1>
            <p className="text-lg text-white/85 leading-relaxed">
              Covering the entire equipment lifecycle—from factory skid assembly and site
              commissioning to non-invasive diagnostics, preventive maintenance, and 24/7 emergency
              repairs.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4">
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="bg-card border border-border/70 rounded-2xl p-7 flex flex-col justify-between hover-lift group hover:border-accent/80 transition-all duration-300 shadow-sm"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-accent group-hover:text-primary transition-colors mb-6">
                  {getIcon(service.iconName)}
                </div>

                <h3 className="text-xl font-bold text-primary mb-3">{service.title}</h3>

                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  {service.short_description}
                </p>

                <div className="border-t border-border/50 pt-4 mb-6">
                  <div className="text-xs font-bold uppercase tracking-wider text-foreground/80 mb-2">
                    Key Activities:
                  </div>
                  <ul className="space-y-1.5 text-xs text-muted-foreground">
                    {service.activities.slice(0, 3).map((act, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <CheckCircle2 className="h-3.5 w-3.5 text-accent flex-shrink-0 mt-0.5" />
                        <span>{act}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t border-border/50 flex items-center justify-between">
                <Link
                  to={`/services/${service.slug}`}
                  className="text-xs font-bold text-primary hover:text-accent inline-flex items-center space-x-1 uppercase tracking-wider transition-colors"
                >
                  <span>Full Service Scope</span>
                  <ChevronRight className="h-3.5 w-3.5" />
                </Link>

                <Link
                  to={`/request-service?service=${encodeURIComponent(service.title)}`}
                  className="text-xs font-bold text-accent hover:underline uppercase tracking-wider"
                >
                  Request →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="bg-muted/50 border border-border/60 rounded-2xl p-8 md:p-12 text-center max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-primary mb-3">
            Need a Customized Maintenance Agreement or Site Inspection?
          </h3>
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto mb-6">
            Our engineers can conduct on-site pump diagnostics to assess alignment, thermal profile,
            and hydraulic efficiency before designing a preventive plan.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/request-service"
              className="btn-hero text-xs py-3.5 px-6 uppercase font-bold tracking-wider inline-flex items-center justify-center space-x-2"
            >
              <span>Schedule Inspection</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/contact"
              className="btn-hero-outline text-xs py-3.5 px-6 uppercase font-bold tracking-wider"
            >
              <span>Speak to an Engineer</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
