"use client";
import { cn } from "@/lib/utils";
import React, { useCallback, useEffect, useRef } from "react";

export const Spotlight = ({
  className,
  fill,
}: {
  className?: string;
  fill?: string;
}) => {
  const divRef = useRef<HTMLDivElement | null>(null);
  const mouseX = useRef(0);
  const mouseY = useRef(0);
  const currentX = useRef(0);
  const currentY = useRef(0);
  const animationFrame = useRef<number | undefined>(undefined);

  const animate = useCallback(() => {
    currentX.current += (mouseX.current - currentX.current) * 0.08;
    currentY.current += (mouseY.current - currentY.current) * 0.08;

    if (divRef.current) {
      divRef.current.style.setProperty("--x", `${currentX.current}px`);
      divRef.current.style.setProperty("--y", `${currentY.current}px`);
    }

    animationFrame.current = requestAnimationFrame(animate);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.current = e.clientX;
      mouseY.current = e.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);
    animationFrame.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (animationFrame.current) {
        cancelAnimationFrame(animationFrame.current);
      }
    };
  }, [animate]);

  return (
    <div
      ref={divRef}
      className={cn(
        "pointer-events-none absolute inset-0 z-0 overflow-hidden",
        className
      )}
    >
      {/* Primary spotlight cone */}
      <div
        className="absolute"
        style={{
          left: "var(--x, 50%)",
          top: "var(--y, 50%)",
          width: "900px",
          height: "900px",
          transform: "translate(-50%, -50%)",
          background: `radial-gradient(circle, ${fill || "rgba(124, 58, 237, 0.12)"} 0%, ${fill ? fill.replace(/[\d.]+\)$/, "0.04)") : "rgba(124, 58, 237, 0.04)"} 35%, transparent 70%)`,
          filter: "blur(2px)",
        }}
      />
      {/* Subtle secondary glow */}
      <div
        className="absolute"
        style={{
          left: "var(--x, 50%)",
          top: "var(--y, 50%)",
          width: "600px",
          height: "600px",
          transform: "translate(-50%, -50%)",
          background: `radial-gradient(circle, ${fill || "rgba(99, 102, 241, 0.08)"} 0%, transparent 60%)`,
          filter: "blur(40px)",
        }}
      />
      {/* Dot grid overlay */}
      <div className="absolute inset-0 bg-dot-pattern text-foreground/[0.03]" />
    </div>
  );
};
