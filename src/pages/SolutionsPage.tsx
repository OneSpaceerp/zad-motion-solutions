import { Link } from 'react-router-dom';
import { Gauge, ThermometerSun, Package, Settings, ArrowRight, CheckCircle2, ChevronRight } from 'lucide-react';
import SEO from '@/components/layout/SEO';
import { solutionsData } from '@/data/solutionsData';

export const SolutionsPage = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Gauge':
        return <Gauge className="h-6 w-6" />;
      case 'ThermometerSun':
        return <ThermometerSun className="h-6 w-6" />;
      case 'Package':
        return <Package className="h-6 w-6" />;
      case 'Settings':
        return <Settings className="h-6 w-6" />;
      default:
        return <Gauge className="h-6 w-6" />;
    }
  };

  return (
    <div className="pt-24 pb-16">
      <SEO
        title="Pump Systems & Solutions | ZAD Electromechanical Services Egypt"
        description="Engineered pump system solutions in Egypt: booster sets, HVAC chiller pumps, submersible wastewater systems, and pre-packaged modular skids."
        canonicalUrl="https://zad-eg.net/solutions"
      />

      {/* Hero */}
      <section className="bg-primary text-white py-16 mb-16 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-block text-accent font-bold text-xs uppercase tracking-widest bg-white/10 px-3 py-1 rounded-md mb-4">
              APPLICATION EXPERTISE
            </div>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight mb-4">
              PUMP SYSTEMS WE SUPPORT
            </h1>
            <p className="text-lg text-white/85 leading-relaxed">
              Targeted electromechanical solutions for multi-pump booster sets, HVAC chilled water
              circulation, submersible drainage stations, and custom packaged pump skids.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 space-y-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {solutionsData.map((sol) => (
            <div
              key={sol.id}
              className="bg-card border border-border/70 rounded-2xl p-8 flex flex-col justify-between hover-lift shadow-sm group hover:border-accent/80 transition-all duration-300"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-accent group-hover:text-primary transition-colors mb-6">
                  {getIcon(sol.iconName)}
                </div>

                <h3 className="text-2xl font-bold text-primary mb-3">{sol.title}</h3>

                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  {sol.short_description}
                </p>

                <div className="border-t border-border/50 pt-4 mb-6">
                  <div className="text-xs font-bold uppercase tracking-wider text-foreground/80 mb-2">
                    Key Features:
                  </div>
                  <ul className="space-y-1.5 text-xs text-muted-foreground">
                    {sol.keyFeatures.slice(0, 3).map((feat, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <CheckCircle2 className="h-3.5 w-3.5 text-accent flex-shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t border-border/50 flex items-center justify-between">
                <Link
                  to={`/solutions/${sol.slug}`}
                  className="text-xs font-bold text-primary hover:text-accent inline-flex items-center space-x-1 uppercase tracking-wider"
                >
                  <span>Explore Solution Scope</span>
                  <ChevronRight className="h-3.5 w-3.5" />
                </Link>

                <Link
                  to={`/request-service?service=${encodeURIComponent(sol.title)}`}
                  className="text-xs font-bold text-accent hover:underline uppercase tracking-wider"
                >
                  Inquire →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Local Assembly Banner */}
        <div className="bg-muted/40 p-8 md:p-12 rounded-2xl border border-border/60 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl">
            <div className="inline-block text-accent font-bold text-xs uppercase tracking-widest bg-accent/10 px-3 py-1 rounded-md mb-2">
              LOCALIZATION
            </div>
            <h3 className="text-2xl font-bold text-primary mb-2">
              Need a Custom Pump Skid Assembled Locally?
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              ZAD fabricates and tests multi-pump booster sets and transfer skids in our 6th of October
              assembly facility, offering shorter delivery times and flexible engineering.
            </p>
          </div>
          <div className="flex-shrink-0">
            <Link
              to="/local-assembly"
              className="btn-hero text-xs py-3.5 px-6 uppercase font-bold tracking-wider inline-flex items-center space-x-2"
            >
              <span>Learn About Local Assembly</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolutionsPage;
