"use client";

import SiteHeader from "./nav/SiteHeader";

type NavbarProps = {
  variant?: "sticky" | "overlay";
};

export default function Navbar({ variant = "sticky" }: NavbarProps = {}) {
  return <SiteHeader variant={variant} />;
}
