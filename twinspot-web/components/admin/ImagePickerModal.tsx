"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import styles from "@/app/admin/admin.module.css";

type ImageItem = {
  src: string;
  name: string;
  folder: string;
};

export default function ImagePickerModal({
  images,
  onClose,
  onSelect,
}: {
  images: ImageItem[];
  onClose: () => void;
  onSelect: (src: string) => void;
}) {
  const [query, setQuery] = useState("");
  const [folder, setFolder] = useState("all");

  const folders = useMemo(
    () => ["all", ...new Set(images.map((image) => image.folder))],
    [images]
  );

  const filtered = images.filter((image) => {
    const matchesFolder = folder === "all" || image.folder === folder;
    const matchesSearch = !query || image.name.toLowerCase().includes(query.toLowerCase());
    return matchesFolder && matchesSearch;
  });

  return (
    <div className={styles.modal}>
      <div className={styles.modalCard}>
        <div className={styles.rowActions}>
          <input
            className={styles.input}
            placeholder="Search image name"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
          <select className={styles.select} value={folder} onChange={(event) => setFolder(event.target.value)}>
            {folders.map((item) => (
              <option key={item} value={item}>{item}</option>
            ))}
          </select>
          <button className={styles.pill} type="button" onClick={onClose}>Close</button>
        </div>

        {filtered.length === 0 ? (
          <p className={styles.meta}>No images found for this filter.</p>
        ) : (
          <div className={styles.imageGrid}>
            {filtered.map((image) => (
              <button key={image.src} className={styles.imageButton} type="button" onClick={() => onSelect(image.src)}>
                <div className={styles.imageBox}>
                  <Image src={image.src} alt={image.name} fill style={{ objectFit: "cover" }} />
                </div>
                <span>{image.name}</span>
                <span className={styles.meta}>{image.folder}</span>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
