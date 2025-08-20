import { ArrowDown, Zap, Settings, Shield, Clock } from 'lucide-react';
import heroImage from '@/assets/hero-image.jpg';

const Hero = () => {
  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="ZAD Industrial Equipment" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-tertiary/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 fade-in">
            ZAD
            <span className="block text-accent">Electro-Mechanical</span>
            <span className="block text-3xl md:text-4xl font-medium mt-2">Services</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-white/90 fade-in">
            Premium quality Wilo pump services with shortest delivery time through localization
          </p>

          {/* Service highlights */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 fade-in">
            <div className="flex flex-col items-center p-4 bg-white/10 backdrop-blur-sm rounded-lg hover-lift">
              <Settings className="h-8 w-8 text-accent mb-2" />
              <span className="text-sm font-medium">Commissioning</span>
            </div>
            <div className="flex flex-col items-center p-4 bg-white/10 backdrop-blur-sm rounded-lg hover-lift">
              <Clock className="h-8 w-8 text-accent mb-2" />
              <span className="text-sm font-medium">24/7 Support</span>
            </div>
            <div className="flex flex-col items-center p-4 bg-white/10 backdrop-blur-sm rounded-lg hover-lift">
              <Zap className="h-8 w-8 text-accent mb-2" />
              <span className="text-sm font-medium">Localization</span>
            </div>
            <div className="flex flex-col items-center p-4 bg-white/10 backdrop-blur-sm rounded-lg hover-lift">
              <Shield className="h-8 w-8 text-accent mb-2" />
              <span className="text-sm font-medium">Spare Parts</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center fade-in">
            <button className="btn-hero text-lg px-10 py-5">
              Get Started
            </button>
            <button 
              className="btn-hero-outline text-lg px-10 py-5"
              onClick={scrollToServices}
            >
              Our Services
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70 animate-bounce">
        <ArrowDown size={24} />
      </div>
    </section>
  );
};

export default Hero;