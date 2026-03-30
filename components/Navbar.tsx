"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import { ThemeToggle } from "@/components/ThemeToggle";
import { Menu, X } from "lucide-react";
import { AnimatePresence } from "framer-motion";

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Process", href: "#process" },
  ];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4 md:p-6 bg-transparent"
    >
      <nav className="glass px-6 md:px-8 py-3 rounded-full flex items-center justify-between w-full max-w-6xl relative">
        <Link href="/" className="text-xl md:text-2xl font-bold tracking-tighter text-foreground">
          AETHER<span className="text-primary italic">.</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4 border-l border-border pl-6">
            <ThemeToggle />
            <Link
              href="#contact"
              className="px-6 py-2 bg-primary text-primary-foreground rounded-full font-medium hover:opacity-90 transition-opacity glow-primary whitespace-nowrap"
            >
              Start a Project
            </Link>
          </div>
        </div>

        {/* Mobile Navigation Toggle & Theme */}
        <div className="flex md:hidden items-center gap-4">
          <ThemeToggle />
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-foreground hover:bg-accent/20 rounded-full transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              className="absolute top-full left-0 right-0 mt-4 md:hidden"
            >
              <div className="glass mx-4 p-6 rounded-3xl flex flex-col gap-6 shadow-2xl border-border/50">
                <ul className="flex flex-col gap-4">
                  {navLinks.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className="text-lg font-medium text-foreground hover:text-primary transition-colors block py-2"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
                <Link
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="w-full text-center px-6 py-4 bg-primary text-primary-foreground rounded-2xl font-bold glow-primary"
                >
                  Start a Project
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}
