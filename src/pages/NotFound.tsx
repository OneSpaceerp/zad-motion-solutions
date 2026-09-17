import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft, Home, HelpCircle } from "lucide-react";
import SEO from "@/components/layout/SEO";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.warn("404: Non-existent route accessed:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-[75vh] flex items-center justify-center py-20 px-4">
      <SEO
        title="Page Not Found | ZAD Electromechanical Services"
        description="The requested page could not be found. Explore ZAD pump engineering services and solutions."
      />
      <div className="text-center max-w-md bg-card border border-border/70 p-8 md:p-12 rounded-2xl shadow-sm">
        <div className="w-16 h-16 bg-accent/20 text-primary rounded-full flex items-center justify-center mx-auto mb-6">
          <HelpCircle className="h-8 w-8 text-accent" />
        </div>
        <div className="text-6xl font-black text-primary mb-2">404</div>
        <h1 className="text-xl font-bold text-foreground mb-3">Page Not Found</h1>
        <p className="text-sm text-muted-foreground mb-8 leading-relaxed">
          The electromechanical service page or document you requested cannot be found or may have moved.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-3">
          <Link
            to="/"
            className="btn-hero text-xs py-3 px-6 uppercase font-bold tracking-wider inline-flex items-center justify-center space-x-2"
          >
            <Home className="h-4 w-4" />
            <span>Return to Home</span>
          </Link>
          <Link
            to="/services"
            className="btn-hero-outline text-xs py-3 px-6 uppercase font-bold tracking-wider inline-flex items-center justify-center space-x-2"
          >
            <span>Explore Services</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
