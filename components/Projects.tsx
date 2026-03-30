"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "SaaS Dashboard v2.0",
    description:
      "A comprehensive analytics platform processing 10M+ events daily. Real-time visualization with sub-100ms rendering.",
    image: "/projects/saas.png",
    tags: ["Next.js", "AI", "Dashboard"],
    link: "#",
    featured: true,
  },
  {
    title: "E-commerce Mobile App",
    description:
      "Premium shopping experience with AR previews. #1 in lifestyle category within 6 weeks of launch.",
    image: "/projects/ecommerce.png",
    tags: ["React Native", "Three.js", "Mobile"],
    link: "#",
  },
  {
    title: "AI Command Interface",
    description:
      "Next-gen developer tools with real-time collaboration and AI-powered debugging.",
    image: "/projects/ai.png",
    tags: ["Tauri", "Rust", "Editor"],
    link: "#",
  },
];

export function Projects() {
  const featured = projects[0];
  const rest = projects.slice(1);

  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <Badge className="mb-4 bg-primary/10 text-primary border-none text-xs uppercase tracking-wider font-semibold">
              Case Studies
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
              Featured{" "}
              <span className="text-gradient italic">Ventures</span>.
            </h2>
          </motion.div>
          <motion.a
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            href="#"
            className="hidden md:inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors group"
          >
            All Case Studies
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </motion.a>
        </div>

        {/* Featured project — full width */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="group relative overflow-hidden rounded-3xl bg-card border border-border/50 hover:border-primary/20 transition-all cursor-pointer mb-8 shadow-sm hover:shadow-xl"
        >
          <div className="grid md:grid-cols-2">
            <div className="relative aspect-[4/3] md:aspect-auto overflow-hidden">
              <Image
                src={featured.image}
                alt={featured.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <div className="flex flex-wrap gap-2 mb-4">
                {featured.tags.map((tag, tIndex) => (
                  <Badge
                    key={tIndex}
                    variant="secondary"
                    className="text-[10px] uppercase font-bold py-0.5 px-2.5 bg-secondary/70 border-none"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-primary transition-colors tracking-tight">
                {featured.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-base mb-6">
                {featured.description}
              </p>
              <div className="inline-flex items-center gap-2 text-sm font-medium text-primary group-hover:gap-3 transition-all">
                View Case Study
                <ExternalLink className="w-4 h-4" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Remaining projects — 2 column grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {rest.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl bg-card border border-border/50 hover:border-primary/20 transition-all cursor-pointer shadow-sm hover:shadow-xl"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent" />
              </div>
              <div className="p-6 md:p-8">
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.map((tag, tIndex) => (
                    <Badge
                      key={tIndex}
                      variant="secondary"
                      className="text-[10px] uppercase font-bold py-0.5 px-2 bg-secondary/70 border-none"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                <h3 className="text-xl font-bold mb-2 flex items-center justify-between group-hover:text-primary transition-colors">
                  {project.title}
                  <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
