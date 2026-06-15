import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { Link } from "react-router-dom";
import HeroGraphic from "./HeroGraphic";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-32">
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage:
            "radial-gradient(hsl(var(--primary) / 0.06) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="container max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — copy */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-xs font-medium text-accent mb-8 opacity-0 animate-fade-up">
              Trusted by 200+ institutions
            </div>

            <h1
              className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.08] text-balance opacity-0 animate-fade-up"
              style={{ animationDelay: "80ms" }}
            >
              Secure, AI-Powered
              <br />
              <span className="text-gradient-brand">Exam Proctoring</span>
            </h1>

            <p
              className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 text-pretty opacity-0 animate-fade-up"
              style={{ animationDelay: "160ms" }}
            >
              Monitor exams in real time with face detection, tab-switch alerts,
              and audio analysis — so educators can focus on teaching, not
              policing.
            </p>

            <div
              className="mt-10 flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4 opacity-0 animate-fade-up"
              style={{ animationDelay: "240ms" }}
            >
              <Button size="lg" asChild className="group bg-gradient-brand hover:opacity-90 border-0">
                <Link to="/signup">
                  Get Started Free
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="gap-2">
                <Play className="h-4 w-4" />
                Watch Demo
              </Button>
            </div>

            {/* Stats */}
            <div
              className="mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto lg:mx-0 opacity-0 animate-fade-up"
              style={{ animationDelay: "360ms" }}
            >
              {[
                { value: "50k+", label: "Exams Proctored" },
                { value: "99.2%", label: "Detection Rate" },
                { value: "4.8★", label: "Avg. Rating" },
              ].map((s) => (
                <div key={s.label}>
                  <div className="text-2xl font-bold text-gradient-brand">
                    {s.value}
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — animated graphic */}
          <div
            className="hidden lg:block opacity-0 animate-fade-up"
            style={{ animationDelay: "300ms" }}
          >
            <HeroGraphic />
          </div>
        </div>
      </div>
    </section>
  );
}