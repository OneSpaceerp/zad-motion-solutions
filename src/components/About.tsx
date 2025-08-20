import { Building2, Users, Calendar, Award } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Building2, value: '170+', label: 'Projects Completed' },
    { icon: Calendar, value: '2020', label: 'Established' },
    { icon: Users, value: '15+', label: 'Expert Team' },
    { icon: Award, value: '100%', label: 'Quality Service' }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              About ZAD
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Established in 2020 as a subsidiary of Kayan for Import, ZAD is your authorized service partner for Wilo pumps in Egypt
            </p>
          </div>

          {/* Main content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="fade-in">
              <h3 className="text-2xl font-bold text-primary mb-6">Our Mission</h3>
              <p className="text-lg text-muted-foreground mb-6">
                ZAD Electro-Mechanical Services was created to satisfy the growing demand for premium quality products with the shortest delivery time, which turned market orientation towards localization.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                We provide comprehensive solutions including commissioning services, 24/7 technical support, localization for centrifugal pumps, and complete spare parts availability.
              </p>
              <div className="bg-accent/10 p-6 rounded-lg border-l-4 border-accent">
                <p className="text-primary font-semibold">
                  "Our dedicated team of pump specialists ensures increased productivity and profitability for our clients through reliable and efficient solutions."
                </p>
              </div>
            </div>

            {/* Organization Highlights */}
            <div className="fade-in">
              <div className="bg-card border border-border/50 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-primary mb-6">Our Structure</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-accent rounded-full"></div>
                    <span className="text-muted-foreground">Managing Director</span>
                  </div>
                  <div className="flex items-center space-x-3 ml-6">
                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    <span className="text-muted-foreground">After Sales Service Manager</span>
                  </div>
                  <div className="flex items-center space-x-3 ml-6">
                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    <span className="text-muted-foreground">Assembly Unit Manager</span>
                  </div>
                  <div className="flex items-center space-x-3 ml-6">
                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    <span className="text-muted-foreground">Quality Control Manager</span>
                  </div>
                  <div className="flex items-center space-x-3 ml-6">
                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    <span className="text-muted-foreground">Financial Controller</span>
                  </div>
                  <div className="text-sm text-muted-foreground mt-4">
                    ...and specialized technical teams
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 fade-in">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 hover-lift">
                  <stat.icon className="h-8 w-8 text-primary" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;