import { FilePlus2, UserCheck, ShieldCheck } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const steps = [
  {
    icon: FilePlus2,
    step: "01",
    title: "Create Your Exam",
    desc: "Set up questions, duration, and proctoring rules in minutes.",
  },
  {
    icon: UserCheck,
    step: "02",
    title: "Students Join Securely",
    desc: "Students verify their identity and grant camera & mic access.",
  },
  {
    icon: ShieldCheck,
    step: "03",
    title: "AI Monitors in Real Time",
    desc: "Our AI watches for violations and flags them instantly for review.",
  },
];

export default function HowItWorks() {
  const ref = useScrollReveal();

  return (
    <section id="how-it-works" className="py-24 md:py-32 bg-secondary/40">
      <div ref={ref} className="container opacity-0">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-medium text-gradient-brand mb-3">How It Works</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-balance">
            Three steps to exam integrity
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {steps.map((s, i) => (
            <div key={s.step} className="text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-brand text-white text-xl font-bold mb-6">
                {s.step}
              </div>
              <h3 className="font-semibold text-lg mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {s.desc}
              </p>
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-7 right-0 w-8 border-t-2 border-dashed border-border" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}