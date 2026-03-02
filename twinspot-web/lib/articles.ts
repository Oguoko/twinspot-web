import { promises as fs } from "fs";
import path from "path";

export type Article = {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author?: string;
  tags: string[];
  featuredImage?: string;
  published: boolean;
  publishedAt: string | null;
  createdAt: string;
  updatedAt: string;
};

export type ArticleInput = {
  id?: string;
  title: string;
  excerpt: string;
  content: string;
  author?: string;
  tags?: string[];
  featuredImage?: string;
  published?: boolean;
};

const DATA_PATH = path.join(process.cwd(), "data", "articles.json");
const DEFAULT_AUTHOR = "Twinspot Editorial";

function toSlug(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

async function ensureDataFile() {
  await fs.mkdir(path.dirname(DATA_PATH), { recursive: true });
  try {
    await fs.access(DATA_PATH);
  } catch {
    await fs.writeFile(DATA_PATH, "[]", "utf8");
  }
}

export async function readArticles() {
  await ensureDataFile();
  const raw = await fs.readFile(DATA_PATH, "utf8");
  const parsed = JSON.parse(raw) as Article[];
  return parsed.sort((a, b) => b.createdAt.localeCompare(a.createdAt));
}

async function writeArticles(articles: Article[]) {
  await ensureDataFile();
  await fs.writeFile(DATA_PATH, JSON.stringify(articles, null, 2), "utf8");
}

export async function listAllArticles() {
  return readArticles();
}

export async function listPublishedArticles() {
  const now = new Date().toISOString();
  const articles = await readArticles();

  return articles.filter(
    (article) => article.published && (!article.publishedAt || article.publishedAt <= now)
  );
}

export async function getArticleById(id: string) {
  const articles = await readArticles();
  return articles.find((article) => article.id === id) ?? null;
}

export async function getArticleBySlug(slug: string) {
  const articles = await listPublishedArticles();
  return articles.find((article) => article.id === slug) ?? null;
}

export async function upsertArticle(input: ArticleInput, currentId?: string) {
  if (!input.title?.trim() || !input.excerpt?.trim() || !input.content?.trim()) {
    throw new Error("Title, excerpt, and content are required.");
  }

  const articles = await readArticles();
  const existing = currentId
    ? articles.find((article) => article.id === currentId)
    : undefined;

  const now = new Date().toISOString();
  const baseSlug = toSlug(input.id?.trim() || input.title);

  if (!baseSlug) {
    throw new Error("Article id could not be generated from title.");
  }

  const hasConflict = articles.some(
    (article) => article.id === baseSlug && article.id !== currentId
  );

  const nextId = hasConflict ? `${baseSlug}-${Date.now()}` : baseSlug;
  const nextPublished = Boolean(input.published);

  const nextArticle: Article = {
    id: nextId,
    title: input.title.trim(),
    excerpt: input.excerpt.trim(),
    content: input.content,
    author: input.author?.trim() || DEFAULT_AUTHOR,
    tags: (input.tags ?? []).map((tag) => tag.trim()).filter(Boolean),
    featuredImage: input.featuredImage?.trim() || "",
    published: nextPublished,
    publishedAt: nextPublished ? existing?.publishedAt ?? now : null,
    createdAt: existing?.createdAt ?? now,
    updatedAt: now,
  };

  const nextArticles = existing
    ? articles.map((article) => (article.id === currentId ? nextArticle : article))
    : [nextArticle, ...articles];

  await writeArticles(nextArticles);
  return nextArticle;
}

export async function deleteArticle(id: string) {
  const articles = await readArticles();
  const nextArticles = articles.filter((article) => article.id !== id);

  if (nextArticles.length === articles.length) {
    return false;
  }

  await writeArticles(nextArticles);
  return true;
}
