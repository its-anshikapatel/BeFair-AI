import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

export default function CTA() {
  const ref = useScrollReveal();

  return (
    <section className="py-24 md:py-32">
      <div ref={ref} className="container opacity-0">
        <div className="rounded-2xl bg-gradient-brand px-8 py-16 md:py-20 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white text-balance">
            Ready to secure your exams?
          </h2>
          <p className="mt-4 text-white/80 max-w-xl mx-auto text-pretty">
            Join hundreds of institutions using ProctorAI to maintain academic
            integrity with zero friction.
          </p>
          <Button
            size="lg"
            variant="secondary"
            asChild
            className="mt-8 group"
          >
            <Link to="/signup">
              Start Free Trial
              <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}