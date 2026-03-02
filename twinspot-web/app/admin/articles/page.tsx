import Link from "next/link";
import Image from "next/image";
import styles from "@/app/admin/admin.module.css";
import { deleteArticle, listAllArticles } from "@/lib/articles";
import { revalidatePath } from "next/cache";

async function removeArticle(formData: FormData) {
  "use server";
  const id = formData.get("id");
  if (typeof id !== "string") return;
  await deleteArticle(id);
  revalidatePath("/admin/articles");
  revalidatePath("/blog");
}

export const dynamic = "force-dynamic";

export default async function ArticlesPage() {
  const articles = await listAllArticles();

  return (
    <div className={styles.grid}>
      <div className={styles.rowActions} style={{ justifyContent: "space-between" }}>
        <h1>Articles</h1>
        <Link href="/admin/articles/new" className={styles.button}>New Article</Link>
      </div>

      <div className={styles.card}>
        {articles.length === 0 ? (
          <p className={styles.meta}>No articles yet. Create your first post.</p>
        ) : (
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Image</th>
                <th>Title</th>
                <th>Status</th>
                <th>Published date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {articles.map((article) => (
                <tr key={article.id}>
                  <td>
                    <div className={styles.thumb}>
                      {article.featuredImage ? (
                        <Image src={article.featuredImage} alt={article.title} fill style={{ objectFit: "cover" }} />
                      ) : null}
                    </div>
                  </td>
                  <td>{article.title}</td>
                  <td>{article.published ? "Published" : "Draft"}</td>
                  <td>{article.publishedAt ? new Date(article.publishedAt).toLocaleDateString() : "-"}</td>
                  <td>
                    <div className={styles.rowActions}>
                      <Link href={`/admin/articles/${article.id}/edit`} className={styles.pill}>Edit</Link>
                      <form action={removeArticle}>
                        <input type="hidden" name="id" value={article.id} />
                        <button className={styles.dangerButton} type="submit">Delete</button>
                      </form>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
