import SEO from '@/components/layout/SEO';
import { siteSettings } from '@/data/siteSettings';

export const PrivacyPolicyPage = () => {
  return (
    <div className="pt-24 pb-16">
      <SEO
        title="Privacy Policy | ZAD Electromechanical Services"
        description="Privacy policy and data protection terms for ZAD Electromechanical Services website and inquiry systems."
        canonicalUrl="https://zad-eg.net/privacy-policy"
      />

      {/* Hero */}
      <section className="bg-primary text-white py-12 mb-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-3xl sm:text-4xl font-bold">Privacy Policy</h1>
          <p className="text-white/80 text-sm mt-2">
            Last Updated: 2026 • {siteSettings.companyName}
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 max-w-4xl space-y-8 text-sm text-foreground/80 leading-relaxed">
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-primary">1. Overview</h2>
          <p>
            {siteSettings.companyName} ("ZAD", "we", "our") is committed to protecting the privacy
            of facility managers, mechanical contractors, and corporate clients who interact with our
            website, request service quotations, or submit technical diagnostic inquiries.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-primary">2. Information We Collect</h2>
          <p>We collect technical and contact information provided voluntarily through our online forms:</p>
          <ul className="list-disc pl-6 space-y-1 text-xs">
            <li>Contact details: Name, company name, corporate email address, and telephone number.</li>
            <li>Project context: Equipment location, pump manufacturer, model numbers, and technical descriptions.</li>
            <li>Technical attachments: Equipment nameplate photographs, pump photos, and engineering PDFs.</li>
            <li>Marketing attribution: UTM source, medium, campaign parameters, and referring URL.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-primary">3. How We Use Collected Data</h2>
          <p>Collected information is used strictly for legitimate engineering operations:</p>
          <ul className="list-disc pl-6 space-y-1 text-xs">
            <li>Evaluating equipment technical specifications and preparing quotations.</li>
            <li>Coordinating field diagnostic visits and emergency service dispatches.</li>
            <li>Cross-referencing spare parts availability against manufacturer parts lists.</li>
            <li>Internal customer relationship management and service history tracking.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-primary">4. Data Security & Retention</h2>
          <p>
            Technical documents and contact information are stored securely with restricted access
            granted only to qualified ZAD electromechanical personnel. We do not sell, rent, or lease
            client data to third-party marketing companies.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-primary">5. Contact Information</h2>
          <p>
            For inquiries regarding our privacy practices, contact our administrative team at:
            <br />
            <strong>Email:</strong> {siteSettings.email}
            <br />
            <strong>Address:</strong> {siteSettings.headquarters.fullAddress}
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
