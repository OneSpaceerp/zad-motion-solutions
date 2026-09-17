import { Link } from 'react-router-dom';
import {
  Building2,
  Calendar,
  Clock,
  Award,
  Shield,
  Zap,
  CheckCircle2,
  ArrowRight,
  Layers,
  Wrench,
  Users
} from 'lucide-react';
import SEO from '@/components/layout/SEO';
import CounterMetric from '@/components/common/CounterMetric';
import { siteSettings } from '@/data/siteSettings';
import warehouseImage from '@/assets/warehouse.jpg';
import commissioningImage from '@/assets/commissioning.jpg';

export const AboutPage = () => {
  const capabilities = [
    {
      title: 'Local Pump Assembly',
      desc: 'Skid fabrication, motor coupling, and custom baseplate assembly executed in our 6th of October industrial facilities.',
      icon: Zap
    },
    {
      title: 'Commissioning & Start-Up',
      desc: 'Structured pre-start checks, rotational verification, hydraulic testing, and baseline logging according to IOM standards.',
      icon: CheckCircle2
    },
    {
      title: 'Maintenance & Overhauls',
      desc: 'Scheduled preventive agreements, mechanical seal overhauls, bearing replacements, and workshop repairs.',
      icon: Wrench
    },
    {
      title: 'Advanced Technical Diagnostics',
      desc: 'Non-destructive testing using SKF laser alignment, infrared thermal imagers, and digital tachometers.',
      icon: Shield
    },
    {
      title: 'Genuine Spare Parts',
      desc: 'Stocked warehouse of factory-original replacement parts cross-referenced against equipment nameplates.',
      icon: Layers
    },
    {
      title: '24/7 Emergency Support',
      desc: 'Round-the-clock technical assistance and expedited field dispatch for mission-critical failures across Egypt.',
      icon: Clock
    }
  ];

  const orgStructure = [
    { title: 'Managing Director', level: 'Executive Leadership' },
    { title: 'After Sales Service Manager', level: 'Technical Operations' },
    { title: 'Assembly Unit Manager', level: 'Manufacturing & Skids' },
    { title: 'Quality Control Manager', level: 'Testing & Standards' },
    { title: 'Financial Controller', level: 'Operations & Commercial' }
  ];

  return (
    <div className="pt-24 pb-16">
      <SEO
        title="About ZAD | Engineering Built Around Reliability"
        description="Established in 2020 as a subsidiary of Kayan for Import, ZAD provides specialized pump engineering, local assembly, commissioning, and maintenance in Egypt."
        canonicalUrl="https://zad-eg.net/about"
      />

      {/* Page Hero */}
      <section className="bg-primary text-white py-16 mb-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-block text-accent font-bold text-xs uppercase tracking-widest bg-white/10 px-3 py-1 rounded-md mb-4">
              ABOUT ZAD ELECTROMECHANICAL SERVICES
            </div>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight mb-4">
              ENGINEERING BUILT AROUND RELIABILITY
            </h1>
            <p className="text-lg text-white/85 leading-relaxed">
              ZAD combines local capabilities, technical expertise and responsive service to support
              pump systems throughout their operating lifecycle.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 space-y-24">
        {/* Story Section */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-block text-accent font-bold text-xs uppercase tracking-widest bg-accent/10 px-3 py-1 rounded-md">
              OUR STORY
            </div>
            <h2 className="text-3xl font-extrabold text-primary tracking-tight">
              Responding to the Demand for Stronger Local Capabilities
            </h2>
            <p className="text-base text-foreground/80 leading-relaxed">
              Established in 2020 as a subsidiary of Kayan for Import, ZAD Electromechanical
              Services was created to respond to the growing need for professional pump products
              and technical services with stronger local capabilities and shorter delivery times.
            </p>
            <p className="text-base text-foreground/80 leading-relaxed">
              In a dynamic infrastructure landscape, relying exclusively on overseas assembly often
              results in prolonged lead times and logistical vulnerabilities. By building a robust
              local engineering facility in the Polaris Al-Zamil Industrial Zone in 6th of October City,
              ZAD bridges this gap—assembling, inspecting, and servicing pump systems right here in Egypt.
            </p>
            <div className="bg-muted/60 border-l-4 border-accent p-4 rounded-r-lg">
              <p className="text-xs font-semibold text-primary/90 italic">
                "Our challenge is your satisfaction: keeping your electromechanical systems operating
                reliably and efficiently."
              </p>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="rounded-2xl overflow-hidden shadow-xl border border-border/60">
              <img
                src={warehouseImage}
                alt="ZAD Warehouse and Assembly Infrastructure"
                className="w-full h-[380px] object-cover"
              />
            </div>
          </div>
        </section>

        {/* Mission & Vision Cards */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-card border border-border/70 p-8 rounded-2xl shadow-sm hover-lift">
            <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6">
              <Award className="h-6 w-6" />
            </div>
            <h3 className="text-2xl font-bold text-primary mb-3">Our Mission</h3>
            <p className="text-sm text-foreground/80 leading-relaxed">
              To provide reliable and professionally delivered pump and electromechanical services
              that help customers maintain system performance and operational continuity.
            </p>
          </div>

          <div className="bg-card border border-border/70 p-8 rounded-2xl shadow-sm hover-lift">
            <div className="w-12 h-12 rounded-xl bg-accent/20 text-accent flex items-center justify-center mb-6">
              <Zap className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-primary mb-3">Our Vision</h3>
            <p className="text-sm text-foreground/80 leading-relaxed">
              To build a stronger local engineering and service capability for pump systems in Egypt,
              becoming the most dependable electromechanical lifecycle partner.
            </p>
          </div>
        </section>

        {/* Metrics Banner */}
        <section className="bg-muted/40 p-8 rounded-2xl border border-border/60">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <CounterMetric
              endValue={170}
              suffix="+"
              label="Projects Completed Nationwide"
              icon={<Building2 className="h-6 w-6" />}
            />
            <CounterMetric
              endValue={2020}
              label="Established Year"
              icon={<Calendar className="h-6 w-6" />}
            />
            <CounterMetric
              endValue={24}
              suffix="/7"
              label="Technical Support Concept"
              icon={<Clock className="h-6 w-6" />}
            />
          </div>
        </section>

        {/* Core Capabilities */}
        <section>
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-block text-accent font-bold text-xs uppercase tracking-widest bg-accent/10 px-3 py-1 rounded-md mb-2">
              TECHNICAL SCOPE
            </div>
            <h2 className="text-3xl font-extrabold text-primary tracking-tight mb-3">
              CORE ENGINEERING CAPABILITIES
            </h2>
            <p className="text-muted-foreground text-sm">
              Covering the entire operating cycle of electromechanical fluid handling systems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((cap, i) => (
              <div key={i} className="tech-card p-6">
                <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4">
                  <cap.icon className="h-5 w-5" />
                </div>
                <h4 className="text-base font-bold text-primary mb-2">{cap.title}</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">{cap.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Organizational Structure */}
        <section className="bg-card border border-border/70 rounded-2xl p-8 md:p-12 shadow-sm">
          <div className="max-w-3xl mb-8">
            <div className="inline-block text-accent font-bold text-xs uppercase tracking-widest bg-accent/10 px-3 py-1 rounded-md mb-2">
              GOVERNANCE & LEADERSHIP
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-2">
              Organizational Structure
            </h2>
            <p className="text-sm text-muted-foreground">
              Structured operational departments ensuring accountability across every client project.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {orgStructure.map((dept, idx) => (
              <div
                key={idx}
                className="bg-muted/50 p-4 rounded-xl border border-border/50 flex items-center space-x-3"
              >
                <div className="w-3 h-3 rounded-full bg-accent flex-shrink-0" />
                <div>
                  <div className="text-sm font-bold text-primary">{dept.title}</div>
                  <div className="text-xs text-muted-foreground">{dept.level}</div>
                </div>
              </div>
            ))}
            <div className="bg-primary/5 p-4 rounded-xl border border-primary/20 flex items-center space-x-3">
              <Users className="h-5 w-5 text-primary flex-shrink-0" />
              <div className="text-xs font-semibold text-primary">
                Supported by Specialized Engineering & Field Service Teams
              </div>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="text-center py-8">
          <div className="max-w-2xl mx-auto space-y-4">
            <h3 className="text-2xl font-bold text-primary">Work With ZAD Engineers</h3>
            <p className="text-sm text-muted-foreground">
              Discover how our local assembly and precision diagnostics can support your facility.
            </p>
            <div className="pt-2 flex justify-center gap-4">
              <Link
                to="/request-service"
                className="btn-hero text-xs py-3.5 px-6 uppercase font-bold tracking-wider inline-flex items-center space-x-2"
              >
                <span>Request a Service</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/contact"
                className="btn-hero-outline text-xs py-3.5 px-6 uppercase font-bold tracking-wider"
              >
                <span>Contact ZAD</span>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
