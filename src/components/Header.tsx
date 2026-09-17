import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, ArrowRight } from 'lucide-react';
import { siteSettings } from '@/data/siteSettings';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Solutions', href: '/solutions' },
    { name: 'Local Assembly', href: '/local-assembly' },
    { name: 'Projects', href: '/projects' },
    { name: 'Technology', href: '/technology' },
    { name: 'Support', href: '/support' },
    { name: 'Contact', href: '/contact' }
  ];

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/95 backdrop-blur-md shadow-md border-b border-border/60 py-2.5'
          : 'bg-background/90 backdrop-blur-sm py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <img
              src="/lovable-uploads/4381fb86-6de7-4929-8bc5-a52f1e9704b8.png"
              alt="ZAD Electromechanical Services"
              className="h-10 md:h-12 w-auto drop-shadow-sm transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center space-x-6 text-sm font-medium">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`transition-colors duration-200 py-1 relative ${
                  isActive(item.href)
                    ? 'text-primary font-bold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-accent'
                    : 'text-foreground/80 hover:text-primary font-semibold'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href={`tel:${siteSettings.phone.replace(/\s+/g, '')}`}
              className="hidden 2xl:flex items-center space-x-2 text-xs font-semibold text-muted-foreground hover:text-primary transition-colors"
            >
              <Phone className="h-3.5 w-3.5 text-accent" />
              <span>{siteSettings.phone}</span>
            </a>

            <Link
              to="/request-service"
              className="btn-hero text-xs tracking-wider uppercase flex items-center space-x-2 shadow-sm hover:shadow"
            >
              <span>Request a Service</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          {/* Mobile Actions and Hamburger */}
          <div className="flex items-center space-x-3 xl:hidden">
            <Link
              to="/request-service"
              className="btn-hero text-xs py-2 px-3 sm:px-4 font-bold uppercase tracking-wider"
            >
              Request Service
            </Link>

            <button
              className="p-2 text-primary hover:text-accent rounded-md transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="xl:hidden mt-3 pt-3 pb-5 border-t border-border/60 bg-background/95 backdrop-blur-md rounded-b-xl shadow-xl animate-in slide-in-from-top duration-300">
            <div className="flex flex-col space-y-1 px-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`px-4 py-2.5 rounded-md text-sm font-semibold transition-colors ${
                    isActive(item.href)
                      ? 'bg-primary/10 text-primary font-bold'
                      : 'text-foreground/80 hover:bg-muted hover:text-primary'
                  }`}
                >
                  {item.name}
                </Link>
              ))}

              <div className="pt-3 border-t border-border/60 px-2 space-y-2">
                <a
                  href={`tel:${siteSettings.phone.replace(/\s+/g, '')}`}
                  className="flex items-center space-x-2 px-4 py-2.5 text-sm text-primary font-medium bg-muted/60 rounded-md"
                >
                  <Phone className="h-4 w-4 text-accent" />
                  <span>Call {siteSettings.phone}</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;