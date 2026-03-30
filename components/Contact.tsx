"use client";

import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Mail, MessageSquare, Send, Globe, Clock, Shield } from "lucide-react";

const contactInfo = [
  {
    icon: <Mail className="w-5 h-5" />,
    label: "Email",
    value: "hello@aether.luxury",
  },
  {
    icon: <Globe className="w-5 h-5" />,
    label: "Office",
    value: "San Francisco, CA",
  },
  {
    icon: <Clock className="w-5 h-5" />,
    label: "Response Time",
    value: "Under 4 hours",
  },
];

export function Contact() {
  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <Badge className="mb-4 bg-primary/10 text-primary border-none text-xs uppercase tracking-wider font-semibold">
            Get in Touch
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Let&apos;s Build Something{" "}
            <span className="text-gradient">Legendary.</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Ready to transform your vision into reality? Tell us about your project.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
          {/* Contact info sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-6"
          >
            {contactInfo.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-4 p-4 rounded-2xl bg-card border border-border/50 hover:border-primary/20 transition-all group"
              >
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors shrink-0">
                  {item.icon}
                </div>
                <div>
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">
                    {item.label}
                  </p>
                  <p className="text-sm font-bold text-foreground">{item.value}</p>
                </div>
              </motion.div>
            ))}

            {/* Trust indicators */}
            <div className="p-5 rounded-2xl bg-primary/5 border border-primary/10">
              <div className="flex items-center gap-2 mb-3">
                <Shield className="w-4 h-4 text-primary" />
                <p className="text-sm font-semibold text-foreground">Our Guarantee</p>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Every project comes with a 30-day post-launch support period. Your satisfaction is our priority.
              </p>
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3 bg-card p-8 md:p-10 rounded-3xl border border-border/50 shadow-sm space-y-6"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground ml-0.5">
                  Full Name
                </label>
                <Input
                  placeholder="John Doe"
                  className="bg-background/50 border-border rounded-xl h-12 focus-visible:ring-primary/30 text-sm"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground ml-0.5">
                  Email Address
                </label>
                <Input
                  placeholder="john@example.com"
                  type="email"
                  className="bg-background/50 border-border rounded-xl h-12 focus-visible:ring-primary/30 text-sm"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground ml-0.5">
                Project Type
              </label>
              <Input
                placeholder="Web App, Mobile App, Branding..."
                className="bg-background/50 border-border rounded-xl h-12 focus-visible:ring-primary/30 text-sm"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground ml-0.5">
                Tell us about your project
              </label>
              <Textarea
                placeholder="Describe your vision, goals, and timeline..."
                className="bg-background/50 border-border rounded-xl min-h-[140px] focus-visible:ring-primary/30 text-sm resize-none"
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.01, y: -1 }}
              whileTap={{ scale: 0.99 }}
              type="submit"
              className="w-full py-4 bg-primary text-primary-foreground font-bold rounded-xl shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all flex items-center justify-center gap-2 text-base"
            >
              Submit Proposal
              <Send className="w-4 h-4" />
            </motion.button>

            <p className="text-center text-xs text-muted-foreground flex items-center justify-center gap-1.5">
              <MessageSquare className="w-3 h-3" />
              We respond within 4 hours during business days
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
