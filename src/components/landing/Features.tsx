import {
  Eye,
  MonitorOff,
  Users,
  Mic,
  BarChart3,
  Fingerprint,
} from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const features = [
  {
    icon: Eye,
    title: "Face Detection",
    desc: "Continuously verifies the test-taker is present and attentive using real-time webcam analysis.",
  },
  {
    icon: MonitorOff,
    title: "Tab Switch Detection",
    desc: "Instantly flags when a student navigates away from the exam window.",
  },
  {
    icon: Users,
    title: "Multiple Face Alerts",
    desc: "Detects additional people in the frame and alerts invigilators immediately.",
  },
  {
    icon: Mic,
    title: "Audio Monitoring",
    desc: "Identifies suspicious audio activity like background conversations or dictation.",
  },
  {
    icon: BarChart3,
    title: "Real-time Reporting",
    desc: "Live dashboard with timestamped violation logs, screenshots, and risk scores.",
  },
  {
    icon: Fingerprint,
    title: "Identity Verification",
    desc: "Matches the student's face against their profile photo before the exam begins.",
  },
];

export default function Features() {
  const ref = useScrollReveal();

  return (
    <section id="features" className="py-24 md:py-32">
      <div ref={ref} className="container opacity-0">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-medium text-gradient-brand mb-3">Features</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-balance">
            Everything you need for secure online exams
          </h2>
          <p className="mt-4 text-muted-foreground text-pretty">
            Our AI works silently in the background so students can focus on their
            exam and educators get trustworthy results.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div
              key={f.title}
              className="group rounded-xl border border-border bg-card p-6 transition-shadow hover:shadow-md hover:shadow-primary/5"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary mb-4 transition-all group-hover:bg-gradient-brand group-hover:text-white">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="font-semibold text-lg mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}