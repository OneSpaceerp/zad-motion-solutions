import { Settings, Clock, Zap, Package, Wrench, Shield, ThermometerSun, Gauge } from 'lucide-react';
import commissioningImage from '@/assets/commissioning.jpg';

const Services = () => {
  const mainServices = [
    {
      title: 'Commissioning Service',
      description: 'Professional commissioning for all pumps according to IOM procedures',
      icon: Settings,
      color: 'primary'
    },
    {
      title: '24/7 Technical Support',
      description: 'Round-the-clock technical support with response time under 48 hours',
      icon: Clock,
      color: 'accent'
    },
    {
      title: 'Pump Localization',
      description: 'Complete localization services for centrifugal pumps',
      icon: Zap,
      color: 'secondary'
    },
    {
      title: 'Spare Parts Availability',
      description: 'Comprehensive spare parts warehouse ensuring minimal downtime',
      icon: Package,
      color: 'tertiary'
    }
  ];

  const detailedServices = [
    {
      title: 'Site Commissioning & Start-up',
      description: 'Our facilities and engineering expertise help us provide service according to IOM procedures.',
      image: commissioningImage
    },
    {
      title: 'After Sales Service', 
      description: 'Professional trained team responds to complaints and troubleshoots problems within 48hrs timeframe.',
      features: ['Emergency repairs', 'Installation services', 'Maintenance contracts', 'System inspections']
    },
    {
      title: 'Laser Alignment Service',
      description: 'Precise alignment service using SKF TKSA-51 German-made equipment for optimal performance.',
      features: ['Shaft alignment', 'Reduced machine failure', 'Improved performance', 'Extended equipment life']
    }
  ];

  const tools = [
    { name: 'Infrared Thermometer', description: 'Temperature monitoring during operation', icon: ThermometerSun },
    { name: 'Tachometer', description: 'Speed verification to design specifications', icon: Gauge },
    { name: 'Sewage Tool Box', description: 'Specialized tools for sewage applications', icon: Wrench },
    { name: 'Laser Alignment (SKF)', description: 'German-made precision alignment equipment', icon: Shield }
  ];

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Our Services
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive electro-mechanical services designed to ensure maximum operational safety and efficiency
          </p>
        </div>

        {/* Main Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20 fade-in">
          {mainServices.map((service, index) => (
            <div key={index} className="tech-card group">
              <div className={`w-16 h-16 rounded-full bg-${service.color}/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className={`h-8 w-8 text-${service.color}`} />
              </div>
              <h3 className="text-xl font-bold text-primary mb-4">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Detailed Services */}
        <div className="space-y-16 mb-20">
          {detailedServices.map((service, index) => (
            <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center fade-in ${
              index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
            }`}>
              <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                <h3 className="text-3xl font-bold text-primary mb-6">{service.title}</h3>
                <p className="text-lg text-muted-foreground mb-6">{service.description}</p>
                {service.features && (
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-accent rounded-full"></div>
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                {service.image ? (
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-80 object-cover rounded-xl shadow-lg hover-lift"
                  />
                ) : (
                  <div className="bg-gradient-primary rounded-xl p-8 text-white h-80 flex items-center justify-center">
                    <div className="text-center">
                      <Settings className="h-16 w-16 mx-auto mb-4" />
                      <h4 className="text-2xl font-bold">{service.title}</h4>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Tools Section */}
        <div className="section-accent rounded-2xl p-12 fade-in">
          <h3 className="text-3xl font-bold text-primary text-center mb-12">Our Professional Tools</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {tools.map((tool, index) => (
              <div key={index} className="text-center">
                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 hover-lift shadow-lg">
                  <tool.icon className="h-8 w-8 text-primary" />
                </div>
                <h4 className="text-lg font-semibold text-primary mb-2">{tool.name}</h4>
                <p className="text-sm text-muted-foreground">{tool.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;