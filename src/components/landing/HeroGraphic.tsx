import { useEffect, useState } from "react";
import { Eye, Shield, UserCheck, Volume2 } from "lucide-react";

export default function HeroGraphic() {
  const [pulse, setPulse] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => setPulse((p) => !p), 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-lg mx-auto aspect-square select-none">
      {/* Outer ring */}
      <div className="absolute inset-0 rounded-3xl border border-border/60 bg-card/50 backdrop-blur-sm shadow-lg shadow-primary/5" />

      {/* Scan lines animation */}
      <div className="absolute inset-4 rounded-2xl overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to bottom, hsl(270 60% 40% / 0.08), transparent, transparent)",
            animation: "scanline 3s ease-in-out infinite",
          }}
        />
      </div>

      {/* Center webcam mockup */}
      <div className="absolute inset-8 rounded-xl border border-border/40 bg-muted/30 flex items-center justify-center overflow-hidden">
        {/* Face outline */}
        <div className="relative">
          <div
            className="w-24 h-28 md:w-32 md:h-36 rounded-[50%] border-2 border-dashed transition-all duration-700"
            style={{
              borderColor: pulse
                ? "hsl(270 60% 40% / 0.6)"
                : "hsl(270 60% 40% / 0.25)",
            }}
          />
          {/* Face detection box */}
          <div
            className="absolute -inset-3 border-2 border-primary/50 rounded-lg transition-all duration-500"
            style={{
              opacity: pulse ? 1 : 0.4,
              transform: pulse ? "scale(1)" : "scale(0.96)",
            }}
          >
            {/* Corner brackets */}
            <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-primary rounded-tl" />
            <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-primary rounded-tr" />
            <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-primary rounded-bl" />
            <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-primary rounded-br" />
          </div>
          {/* Verified badge */}
          <div
            className="absolute -top-2 -right-4 bg-gradient-brand text-white text-[10px] font-semibold px-2 py-0.5 rounded-full flex items-center gap-1 shadow-sm transition-opacity duration-500"
            style={{ opacity: pulse ? 1 : 0 }}
          >
            <UserCheck className="w-3 h-3" />
            Verified
          </div>
        </div>
      </div>

      {/* Floating indicator cards */}
      <FloatingCard
        icon={<Eye className="w-4 h-4" />}
        label="Face Detected"
        status="Active"
        className="absolute top-6 -left-4 md:top-8 md:-left-6"
        delay={0}
      />
      <FloatingCard
        icon={<Shield className="w-4 h-4" />}
        label="Tab Monitoring"
        status="Secure"
        className="absolute top-6 -right-4 md:top-8 md:-right-6"
        delay={400}
      />
      <FloatingCard
        icon={<Volume2 className="w-4 h-4" />}
        label="Audio Check"
        status="Clear"
        className="absolute bottom-6 left-1/2 -translate-x-1/2"
        delay={800}
      />

      {/* Ambient dots */}
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1.5 h-1.5 rounded-full bg-primary/20"
          style={{
            top: `${20 + Math.sin(i * 1.2) * 30}%`,
            left: `${15 + Math.cos(i * 0.8) * 70}%`,
            animation: `float ${3 + i * 0.4}s ease-in-out infinite alternate`,
            animationDelay: `${i * 0.3}s`,
          }}
        />
      ))}

      <style>{`
        @keyframes scanline {
          0%, 100% { transform: translateY(-100%); }
          50% { transform: translateY(100%); }
        }
        @keyframes float {
          from { transform: translateY(0px); opacity: 0.3; }
          to { transform: translateY(-8px); opacity: 0.7; }
        }
      `}</style>
    </div>
  );
}

function FloatingCard({
  icon,
  label,
  status,
  className,
  delay,
}: {
  icon: React.ReactNode;
  label: string;
  status: string;
  className: string;
  delay: number;
}) {
  return (
    <div
      className={`${className} bg-card border border-border/60 rounded-lg px-3 py-2 shadow-md flex items-center gap-2 opacity-0 animate-fade-up`}
      style={{ animationDelay: `${600 + delay}ms` }}
    >
      <div className="text-primary">{icon}</div>
      <div>
        <div className="text-xs font-medium text-foreground leading-tight">
          {label}
        </div>
        <div className="text-[10px] text-accent font-medium">{status}</div>
      </div>
    </div>
  );
}