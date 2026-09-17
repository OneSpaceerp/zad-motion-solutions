import { ShieldCheck, Layers, FileSearch, ArrowRight, CheckCircle2 } from 'lucide-react';
import SEO from '@/components/layout/SEO';
import SparePartsForm from '@/components/forms/SparePartsForm';
import warehouseImage from '@/assets/warehouse.jpg';

export const SparePartsPage = () => {
  const partsCategories = [
    {
      title: 'Mechanical Seals',
      desc: 'High-durability single, double, and cartridge mechanical seals in Silicon Carbide, Tungsten Carbide, and Carbon face combinations with EPDM/Viton elastomers.'
    },
    {
      title: 'Precision Bearings & Lip Seals',
      desc: 'Premium deep-groove and angular contact ball bearings engineered to withstand heavy radial and thrust loads in industrial centrifugal pumps.'
    },
    {
      title: 'Impellers & Wear Rings',
      desc: 'Factory-cast stainless steel, bronze, and cast iron impellers balanced to ISO 1940 standards with precision-tolerance wear rings.'
    },
    {
      title: 'Couplings & Flexible Inserts',
      desc: 'Elastomeric spider inserts, spacer couplings, and precision-machined shaft sleeves to protect drive shafts from excessive torque.'
    },
    {
      title: 'Gaskets & O-Ring Overhaul Kits',
      desc: 'Complete casing gasket sets, flange seals, and chemical-resistant O-rings matched to pumped fluid temperatures and chemical makeup.'
    },
    {
      title: 'Control & Automation Spares',
      desc: 'Pressure transducers, level float sensors, inverter cooling fans, and contactors to ensure uninterrupted electrical reliability.'
    }
  ];

  return (
    <div className="pt-24 pb-16">
      <SEO
        title="Genuine Pump Spare Parts Egypt | The Right Part. The Right Support | ZAD"
        description="Genuine pump spare parts supply in Egypt: mechanical seals, bearings, impellers, and technical cross-referencing to eliminate downtime."
        canonicalUrl="https://zad-eg.net/spare-parts"
      />

      {/* Hero */}
      <section className="bg-primary text-white py-16 mb-16 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-block text-accent font-bold text-xs uppercase tracking-widest bg-white/10 px-3 py-1 rounded-md mb-4">
              FACTORY-GRADE REPLACEMENTS
            </div>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight mb-4">
              THE RIGHT PART. THE RIGHT SUPPORT.
            </h1>
            <p className="text-lg text-white/85 leading-relaxed">
              ZAD supports customers with genuine spare-parts supply and technical guidance to help
              identify the correct component and reduce equipment downtime.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 space-y-24">
        {/* Value Proposition Grid */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-block text-accent font-bold text-xs uppercase tracking-widest bg-accent/10 px-3 py-1 rounded-md">
              ORIGINAL COMPONENT RELIABILITY
            </div>
            <h2 className="text-3xl font-extrabold text-primary tracking-tight">
              Avoid Premature Breakdown with Genuine Components
            </h2>
            <p className="text-base text-foreground/80 leading-relaxed">
              Using imitation or generic spare parts often leads to repeat equipment failures within
              weeks. Subtle discrepancies in seal face flatness, elastomer heat tolerance, or
              bearing metal alloys compromise hydraulic integrity.
            </p>
            <p className="text-base text-foreground/80 leading-relaxed">
              ZAD maintains an extensive inventory of genuine spare parts in our 6th of October
              warehouse. Our engineering specialists cross-reference your pump nameplate and serial
              number to ensure right-first-time component delivery.
            </p>

            <div className="space-y-2.5 pt-2">
              <div className="flex items-center space-x-2 text-xs font-semibold text-foreground/90">
                <CheckCircle2 className="h-4 w-4 text-accent" />
                <span>100% Genuine, factory-specified replacement parts</span>
              </div>
              <div className="flex items-center space-x-2 text-xs font-semibold text-foreground/90">
                <CheckCircle2 className="h-4 w-4 text-accent" />
                <span>Technical verification by qualified electromechanical engineers</span>
              </div>
              <div className="flex items-center space-x-2 text-xs font-semibold text-foreground/90">
                <CheckCircle2 className="h-4 w-4 text-accent" />
                <span>Short domestic lead times from our central Egyptian warehouse</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="rounded-2xl overflow-hidden shadow-xl border border-border/70">
              <img
                src={warehouseImage}
                alt="ZAD Spare Parts Warehouse"
                className="w-full h-[380px] object-cover"
              />
            </div>
          </div>
        </section>

        {/* Categories Grid */}
        <section>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-block text-accent font-bold text-xs uppercase tracking-widest bg-accent/10 px-3 py-1 rounded-md mb-2">
              STOCKED CATEGORIES
            </div>
            <h2 className="text-3xl font-extrabold text-primary tracking-tight mb-3">
              Genuine Spare Parts Catalog
            </h2>
            <p className="text-muted-foreground text-sm">
              Critical wear components and maintenance kits stocked for fast dispatch.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {partsCategories.map((cat, idx) => (
              <div key={idx} className="bg-card border border-border/70 p-6 rounded-xl shadow-sm">
                <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <h3 className="text-base font-bold text-primary mb-2">{cat.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{cat.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Identification & Inquiry Form Section */}
        <section id="inquiry" className="max-w-4xl mx-auto">
          <SparePartsForm />
        </section>
      </div>
    </div>
  );
};

export default SparePartsPage;
