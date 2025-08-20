import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone Number',
      details: '(+20) 02 3865 4079',
      subtitle: 'Available round the clock'
    },
    {
      icon: Mail,
      title: 'Email Support',
      details: 'support@zad-eg.net',
      subtitle: 'Response within 2 hours'
    },
    {
      icon: MapPin,
      title: 'Office Location',
      details: 'Unit A14 Compass Project, Polaris Al-Zamil Industrial, 6 October',
      subtitle: '170+ projects completed'
    },
    {
      icon: Clock,
      title: 'Office Hours',
      details: 'Sunday – Thursday: 9:00 a.m. – 5:00 p.m.',
      subtitle: 'Guaranteed service level'
    }
  ];

  const services = [
    'Commissioning & Start-up',
    'After Sales Service',
    'Laser Alignment',
    'Spare Parts Supply',
    'Preventive Maintenance',
    'Emergency Repair'
  ];

  return (
    <section id="contact" className="py-20 section-primary">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Contact Us
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Get in touch with our expert team for all your Wilo pump service needs
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="fade-in">
            <h3 className="text-2xl font-bold text-white mb-8">Get In Touch</h3>
            
            <div className="space-y-6 mb-12">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start space-x-4 p-6 bg-white/10 backdrop-blur-sm rounded-lg hover-lift">
                  <div className="bg-accent w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <info.icon className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">{info.title}</h4>
                    <p className="text-accent text-lg font-medium mb-1">{info.details}</p>
                    <p className="text-white/70 text-sm">{info.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Egypt Coverage */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
              <h4 className="text-xl font-bold text-white mb-4">Nationwide Coverage</h4>
              <p className="text-white/90 mb-4">
                Serving all Egypt governorates with our expert technical team and mobile service units.
              </p>
              <div className="text-accent font-semibold text-lg">170+ Projects Completed</div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="fade-in">
            <div className="bg-white rounded-2xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-primary mb-8">Request Service Quote</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-muted-foreground mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-muted-foreground mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-colors"
                      placeholder="+20 xxx xxxx xxx"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-2">
                    Service Required
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-colors"
                  >
                    <option value="">Select a service</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>{service}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-colors resize-none"
                    placeholder="Describe your requirements..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-accent text-accent-foreground font-semibold py-4 px-8 rounded-lg hover:shadow-lg hover:scale-[1.02] transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <Send className="h-5 w-5" />
                  <span>Send Request</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;