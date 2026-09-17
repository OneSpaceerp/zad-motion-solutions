import { Link } from 'react-router-dom';
import {
  Zap,
  Gauge,
  ThermometerSun,
  Shield,
  TrendingDown,
  Volume2,
  Cog,
  Clock,
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  Cpu
} from 'lucide-react';
import SEO from '@/components/layout/SEO';
import laserImage from '@/assets/laser-alignment.jpg';
import commissioningImage from '@/assets/commissioning.jpg';

export const TechnologyPage = () => {
  const alignmentIssues = [
    { icon: TrendingDown, text: 'Poor hydraulic performance & flow drops' },
    { icon: Zap, text: 'Elevated motor electrical power consumption' },
    { icon: Volume2, text: 'Harmonic vibration & plant noise transmission' },
    { icon: Cog, text: 'Severe coupling insert and shaft wear' },
    { icon: Clock, text: 'Premature bearing spalling and seal leakage' },
    { icon: AlertTriangle, text: 'High risk of catastrophic unplanned downtime' }
  ];

  return (
    <div className="pt-24 pb-16">
      <SEO
        title="Diagnostic Technology & Precision Tools | ZAD Egypt"
        description="Explore ZAD precision diagnostic equipment: SKF laser shaft alignment, infrared thermal imaging, and digital tachometer verification in Egypt."
        canonicalUrl="https://zad-eg.net/technology"
      />

      {/* Hero */}
      <section className="bg-primary text-white py-16 mb-16 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-block text-accent font-bold text-xs uppercase tracking-widest bg-white/10 px-3 py-1 rounded-md mb-4">
              NON-DESTRUCTIVE DIAGNOSTICS
            </div>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight mb-4">
              TECHNOLOGY THAT HELPS US FIND THE PROBLEM
            </h1>
            <p className="text-lg text-white/85 leading-relaxed">
              Accurate diagnostics move engineering decisions from subjective assumptions to
              measurable, scientific data. ZAD deploys advanced tools to diagnose and protect
              rotating equipment.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 space-y-24">
        {/* Tool 1: Laser Alignment */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center space-x-2 text-accent font-bold text-xs uppercase tracking-widest bg-accent/10 px-3 py-1 rounded-md">
              <Cpu className="h-4 w-4" />
              <span>PRIMARY DIAGNOSTIC TOOL</span>
            </div>
            <h2 className="text-3xl font-extrabold text-primary tracking-tight">
              Laser Shaft Alignment (SKF TKSA Precision Equipment)
            </h2>
            <p className="text-base text-foreground/80 leading-relaxed">
              Shaft misalignment is one of the most significant and preventable contributors to
              premature machine breakdown. When rotating shafts are misaligned, severe cyclic radial
              and axial loads stress bearings, mechanical seals, and couplings on every single
              rotation.
            </p>
            <p className="text-base text-foreground/80 leading-relaxed">
              ZAD deploys SKF TKSA-51 German-engineered laser alignment technology. Providing digital
              measurement down to 0.01 mm, laser alignment delivers live feedback during shimming
              and horizontal adjustment, guaranteeing compliance with tight ISO vibration limits.
            </p>

            {/* Consequences Box */}
            <div className="bg-destructive/10 border border-destructive/20 rounded-xl p-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-destructive mb-3">
                Consequences of Uncorrected Shaft Misalignment:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {alignmentIssues.map((issue, idx) => (
                  <div key={idx} className="flex items-center space-x-2 text-xs text-foreground/90">
                    <issue.icon className="h-4 w-4 text-destructive flex-shrink-0" />
                    <span>{issue.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-2xl overflow-hidden shadow-xl border border-border/70 group">
              <img
                src={laserImage}
                alt="SKF Laser Alignment in Field"
                className="w-full h-[420px] object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>
        </section>

        {/* Tool 2: Infrared Thermometer */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="rounded-2xl overflow-hidden shadow-xl border border-border/70">
              <img
                src={commissioningImage}
                alt="Infrared Thermal Diagnostics"
                className="w-full h-[380px] object-cover"
              />
            </div>
          </div>

          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <div className="inline-flex items-center space-x-2 text-accent font-bold text-xs uppercase tracking-widest bg-accent/10 px-3 py-1 rounded-md">
              <ThermometerSun className="h-4 w-4" />
              <span>THERMAL MONITORING</span>
            </div>
            <h2 className="text-3xl font-extrabold text-primary tracking-tight">
              Infrared Temperature Measurement
            </h2>
            <p className="text-base text-foreground/80 leading-relaxed">
              Excess thermal energy is the direct byproduct of mechanical friction, electrical phase
              imbalance, or hydraulic cavitation. Infrared temperature measurement enables engineers
              to scan operating machinery without contact or operational interruption.
            </p>
            <div className="space-y-3">
              <div className="flex items-start space-x-3 bg-muted/40 p-4 rounded-xl border border-border/50">
                <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                <div className="text-xs">
                  <strong className="block text-primary text-sm mb-0.5">Bearing Health Profiling:</strong>
                  Detects lubrication starvation or early subsurface fatigue before bearing seizure occurs.
                </div>
              </div>
              <div className="flex items-start space-x-3 bg-muted/40 p-4 rounded-xl border border-border/50">
                <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                <div className="text-xs">
                  <strong className="block text-primary text-sm mb-0.5">Motor Winding & Stator Checks:</strong>
                  Identifies thermal hot-spots caused by poor ventilation, phase voltage drop, or overload.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tool 3: Digital Tachometer */}
        <section className="bg-card border border-border/70 rounded-2xl p-8 md:p-12 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center space-x-2 text-accent font-bold text-xs uppercase tracking-widest bg-accent/10 px-3 py-1 rounded-md">
                <Gauge className="h-4 w-4" />
                <span>SPEED & PERFORMANCE VERIFICATION</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-primary tracking-tight">
                Optical Digital Tachometer
              </h2>
              <p className="text-sm text-foreground/80 leading-relaxed">
                A pump's head and flow depend mathematically on its exact rotational speed (RPM).
                Inverters or belt drives operating off-frequency cause significant hydraulic loss.
                Using calibrated digital tachometers, ZAD verifies exact motor speed to ensure
                operating conditions match factory design specifications.
              </p>
            </div>
            <div className="lg:col-span-4 bg-muted/50 p-6 rounded-xl border border-border/50 text-center">
              <div className="text-3xl font-black text-primary mb-1">± 0.05%</div>
              <div className="text-xs uppercase tracking-wider font-bold text-muted-foreground">
                Speed Accuracy Verification
              </div>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="bg-primary text-white p-8 md:p-12 rounded-2xl text-center max-w-4xl mx-auto shadow-xl">
          <h3 className="text-2xl sm:text-3xl font-extrabold mb-3">
            Schedule an On-Site Diagnostic Inspection
          </h3>
          <p className="text-sm text-white/80 max-w-xl mx-auto mb-8">
            Experience the difference of scientific laser alignment and thermal diagnostics. Protect
            your pumping assets before catastrophic breakdowns occur.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/request-service?service=Pump%20Inspection"
              className="btn-hero text-xs py-3.5 px-8 uppercase font-bold tracking-wider inline-flex items-center justify-center space-x-2"
            >
              <span>Book Diagnostic Inspection</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/contact"
              className="btn-hero-outline text-xs py-3.5 px-8 uppercase font-bold tracking-wider"
            >
              <span>Contact Engineering</span>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default TechnologyPage;
