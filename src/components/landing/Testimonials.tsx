import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const testimonials = [
  {
    quote:
      "ProctorAI cut our cheating incidents by 78% in the first semester. The real-time alerts are a game changer.",
    name: "Dr. Meera Patel",
    role: "Dean of Examinations",
    org: "Greenfield University",
  },
  {
    quote:
      "Setting up remote exams used to take hours. Now I create a proctored exam in under five minutes.",
    name: "James Okafor",
    role: "Computer Science Faculty",
    org: "Westlake College",
  },
  {
    quote:
      "Students actually prefer it — the process is transparent and they feel the results are fair.",
    name: "Sarah Lin",
    role: "VP Academic Affairs",
    org: "Coastal Institute of Technology",
  },
  {
    quote:
      "The detailed violation reports saved us during an academic integrity review. Every incident was timestamped.",
    name: "Prof. Arjun Desai",
    role: "Head of Engineering",
    org: "Pinnacle Academy",
  },
];

export default function Testimonials() {
  const ref = useScrollReveal();

  return (
    <section id="testimonials" className="py-24 md:py-32">
      <div ref={ref} className="container opacity-0">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-medium text-gradient-brand mb-3">Testimonials</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-balance">
            Trusted by educators worldwide
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="rounded-xl border border-border bg-card p-6 flex flex-col"
            >
              <blockquote className="text-sm leading-relaxed text-foreground flex-1">
                "{t.quote}"
              </blockquote>
              <div className="mt-5 flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-brand text-white text-sm font-semibold">
                  {t.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div>
                  <div className="text-sm font-medium">{t.name}</div>
                  <div className="text-xs text-muted-foreground">
                    {t.role}, {t.org}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}