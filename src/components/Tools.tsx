import { Zap, TrendingDown, Volume2, Cog, Clock, AlertTriangle } from 'lucide-react';
import laserImage from '@/assets/laser-alignment.jpg';
import warehouseImage from '@/assets/warehouse.jpg';

const Tools = () => {
  const alignmentIssues = [
    { icon: TrendingDown, text: 'Poor machine performance' },
    { icon: Zap, text: 'Increased power consumption' },
    { icon: Volume2, text: 'Increased noise and vibration' },
    { icon: Cog, text: 'Possible coupling/shaft damages' },
    { icon: Clock, text: 'Premature bearing wear' },
    { icon: AlertTriangle, text: 'Increased unplanned downtime' }
  ];

  return (
    <section id="tools" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Advanced Technology & Tools
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We systematically press ahead with digital transformation to provide precise, reliable service using the latest technology
          </p>
        </div>

        {/* Laser Alignment Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20 fade-in">
          <div>
            <h3 className="text-3xl font-bold text-primary mb-6">Laser Alignment Service</h3>
            <p className="text-lg text-muted-foreground mb-8">
              Using SKF TKSA-51 German-made precision equipment, we provide systematic digital alignment services. 
              Shaft misalignment is one of the most significant and preventable contributors to premature machine failure.
            </p>
            
            <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-6 mb-8">
              <h4 className="text-lg font-semibold text-destructive mb-4">Misalignment Consequences:</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {alignmentIssues.map((issue, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <issue.icon className="h-5 w-5 text-destructive" />
                    <span className="text-muted-foreground text-sm">{issue.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-accent/10 border border-accent/20 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-accent-foreground mb-2">SKF TKSA-51 Features:</h4>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="text-muted-foreground">German precision engineering</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="text-muted-foreground">Digital measurement accuracy</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="text-muted-foreground">Real-time alignment feedback</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="hover-lift">
            <img 
              src={laserImage} 
              alt="Laser Alignment Equipment" 
              className="w-full h-96 object-cover rounded-xl shadow-lg"
            />
          </div>
        </div>

        {/* Commissioning Tools */}
        <div className="section-primary rounded-2xl p-12 mb-20 fade-in">
          <h3 className="text-3xl font-bold text-white text-center mb-12">Commissioning & Start-up Tools</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingDown className="h-8 w-8 text-accent" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Infrared Thermometer</h4>
              <p className="text-white/80 text-sm">Ensuring temperature readings within normal operation range</p>
            </div>
            <div className="text-center">
              <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Cog className="h-8 w-8 text-accent" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Sewage Tool Box</h4>
              <p className="text-white/80 text-sm">Specialized equipment for sewage pump applications</p>
            </div>
            <div className="text-center">
              <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-accent" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Tachometer</h4>
              <p className="text-white/80 text-sm">Verifying equipment speed matches design specifications</p>
            </div>
            <div className="text-center">
              <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-accent" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Avometer</h4>
              <p className="text-white/80 text-sm">Electrical measurement and diagnostic equipment</p>
            </div>
          </div>
        </div>

        {/* Spare Parts Warehouse */}
        <div className="grid lg:grid-cols-2 gap-12 items-center fade-in">
          <div className="hover-lift">
            <img 
              src={warehouseImage} 
              alt="ZAD Spare Parts Warehouse" 
              className="w-full h-96 object-cover rounded-xl shadow-lg"
            />
          </div>

          <div>
            <h3 className="text-3xl font-bold text-primary mb-6">Our Spare Parts Warehouse</h3>
            <p className="text-lg text-muted-foreground mb-8">
              ZAD warehouse provides all kinds of spare parts which serve and meet all customer requirements. 
              We ensure stock availability to minimize downtime and maintain operational efficiency.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-accent rounded-full"></div>
                <span className="text-muted-foreground">Genuine OEM spare parts in proven quality</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-accent rounded-full"></div>
                <span className="text-muted-foreground">Customized spare parts stocks</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-accent rounded-full"></div>
                <span className="text-muted-foreground">Expert spare parts consulting</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-accent rounded-full"></div>
                <span className="text-muted-foreground">Fast delivery to minimize downtime</span>
              </div>
            </div>

            <div className="bg-secondary/10 border border-secondary/20 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-secondary mb-2">Local Assembly Services</h4>
              <p className="text-muted-foreground text-sm mb-3">
                Complete local assembly for centrifugal pump packages including:
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-secondary/20 text-secondary px-3 py-1 rounded-full text-sm">Split Case Pumps</span>
                <span className="bg-secondary/20 text-secondary px-3 py-1 rounded-full text-sm">End Suction Pumps</span>
                <span className="bg-secondary/20 text-secondary px-3 py-1 rounded-full text-sm">Booster Sets</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tools;