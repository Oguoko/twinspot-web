"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import ImagePickerModal from "@/components/admin/ImagePickerModal";
import styles from "@/app/admin/admin.module.css";

type Article = {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author?: string;
  tags: string[];
  featuredImage?: string;
  published: boolean;
  publishedAt: string | null;
};

type PickerImage = { src: string; name: string; folder: string };

export default function ArticleForm({ article }: { article?: Article }) {
  const router = useRouter();
  const [form, setForm] = useState({
    title: article?.title ?? "",
    excerpt: article?.excerpt ?? "",
    content: article?.content ?? "",
    author: article?.author ?? "Twinspot Editorial",
    tags: (article?.tags ?? []).join(", "),
    featuredImage: article?.featuredImage ?? "",
    published: article?.published ?? false,
  });
  const [pickerOpen, setPickerOpen] = useState(false);
  const [images, setImages] = useState<PickerImage[]>([]);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  async function openPicker() {
    const response = await fetch("/api/admin/images");
    if (!response.ok) return;
    const data = await response.json();
    setImages(data.images ?? []);
    setPickerOpen(true);
  }

  async function save(publish = false) {
    setSaving(true);
    setError("");

    const payload = {
      ...form,
      published: publish || form.published,
      tags: form.tags.split(",").map((tag) => tag.trim()).filter(Boolean),
    };

    const response = await fetch(article ? `/api/admin/articles/${article.id}` : "/api/admin/articles", {
      method: article ? "PUT" : "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      setError("Unable to save this article. Please check required fields.");
      setSaving(false);
      return;
    }

    router.push("/admin/articles");
    router.refresh();
  }

  return (
    <div className={styles.card}>
      <div className={styles.grid}>
        <label className={styles.label}>Title
          <input className={styles.input} value={form.title} required onChange={(e) => setForm({ ...form, title: e.target.value })} />
        </label>
        <label className={styles.label}>Excerpt
          <textarea className={styles.textarea} value={form.excerpt} required onChange={(e) => setForm({ ...form, excerpt: e.target.value })} />
        </label>
        <label className={styles.label}>Author
          <input className={styles.input} value={form.author} onChange={(e) => setForm({ ...form, author: e.target.value })} />
        </label>
        <label className={styles.label}>Tags (comma separated)
          <input className={styles.input} value={form.tags} onChange={(e) => setForm({ ...form, tags: e.target.value })} />
        </label>

        <div className={styles.label}>
          Featured image
          <div className={styles.rowActions}>
            <button className={styles.pill} type="button" onClick={openPicker}>Choose image</button>
            {form.featuredImage && <span className={styles.meta}>{form.featuredImage}</span>}
          </div>
          {form.featuredImage ? (
            <div className={styles.thumb} style={{ width: 220, height: 140 }}>
              <Image src={form.featuredImage} alt="Featured preview" fill style={{ objectFit: "cover" }} />
            </div>
          ) : (
            <span className={styles.meta}>No image selected yet.</span>
          )}
        </div>

        <label className={styles.label}>Content (Markdown)
          <textarea className={styles.textarea} value={form.content} required onChange={(e) => setForm({ ...form, content: e.target.value })} />
        </label>

        <label className={styles.rowActions}>
          <input
            type="checkbox"
            checked={form.published}
            onChange={(e) => setForm({ ...form, published: e.target.checked })}
          />
          Published
        </label>
      </div>

      {error && <p className={styles.meta} style={{ color: "#8f2323" }}>{error}</p>}

      <div className={styles.rowActions} style={{ marginTop: "1rem" }}>
        <button className={styles.pill} type="button" disabled={saving} onClick={() => save(false)}>Save Draft</button>
        <button className={styles.button} type="button" disabled={saving} onClick={() => save(true)}>Save & Publish</button>
      </div>

      {pickerOpen && (
        <ImagePickerModal
          images={images}
          onClose={() => setPickerOpen(false)}
          onSelect={(src) => {
            setForm({ ...form, featuredImage: src });
            setPickerOpen(false);
          }}
        />
      )}
    </div>
  );
}
