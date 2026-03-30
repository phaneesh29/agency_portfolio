"use client";

import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import {
  AppWindow,
  Layers,
  Zap,
  Search,
  Shield,
  Smartphone,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    title: "Custom Web Platforms",
    description:
      "Bespoke web applications designed for scale. From SaaS dashboards to e-commerce engines — built with Next.js, React, and modern tooling.",
    icon: <AppWindow className="w-5 h-5" />,
    className: "md:col-span-2",
  },
  {
    title: "UI/UX Design",
    description:
      "User-centric design that converts visitors into customers through beauty and intuition.",
    icon: <Layers className="w-5 h-5" />,
    className: "md:col-span-1",
  },
  {
    title: "Brand Strategy",
    description:
      "Digital identity systems that make your brand unforgettable in a noisy market.",
    icon: <Zap className="w-5 h-5" />,
    className: "md:col-span-1",
  },
  {
    title: "Mobile Development",
    description:
      "Native and cross-platform apps that feel fast, look stunning, and work flawlessly on every device.",
    icon: <Smartphone className="w-5 h-5" />,
    className: "md:col-span-1",
  },
  {
    title: "SEO & Performance",
    description:
      "Technical optimization that puts you on page one and keeps your LCP under 2.5 seconds.",
    icon: <Search className="w-5 h-5" />,
    className: "md:col-span-1",
  },
];

export function Services() {
  return (
    <section className="container mx-auto px-6 max-w-7xl py-24">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl"
        >
          <Badge className="mb-4 bg-primary/10 text-primary border-none text-xs uppercase tracking-wider font-semibold">
            Our Expertise
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Services Built For{" "}
            <span className="text-gradient">Digital Dominance.</span>
          </h2>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-muted-foreground md:max-w-sm text-sm md:text-base leading-relaxed"
        >
          We combine technical excellence with artistic vision to deliver
          products that exceed expectations.
        </motion.p>
      </div>

      <BentoGrid className="md:auto-rows-[14rem]">
        {services.map((service, i) => (
          <BentoGridItem
            key={i}
            title={service.title}
            description={service.description}
            icon={service.icon}
            className={service.className}
          />
        ))}
      </BentoGrid>

      {/* Bottom CTA link */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-10 text-center"
      >
        <a
          href="#contact"
          className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors group"
        >
          Discuss your needs with us
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </a>
      </motion.div>
    </section>
  );
}
