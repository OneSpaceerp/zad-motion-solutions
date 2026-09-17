import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Shield,
  Clock,
  Zap,
  Settings,
  Wrench,
  Gauge,
  ThermometerSun,
  Building2,
  CheckCircle2,
  Layers,
  PhoneCall,
  Activity,
  Award,
  ChevronRight,
  TrendingUp,
  Cpu
} from 'lucide-react';
import SEO from '@/components/layout/SEO';
import CounterMetric from '@/components/common/CounterMetric';
import EgyptMap from '@/components/common/EgyptMap';
import ProcessFlow from '@/components/common/ProcessFlow';
import { servicesData } from '@/data/servicesData';
import { solutionsData } from '@/data/solutionsData';
import { siteSettings } from '@/data/siteSettings';
import heroImage from '@/assets/hero-image.jpg';
import laserImage from '@/assets/laser-alignment.jpg';
import warehouseImage from '@/assets/warehouse.jpg';
import commissioningImage from '@/assets/commissioning.jpg';

const Index = () => {
  const homeServices = servicesData.filter((s) => s.featured).slice(0, 6);

  const assemblySteps = [
    { title: 'Requirement', subtitle: 'Technical sizing & site specs' },
    { title: 'Configuration', subtitle: 'Manifold & skid engineering' },
    { title: 'Assembly', subtitle: 'Factory coupling & wiring' },
    { title: 'Inspection', subtitle: 'Laser alignment & hydrostatic test' },
    { title: 'Delivery', subtitle: 'Prompt on-site handover' }
  ];

  const reliabilitySteps = [
    { title: 'Inspect', subtitle: 'Laser & thermal baseline checks' },
    { title: 'Diagnose', subtitle: 'Root cause fault isolation' },
    { title: 'Restore', subtitle: 'Genuine parts & verified recalibration' }
  ];

  const valueBlocks = [
    {
      title: 'Local Expertise',
      desc: 'Deep knowledge of Egyptian water networks, operating climates, and industrial application standards.',
      icon: Building2
    },
    {
      title: 'Technical Precision',
      desc: 'Certified laser alignment and calibrated thermal diagnostic instruments used on every intervention.',
      icon: Cpu
    },
    {
      title: 'Faster Response',
      desc: 'Reduced logistical delays with centralized parts inventory and active engineering dispatch.',
      icon: Clock
    },
    {
      title: 'Lifecycle Support',
      desc: 'Seamless continuity from initial assembly and commissioning to long-term preventive maintenance.',
      icon: Layers
    },
    {
      title: 'Genuine Parts',
      desc: '100% factory-original replacement components cross-referenced against equipment nameplates.',
      icon: Shield
    },
    {
      title: '24/7 Support',
      desc: 'Round-the-clock emergency technical assistance for mission-critical electromechanical infrastructure.',
      icon: PhoneCall
    }
  ];

  const industries = [
    {
      title: 'Residential Buildings',
      desc: 'Potable water pressure boosting, rooftop transfer, and basement drainage systems.',
      icon: Building2
    },
    {
      title: 'Commercial Facilities',
      desc: 'Reliable water circulation, fire pump support, and booster skids for towers and malls.',
      icon: Layers
    },
    {
      title: 'Industrial Applications',
      desc: 'Heavy-duty process water transfer, cooling loops, and high-pressure washing skids.',
      icon: Settings
    },
    {
      title: 'HVAC & Chilled Water',
      desc: 'Primary and secondary chilled water distribution and cooling tower condenser pumping.',
      icon: ThermometerSun
    },
    {
      title: 'Water Supply & Boosting',
      desc: 'Municipal and compound potable water distribution and pressure stabilization.',
      icon: Gauge
    },
    {
      title: 'Water Management',
      desc: 'Stormwater mitigation, sewage lifting stations, and wastewater collection systems.',
      icon: Zap
    }
  ];

  return (
    <div className="min-h-screen">
      <SEO
        title="ZAD Electromechanical Services | Pump Engineering & Services in Egypt"
        description="ZAD provides specialized pump engineering, local assembly, commissioning, maintenance, diagnostics, repairs, spare parts and technical support in Egypt."
        canonicalUrl="https://zad-eg.net/"
        schema={{
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: siteSettings.companyName,
          legalName: siteSettings.legalEntity,
          url: 'https://zad-eg.net/',
          logo: 'https://zad-eg.net/lovable-uploads/4381fb86-6de7-4929-8bc5-a52f1e9704b8.png',
          contactPoint: {
            '@type': 'ContactPoint',
            telephone: siteSettings.phone,
            contactType: 'technical support',
            areaServed: 'EG',
            availableLanguage: 'English'
          },
          address: {
            '@type': 'PostalAddress',
            streetAddress: siteSettings.headquarters.unit,
            addressLocality: siteSettings.headquarters.city,
            addressCountry: 'EG'
          }
        }}
      />

      {/* 1. HERO SECTION */}
      <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden pt-20 pb-16">
        {/* Background Image with Deep Blue Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="ZAD Industrial Pump Engineering"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-tertiary/90" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-accent/15 via-transparent to-transparent" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4 text-white">
          <div className="max-w-4xl">
            {/* Eyebrow */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-accent text-xs font-bold uppercase tracking-widest mb-6">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span>ZAD ELECTROMECHANICAL SERVICES</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.1] mb-6">
              ENGINEERED FOR PERFORMANCE.{' '}
              <span className="block text-accent">BUILT FOR RELIABILITY.</span>
            </h1>

            {/* Description */}
            <p className="text-lg sm:text-xl text-white/90 font-normal leading-relaxed max-w-3xl mb-10">
              From local pump assembly and commissioning to preventive maintenance, emergency
              repairs and genuine spare-parts support, ZAD provides specialized electromechanical
              services focused on dependable system performance.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-8">
              <Link
                to="/services"
                className="btn-hero text-xs py-4 px-8 uppercase font-bold tracking-wider inline-flex items-center justify-center space-x-2 shadow-lg"
              >
                <span>Explore Our Services</span>
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                to="/request-service"
                className="btn-hero-outline text-xs py-4 px-8 uppercase font-bold tracking-wider inline-flex items-center justify-center space-x-2"
              >
                <span>Request a Service</span>
              </Link>
            </div>

            {/* Secondary Support Action */}
            <div className="flex items-center space-x-4 pt-2 text-xs font-semibold text-white/80">
              <div className="flex items-center space-x-2 text-accent">
                <Clock className="h-4 w-4 text-accent" />
                <span className="tracking-wide uppercase font-bold">24/7 Technical Support</span>
              </div>
              <span>•</span>
              <span className="text-white/70">Subsidiary of Kayan for Import</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. EXPERIENCE METRICS SECTION */}
      <section className="relative z-20 -mt-10 container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <CounterMetric
            endValue={170}
            suffix="+"
            label="Projects Delivered"
            icon={<Building2 className="h-6 w-6" />}
          />
          <CounterMetric
            endValue={2020}
            label="Established"
            icon={<Award className="h-6 w-6" />}
          />
          <CounterMetric
            endValue={24}
            suffix="/7"
            label="Technical Support"
            icon={<Clock className="h-6 w-6" />}
          />
        </div>
      </section>

      {/* 3. ABOUT SECTION */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left image visual */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border/60 group">
                <img
                  src={warehouseImage}
                  alt="ZAD Assembly & Service Facility"
                  className="w-full h-[440px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <div className="text-accent font-bold text-xs uppercase tracking-widest mb-1">
                    Engineering Depth & Local Assembly
                  </div>
                  <div className="text-lg font-bold">
                    6th of October Assembly & Diagnostics Facility
                  </div>
                </div>
              </div>
              {/* Overlapping badge */}
              <div className="hidden sm:block absolute -bottom-6 -right-6 bg-card border-2 border-primary/20 p-5 rounded-xl shadow-xl max-w-xs">
                <div className="text-xs font-bold uppercase tracking-wider text-accent mb-1">
                  170+ Projects Completed
                </div>
                <div className="text-xs text-muted-foreground font-medium">
                  Supporting commercial, residential, and industrial facilities across Egypt.
                </div>
              </div>
            </div>

            {/* Right text content */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-block text-accent font-bold text-xs uppercase tracking-widest bg-accent/10 px-3 py-1 rounded-md border border-accent/20">
                ABOUT ZAD
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-primary tracking-tight leading-tight">
                ENGINEERING EXPERTISE BUILT AROUND YOUR SYSTEM
              </h2>

              <p className="text-base text-foreground/80 leading-relaxed">
                Established in 2020 as a subsidiary of Kayan for Import, ZAD Electromechanical
                Services was created to respond to the growing need for professional pump products
                and technical services with stronger local capabilities and shorter delivery times.
              </p>

              <p className="text-base text-foreground/80 leading-relaxed">
                ZAD combines pump assembly, commissioning, inspection, maintenance, repair and
                technical support to help customers keep their systems operating reliably.
              </p>

              <div className="pt-2">
                <Link
                  to="/about"
                  className="btn-hero text-xs py-3.5 px-7 uppercase font-bold tracking-wider inline-flex items-center space-x-2"
                >
                  <span>Discover ZAD</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SERVICES SECTION */}
      <section className="py-24 bg-muted/40 border-y border-border/60">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block text-accent font-bold text-xs uppercase tracking-widest bg-accent/10 px-3 py-1 rounded-md border border-accent/20 mb-3">
              LIFECYCLE SOLUTIONS
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-primary tracking-tight mb-4">
              COMPLETE PUMP & ELECTROMECHANICAL SERVICES
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto mb-4" />
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
              From installation and commissioning to maintenance and spare-parts support, our services
              are structured around the complete lifecycle of pump systems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {homeServices.map((service) => (
              <div
                key={service.id}
                className="tech-card flex flex-col justify-between p-7 group hover:border-accent"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-accent group-hover:text-primary transition-all duration-300 mb-6">
                    <Settings className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-primary/90">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                    {service.short_description}
                  </p>
                </div>

                <Link
                  to={`/services/${service.slug}`}
                  className="inline-flex items-center space-x-1.5 text-xs font-bold text-primary group-hover:text-accent transition-colors uppercase tracking-wider"
                >
                  <span>Learn More</span>
                  <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/services"
              className="btn-hero-outline text-xs py-3.5 px-8 uppercase font-bold tracking-wider inline-flex items-center space-x-2"
            >
              <span>View All Services</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. LOCAL ASSEMBLY SECTION */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-block text-accent font-bold text-xs uppercase tracking-widest bg-accent/10 px-3 py-1 rounded-md border border-accent/20 mb-3">
              LOCALIZATION
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-primary tracking-tight mb-4">
              LOCAL ASSEMBLY. FASTER DELIVERY. GREATER FLEXIBILITY.
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto mb-4" />
            <p className="text-foreground/80 text-sm sm:text-base leading-relaxed mb-4">
              Local assembly brings pump capability closer to the customer. By assembling and
              configuring pump systems locally, ZAD can support shorter delivery times while
              creating greater flexibility around application requirements.
            </p>
          </div>

          {/* Three key benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
            <div className="bg-card border border-border/70 p-6 rounded-xl text-center hover-lift">
              <div className="w-12 h-12 rounded-full bg-primary/10 text-primary mx-auto flex items-center justify-center mb-4 font-bold text-lg">
                <Clock className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-primary mb-2">Shorter Lead Times</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Eliminates multi-month import delays by fabricating, assembling, and testing pump skids
                locally in Egypt.
              </p>
            </div>

            <div className="bg-card border border-border/70 p-6 rounded-xl text-center hover-lift">
              <div className="w-12 h-12 rounded-full bg-primary/10 text-primary mx-auto flex items-center justify-center mb-4 font-bold text-lg">
                <Layers className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-primary mb-2">Reduced Logistics</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Simplified domestic transport, dedicated staging, and direct site coordination
                without international customs bottlenecks.
              </p>
            </div>

            <div className="bg-card border border-border/70 p-6 rounded-xl text-center hover-lift">
              <div className="w-12 h-12 rounded-full bg-primary/10 text-primary mx-auto flex items-center justify-center mb-4 font-bold text-lg">
                <Zap className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-primary mb-2">Flexible Configuration</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Customized manifold dimensions, baseplate footprints, and VFD control logic tailored
                to specific plant room constraints.
              </p>
            </div>
          </div>

          {/* Process Flow */}
          <div className="bg-muted/40 p-8 rounded-2xl border border-border/60 max-w-5xl mx-auto mb-10">
            <div className="text-center mb-6">
              <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                Assembly Lifecycle Workflow
              </span>
            </div>
            <ProcessFlow steps={assemblySteps} />
          </div>

          <div className="text-center">
            <Link
              to="/local-assembly"
              className="btn-hero text-xs py-3.5 px-8 uppercase font-bold tracking-wider inline-flex items-center space-x-2"
            >
              <span>Explore Local Assembly</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 6. SOLUTIONS SECTION */}
      <section className="py-24 bg-muted/30 border-t border-border/60">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block text-accent font-bold text-xs uppercase tracking-widest bg-accent/10 px-3 py-1 rounded-md border border-accent/20 mb-3">
              SYSTEM SPECIALIZATION
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-primary tracking-tight mb-4">
              PUMP SYSTEMS WE SUPPORT
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto mb-4" />
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
              Targeted engineering and electromechanical support for critical pumping packages across
              diverse mechanical environments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {solutionsData.map((sol) => (
              <div
                key={sol.id}
                className="bg-card border border-border/60 rounded-xl overflow-hidden hover-lift flex flex-col justify-between"
              >
                <div className="p-6">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                    <Gauge className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-bold text-primary mb-2">{sol.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed mb-4">
                    {sol.short_description}
                  </p>
                </div>

                <div className="p-6 pt-0 border-t border-border/40 mt-auto">
                  <Link
                    to={`/solutions/${sol.slug}`}
                    className="text-xs font-bold text-primary hover:text-accent inline-flex items-center space-x-1 pt-3 uppercase tracking-wider"
                  >
                    <span>View Solution</span>
                    <ChevronRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/solutions"
              className="btn-hero-outline text-xs py-3.5 px-8 uppercase font-bold tracking-wider inline-flex items-center space-x-2"
            >
              <span>Explore All Solutions</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 7. WHY ZAD SECTION */}
      <section className="py-24 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block text-accent font-bold text-xs uppercase tracking-widest bg-white/10 px-3 py-1 rounded-md border border-white/20 mb-3">
              VALUE PROPOSITION
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">WHY ZAD</h2>
            <div className="w-20 h-1 bg-accent mx-auto mb-4" />
            <p className="text-white/80 text-sm sm:text-base leading-relaxed">
              Engineering depth, dedicated diagnostic equipment, local manufacturing capabilities,
              and 24/7 technical commitment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {valueBlocks.map((block, idx) => (
              <div
                key={idx}
                className="bg-white/5 backdrop-blur-sm border border-white/15 p-7 rounded-xl hover:bg-white/10 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center text-accent mb-5">
                  <block.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{block.title}</h3>
                <p className="text-xs text-white/80 leading-relaxed">{block.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. TECHNOLOGY SECTION */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-block text-accent font-bold text-xs uppercase tracking-widest bg-accent/10 px-3 py-1 rounded-md border border-accent/20 mb-3">
              PRECISION DIAGNOSTICS
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-primary tracking-tight mb-4">
              PRECISION ENGINEERING POWERED BY ADVANCED TOOLS
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto mb-4" />
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
              Accurate diagnostics help engineers move from assumptions to measurable technical
              information.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
            {/* Laser Alignment */}
            <div className="bg-card border border-border/70 rounded-xl overflow-hidden hover-lift flex flex-col">
              <div className="h-48 overflow-hidden relative">
                <img
                  src={laserImage}
                  alt="Laser Alignment Service"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-primary/20" />
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-primary mb-2">Laser Shaft Alignment</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed mb-4">
                    Utilizing SKF precision digital laser equipment to eliminate shaft misalignment,
                    reduce bearing wear, and eliminate harmful harmonic vibration.
                  </p>
                </div>
                <div className="text-[11px] font-bold text-primary/80 uppercase tracking-wider">
                  SKF Digital Precision
                </div>
              </div>
            </div>

            {/* Infrared Thermometer */}
            <div className="bg-card border border-border/70 rounded-xl overflow-hidden hover-lift flex flex-col">
              <div className="h-48 overflow-hidden relative">
                <img
                  src={commissioningImage}
                  alt="Infrared Thermal Diagnostics"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-primary/20" />
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-primary mb-2">
                    Infrared Temperature Measurement
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed mb-4">
                    Thermal diagnostics identify abnormal friction, electrical overload, and
                    bearing overheating patterns prior to equipment tripping.
                  </p>
                </div>
                <div className="text-[11px] font-bold text-primary/80 uppercase tracking-wider">
                  Non-Invasive Thermal Profiling
                </div>
              </div>
            </div>

            {/* Tachometer */}
            <div className="bg-card border border-border/70 rounded-xl overflow-hidden hover-lift flex flex-col">
              <div className="h-48 overflow-hidden relative">
                <img
                  src={warehouseImage}
                  alt="Digital Tachometer Speed Verification"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-primary/20" />
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-primary mb-2">Digital Tachometer</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed mb-4">
                    Rotational-speed measurement verifies that motor RPM matches exact electrical and
                    hydraulic design specifications.
                  </p>
                </div>
                <div className="text-[11px] font-bold text-primary/80 uppercase tracking-wider">
                  Accurate Speed Verification
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link
              to="/technology"
              className="btn-hero text-xs py-3.5 px-8 uppercase font-bold tracking-wider inline-flex items-center space-x-2"
            >
              <span>Explore Diagnostic Technology</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 9. RELIABILITY SECTION */}
      <section className="py-20 bg-muted/40 border-y border-border/60">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <div className="inline-block text-accent font-bold text-xs uppercase tracking-widest bg-accent/10 px-3 py-1 rounded-md border border-accent/20 mb-3">
              PREVENTIVE METHODOLOGY
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-primary tracking-tight mb-3">
              PROTECT PERFORMANCE BEFORE FAILURE HAPPENS
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto mb-4" />
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
              Pump failure can disrupt operations, increase costs and create unnecessary emergency
              intervention. ZAD approaches maintenance with a focus on inspection, diagnostics,
              preventive action and professional repair.
            </p>
          </div>

          <div className="bg-card p-8 rounded-2xl border border-border/70 shadow-sm mb-6">
            <ProcessFlow steps={reliabilitySteps} />
          </div>
        </div>
      </section>

      {/* 10. PROJECTS ACROSS EGYPT SECTION */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-block text-accent font-bold text-xs uppercase tracking-widest bg-accent/10 px-3 py-1 rounded-md border border-accent/20 mb-3">
              NATIONWIDE TRACK RECORD
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-primary tracking-tight mb-4">
              170+ PROJECTS ACROSS EGYPT
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto mb-4" />
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
              Our growing project portfolio reflects ZAD's involvement in pump systems, localized
              assembly and electromechanical service activities across Egypt.
            </p>
          </div>

          {/* Interactive Egypt Map */}
          <div className="max-w-5xl mx-auto mb-12">
            <EgyptMap />
          </div>

          <div className="text-center">
            <Link
              to="/projects"
              className="btn-hero-outline text-xs py-3.5 px-8 uppercase font-bold tracking-wider inline-flex items-center space-x-2"
            >
              <span>Explore Projects Portfolio</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 11. INDUSTRIES SECTION */}
      <section className="py-24 bg-muted/30 border-t border-border/60">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block text-accent font-bold text-xs uppercase tracking-widest bg-accent/10 px-3 py-1 rounded-md border border-accent/20 mb-3">
              APPLICATION SECTORS
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-primary tracking-tight mb-4">
              SUPPORTING CRITICAL APPLICATIONS
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto mb-4" />
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
              Providing specialized pump engineering and lifecycle maintenance across diverse
              commercial, residential, and industrial facilities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {industries.map((ind, i) => (
              <div
                key={i}
                className="bg-card border border-border/60 p-6 rounded-xl hover-lift group"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:bg-accent group-hover:text-primary transition-colors">
                  <ind.icon className="h-5 w-5" />
                </div>
                <h3 className="text-base font-bold text-primary mb-2">{ind.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{ind.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12. EMERGENCY CTA SECTION */}
      <section className="py-16 bg-gradient-to-r from-primary via-primary/95 to-tertiary text-white border-y border-white/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
            <div>
              <div className="inline-flex items-center space-x-2 text-accent font-bold text-xs uppercase tracking-widest mb-2">
                <Clock className="h-4 w-4" />
                <span>24/7 TECHNICAL INTERVENTION</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-2">
                UNEXPECTED FAILURE CAN'T WAIT.
              </h2>
              <p className="text-white/80 text-sm max-w-xl leading-relaxed">
                When a critical pump system stops, every minute matters. ZAD provides responsive
                technical support for urgent pump and electromechanical service requirements.
              </p>
            </div>

            <div className="flex-shrink-0">
              <Link
                to="/request-service?service=Emergency%20Repair"
                className="btn-hero text-xs py-4 px-8 uppercase font-bold tracking-wider inline-flex items-center space-x-2 shadow-xl"
              >
                <span>Request Emergency Support</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 13. FINAL CTA SECTION */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-black text-primary tracking-tight mb-4">
            NEED HELP WITH YOUR PUMP SYSTEM?
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-6" />
          <p className="text-base text-muted-foreground leading-relaxed mb-8">
            Tell us about your equipment, project or service requirement. Our engineering team is
            ready to support your electromechanical operations.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link
              to="/request-service"
              className="btn-hero w-full sm:w-auto text-xs py-4 px-8 uppercase font-bold tracking-wider inline-flex items-center justify-center space-x-2 shadow"
            >
              <span>Request a Service</span>
              <ArrowRight className="h-4 w-4" />
            </Link>

            <Link
              to="/contact"
              className="btn-hero-outline w-full sm:w-auto text-xs py-4 px-8 uppercase font-bold tracking-wider inline-flex items-center justify-center space-x-2"
            >
              <span>Contact ZAD</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;