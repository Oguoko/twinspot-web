import "server-only";

import fs from "node:fs";
import path from "node:path";

const PHOTOS_ROOT = path.join(process.cwd(), "public", "photos");
const FALLBACK_CATEGORIES = ["wildlife", "birding"] as const;
const IMAGE_EXTENSIONS = new Set([".jpg", ".jpeg", ".png", ".webp", ".avif"]);

const categoryCache = new Map<string, string[]>();

function hashString(value: string): number {
  let hash = 0;
  for (let i = 0; i < value.length; i += 1) {
    hash = (hash * 31 + value.charCodeAt(i)) >>> 0;
  }
  return hash;
}

export function listPhotos(category: string): string[] {
  if (categoryCache.has(category)) {
    return categoryCache.get(category)!;
  }

  try {
    const categoryPath = path.join(PHOTOS_ROOT, category);
    const files = fs
      .readdirSync(categoryPath, { withFileTypes: true })
      .filter((entry) => entry.isFile())
      .map((entry) => entry.name)
      .filter((fileName) => IMAGE_EXTENSIONS.has(path.extname(fileName).toLowerCase()))
      .sort((a, b) => a.localeCompare(b));

    const urls = files.map((fileName) => `/photos/${category}/${fileName}`);
    categoryCache.set(category, urls);
    return urls;
  } catch {
    categoryCache.set(category, []);
    return [];
  }
}

export function pickDeterministicPhoto(categories: string[], seed: string): string {
  const requested = categories.length > 0 ? categories : [...FALLBACK_CATEGORIES];

  const available = requested.flatMap((category) => listPhotos(category));
  if (available.length > 0) {
    const index = hashString(seed) % available.length;
    return available[index];
  }

  const fallbackPool = FALLBACK_CATEGORIES.flatMap((category) => listPhotos(category));
  if (fallbackPool.length > 0) {
    const index = hashString(`${seed}-fallback`) % fallbackPool.length;
    return fallbackPool[index];
  }

  return "/photos/wildlife/elephants-walking-dusty-plains-amboseli-twinspot.jpg";
}
