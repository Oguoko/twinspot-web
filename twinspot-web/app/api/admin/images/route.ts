import { promises as fs } from "fs";
import path from "path";
import { NextResponse } from "next/server";
import { isAdminAuthenticated } from "@/lib/adminAuth";

type ImageItem = {
  src: string;
  name: string;
  folder: string;
};

const IMAGE_EXTENSIONS = new Set([".jpg", ".jpeg", ".png", ".webp", ".gif", ".avif"]);

async function walk(folderPath: string, publicRoot: string): Promise<ImageItem[]> {
  const entries = await fs.readdir(folderPath, { withFileTypes: true });
  const results: ImageItem[] = [];

  for (const entry of entries) {
    const fullPath = path.join(folderPath, entry.name);

    if (entry.isDirectory()) {
      results.push(...(await walk(fullPath, publicRoot)));
      continue;
    }

    const ext = path.extname(entry.name).toLowerCase();
    if (!IMAGE_EXTENSIONS.has(ext)) continue;

    const relative = fullPath.replace(publicRoot, "").replaceAll(path.sep, "/");
    const folder = relative.split("/").slice(1, -1).join("/") || "root";

    results.push({
      src: relative,
      name: entry.name,
      folder,
    });
  }

  return results;
}

export async function GET() {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const publicRoot = path.join(process.cwd(), "public");
  const targets = ["photos", "blog"];

  const allImages: ImageItem[] = [];

  for (const folder of targets) {
    const targetPath = path.join(publicRoot, folder);

    try {
      const stat = await fs.stat(targetPath);
      if (!stat.isDirectory()) continue;
      allImages.push(...(await walk(targetPath, publicRoot)));
    } catch {
      // folder absent; skip safely
    }
  }

  allImages.sort((a, b) => a.src.localeCompare(b.src));

  return NextResponse.json({ images: allImages });
}
