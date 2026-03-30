"use client";

import { cn } from "@/lib/utils";
import React from "react";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-2xl group/bento transition duration-200 p-6 bg-card border border-border/60",
        "hover:shadow-xl hover:border-primary/20 hover:-translate-y-0.5",
        "flex flex-col justify-between space-y-4 overflow-hidden relative",
        className
      )}
    >
      {header && (
        <div className="absolute inset-0 opacity-[0.03] group-hover/bento:opacity-[0.06] transition-opacity pointer-events-none">
          {header}
        </div>
      )}
      <div className="relative z-10 flex flex-col h-full justify-end">
        <div className="flex items-center gap-3 mb-2">
          {icon && (
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary shrink-0">
              {icon}
            </div>
          )}
          <h3 className="font-bold text-lg tracking-tight text-foreground group-hover/bento:text-primary transition-colors">
            {title}
          </h3>
        </div>
        <p className="text-muted-foreground text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};
