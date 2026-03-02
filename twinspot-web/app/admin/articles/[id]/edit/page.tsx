import { notFound } from "next/navigation";
import ArticleForm from "@/components/admin/ArticleForm";
import { getArticleById } from "@/lib/articles";

export const dynamic = "force-dynamic";

export default async function EditArticlePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const article = await getArticleById(id);

  if (!article) {
    notFound();
  }

  return (
    <div>
      <h1>Edit Article</h1>
      <ArticleForm article={article} />
    </div>
  );
}
