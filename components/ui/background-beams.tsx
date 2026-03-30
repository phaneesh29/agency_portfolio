"use client";
import { cn } from "@/lib/utils";
import React, { useEffect, useRef } from "react";

export const BackgroundBeams = ({ className }: { className?: string }) => {
  const beamsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!beamsRef.current) return;
    const beams = beamsRef.current;
    
    const handleMouseMove = (e: MouseEvent) => {
        const { clientX, clientY } = e;
        const { left, top, width, height } = beams.getBoundingClientRect();
        const x = clientX - left;
        const y = clientY - top;
        
        beams.style.setProperty("--x", `${x}px`);
        beams.style.setProperty("--y", `${y}px`);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      ref={beamsRef}
      className={cn(
        "absolute inset-0 z-0 opacity-30 pointer-events-none overflow-hidden",
        className
      )}
      style={{
        background: `radial-gradient(600px circle at var(--x, 50%) var(--y, 50%), rgba(139, 92, 246, 0.15), transparent 80%)`,
      }}
    >
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:40px_40px]" />
        <div className="absolute inset-0 bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
    </div>
  );
};
