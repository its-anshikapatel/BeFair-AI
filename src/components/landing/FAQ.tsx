import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const faqs = [
  {
    q: "How does the AI detect cheating?",
    a: "ProctorAI uses a combination of face detection, gaze tracking, and audio analysis powered by machine learning. It continuously monitors the webcam feed for the absence of a face, multiple faces, or suspicious audio — and logs every incident with a timestamp and screenshot.",
  },
  {
    q: "What browsers and devices are supported?",
    a: "ProctorAI works on any modern browser (Chrome, Firefox, Edge, Safari) on desktops and laptops. A webcam and microphone are required. Mobile devices are not currently supported for test-taking.",
  },
  {
    q: "Is student data kept private?",
    a: "Absolutely. All webcam snapshots and audio clips are processed in real time and discarded after the exam session unless a violation is flagged. We comply with FERPA and GDPR guidelines. Data is encrypted in transit and at rest.",
  },
  {
    q: "Can students with disabilities use ProctorAI?",
    a: "Yes. Proctoring rules are configurable per exam — instructors can adjust sensitivity thresholds, disable audio monitoring, or extend time limits. We also support screen-reader-friendly exam interfaces.",
  },
  {
    q: "How much does ProctorAI cost?",
    a: "We offer a free tier for up to 30 students per month. Paid plans start at $4 per student per exam with volume discounts available for institutions. Contact us for custom enterprise pricing.",
  },
  {
    q: "What happens if the student's internet drops?",
    a: "The exam auto-saves answers locally. When the connection resumes, the session continues from where it left off. The incident is logged but not marked as a violation.",
  },
];

export default function FAQ() {
  const ref = useScrollReveal();

  return (
    <section id="faq" className="py-24 md:py-32 bg-secondary/40">
      <div ref={ref} className="container max-w-3xl opacity-0">
        <div className="text-center mb-12">
          <p className="text-sm font-medium text-primary mb-3">FAQ</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-balance">
            Common questions, clear answers
          </h2>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`item-${i}`}>
              <AccordionTrigger className="text-left text-base">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
