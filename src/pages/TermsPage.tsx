import SEO from '@/components/layout/SEO';
import { siteSettings } from '@/data/siteSettings';

export const TermsPage = () => {
  return (
    <div className="pt-24 pb-16">
      <SEO
        title="Terms of Service | ZAD Electromechanical Services"
        description="Terms and conditions governing the use of ZAD Electromechanical Services digital platforms and service quotation requests."
        canonicalUrl="https://zad-eg.net/terms"
      />

      {/* Hero */}
      <section className="bg-primary text-white py-12 mb-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-3xl sm:text-4xl font-bold">Terms of Service</h1>
          <p className="text-white/80 text-sm mt-2">
            Last Updated: 2026 • {siteSettings.companyName}
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 max-w-4xl space-y-8 text-sm text-foreground/80 leading-relaxed">
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-primary">1. Acceptance of Terms</h2>
          <p>
            By accessing or using the website of {siteSettings.companyName} ("ZAD"), you agree to
            be bound by these Terms of Service and all applicable Egyptian laws and regulations.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-primary">2. Service Quotations & Estimates</h2>
          <p>
            Information submitted via our Request Service and Contact forms constitutes an initial
            inquiry. All quotations, delivery schedules, and technical recommendations provided via
            the website are subject to formal site verification, physical equipment inspection, and
            countersigned commercial proposals.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-primary">3. Intellectual Property</h2>
          <p>
            All website design elements, branding, diagrams, photography, and educational
            engineering articles are the intellectual property of ZAD Electromechanical Services or
            used with authorized permission. Reproduction without written consent is prohibited.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-primary">4. Governing Law</h2>
          <p>
            These terms and any commercial interactions originating through this website shall be
            governed by and construed in accordance with the laws of the Arab Republic of Egypt.
          </p>
        </section>
      </div>
    </div>
  );
};

export default TermsPage;
