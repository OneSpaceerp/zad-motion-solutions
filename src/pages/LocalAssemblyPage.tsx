import { Link } from 'react-router-dom';
import {
  Zap,
  CheckCircle2,
  Clock,
  Layers,
  ShieldCheck,
  ArrowRight,
  Settings,
  Truck,
  FileCheck
} from 'lucide-react';
import SEO from '@/components/layout/SEO';
import ProcessFlow from '@/components/common/ProcessFlow';
import warehouseImage from '@/assets/warehouse.jpg';
import commissioningImage from '@/assets/commissioning.jpg';

export const LocalAssemblyPage = () => {
  const processSteps = [
    {
      title: 'Requirement',
      subtitle: 'Technical Sizing',
      description: 'Review of site hydraulic curves, head, flow, and plant room footprint constraints.'
    },
    {
      title: 'Configuration',
      subtitle: 'Skid Engineering',
      description: '3D structural baseplate modeling, manifold routing, and control architecture design.'
    },
    {
      title: 'Assembly',
      subtitle: 'Mechanical & Electrical',
      description: 'Pump-motor mounting, rigid manifold welding, sensor wiring, and VFD integration.'
    },
    {
      title: 'Inspection',
      subtitle: 'Rigorous QA Checks',
      description: 'Hydrostatic pressure testing, SKF laser alignment, and automation simulated staging.'
    },
    {
      title: 'Delivery',
      subtitle: 'Site Handover',
      description: 'Protected domestic shipping, on-site staging, and commissioning coordination.'
    }
  ];

  const pumpCategories = [
    {
      title: 'Split-Case Centrifugal Pumps',
      desc: 'High-flow horizontal split-case assemblies designed for municipal water supply, district cooling plants, and industrial transfer skids.',
      specs: 'Flow capacities engineered for heavy industrial flow; heavy-duty steel channel baseplates.'
    },
    {
      title: 'End-Suction Centrifugal Skids',
      desc: 'Versatile back-pull-out centrifugal pump sets with spacer couplings for simplified maintenance in commercial HVAC and process cooling loops.',
      specs: 'Laser-aligned baseframe configurations with integrated vibration isolators.'
    },
    {
      title: 'Multi-Pump Booster Packages',
      desc: 'Duplex, triplex, and quadruplex vertical multistage booster assemblies featuring intelligent variable speed inverter automation.',
      specs: 'Complete stainless steel suction/discharge manifolds, diaphragm vessels, and pre-wired control panels.'
    }
  ];

  const qaChecks = [
    'Hydrostatic pressure testing of assembled manifolds at 1.5x design pressure',
    'Precision SKF laser shaft alignment verified to sub-millimeter tolerances',
    'Electrical insulation resistance (megger) and earth continuity testing',
    'Simulated VFD cascade staging, fault interlocks, and dry-run safety verification',
    'Surface anti-corrosion coating and structural weld inspection'
  ];

  return (
    <div className="pt-24 pb-16">
      <SEO
        title="Local Pump Assembly in Egypt | Faster Delivery & Custom Skids | ZAD"
        description="Local pump assembly and skid fabrication in 6th of October City, Egypt. Shorter lead times, flexible configuration, booster sets, split-case pumps, and strict QA."
        canonicalUrl="https://zad-eg.net/local-assembly"
      />

      {/* Hero */}
      <section className="bg-primary text-white py-16 mb-16 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-block text-accent font-bold text-xs uppercase tracking-widest bg-white/10 px-3 py-1 rounded-md mb-4">
              EGYPTIAN MANUFACTURING & LOCALIZATION
            </div>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight mb-4">
              LOCAL ASSEMBLY. BUILT AROUND YOUR REQUIREMENTS.
            </h1>
            <p className="text-lg text-white/85 leading-relaxed">
              Local assembly brings pump capability closer to the customer. By assembling and
              configuring pump systems locally, ZAD supports shorter delivery times while creating
              greater flexibility around application requirements.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 space-y-24">
        {/* Why Local Assembly Section */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-block text-accent font-bold text-xs uppercase tracking-widest bg-accent/10 px-3 py-1 rounded-md">
              STRATEGIC ADVANTAGE
            </div>
            <h2 className="text-3xl font-extrabold text-primary tracking-tight">
              Why Local Pump Assembly Makes the Difference
            </h2>
            <p className="text-base text-foreground/80 leading-relaxed">
              Importing fully built pump skids from overseas introduces severe delays, shipping
              uncertainties, and rigid configurations that cannot be altered when site conditions
              differ from initial drawings.
            </p>
            <p className="text-base text-foreground/80 leading-relaxed">
              Operating from our dedicated assembly and warehouse facilities in Polaris Al-Zamil
              Industrial Zone, 6th of October City, ZAD engineers configure and assemble pump skids
              locally. This dramatically shrinks procurement lead times from months down to weeks,
              while allowing custom modifications to baseplates, manifold orientations, and control
              panels.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="bg-muted/50 p-4 rounded-xl border border-border/50 text-center">
                <Clock className="h-6 w-6 text-accent mx-auto mb-2" />
                <div className="text-xs font-bold text-primary">Shorter Lead Times</div>
              </div>
              <div className="bg-muted/50 p-4 rounded-xl border border-border/50 text-center">
                <Truck className="h-6 w-6 text-accent mx-auto mb-2" />
                <div className="text-xs font-bold text-primary">Reduced Logistics</div>
              </div>
              <div className="bg-muted/50 p-4 rounded-xl border border-border/50 text-center">
                <Settings className="h-6 w-6 text-accent mx-auto mb-2" />
                <div className="text-xs font-bold text-primary">Flexible Engineering</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="rounded-2xl overflow-hidden shadow-xl border border-border/70 group">
              <img
                src={warehouseImage}
                alt="ZAD Assembly Facility"
                className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>
        </section>

        {/* How It Works - Process Flow */}
        <section className="bg-card border border-border/70 rounded-2xl p-8 md:p-12 shadow-sm">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-block text-accent font-bold text-xs uppercase tracking-widest bg-accent/10 px-3 py-1 rounded-md mb-2">
              ASSEMBLY WORKFLOW
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-primary tracking-tight">
              From Engineering Drawing to Tested Site Delivery
            </h2>
          </div>

          <ProcessFlow steps={processSteps} />
        </section>

        {/* Pump Categories Assembled */}
        <section>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-block text-accent font-bold text-xs uppercase tracking-widest bg-accent/10 px-3 py-1 rounded-md mb-2">
              PRODUCT CATEGORIES
            </div>
            <h2 className="text-3xl font-extrabold text-primary tracking-tight mb-3">
              Pump Categories Assembled Locally
            </h2>
            <p className="text-muted-foreground text-sm">
              Standard and customized electromechanical pump configurations built to project specs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pumpCategories.map((cat, idx) => (
              <div
                key={idx}
                className="bg-card border border-border/70 p-7 rounded-2xl shadow-sm hover-lift flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4">
                    <Zap className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-bold text-primary mb-3">{cat.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed mb-4">{cat.desc}</p>
                </div>
                <div className="pt-4 border-t border-border/50 text-[11px] font-semibold text-primary/80">
                  {cat.specs}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Inspection and Quality Checks */}
        <section className="bg-muted/40 p-8 md:p-12 rounded-2xl border border-border/60">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-block text-accent font-bold text-xs uppercase tracking-widest bg-accent/10 px-3 py-1 rounded-md">
                QUALITY ASSURANCE
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-primary tracking-tight">
                Factory Acceptance & Pre-Delivery Inspection
              </h2>
              <p className="text-sm text-foreground/80 leading-relaxed">
                Local assembly at ZAD adheres strictly to international engineering benchmarks.
                Before any pumping unit leaves our facility, our quality control team executes a
                rigorous testing protocol to guarantee flawless site performance.
              </p>

              <ul className="space-y-3">
                {qaChecks.map((check, i) => (
                  <li key={i} className="flex items-start space-x-3 text-xs sm:text-sm text-foreground/90">
                    <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                    <span>{check}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-xl overflow-hidden shadow-lg border border-border/60">
                <img
                  src={commissioningImage}
                  alt="Factory Testing & Inspection"
                  className="w-full h-72 object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="bg-primary text-white p-8 md:p-12 rounded-2xl text-center max-w-4xl mx-auto shadow-xl">
          <h3 className="text-2xl sm:text-3xl font-extrabold mb-3">
            Discuss Your Pump Skid Assembly Requirements
          </h3>
          <p className="text-sm text-white/80 max-w-xl mx-auto mb-8">
            Tell us your flow, head, footprint, and project timeline. Our engineering team can
            provide custom assembly layouts and rapid delivery quotations.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/request-service?service=Local%20Assembly"
              className="btn-hero text-xs py-3.5 px-8 uppercase font-bold tracking-wider inline-flex items-center justify-center space-x-2"
            >
              <span>Request Assembly Quote</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/contact"
              className="btn-hero-outline text-xs py-3.5 px-8 uppercase font-bold tracking-wider"
            >
              <span>Contact Assembly Facility</span>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default LocalAssemblyPage;
