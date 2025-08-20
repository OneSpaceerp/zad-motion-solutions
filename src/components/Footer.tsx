import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Tools & Technology', href: '#tools' },
    { name: 'Contact', href: '#contact' }
  ];

  const services = [
    'Commissioning & Start-up',
    'After Sales Service',
    'Laser Alignment',
    'Spare Parts Supply',
    'Preventive Maintenance',
    'Local Assembly'
  ];

  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src="/lovable-uploads/4381fb86-6de7-4929-8bc5-a52f1e9704b8.png" 
                alt="ZAD Electro-Mechanical Services" 
                className="h-12 w-auto filter brightness-0 invert"
              />
            </div>
            <p className="text-white/80 mb-6">
              Your trusted partner for Wilo pump services in Egypt. Established in 2020, providing premium quality solutions with shortest delivery time.
            </p>
            <div className="flex items-center space-x-2 text-accent">
              <div className="w-2 h-2 bg-accent rounded-full"></div>
              <span className="text-sm font-medium">170+ Projects Completed</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-white/80 hover:text-accent transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-6">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index} className="text-white/80 text-sm">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white/80 text-sm">Phone Number</p>
                  <p className="text-accent font-medium">(+20) 02 3865 4079</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white/80 text-sm">Email Support</p>
                  <p className="text-accent font-medium">support@zad-eg.net</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white/80 text-sm">Office Location</p>
                  <p className="text-accent font-medium">Unit A14 Compass Project, Polaris Al-Zamil Industrial, 6 October</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white/80 text-sm">Office Hours</p>
                  <p className="text-accent font-medium">Sunday – Thursday: 9:00 a.m. – 5:00 p.m.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/80 text-sm mb-4 md:mb-0">
              © {currentYear} ZAD Electro-Mechanical Services. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 text-sm text-white/80">
              <span>Subsidiary of Kayan for Import</span>
              <span>•</span>
              <span>Authorized Wilo Service Partner</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;