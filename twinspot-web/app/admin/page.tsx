import Link from "next/link";
import styles from "@/app/admin/admin.module.css";
import { listAllArticles } from "@/lib/articles";

export const dynamic = "force-dynamic";

export default async function AdminPage() {
  const articles = await listAllArticles();
  const published = articles.filter((article) => article.published).length;

  return (
    <div className={styles.grid}>
      <h1>Dashboard</h1>
      <div className={styles.card}>
        <p>Total articles: <strong>{articles.length}</strong></p>
        <p>Published: <strong>{published}</strong></p>
        <p>Drafts: <strong>{articles.length - published}</strong></p>
        <Link className={styles.button} href="/admin/articles">Manage Articles</Link>
      </div>
    </div>
  );
}
