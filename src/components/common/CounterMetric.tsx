import { useEffect, useRef, useState } from 'react';

interface CounterMetricProps {
  endValue: number;
  suffix?: string;
  prefix?: string;
  label: string;
  duration?: number;
  icon?: React.ReactNode;
}

export const CounterMetric = ({
  endValue,
  suffix = '',
  prefix = '',
  label,
  duration = 1800,
  icon
}: CounterMetricProps) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          let startTime: number | null = null;
          const startValue = 0;

          const step = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            // Ease out cubic
            const easeOutProgress = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(easeOutProgress * (endValue - startValue) + startValue));

            if (progress < 1) {
              window.requestAnimationFrame(step);
            } else {
              setCount(endValue);
            }
          };

          window.requestAnimationFrame(step);
        }
      },
      { threshold: 0.2 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [endValue, duration, hasAnimated]);

  return (
    <div
      ref={elementRef}
      className="flex flex-col items-center text-center p-6 bg-card/90 backdrop-blur-sm border border-border/60 rounded-xl hover-lift shadow-sm group hover:border-accent/50 transition-all duration-300"
    >
      {icon && (
        <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4 text-primary group-hover:scale-110 group-hover:bg-accent/20 transition-all duration-300">
          {icon}
        </div>
      )}
      <div className="text-3xl md:text-5xl font-black text-primary tracking-tight mb-2">
        {prefix}
        {count.toLocaleString()}
        {suffix}
      </div>
      <div className="text-xs md:text-sm font-bold uppercase tracking-widest text-muted-foreground group-hover:text-primary transition-colors">
        {label}
      </div>
    </div>
  );
};

export default CounterMetric;
