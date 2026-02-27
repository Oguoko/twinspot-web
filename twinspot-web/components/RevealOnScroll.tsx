"use client";

import { PropsWithChildren } from "react";
import { useRevealOnScroll } from "@/lib/hooks/useRevealOnScroll";

type RevealOnScrollProps = PropsWithChildren<{
  className?: string;
  as?: "section" | "div";
}>;

export default function RevealOnScroll({
  children,
  className = "",
  as = "section",
}: RevealOnScrollProps) {
  const { ref, revealed } = useRevealOnScroll();
  const Tag = as;

  return (
    <Tag
      ref={ref as never}
      className={`reveal-on-scroll ${revealed ? "is-revealed" : ""} ${className}`.trim()}
    >
      {children}
    </Tag>
  );
}
