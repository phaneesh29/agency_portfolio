"use client";

import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "Aether didn't just build our platform — they reimagined what it could be. Our conversion rate tripled within the first quarter.",
    name: "Sarah Chen",
    title: "CEO, Luminary Labs",
  },
  {
    quote: "The level of craft in every interaction is insane. Our users think we spent 10x what we actually did. That's the Aether effect.",
    name: "Marcus Rivera",
    title: "Founder, Helix AI",
  },
  {
    quote: "Working with Aether felt like having a world-class in-house team. They shipped faster and better than anyone we've worked with.",
    name: "Emily Watkins",
    title: "CTO, NovaPay",
  },
  {
    quote: "Our mobile app went from concept to #1 in the App Store category in 6 weeks. Aether's design sensibility is unmatched.",
    name: "David Park",
    title: "Product Lead, Orbit Health",
  },
  {
    quote: "They understood our brand better than we did. The rebrand they delivered increased our enterprise pipeline by 200%.",
    name: "Priya Sharma",
    title: "CMO, Zenith Commerce",
  },
  {
    quote: "Aether's engineering rigor is remarkable. Zero downtime since launch, and the codebase is a joy to maintain.",
    name: "James O'Brien",
    title: "VP Engineering, Stratos",
  },
];

const row1 = testimonials.slice(0, 3);
const row2 = testimonials.slice(3, 6);

export function Testimonials() {
  return (
    <section className="py-24 overflow-hidden relative">
      {/* Decorative gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background via-primary/[0.02] to-background pointer-events-none" />
      
      <div className="container mx-auto px-6 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto"
        >
          <Badge className="mb-4 bg-primary/10 text-primary border-none text-xs">
            What Clients Say
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Trusted by <span className="text-gradient">Ambitious</span> Companies.
          </h2>
          <p className="text-muted-foreground text-lg">
            We don&apos;t just deliver projects — we deliver transformations. Here&apos;s what our partners have to say.
          </p>
        </motion.div>
      </div>

      {/* Two-row marquee scrolling in opposite directions */}
      <div className="space-y-6">
        <InfiniteMovingCards
          items={row1}
          direction="left"
          speed="slow"
          pauseOnHover
        />
        <InfiniteMovingCards
          items={row2}
          direction="right"
          speed="slow"
          pauseOnHover
        />
      </div>
    </section>
  );
}
