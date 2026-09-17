import { useState } from 'react';
import { confirmedLocations } from '@/data/locationsData';
import { MapPin, CheckCircle2, Navigation } from 'lucide-react';
import { LocationPoint } from '@/data/types';

export const EgyptMap = () => {
  const [selectedLocation, setSelectedLocation] = useState<LocationPoint>(confirmedLocations[2]); // Default to Cairo

  return (
    <div className="bg-card border border-border/70 rounded-2xl p-6 md:p-8 shadow-sm">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Stylized SVG Map of Egypt */}
        <div className="lg:col-span-7 relative bg-gradient-to-br from-primary/5 via-muted/30 to-accent/5 p-6 rounded-xl border border-border/40 min-h-[380px] flex items-center justify-center overflow-hidden">
          {/* Subtle grid background */}
          <div
            className="absolute inset-0 opacity-15"
            style={{
              backgroundImage:
                'radial-gradient(circle at 1px 1px, hsl(var(--primary)) 1px, transparent 0)',
              backgroundSize: '24px 24px'
            }}
          />

          {/* SVG Map Container */}
          <div className="relative w-full max-w-[420px] aspect-[4/4.5] py-4">
            {/* Outline map of Egypt (Simplified vector) */}
            <svg
              viewBox="0 0 100 110"
              className="w-full h-full drop-shadow-md"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Egypt geographic boundary path */}
              <path
                d="M 22,12 L 38,12 L 44,14 L 60,14 L 68,18 L 78,20 L 74,32 L 68,40 L 76,52 L 80,68 L 84,88 L 88,102 L 28,102 L 24,102 L 22,80 L 22,40 Z"
                fill="hsl(var(--primary) / 0.08)"
                stroke="hsl(var(--primary) / 0.3)"
                strokeWidth="1"
                strokeDasharray="2 2"
              />

              {/* Nile river line */}
              <path
                d="M 52,24 Q 53,40 50,55 Q 46,70 65,82 L 68,100"
                stroke="hsl(var(--primary) / 0.4)"
                strokeWidth="1.5"
                strokeLinecap="round"
                fill="none"
              />

              {/* Nile Delta fan */}
              <path
                d="M 44,14 L 52,24 L 62,16"
                stroke="hsl(var(--primary) / 0.4)"
                strokeWidth="1.2"
                fill="none"
              />
            </svg>

            {/* Location pins */}
            {confirmedLocations.map((loc) => {
              const isSelected = selectedLocation.city === loc.city;
              return (
                <button
                  key={loc.city}
                  onClick={() => setSelectedLocation(loc)}
                  style={{
                    left: `${loc.coordinates.x}%`,
                    top: `${loc.coordinates.y}%`
                  }}
                  className="absolute -translate-x-1/2 -translate-y-1/2 group focus:outline-none transition-transform hover:scale-125 z-10"
                  aria-label={`Select location ${loc.city}`}
                >
                  <div className="relative flex items-center justify-center">
                    {/* Pulsing ring on selected */}
                    {isSelected && (
                      <span className="absolute w-8 h-8 rounded-full bg-accent/40 animate-ping" />
                    )}

                    <div
                      className={`w-5 h-5 rounded-full flex items-center justify-center shadow-md transition-all duration-300 ${
                        isSelected
                          ? 'bg-accent text-primary border-2 border-primary scale-125'
                          : 'bg-primary text-white hover:bg-accent hover:text-primary'
                      }`}
                    >
                      <MapPin className="w-3 h-3" />
                    </div>

                    {/* Tooltip Label */}
                    <span
                      className={`absolute top-6 whitespace-nowrap text-[11px] font-bold px-2 py-0.5 rounded shadow-sm transition-all duration-200 pointer-events-none ${
                        isSelected
                          ? 'bg-primary text-white ring-1 ring-accent'
                          : 'bg-background/90 text-foreground border border-border/70 opacity-80 group-hover:opacity-100'
                      }`}
                    >
                      {loc.city}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          <div className="absolute bottom-3 left-4 text-[10px] text-muted-foreground flex items-center space-x-1 font-mono">
            <Navigation className="h-3 w-3 text-accent" />
            <span>Click location pin to view capability</span>
          </div>
        </div>

        {/* Selected City Details Panel */}
        <div className="lg:col-span-5 space-y-6">
          <div className="border-b border-border/60 pb-4">
            <div className="flex items-center space-x-2 text-accent font-bold text-xs uppercase tracking-wider mb-1">
              <MapPin className="h-4 w-4" />
              <span>Confirmed Regional Service Area</span>
            </div>
            <h3 className="text-2xl font-bold text-primary">
              {selectedLocation.city}
            </h3>
            <p className="text-xs font-semibold text-muted-foreground mt-0.5">
              Governorate of {selectedLocation.governorate}, Egypt
            </p>
          </div>

          <p className="text-sm text-foreground/80 leading-relaxed">
            {selectedLocation.description}
          </p>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-primary mb-3">
              Regional Engineering & Service Capabilities:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {selectedLocation.capabilities.map((cap, idx) => (
                <div
                  key={idx}
                  className="flex items-center space-x-2 text-xs text-foreground/90 bg-muted/60 p-2.5 rounded-lg border border-border/40"
                >
                  <CheckCircle2 className="h-3.5 w-3.5 text-accent flex-shrink-0" />
                  <span className="font-medium">{cap}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick city selector buttons */}
          <div className="pt-2">
            <div className="text-[11px] font-bold text-muted-foreground mb-2 uppercase tracking-wider">
              Select City:
            </div>
            <div className="flex flex-wrap gap-1.5">
              {confirmedLocations.map((loc) => (
                <button
                  key={loc.city}
                  onClick={() => setSelectedLocation(loc)}
                  className={`text-xs px-3 py-1 rounded-full font-semibold transition-colors ${
                    selectedLocation.city === loc.city
                      ? 'bg-primary text-white'
                      : 'bg-muted text-muted-foreground hover:bg-accent/20 hover:text-primary'
                  }`}
                >
                  {loc.city}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EgyptMap;
