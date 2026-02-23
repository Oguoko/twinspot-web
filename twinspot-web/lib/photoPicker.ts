import fs from "node:fs";
import path from "node:path";

type PickImageParams = {
  folders: string[];
  seed: string;
  fallbackFolders?: string[];
};

const ALLOWED_EXTENSIONS = new Set([".jpg", ".jpeg", ".png", ".webp"]);
const DEFAULT_FALLBACK_FOLDERS = ["wildlife", "birding", "landscapes"];
const PHOTOS_ROOT = path.join(process.cwd(), "public", "photos");

export function hashSeed(input: string): number {
  let hash = 5381;

  for (let i = 0; i < input.length; i += 1) {
    hash = ((hash << 5) + hash + input.charCodeAt(i)) >>> 0;
  }

  return hash;
}

export function listPhotos(folder: string): string[] {
  const folderPath = path.join(PHOTOS_ROOT, folder);

  if (!fs.existsSync(folderPath)) {
    return [];
  }

  return fs
    .readdirSync(folderPath, { withFileTypes: true })
    .filter((entry) => entry.isFile())
    .map((entry) => entry.name)
    .filter((fileName) => ALLOWED_EXTENSIONS.has(path.extname(fileName).toLowerCase()))
    .sort((a, b) => a.localeCompare(b));
}

function toPublicPhotoPath(folder: string, fileName: string): string {
  return `/photos/${folder}/${encodeURIComponent(fileName)}`;
}

export function pickImageFromFolders({
  folders,
  seed,
  fallbackFolders = DEFAULT_FALLBACK_FOLDERS,
}: PickImageParams): string {
  const orderedFolders = [...folders, ...fallbackFolders];

  for (const folder of orderedFolders) {
    const files = listPhotos(folder);

    if (files.length > 0) {
      const index = hashSeed(`${seed}:${folder}`) % files.length;
      return toPublicPhotoPath(folder, files[index]);
    }
  }

  return "/hero.jpg";
}
