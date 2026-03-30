"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Github, Twitter, Linkedin, ArrowUpRight, MoveRight } from "lucide-react";

export function Footer() {
  return (
    <>
      {/* Dramatic CTA Banner */}
      <section className="py-24 relative overflow-hidden">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-indigo-500/5 pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/8 rounded-full blur-[150px] pointer-events-none" />
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-[-0.04em] mb-6 leading-[1.1]">
              Ready to build
              <br />
              <span className="text-gradient">something legendary?</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-xl mx-auto">
              Join the ranks of industry leaders who chose Aether to transform their digital presence.
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-10 py-5 bg-foreground text-background rounded-full text-lg font-bold hover:bg-primary transition-colors group shadow-2xl cursor-pointer"
            >
              Start a Conversation
              <MoveRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 border-t border-border">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <Link
                href="/"
                className="text-2xl font-black tracking-tighter mb-4 block text-foreground"
              >
                AETHER<span className="text-primary italic">.</span>
              </Link>
              <p className="text-muted-foreground text-sm max-w-xs mb-6 leading-relaxed">
                Premium design and engineering studio delivering
                world-class digital experiences.
              </p>
              <div className="flex gap-3">
                {[
                  { icon: <Twitter className="w-4 h-4" />, href: "#" },
                  { icon: <Github className="w-4 h-4" />, href: "#" },
                  { icon: <Linkedin className="w-4 h-4" />, href: "#" },
                ].map((social, i) => (
                  <Link
                    key={i}
                    href={social.href}
                    className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-white transition-colors text-muted-foreground"
                  >
                    {social.icon}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-sm mb-5 text-foreground uppercase tracking-wider">
                Expertise
              </h4>
              <ul className="space-y-3 text-sm text-muted-foreground">
                {["Web Platforms", "Mobile Apps", "Design Systems", "AI Integration"].map((item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      className="hover:text-primary transition-colors inline-flex items-center gap-1 group"
                    >
                      {item}
                      <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-sm mb-5 text-foreground uppercase tracking-wider">
                Company
              </h4>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li><Link href="#" className="hover:text-primary transition-colors">About Studio</Link></li>
                <li><Link href="#" className="hover:text-primary transition-colors">Case Studies</Link></li>
                <li>
                  <Link href="#" className="hover:text-primary transition-colors inline-flex items-center gap-2">
                    Careers
                    <span className="text-[9px] bg-primary/15 text-primary px-1.5 py-0.5 rounded-full uppercase font-bold">
                      Hiring
                    </span>
                  </Link>
                </li>
                <li><Link href="#" className="hover:text-primary transition-colors">Contact</Link></li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-border text-xs text-muted-foreground gap-4">
            <p>© 2026 Aether Studio. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="#" className="hover:text-foreground transition-colors">
                Privacy
              </Link>
              <Link href="#" className="hover:text-foreground transition-colors">
                Terms
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
