import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, ArrowRight, ShieldCheck } from 'lucide-react';
import { siteSettings } from '@/data/siteSettings';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const companyLinks = [
    { name: 'About ZAD', href: '/about' },
    { name: 'Local Assembly', href: '/local-assembly' },
    { name: 'Projects Portfolio', href: '/projects' },
    { name: 'Technology & Tools', href: '/technology' },
    { name: 'Knowledge Center', href: '/knowledge' },
    { name: 'Contact Us', href: '/contact' }
  ];

  const serviceLinks = [
    { name: 'Commissioning & Start-Up', href: '/services/commissioning' },
    { name: 'Maintenance & Repair', href: '/services/maintenance-repair' },
    { name: 'Pump Inspection', href: '/services/inspection' },
    { name: '24/7 Emergency Support', href: '/services/emergency-support' },
    { name: 'Genuine Spare Parts', href: '/services/spare-parts' }
  ];

  const solutionLinks = [
    { name: 'Booster Sets', href: '/solutions/booster-sets' },
    { name: 'Chiller Pump Systems', href: '/solutions/chiller-pumps' },
    { name: 'Submersible Pump Systems', href: '/solutions/submersible-pumps' },
    { name: 'Pump Systems & Skids', href: '/solutions/pump-systems' }
  ];

  return (
    <footer className="bg-primary text-white pt-16 pb-8 border-t border-white/10">
      <div className="container mx-auto px-4">
        {/* Top brand banner */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center pb-12 mb-12 border-b border-white/15 gap-6">
          <div>
            <Link to="/" className="inline-block mb-3">
              <img
                src="/lovable-uploads/4381fb86-6de7-4929-8bc5-a52f1e9704b8.png"
                alt="ZAD Electromechanical Services"
                className="h-12 w-auto filter brightness-0 invert"
              />
            </Link>
            <p className="text-accent font-bold tracking-wider text-sm uppercase">
              {siteSettings.headline}
            </p>
            <p className="text-white/70 text-xs mt-1">
              {siteSettings.secondaryBrandLine}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <Link
              to="/request-service"
              className="btn-hero text-xs py-3 px-6 uppercase font-bold tracking-wider inline-flex items-center space-x-2"
            >
              <span>Request a Service</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/contact"
              className="btn-hero-outline text-xs py-3 px-6 uppercase font-bold tracking-wider inline-flex items-center space-x-2"
            >
              <span>Contact Us</span>
            </Link>
          </div>
        </div>

        {/* Multi-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12 text-sm">
          {/* Company Column */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-white font-bold text-base tracking-wide border-l-2 border-accent pl-3">
              About ZAD
            </h4>
            <p className="text-white/80 leading-relaxed text-sm pr-4">
              Established in {siteSettings.establishedYear} as a subsidiary of Kayan for Import, ZAD Electromechanical Services combines local pump assembly, commissioning, condition diagnostics, maintenance, and genuine spare-parts support across Egypt.
            </p>
            <div className="flex items-center space-x-3 text-accent pt-2">
              <ShieldCheck className="h-5 w-5 text-accent flex-shrink-0" />
              <span className="font-semibold text-xs tracking-wide">
                More than {siteSettings.projectsCompleted} Electromechanical Projects Delivered
              </span>
            </div>
          </div>

          {/* Services Column */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-base tracking-wide border-l-2 border-accent pl-3">
              Services
            </h4>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-white/75 hover:text-accent transition-colors duration-200 block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions Column */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-base tracking-wide border-l-2 border-accent pl-3">
              Solutions
            </h4>
            <ul className="space-y-2">
              {solutionLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-white/75 hover:text-accent transition-colors duration-200 block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/local-assembly"
                  className="text-accent font-semibold hover:underline block pt-1"
                >
                  Local Assembly →
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details Column */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-base tracking-wide border-l-2 border-accent pl-3">
              Contact & Facility
            </h4>
            <div className="space-y-2.5 text-xs text-white/80">
              <div className="flex items-start space-x-2.5">
                <MapPin className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                <span>{siteSettings.headquarters.fullAddress}</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <Phone className="h-4 w-4 text-accent flex-shrink-0" />
                <a href={`tel:${siteSettings.phone.replace(/\s+/g, '')}`} className="hover:text-accent">
                  {siteSettings.phone}
                </a>
              </div>
              <div className="flex items-center space-x-2.5">
                <Mail className="h-4 w-4 text-accent flex-shrink-0" />
                <a href={`mailto:${siteSettings.email}`} className="hover:text-accent">
                  {siteSettings.email}
                </a>
              </div>
              <div className="flex items-start space-x-2.5 pt-1">
                <Clock className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                <span>{siteSettings.officeHours}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/15 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-white/70 gap-4">
          <p>
            © {currentYear} {siteSettings.companyName}. All rights reserved.
          </p>
          <div className="flex items-center space-x-4">
            <span className="text-white/80">{siteSettings.legalEntity}</span>
            <span>•</span>
            <Link to="/privacy-policy" className="hover:text-accent transition-colors">
              Privacy Policy
            </Link>
            <span>•</span>
            <Link to="/terms" className="hover:text-accent transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;