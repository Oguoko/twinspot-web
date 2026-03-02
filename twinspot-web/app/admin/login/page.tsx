"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import styles from "@/app/admin/admin.module.css";

export default function AdminLoginPage() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setError("");

    const response = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });

    if (!response.ok) {
      setError("Invalid admin password.");
      setLoading(false);
      return;
    }

    const next = searchParams.get("next") || "/admin";
    router.push(next);
    router.refresh();
  }

  return (
    <main className={styles.loginWrap}>
      <form className={styles.card} style={{ width: "min(480px, 100%)" }} onSubmit={onSubmit}>
        <h1>Admin Login</h1>
        <label className={styles.label}>Password
          <input className={styles.input} type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </label>
        {error && <p className={styles.meta} style={{ color: "#8f2323" }}>{error}</p>}
        <button className={styles.button} type="submit" disabled={loading}>Sign in</button>
      </form>
    </main>
  );
}
