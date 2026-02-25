"use client";

import SiteHeader from "@/components/nav/SiteHeader";

type NavbarProps = {
  variant?: "sticky" | "overlay";
};

export default function Navbar({ variant = "sticky" }: NavbarProps) {
  return <SiteHeader variant={variant} />;
}
