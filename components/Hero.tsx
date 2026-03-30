"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { MoveRight, Play } from "lucide-react";
import { Spotlight } from "@/components/ui/spotlight";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

const clientLogos = [
  "Vercel", "Stripe", "Linear", "Notion", "Figma", "Loom",
];

export function Hero() {
  const words = "We Build Products That Define Industries.";

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-16 overflow-hidden bg-background">
      <Spotlight className="opacity-100 dark:opacity-100" />

      {/* Floating gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-72 h-72 bg-primary/10 rounded-full blur-[120px] animate-float pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-indigo-500/8 rounded-full blur-[140px] animate-float-delayed pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-500/5 rounded-full blur-[100px] animate-float-slow pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="container mx-auto px-6 text-center max-w-5xl relative z-10"
      >
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Badge
            variant="outline"
            className="mb-8 border-primary/20 bg-primary/5 text-primary px-5 py-2 inline-flex items-center gap-2 rounded-full text-xs md:text-sm font-medium"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary/60 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>
            Now Accepting Q3 Projects
          </Badge>
        </motion.div>

        {/* Headline */}
        <div className="mb-6 md:mb-8">
          <TextGenerateEffect
            words={words}
            className="text-4xl sm:text-5xl md:text-7xl lg:text-[5.5rem] font-black tracking-[-0.04em] leading-[1.05] text-foreground"
          />
        </div>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-base md:text-xl lg:text-2xl text-muted-foreground mb-10 md:mb-12 max-w-2xl mx-auto leading-relaxed px-4"
        >
          An elite studio crafting <span className="text-foreground font-medium">high-end digital experiences</span> for
          world-class startups and enterprises.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4 mb-16"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.02, y: -1 }}
            whileTap={{ scale: 0.98 }}
            className="w-full sm:w-auto group px-8 py-4 bg-primary text-primary-foreground rounded-full text-base md:text-lg font-semibold inline-flex items-center justify-center gap-2 glow-primary shadow-lg shadow-primary/20 transition-all hover:shadow-primary/40 cursor-pointer"
          >
            Start Your Project
            <MoveRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.a>

          <motion.a
            href="#projects"
            whileHover={{ scale: 1.02, y: -1 }}
            whileTap={{ scale: 0.98 }}
            className="w-full sm:w-auto px-8 py-4 glass text-foreground rounded-full text-base md:text-lg font-semibold inline-flex items-center justify-center gap-2 hover:bg-accent/30 transition-colors cursor-pointer"
          >
            <Play className="w-4 h-4" />
            View Case Studies
          </motion.a>
        </motion.div>

        {/* Client logos strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="flex flex-col items-center"
        >
          <p className="text-xs text-muted-foreground uppercase tracking-widest font-medium mb-5">
            Trusted by industry leaders
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {clientLogos.map((logo) => (
              <span
                key={logo}
                className="text-muted-foreground/40 font-bold text-lg tracking-tight hover:text-muted-foreground/70 transition-colors cursor-default select-none"
              >
                {logo}
              </span>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent pointer-events-none z-0" />
    </section>
  );
}
