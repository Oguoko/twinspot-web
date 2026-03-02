"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import styles from "@/app/admin/admin.module.css";

export default function AdminShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();

  async function logout() {
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/admin/login");
    router.refresh();
  }

  return (
    <div className={styles.shell}>
      <header className={styles.navbar}>
        <Link href="/admin" className={styles.brand}>Twinspot Admin</Link>
        <nav className={styles.navLinks}>
          <Link className={styles.pill} aria-current={pathname === "/admin" ? "page" : undefined} href="/admin">Dashboard</Link>
          <Link className={styles.pill} aria-current={pathname.startsWith("/admin/articles") ? "page" : undefined} href="/admin/articles">Articles</Link>
          <button type="button" className={styles.pill} onClick={logout}>Logout</button>
        </nav>
      </header>
      <main className={styles.content}>{children}</main>
    </div>
  );
}
