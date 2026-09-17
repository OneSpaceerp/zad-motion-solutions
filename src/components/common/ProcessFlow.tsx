import { ArrowRight, CheckCircle2 } from 'lucide-react';

interface Step {
  title: string;
  subtitle?: string;
  description?: string;
}

interface ProcessFlowProps {
  steps: Step[];
  accentColor?: string;
}

export const ProcessFlow = ({ steps }: ProcessFlowProps) => {
  return (
    <div className="w-full py-4">
      {/* Desktop / Tablet horizontal flow */}
      <div className="hidden md:grid grid-cols-3 lg:grid-cols-5 gap-4 relative">
        {steps.map((step, index) => (
          <div key={index} className="relative flex flex-col items-center text-center group">
            {/* Step node */}
            <div className="w-12 h-12 rounded-full bg-card border-2 border-primary/40 group-hover:border-accent flex items-center justify-center text-primary font-black text-sm mb-3 shadow-sm group-hover:scale-110 group-hover:bg-accent group-hover:text-primary transition-all duration-300 z-10">
              0{index + 1}
            </div>

            {/* Connecting line (if not last) */}
            {index < steps.length - 1 && (
              <div className="hidden lg:block absolute top-6 left-1/2 w-full h-0.5 bg-gradient-to-r from-primary/30 to-border -z-0" />
            )}

            <div className="text-sm font-bold text-primary group-hover:text-accent transition-colors tracking-wide uppercase">
              {step.title}
            </div>

            {step.subtitle && (
              <div className="text-xs text-muted-foreground mt-1 font-medium">
                {step.subtitle}
              </div>
            )}

            {step.description && (
              <div className="text-xs text-muted-foreground/80 mt-1 max-w-[180px] leading-snug">
                {step.description}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Mobile vertical flow */}
      <div className="md:hidden space-y-4">
        {steps.map((step, index) => (
          <div key={index} className="flex items-start space-x-3 bg-muted/40 p-3 rounded-lg border border-border/50">
            <div className="w-8 h-8 rounded-full bg-primary text-white font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
              0{index + 1}
            </div>
            <div>
              <div className="text-sm font-bold text-primary">{step.title}</div>
              {step.subtitle && (
                <div className="text-xs font-medium text-muted-foreground">{step.subtitle}</div>
              )}
              {step.description && (
                <div className="text-xs text-muted-foreground/80 mt-1">{step.description}</div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProcessFlow;
