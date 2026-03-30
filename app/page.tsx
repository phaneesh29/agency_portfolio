"use client";

import { Hero } from "@/components/Hero";
import { Stats } from "@/components/Stats";
import { Services } from "@/components/Services";
import { Projects } from "@/components/Projects";
import { Testimonials } from "@/components/Testimonials";
import { Process } from "@/components/Process";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { motion, useScroll, useSpring } from "framer-motion";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <main className="relative bg-background text-foreground">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-primary z-[60] origin-left"
        style={{ scaleX }}
      />

      <Hero />

      {/* Divider */}
      <div className="section-divider" />

      <Stats />

      <div className="section-divider" />

      <section id="services">
        <Services />
      </section>

      <div className="section-divider" />

      <section id="projects">
        <Projects />
      </section>

      <Testimonials />

      <div className="section-divider" />

      <section id="process">
        <Process />
      </section>

      <div className="section-divider" />

      <section id="contact">
        <Contact />
      </section>

      <Footer />
    </main>
  );
}
