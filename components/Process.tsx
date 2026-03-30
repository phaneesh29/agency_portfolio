"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CheckCircle2 } from "lucide-react";

const steps = [
  {
    step: "01",
    title: "Discovery & Strategy",
    description:
      "Deep technical and market research. We find the why before the how — every pixel and line of code serves a strategic purpose.",
    points: ["Competitor Analysis", "User Personas", "Technical Roadmap"],
  },
  {
    step: "02",
    title: "High-Fidelity Design",
    description:
      "Bespoke interfaces optimized for premium engagement. We prototype, test, and refine until every interaction feels perfect.",
    points: ["Visual Identity", "Interactive Prototypes", "Micro-interactions"],
  },
  {
    step: "03",
    title: "Precision Engineering",
    description:
      "Clean, robust, and scalable code. We use Next.js, Rust, and Go to build systems that handle millions of users.",
    points: ["Full-stack Development", "API Integrations", "Performance Tuning"],
  },
  {
    step: "04",
    title: "Launch & Scale",
    description:
      "Launch is just the beginning. We provide the infrastructure, monitoring, and iteration support to scale to millions.",
    points: ["Cloud Infrastructure", "24/7 Monitoring", "Continuous Iteration"],
  },
];

export function Process() {
  return (
    <section id="process" className="py-24 container mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-16 items-start">
        {/* Left column */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-xl lg:sticky lg:top-32"
        >
          <Badge className="mb-4 bg-primary/10 text-primary border-none text-xs uppercase tracking-wider font-semibold">
            Our Process
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 leading-tight">
            How We Architect{" "}
            <span className="text-gradient">Excellence.</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Our established workflow delivers high-end results consistently. Speed
            without sacrificing Swiss-level precision.
          </p>

          {/* Commitment card */}
          <div className="p-6 bg-card rounded-2xl border border-border/50">
            <p className="text-sm font-semibold text-foreground mb-2">
              Our Commitment
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed italic">
              &ldquo;To provide the highest caliber of digital craftsmanship that
              the modern market demands.&rdquo;
            </p>
          </div>
        </motion.div>

        {/* Right column — Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <Accordion className="w-full space-y-3">
            {steps.map((step, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-border/50 rounded-2xl overflow-hidden px-5 hover:border-primary/20 transition-all bg-card data-[state=open]:border-primary/20 data-[state=open]:shadow-sm"
              >
                <AccordionTrigger className="hover:no-underline py-5">
                  <div className="flex items-center gap-4 text-left">
                    <span className="text-primary font-mono font-bold text-sm bg-primary/10 w-9 h-9 rounded-lg flex items-center justify-center shrink-0">
                      {step.step}
                    </span>
                    <span className="text-lg md:text-xl font-bold tracking-tight text-foreground">
                      {step.title}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-5 pl-[3.25rem]">
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed max-w-md">
                    {step.description}
                  </p>
                  <ul className="space-y-2">
                    {step.points.map((point, pIndex) => (
                      <li
                        key={pIndex}
                        className="flex items-center gap-2 text-sm text-foreground/80"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
